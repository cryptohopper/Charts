# AI Analyze — Technical Plan

**Feature van:** HopCharts (Lightweight Charts v5)
**Versie:** 1.0
**Datum:** 11 maart 2026

---

## Wat dit document is

Dit is het technische plan voor de "AI Analyze" feature — een one-click full technical analysis die de chart verrijkt met visuele overlays (trendlijnen, S/R zones, patronen, Fibonacci, candlestick signalen) én een tekstueel analyse-panel. Dit plan bouwt voort op de bestaande HopCharts-architectuur (Lightweight Charts v5, React, Zustand, LWC primitives).

---

## Architectuur Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                    HopCharts Frontend                            │
│                                                                  │
│  [AI Analyze Button] ──click──▶ Gather chart context             │
│                                     │                            │
│                                     ▼                            │
│                              POST /api/ai/analyze                │
│                                     │                            │
│         ┌───────────────────────────┘                            │
│         │                                                        │
│         ▼                                                        │
│  ┌─────────────────────────────────────────────────────┐        │
│  │              CryptoHopper Backend                    │        │
│  │                                                      │        │
│  │  1. Ontvang OHLCV + context                         │        │
│  │  2. Pre-compute: alle indicatoren, S/R detectie,    │        │
│  │     pattern scanning (algoritmisch, deterministisch) │        │
│  │  3. Bouw LLM-prompt met gestructureerde data        │        │
│  │  4. LLM genereert analyse-tekst + bias + scenarios  │        │
│  │  5. Combineer algo-resultaten + LLM-output          │        │
│  │  6. Return gestructureerde JSON response             │        │
│  │                                                      │        │
│  └─────────────────────────────────────────────────────┘        │
│         │                                                        │
│         ▼                                                        │
│  Frontend ontvangt response:                                     │
│  ├── analyzeStore.setAnalysis(response)                         │
│  ├── LWC Primitives renderen overlays op chart                  │
│  └── AnalysePanel opent met tekstuele analyse                   │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## Waarom Hybrid: Algoritmisch + LLM

De Product Plan beschrijft drie opties. Dit technische plan kiest voor **Hybrid (Optie B)** als architectuur, zelfs voor v1.

**Reden:** Het is verleidelijk om alles naar een LLM te sturen, maar:

1. **Indicator-berekeningen zijn deterministisch.** RSI, MACD, EMA, Bollinger Bands — dit zijn wiskundige formules. Een LLM kan ze niet betrouwbaar berekenen. De backend moet ze vooraf berekenen en als input meegeven.

2. **Pattern detection is geometrisch.** Head & shoulders is een specifiek patroon van swing highs/lows. Een algoritmisch patroon-detector is sneller, goedkoper, en consistenter dan een LLM die naar candle-data kijkt.

3. **S/R-detectie is heuristisch maar deterministisch.** Swing highs/lows identificeren, cluster-detectie op prijsniveaus, volume-analyse — dit is algoritme-werk.

4. **De LLM is briljant in synthese.** Het combineren van 20+ signalen tot een coherent verhaal met nuance, scenario's, en begrijpelijke taal — dát is waar het LLM uitblinkt.

**Conclusie:** De backend doet al het rekenwerk. Het LLM krijgt een gestructureerde samenvatting van de resultaten en genereert de analyse-tekst, bias, en scenario's. Dit halveert de token-kosten en maakt de analyse betrouwbaarder.

---

## Backend: Pre-compute Pipeline

### Stap 1: Data verzamelen

De frontend stuurt:
```typescript
interface AnalyzeRequest {
  pair: string;              // "BTC/USDT"
  exchange: string;          // "binance"
  timeframe: string;         // "1h"
  visibleFrom: number;       // Unix ms — start van zichtbare range
  visibleTo: number;         // Unix ms — einde van zichtbare range
  userLanguage: string;      // "nl", "en", etc.
}
```

De backend haalt:
- OHLCV data voor het gevraagde timeframe (zichtbare range + 200 candles buffer voor indicator warmup)
- OHLCV data voor het hogere timeframe (1h → 4h, 4h → 1D, 1D → 1W) — 100 candles
- OHLCV data voor 1D timeframe altijd (voor 200 EMA context)

### Stap 2: Indicator-berekeningen

Alle indicatoren worden server-side berekend. De frontend berekent ze ook al voor weergave (via `indicatorts`), maar de backend berekent ze onafhankelijk voor de analyse om:
- Consistentie te garanderen (backend is single source of truth voor analyse)
- Higher-timeframe indicators mee te kunnen nemen
- De LLM gestructureerde waarden te geven, niet ruwe candle arrays

**Verplichte berekeningen:**

```
Trend:
├── EMA 20, 50, 200 (huidig + hoger TF)
├── Prijs-positie vs. MA's (boven/onder, afstand in %)
├── Higher highs / higher lows detectie (swing point analyse)
├── ADX (14) — trendsterkte
└── Trendlijn-berekening (lineaire regressie op swing points)

Momentum:
├── RSI (14) — waarde + overbought/oversold status
├── RSI divergentie-detectie (bullish/bearish/hidden)
├── MACD (12, 26, 9) — waarde, signaal, histogram, crossover-status
├── MACD divergentie-detectie
├── Stochastic (14, 3) — %K, %D, crossover-status
└── Bollinger Bands (20, 2) — squeeze-detectie, band walk

Volume:
├── Volume trend (SMA 20 van volume, huidige vs. gemiddeld)
├── OBV — trend + divergentie met prijs
├── Volume per candle vs. gemiddeld (detecteer climax volume)
└── Volume bij up-candles vs. down-candles ratio
```

### Stap 3: Support & Resistance detectie

Algoritmisch, niet LLM:

```
1. Swing high/low detectie:
   - Identificeer lokale maxima/minima (candle met hogere high dan N buren)
   - Parameter: N = 5 (5 candles links + rechts)

2. Cluster-detectie:
   - Groepeer swing points die binnen 0.5% van elkaar liggen
   - Zwaarder wegen: meer aanrakingen, hoger volume, recenter

3. Sterkte-score berekenen (1-10):
   - +2 per aanraking
   - +1 als volume boven gemiddeld bij aanraking
   - +1 als niveau een rolwisseling heeft ondergaan
   - +1 als niveau < 50 candles geleden laatst aangeraakt
   - Cap op 10

4. Ronde getallen detectie:
   - Check $1000-intervallen voor BTC, $100 voor ETH, etc.
   - Alleen opnemen als prijs er ook daadwerkelijk op reageerde

5. Fibonacci-niveaus:
   - Identificeer meest recente significante swing high + low
   - Bereken 0.236, 0.382, 0.5, 0.618, 0.786 niveaus
   - Check of prijs eerder op deze niveaus reageerde → verhoogt betrouwbaarheid

6. Output: top 3 support + top 3 resistance niveaus, gesorteerd op sterkte
```

### Stap 4: Pattern Detection

Algoritmisch, deterministisch:

**Candlestick patterns:**
```
Per candle (of 2-3 candle combinatie):
├── Body size ratio (body / total range)
├── Upper/lower shadow ratio
├── Position relative to previous candle(s)
├── Volume vergelijking
└── Location check: is deze candle bij een S/R niveau? (cruciaal voor significance)

Detecteer:
├── Hammer / Hanging Man (lange lower shadow, klein body, top van range)
├── Shooting Star / Inverted Hammer
├── Doji varianten (body < 5% van range)
├── Engulfing (body van huidige omsluit vorige body)
├── Morning/Evening Star (3-candle combinatie)
├── Three White Soldiers / Three Black Crows
└── Marubozu (geen shadows, sterk momentum)

Output: lijst van (timestamp, type, significance: high/medium/low)
Significance is HIGH alleen als het patroon op een S/R niveau of trendlijn valt.
```

**Chart patterns:**
```
Op basis van swing high/low sequentie:
├── Head & Shoulders: L-shoulder high, higher high (head), lower high (R-shoulder), neckline
├── Double Top/Bottom: twee vergelijkbare highs/lows met dal/piek ertussen
├── Triangles: convergerende trendlijnen op swing highs + swing lows
│   ├── Symmetrical: beide lijnen convergeren
│   ├── Ascending: flat top, rising bottom
│   └── Descending: flat bottom, falling top
├── Flags/Pennants: scherpe move → tight consolidation
├── Wedges: beide trendlijnen stijgend (rising wedge) of dalend (falling wedge)
└── Cup & Handle: U-shape + small pullback

Per patroon:
├── status: "forming" | "complete" | "breakout"
├── neckline / breakout level
├── target: hoogte geprojecteerd vanaf breakout
├── volume_confirmation: boolean
└── reliability: Bulkowski-gebaseerde slaagkans
```

### Stap 5: Divergentie-detectie

```
Voor RSI en MACD:
1. Vind swing lows in prijs → vergelijk met swing lows in indicator
   - Prijs: lagere low, indicator: hogere low → BULLISH DIVERGENCE
2. Vind swing highs in prijs → vergelijk met swing highs in indicator
   - Prijs: hogere high, indicator: lagere high → BEARISH DIVERGENCE
3. Hidden divergences:
   - Prijs: hogere low, indicator: lagere low → HIDDEN BULLISH (trend continuation)
   - Prijs: lagere high, indicator: hogere high → HIDDEN BEARISH

Output: lijst van (type, indicator, price_points, indicator_points, significance)
```

### Stap 6: LLM Synthese

Na stap 2-5 heeft de backend een gestructureerd object met alle berekende data. Dit wordt nu als context aan het LLM meegegeven.

**LLM-input structuur:**

```
SYSTEM PROMPT:
Je bent een ervaren technisch analist die chart-analyses schrijft voor crypto-traders.
[Analyse-framework instructies — de 7 lagen uit het Product Plan]
[Taalregels — actief, direct, geen absoluten, jargon uitleggen]
[Must/must-not regels uit sectie 3 van Product Plan]

USER PROMPT:
Analyseer de volgende chart data voor {pair} op het {timeframe} timeframe.

## Pre-computed Analysis Data

### Trend
- Primary trend: {uptrend|downtrend|sideways}
- EMA 20: {value}, prijs is {above|below} ({distance}%)
- EMA 50: {value}, prijs is {above|below} ({distance}%)
- EMA 200 (daily): {value}, prijs is {above|below} ({distance}%)
- Higher TF ({higher_tf}) trend: {uptrend|downtrend|sideways}
- ADX: {value} ({trending|ranging})
- Swing structure: {higher highs + higher lows | lower highs + lower lows | mixed}

### Support & Resistance
{lijst van niveaus met sterkte-scores}

### Indicators
- RSI(14): {value}, status: {overbought|oversold|neutral}
- RSI divergence: {none|bullish|bearish|hidden_bullish|hidden_bearish}
- MACD: {value}, signal: {value}, histogram: {value}, status: {bullish_cross|bearish_cross|neutral}
- MACD divergence: {none|bullish|bearish}
- Stochastic: %K={value}, %D={value}, status: {overbought|oversold|crossover}
- Bollinger Bands: {squeeze|normal|walking_upper|walking_lower}, bandwidth: {value}

### Volume
- Current vs. 20-period avg: {ratio}x
- Volume trend: {increasing|decreasing|flat}
- OBV trend: {bullish|bearish|flat}
- Up/down volume ratio: {ratio}

### Detected Patterns
{chart patterns met status, target, reliability}
{candlestick patterns met location significance}

### Confluence Count
Bullish signals: {count}
Bearish signals: {count}
Neutral signals: {count}

Schrijf de analyse in het {language}. Volg het format:
1. Bias headline (max 10 woorden)
2. Samenvatting (max 150 woorden, beginner-friendly)
3. Key levels (top 2-3 support + resistance)
4. Scenarios (bullish + bearish, met concrete prijsniveaus)
5. Per-laag detail (trend, S/R, patronen, indicatoren, volume) — elk max 100 woorden
6. Confluence-score toelichting
```

**LLM output:** Gestructureerd JSON met `summary`, `sections`, `scenarios` — exact het format uit het Product Plan (sectie 8, Response-structuur).

**Welk LLM?** Claude (Anthropic API). Reden: sterk in gestructureerde output, goede instructie-opvolging, meertalig. Model: Claude Sonnet voor de balans tussen kwaliteit en kosten. Claude Haiku als fallback voor hoge-load situaties.

**Token-schatting per analyse:**
- Input: ~2000-3000 tokens (system prompt + pre-computed data)
- Output: ~1500-2500 tokens (gestructureerde analyse)
- Totaal: ~4000-5500 tokens per analyse
- Kosten (Sonnet): ~$0.02-0.03 per analyse
- Bij 10.000 analyses/dag: ~$200-300/dag

---

## Frontend: Overlay Rendering

Alle visuele overlays zijn LWC primitives — consistent met de bestaande HopCharts architectuur.

### Nieuwe Primitives voor AI Analyze

De bestaande AI overlay primitives (uit WP-04 van het hoofdplan) renderen pattern regions en projections. AI Analyze heeft aanvullende primitives nodig:

**1. TrendlinePrimitive (hergebruik uit WP-06 Drawing Tools)**

De analyse genereert trendlijnen met start/eind coördinaten. We gebruiken dezelfde TrendlinePrimitive als de drawing tools, maar dan:
- Niet interactief (geen drag/move) — read-only
- Visueel onderscheidbaar van user-drawn trendlines (styling: zie Chart Design)

**2. SupportResistanceZonePrimitive (NIEUW)**

```typescript
interface SRZone {
  price: number;
  type: 'support' | 'resistance';
  strength: number;       // 1-10
  width: number;          // Pixeldikte van de zone-band
  label: string;          // "3x getest, hoog volume"
}
```

Rendert als semi-transparante horizontale band met label op de price scale en hover tooltip met details (strength score, uitleg). Styling (kleuren, opacity, typografie): zie Chart Design.

**3. CandlestickSignalPrimitive (NIEUW)**

Markers boven of onder individuele candles die bullish/bearish signalen aangeven. Hover tooltip toont patroon naam + significance + uitleg. Implementatie: series primitive die markers tekent op specifieke timestamps. Visuele vormgeving (iconen, kleuren, positionering): zie Chart Design.

**4. FibonacciOverlayPrimitive (hergebruik/extend uit WP-06)**

De FibonacciPrimitive uit drawing tools, maar read-only:
- Levels berekend door de backend (niet door user anchor points)
- Labels tonen ratio + prijs
- Visueel onderscheidbaar van user-drawn Fibonacci (styling: zie Chart Design)

**5. DivergencePrimitive (NIEUW)**

Rendert diagonale lijnen die divergentie visualiseren:
- Lijn op de prijs-chart: verbindt de twee swing points
- Lijn op de indicator sub-pane: verbindt de corresponderende indicator points
- Label met type + indicator naam
- Styling (kleuren per divergentie-type, lijnstijl): zie Chart Design

Dit is complexer omdat het op twee panes tegelijk moet renderen:
- Optie A: twee aparte primitives (één per pane), visueel gesynchroniseerd
- Optie B: één primitive op de main pane + arrow/marker op de indicator pane
- **Keuze: Optie A** — schoner, primitives zijn pane-gebonden in LWC

### Overlay Management

**AnalyzeOverlayManager:**
```typescript
class AnalyzeOverlayManager {
  private chart: IChartApi;
  private series: ISeriesApi<'Candlestick'>;
  private activePrimitives: ISeriesPrimitive<Time>[];

  // Render analyse-resultaat op chart
  applyAnalysis(analysis: AnalyzeResponse): void;

  // Verwijder alle analyse-overlays
  clearAnalysis(): void;

  // Toggle individuele lagen
  toggleLayer(layer: 'trendlines' | 'sr_zones' | 'patterns' | 'candle_signals' | 'fibonacci' | 'divergences'): void;
}
```

Elke laag is een aparte primitive die onafhankelijk getoond/verborgen kan worden. De gebruiker kan in het analyse-panel per laag togglen.

---

## Frontend: Analyse Panel

Het panel is een React component dat slide-in opent. Layout, styling, en visuele states: zie Chart Design folder.

**Functionele componenten:**
- **AnalyseHeader:** Bias indicator (bullish/bearish meter), confluence score, timestamp + pair + timeframe
- **KeyLevelsSection:** Support en resistance niveaus met sterkte-indicatie
- **ScenariosSection:** Bullish en bearish scenario's met conditie + target
- **CollapsibleSections:** Trend, Support & Resistance, Patronen, Indicatoren, Volume — elk inklapbaar
- **DataTab:** Ruwe indicator-waarden voor experts
- **Disclaimer:** Altijd zichtbaar onderaan

**Interactie panel ↔ chart:**
- Klikken op een key level in het panel → chart scrollt/zoomt naar dat niveau
- Klikken op een patroon → highlight op de chart pulst even
- Toggle-checkboxes per laag → `AnalyzeOverlayManager.toggleLayer()`

---

## Zustand Store

```typescript
interface AnalyzeStore {
  // State
  analysis: AnalyzeResponse | null;
  isLoading: boolean;
  error: string | null;
  panelOpen: boolean;

  // Layer visibility
  visibleLayers: {
    trendlines: boolean;
    sr_zones: boolean;
    patterns: boolean;
    candle_signals: boolean;
    fibonacci: boolean;
    divergences: boolean;
  };

  // Actions
  requestAnalysis: () => void;       // Trigger analyse
  setAnalysis: (data: AnalyzeResponse) => void;
  clearAnalysis: () => void;
  togglePanel: () => void;
  toggleLayer: (layer: string) => void;

  // History
  previousAnalyses: { pair: string; timeframe: string; timestamp: number; bias: string }[];
}
```

Niet persisted — analyses zijn sessie-gebonden. Gebruiker kan een nieuwe analyse aanvragen op elk moment. Oude analyse wordt vervangen.

---

## API Contract

### Request

```
POST /api/ai/analyze
Authorization: Bearer {token} (via httpOnly cookie)
Content-Type: application/json

{
  "pair": "BTC/USDT",
  "exchange": "binance",
  "timeframe": "1h",
  "visibleFrom": 1709654400000,
  "visibleTo": 1709740800000,
  "language": "nl"
}
```

### Response

Exact het JSON-format uit sectie 8 van het Product Plan, plus extra velden:

```typescript
interface AnalyzeResponse {
  // Samenvatting
  summary: {
    bias: 'strong_bullish' | 'mildly_bullish' | 'neutral' | 'mildly_bearish' | 'strong_bearish';
    confluenceScore: number;      // 0-9
    confluenceTotal: number;      // typically 9
    headline: string;             // Max 10 woorden
    text: string;                 // Max 150 woorden
  };

  // Visuele overlays (coördinaten voor LWC primitives)
  overlays: {
    trendlines: {
      type: 'uptrend' | 'downtrend';
      points: [number, number][];   // [timestamp, price] pairs
      confidence: number;
    }[];

    supportResistance: {
      price: number;
      type: 'support' | 'resistance';
      strength: number;           // 1-10
      label: string;
      zoneWidth: number;          // prijsbreedte van de zone
    }[];

    chartPatterns: {
      type: string;
      status: 'forming' | 'complete' | 'breakout';
      points: [number, number][];
      neckline?: [number, number][];
      target?: number;
      reliability?: number;       // Bulkowski slaagkans
    }[];

    candlestickSignals: {
      timestamp: number;
      type: string;
      direction: 'bullish' | 'bearish';
      significance: 'high' | 'medium' | 'low';
    }[];

    fibonacci?: {
      high: number;
      low: number;
      levels: { ratio: number; price: number }[];
    };

    divergences: {
      type: 'bullish' | 'bearish' | 'hidden_bullish' | 'hidden_bearish';
      indicator: 'rsi' | 'macd';
      pricePoints: [number, number][];     // [timestamp, price]
      indicatorPoints: [number, number][]; // [timestamp, value]
    }[];
  };

  // Tekstuele secties
  sections: {
    trend: { title: string; text: string; signals: AnalysisSignal[] };
    supportResistance: { title: string; text: string; signals: AnalysisSignal[] };
    patterns: { title: string; text: string; signals: AnalysisSignal[] };
    indicators: { title: string; text: string; signals: AnalysisSignal[] };
    volume: { title: string; text: string; signals: AnalysisSignal[] };
  };

  // Scenario's
  scenarios: {
    bullish: { condition: string; target: string; text: string };
    bearish: { condition: string; target: string; text: string };
  };

  // Raw indicator data (voor experts)
  rawData: {
    rsi: number;
    macd: { value: number; signal: number; histogram: number };
    stochastic: { k: number; d: number };
    adx: number;
    bollingerBands: { upper: number; middle: number; lower: number; bandwidth: number };
    ema20: number;
    ema50: number;
    ema200: number;
    obv: number;
    volumeRatio: number; // current vs 20-period avg
  };

  // Meta
  disclaimer: string;
  generatedAt: number;
  model: string;           // "claude-sonnet-4-5" etc.
  processingTimeMs: number;
}

interface AnalysisSignal {
  name: string;
  direction: 'bullish' | 'bearish' | 'neutral';
  weight: number;    // 1-3 (belang)
  detail: string;
}
```

---

## Latency Budget

Target: **< 5 seconden** van klik tot volledige analyse.

```
Frontend → Backend (request)       :   100ms
Backend: Fetch candle data         :   200ms  (cached)
Backend: Indicator calculations    :   100ms  (deterministisch, snel)
Backend: Pattern detection         :   300ms  (algoritmisch)
Backend: S/R detection             :   100ms
Backend: Build LLM prompt          :    50ms
Backend: LLM inference (Sonnet)    : 2000-3000ms  (stream!)
Backend: Parse LLM response        :    50ms
Backend → Frontend (response)      :   100ms
Frontend: Render overlays          :   100ms
─────────────────────────────────────────────
Totaal:                            : 3100-4100ms
```

**Streaming:** De LLM-response wordt gestreamed (SSE). Het analyse-panel toont tekst progressief terwijl het genereert. Overlays renderen zodra de `overlays`-sectie compleet is (die komt als eerste in de response, vóór de langere tekst-secties).

**Response ordering:** De backend structureert de response zodat:
1. `overlays` → eerst (chart wordt direct verrijkt)
2. `summary` → daarna (panel header verschijnt)
3. `sections` → gestreamed per sectie
4. `rawData` → laatst

---

## Caching & Rate Limiting

### Caching

**Analyse-cache:** De analyse voor een specifiek (pair, exchange, timeframe, 15-minuten-window) wordt gecached.
- Cache key: `analyze:{exchange}:{pair}:{timeframe}:{floor(timestamp/900000)}`
- TTL: 15 minuten
- Als dezelfde pair/timeframe/exchange binnen 15 minuten opnieuw wordt geanalyseerd, retourneer cached resultaat
- Cache invalidatie: niet nodig (TTL-based)

**Candle data cache:** OHLCV data wordt sowieso al gecached in het CryptoHopper backend. Geen extra caching nodig.

### Rate Limiting

Per subscription tier:

| Tier | Analyses per dag | Cooldown | Features |
|---|---|---|---|
| Free | 3 | 5 min | Alleen summary tekst, geen chart overlays |
| Pro | Onbeperkt | 30 sec | Volledige analyse + overlays |
| AI+ | Onbeperkt | 10 sec | Alles + batch-analyse + alerts |

Rate limit wordt server-side enforced. Frontend toont duidelijke feedback bij limit-bereik.

---

## Error Handling

| Scenario | Backend | Frontend |
|---|---|---|
| LLM timeout (> 10s) | Retry 1x met Haiku fallback | "Analyse duurt langer dan verwacht..." loading state |
| LLM error | Return algo-only response (overlays zonder tekst) | Toon overlays + "Tekstanalyse tijdelijk niet beschikbaar" |
| Insufficient data (< 50 candles) | Return 400 met uitleg | "Niet genoeg data voor analyse. Selecteer een langer tijdsbereik." |
| Rate limit exceeded | Return 429 | "Je hebt je analyse-limiet bereikt. Upgrade naar Pro voor onbeperkte analyses." |
| Invalid pair/exchange | Return 404 | Foutmelding in panel |

**Fallback-strategie:** Als het LLM faalt, kan de backend alsnog een bruikbare response sturen met:
- Overlays (volledig algoritmisch)
- Summary met alleen bias + confluence score (berekend, niet LLM)
- Geen tekstuele secties
Dit is een degraded experience maar nog steeds waardevol.

---

## Multi-Timeframe Context

Wanneer de gebruiker een 1H chart analyseert, haalt de backend ook:
- 4H candles (100 stuks) → berekent trend + EMA's op hoger TF
- 1D candles (100 stuks) → 200 EMA daily positie

Dit wordt als context aan het LLM meegegeven. De frontend toont dit in de analyse-tekst maar rendert géén overlays op het hogere timeframe (die zijn niet zichtbaar op de huidige chart).

**Timeframe mapping:**

| User TF | Higher TF 1 | Higher TF 2 |
|---|---|---|
| 1m | 15m | 1h |
| 5m | 1h | 4h |
| 15m | 1h | 4h |
| 1h | 4h | 1D |
| 4h | 1D | 1W |
| 1D | 1W | 1M |

---

## Altcoin-BTC Context

Als de geanalyseerde pair NIET BTC is:
- Backend haalt ook BTC/{quote} candles (bijv. BTC/USDT)
- Berekent BTC trend (EMA 20/50, richting)
- Geeft BTC-context mee aan het LLM: "BTC is in een downtrend op het dagframe — dit is een headwind voor altcoins"

Dit is een simpele toevoeging aan de LLM-prompt, geen extra overlays.

---

## Disclaimer & Juridisch

Elke analyse bevat verplicht:
- Footer-disclaimer: "Dit is geen financieel advies. Doe altijd je eigen onderzoek."
- De AI mag NOOIT "koop", "verkoop", of "investeer" zeggen
- Altijd scenario's (bullish + bearish), nooit eenzijdige voorspellingen
- Confidence scores en "mogelijkheid" taal

Dit wordt zowel in de LLM system prompt als in post-processing afgedwongen. De backend scant de LLM-output op verboden termen en vervangt/verwijdert ze.

---

## Integratie met Bestaand HopCharts

### Wat we hergebruiken

| Component | Uit WP | Hoe |
|---|---|---|
| LWC primitives framework | WP-04, WP-06 | TrendlinePrimitive, FibonacciPrimitive als basis |
| Zustand store pattern | WP-03 | Nieuwe `analyzeStore` volgt zelfde pattern |
| Chart hooks pattern | WP-07 | `useAIAnalyze()` hook volgt `useIndicators()` pattern |
| Side panel UI pattern | WP-05 | AnalysePanel volgt IndicatorMenu/AIInsightsPanel pattern |
| API client | WP-02 | Extend `chartsApi` met `analyzeChart()` method |
| Auth/gating | WP-09, WP-15 | Analyse achter subscription tier gate |

### Wat er nieuw is

| Component | Reden |
|---|---|
| SupportResistanceZonePrimitive | Horizontale zones (niet alleen lijnen) |
| CandlestickSignalPrimitive | Individuele candle markers |
| DivergencePrimitive | Twee-pane diagonale lijnen |
| AnalyzeOverlayManager | Beheert alle analyse-specifieke overlays als groep |
| AnalysePanel | Nieuw panel met bias-meter, secties, scenarios |
| Backend analyse pipeline | Server-side indicator calc + pattern detection + LLM |

---

## Design Reference

Alle visuele styling, layout, kleuren, typografie en UI-states worden bepaald door het **Chart Design** project in de `Chart Design/` folder. Dit is een volledig React + Tailwind + shadcn/ui project gegenereerd vanuit Figma.

**Referenties voor dit plan:**

| Technisch onderdeel | Design referentie |
|---|---|
| AI Overlay primitives (trendlines, S/R zones, signalen, Fibonacci, divergences) | `Chart Design/src/app/` — chart overlays en visuele stijlen |
| Analyse Panel layout & componenten | `Chart Design/src/app/` — panel componenten, collapsible secties, bias-meter |
| Button & loading states | `Chart Design/src/app/` — AI Analyze button, loading/skeleton states |
| Theming (light/dark) | `Chart Design/src/app/theme-context.tsx` |
| UI primitives (buttons, cards, tooltips) | `Chart Design/src/components/ui/` — shadcn/ui componenten |

> **Regel:** Dit technische plan beschrijft functionaliteit en architectuur. Voor elke visuele beslissing (kleur, spacing, iconen, animaties) is de Chart Design folder de single source of truth.
