# AI Analyze — Implementation Plan

**Feature van:** HopCharts (Lightweight Charts v5)
**Voorwaarde:** HopCharts core platform is gebouwd (WP-01 t/m WP-12 uit het hoofdplan)
**Versie:** 1.0

---

## Design Reference

All HopCharts UI components have been designed and exported as a working React project via Figma Make AI. The design files live in the `Chart Design/` folder. This is a fully functional React + Tailwind + shadcn/ui project that includes all states, themes, and responsive variants.

**For AI Analyze specifically:**

The AI Analyze panel is a new UI surface that does not yet exist in the Chart Design project. However, the design system, component primitives, and layout patterns are established. Use these as the foundation:

| AA Work Package | Design files to reference |
|-----------------|--------------------------|
| AA-08 (Overlay Primitives) | `Chart Design/src/imports/` — visual style for on-chart overlays (line widths, colors, label positioning). `Chart Design/src/app/components/bb-indicator.tsx` — indicator overlay styling pattern |
| AA-09 (Analyse Panel) | `Chart Design/src/app/components/indicators-panel.tsx` — closest panel pattern (slide-in side panel with sections). Use same panel width, animation, header style, and shadcn/ui primitives. `Chart Design/src/app/components/ui/` — all UI primitives (accordion, badge, card, tabs, etc.) |
| AA-10 (Toolbar Button) | `Chart Design/src/app/components/top-bar.tsx` — toolbar layout, button placement and styling. Place the AI Analyze button in the toolbar following the existing button patterns |
| AA-11 (Integration) | `Chart Design/src/app/App.tsx` — full app composition, to understand how panels integrate with the chart layout |

**Rule:** Every Claude Code prompt that builds UI should first read the relevant design files. The design is the single source of truth for colors, spacing, typography, component structure, hover/active/disabled states, and dark/light theme variants.

---

## Work Package Overview & Dependency Graph

```
AA-01  Types & API Contract
  │
  ├──▶ AA-02  Backend: Indicator Pre-compute Pipeline
  │       │
  │       ├──▶ AA-04  Backend: S/R Detection
  │       │       │
  │       ├──▶ AA-05  Backend: Pattern Detection
  │       │       │
  │       └──▶ AA-06  Backend: Divergence Detection
  │               │
  │               └──▶ AA-07  Backend: LLM Integration & Response Assembly
  │
  ├──▶ AA-03  Frontend: Zustand Store + API Hook
  │       │
  │       ├──▶ AA-08  Frontend: Analyse Overlay Primitives
  │       │       │
  │       ├──▶ AA-09  Frontend: Analyse Panel UI
  │       │       │
  │       └──▶ AA-10  Frontend: Toolbar Button + Loading UX
  │               │
  │               └──▶ AA-11  Integration & Polish
  │
  AA-12  Rate Limiting, Caching & Gating
  AA-13  Testing & Validation
```

## Parallelism Map

```
PHASE A (na AA-01):
┌──────────┐  ┌──────────┐  ┌──────────┐
│  AA-02   │  │  AA-03   │  │  AA-12   │
│ Backend  │  │ Frontend │  │ Rate     │
│ Indic.   │  │ Store +  │  │ Limit +  │
│ Pipeline │  │ API Hook │  │ Caching  │
└────┬─────┘  └────┬─────┘  └──────────┘
     │              │
PHASE B (na AA-02):             │
┌────┴─────┐  ┌────┴────┐  ┌───┴──────┐
│  AA-04   │  │  AA-05  │  │  AA-08   │
│  S/R     │  │ Pattern │  │ Overlay  │
│  Detect  │  │ Detect  │  │ Prims    │
└────┬─────┘  └────┬────┘  └────┬─────┘
     │              │            │
┌────┴─────┐        │       ┌───┴──────┐
│  AA-06   │        │       │  AA-09   │
│ Diverg.  │        │       │ Panel UI │
└────┬─────┘        │       └────┬─────┘
     │              │            │
PHASE C:            │       ┌───┴──────┐
┌────┴─────────────┴┐      │  AA-10   │
│      AA-07        │      │ Toolbar  │
│  LLM Integration  │      │ Button   │
└────────┬──────────┘      └────┬─────┘
         │                      │
         └──────────┬───────────┘
                    │
              ┌─────┴─────┐
              │   AA-11   │
              │Integration│
              │ & Polish  │
              └─────┬─────┘
                    │
              ┌─────┴─────┐
              │   AA-13   │
              │  Testing  │
              └───────────┘
```

---

## AA-01: Types & API Contract

**Dependencies:** HopCharts core (WP-02 types beschikbaar)
**Parallel with:** Niets — dit is de basis
**Estimated effort:** 0.5 dag

### Claude Code Prompt

```
Je bouwt de TypeScript types en API contract voor de HopCharts "AI Analyze" feature. Werk in `packages/core/src/types/` en `packages/core/src/api/`.

## Context

AI Analyze is een one-click feature die een volledige technische analyse genereert. De backend doet indicator-berekeningen + pattern detection (algoritmisch) en stuurt het resultaat naar een LLM voor tekstuele synthese. De frontend rendert overlays op de Lightweight Charts chart en toont een analyse-panel.

## Types in `packages/core/src/types/analyze.ts`

```typescript
// === Request ===

export interface AnalyzeRequest {
  pair: string;
  exchange: string;
  timeframe: string;
  visibleFrom: number;
  visibleTo: number;
  language: string;           // "nl", "en", "de", etc.
}

// === Response ===

export type AnalysisBias =
  | 'strong_bullish' | 'mildly_bullish'
  | 'neutral'
  | 'mildly_bearish' | 'strong_bearish';

export type AnalysisSignalDirection = 'bullish' | 'bearish' | 'neutral';

export interface AnalysisSignal {
  name: string;
  direction: AnalysisSignalDirection;
  weight: number;             // 1-3
  detail: string;
}

export interface AnalyzeSummary {
  bias: AnalysisBias;
  confluenceScore: number;
  confluenceTotal: number;
  headline: string;
  text: string;
}

export interface AnalyzeTrendline {
  type: 'uptrend' | 'downtrend';
  points: [number, number][];  // [timestamp, price]
  confidence: number;
}

export interface AnalyzeSRLevel {
  price: number;
  type: 'support' | 'resistance';
  strength: number;            // 1-10
  label: string;
  zoneWidth: number;
}

export interface AnalyzeChartPattern {
  type: string;
  status: 'forming' | 'complete' | 'breakout';
  points: [number, number][];
  neckline?: [number, number][];
  target?: number;
  reliability?: number;
}

export interface AnalyzeCandlestickSignal {
  timestamp: number;
  type: string;
  direction: 'bullish' | 'bearish';
  significance: 'high' | 'medium' | 'low';
}

export interface AnalyzeFibonacci {
  high: number;
  low: number;
  levels: { ratio: number; price: number }[];
}

export interface AnalyzeDivergence {
  type: 'bullish' | 'bearish' | 'hidden_bullish' | 'hidden_bearish';
  indicator: 'rsi' | 'macd';
  pricePoints: [number, number][];
  indicatorPoints: [number, number][];
}

export interface AnalyzeOverlays {
  trendlines: AnalyzeTrendline[];
  supportResistance: AnalyzeSRLevel[];
  chartPatterns: AnalyzeChartPattern[];
  candlestickSignals: AnalyzeCandlestickSignal[];
  fibonacci?: AnalyzeFibonacci;
  divergences: AnalyzeDivergence[];
}

export interface AnalyzeSection {
  title: string;
  text: string;
  signals: AnalysisSignal[];
}

export interface AnalyzeScenario {
  condition: string;
  target: string;
  text: string;
}

export interface AnalyzeRawData {
  rsi: number;
  macd: { value: number; signal: number; histogram: number };
  stochastic: { k: number; d: number };
  adx: number;
  bollingerBands: { upper: number; middle: number; lower: number; bandwidth: number };
  ema20: number;
  ema50: number;
  ema200: number;
  obv: number;
  volumeRatio: number;
}

export interface AnalyzeResponse {
  summary: AnalyzeSummary;
  overlays: AnalyzeOverlays;
  sections: {
    trend: AnalyzeSection;
    supportResistance: AnalyzeSection;
    patterns: AnalyzeSection;
    indicators: AnalyzeSection;
    volume: AnalyzeSection;
  };
  scenarios: {
    bullish: AnalyzeScenario;
    bearish: AnalyzeScenario;
  };
  rawData: AnalyzeRawData;
  disclaimer: string;
  generatedAt: number;
  model: string;
  processingTimeMs: number;
}

// === Layer visibility ===

export type AnalyzeLayer = 'trendlines' | 'sr_zones' | 'patterns' | 'candle_signals' | 'fibonacci' | 'divergences';
```

## API method in `packages/core/src/api/charts-api.ts`

Voeg toe aan de bestaande `chartsApi`:
```typescript
analyzeChart(params: AnalyzeRequest): Promise<AnalyzeResponse>,
```

## TanStack Query hook in `packages/core/src/api/hooks.ts`

```typescript
export function useAnalyzeChart(): {
  analyze: (params: AnalyzeRequest) => void;
  data: AnalyzeResponse | null;
  isLoading: boolean;
  error: string | null;
};
```

Gebruik `useMutation` (niet `useQuery`) — analyse wordt on-demand getriggerd, niet automatisch.

## Export alles via `packages/core/src/index.ts`
```

---

## AA-02: Backend — Indicator Pre-compute Pipeline

**Dependencies:** AA-01
**Parallel with:** AA-03, AA-12
**Estimated effort:** 2 dagen

### Claude Code Prompt

```
Je bouwt de server-side indicator-berekening pipeline voor de HopCharts AI Analyze feature. Dit is een backend service (Node.js / Python — keuze aan het team).

## Context

Wanneer een gebruiker "AI Analyze" klikt, stuurt de frontend een AnalyzeRequest naar de backend. De backend moet alle technische indicatoren berekenen VOORDAT ze naar het LLM gaan. Het LLM krijgt berekende waarden, niet ruwe candle data.

## Wat te berekenen

Gegeven OHLCV candle data (zichtbare range + 200 candles buffer voor warmup):

### Trend-indicatoren
- EMA 20, 50, 200 — huidige waarden + of prijs boven/onder + afstand in %
- ADX (14) — waarde + interpretatie (>25 = trending, <20 = ranging)
- Higher Highs / Higher Lows detectie:
  - Identificeer swing highs/lows (lokaal maximum/minimum met N=5 buren)
  - Classificeer: HH/HL (uptrend), LH/LL (downtrend), mixed
- Trendlijn berekening:
  - Fit een lijn door recente swing lows (uptrend) of swing highs (downtrend)
  - Return twee punten [timestamp, price] voor de trendlijn
  - Confidence: R² van de lineaire regressie

### Momentum-indicatoren
- RSI (14) — waarde, overbought/oversold status
- MACD (12, 26, 9) — MACD lijn, signaal lijn, histogram, crossover status
- Stochastic (14, 3) — %K, %D, crossover status
- Bollinger Bands (20, 2) — upper, middle, lower, bandwidth, squeeze detectie

### Volume-indicatoren
- Volume SMA (20) — ratio huidige volume vs. gemiddeld
- OBV — absolute waarde + trend (stijgend/dalend/vlak)
- Up-volume vs. down-volume ratio (laatste 20 candles)

### Higher timeframe context
- Herhaal EMA 20/50/200 berekening op higher timeframe candles
- Bepaal higher TF trend
- Als pair ≠ BTC: haal ook BTC trend op (EMA 20/50 op dagframe)

## Output structuur

Een gestructureerd object dat direct als context aan het LLM kan worden meegegeven:

```typescript
interface PreComputedIndicators {
  // Trend
  trend: {
    direction: 'uptrend' | 'downtrend' | 'sideways';
    swingStructure: 'HH_HL' | 'LH_LL' | 'mixed';
    ema20: { value: number; priceRelation: 'above' | 'below'; distance: number };
    ema50: { value: number; priceRelation: 'above' | 'below'; distance: number };
    ema200: { value: number; priceRelation: 'above' | 'below'; distance: number };
    adx: { value: number; interpretation: 'strong_trend' | 'trending' | 'ranging' };
    trendline?: { type: 'uptrend' | 'downtrend'; points: [number, number][]; confidence: number };
  };

  // Higher TF
  higherTF: {
    timeframe: string;
    direction: 'uptrend' | 'downtrend' | 'sideways';
    ema20relation: 'above' | 'below';
    ema50relation: 'above' | 'below';
  };

  // BTC context (alleen voor altcoins)
  btcContext?: {
    direction: 'uptrend' | 'downtrend' | 'sideways';
    ema20relation: 'above' | 'below';
  };

  // Momentum
  momentum: {
    rsi: { value: number; status: 'overbought' | 'oversold' | 'neutral' };
    macd: { value: number; signal: number; histogram: number; status: 'bullish_cross' | 'bearish_cross' | 'neutral' };
    stochastic: { k: number; d: number; status: 'overbought' | 'oversold' | 'crossover_up' | 'crossover_down' | 'neutral' };
    bollingerBands: { upper: number; middle: number; lower: number; bandwidth: number; status: 'squeeze' | 'normal' | 'walking_upper' | 'walking_lower' };
  };

  // Volume
  volume: {
    currentVsAvg: number;     // ratio
    trend: 'increasing' | 'decreasing' | 'flat';
    obvTrend: 'bullish' | 'bearish' | 'flat';
    upDownRatio: number;
  };

  // Raw values (voor rawData in response)
  rawValues: AnalyzeRawData;
}
```

## Libraries (Node.js)
- `indicatorts` of `technicalindicators` voor RSI, MACD, Stoch, BB, EMA, ADX, OBV
- Swing high/low detectie: custom (simpel: candle met high > N buren links + rechts)
- Trendlijn fit: simple linear regression

## Performance
- Alle berekeningen moeten in < 200ms compleet zijn voor 500 candles
- Indicator libraries zijn geoptimaliseerd hiervoor
```

---

## AA-03: Frontend — Zustand Store + API Hook

**Dependencies:** AA-01
**Parallel with:** AA-02, AA-12
**Estimated effort:** 0.5 dag

### Claude Code Prompt

```
Je bouwt de Zustand store en API hook voor de AI Analyze feature. Werk in `packages/core/src/store/` en `packages/chart/src/hooks/`.

## analyzeStore in `packages/core/src/store/analyzeStore.ts`

```typescript
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import type { AnalyzeResponse, AnalyzeLayer } from '../types/analyze';

interface AnalyzeStore {
  analysis: AnalyzeResponse | null;
  isLoading: boolean;
  error: string | null;
  panelOpen: boolean;

  visibleLayers: Record<AnalyzeLayer, boolean>;

  setLoading: (loading: boolean) => void;
  setAnalysis: (data: AnalyzeResponse) => void;
  setError: (error: string | null) => void;
  clearAnalysis: () => void;
  togglePanel: () => void;
  toggleLayer: (layer: AnalyzeLayer) => void;
  setAllLayersVisible: (visible: boolean) => void;
}
```

Default visibleLayers: alles `true`.
Niet persisted (sessie-only).

## useAIAnalyze hook in `packages/chart/src/hooks/useAIAnalyze.ts`

```typescript
export function useAIAnalyze(
  chart: IChartApi | null,
  series: ISeriesApi<'Candlestick'> | null,
) {
  const analyzeStore = useAnalyzeStore();
  const chartStore = useChartStore();
  const { analyze, isLoading } = useAnalyzeChart(); // mutation hook

  const requestAnalysis = useCallback(() => {
    if (!chart) return;
    const visibleRange = chart.timeScale().getVisibleRange();
    analyze({
      pair: chartStore.pair,
      exchange: chartStore.exchangeId,
      timeframe: chartStore.timeframe,
      visibleFrom: visibleRange.from * 1000,
      visibleTo: visibleRange.to * 1000,
      language: navigator.language.split('-')[0],
    });
  }, [chart, chartStore, analyze]);

  // When analysis arrives, render overlays
  useEffect(() => {
    if (analyzeStore.analysis && chart && series) {
      overlayManager.applyAnalysis(analyzeStore.analysis);
    }
  }, [analyzeStore.analysis]);

  return { requestAnalysis, isLoading: analyzeStore.isLoading };
}
```
```

---

## AA-04: Backend — Support & Resistance Detection

**Dependencies:** AA-02 (swing high/low data beschikbaar)
**Parallel with:** AA-05, AA-08
**Estimated effort:** 1.5 dagen

### Claude Code Prompt

```
Je bouwt de algoritmische Support & Resistance detectie voor AI Analyze.

## Algoritme

### Stap 1: Swing point identificatie
- Input: OHLCV candles
- Een candle is een swing HIGH als: high > high van N candles links EN high > high van N candles rechts (N=5)
- Idem voor swing LOW met low
- Retourneer lijst van (timestamp, price, type: 'high'|'low')

### Stap 2: Cluster-detectie
- Groepeer swing points waarvan de prijs binnen 0.5% van elkaar ligt
- Per cluster: bereken gemiddelde prijs, tel aanrakingen, bepaal type (support/resistance/both)
- Een cluster is "support" als het merendeel swing lows zijn
- Een cluster is "resistance" als het merendeel swing highs zijn
- Rolwisseling: als een cluster zowel highs als lows bevat → extra sterk

### Stap 3: Sterkte-score (1-10)
Per cluster:
- +2 per aanraking (max +6)
- +1 als gemiddeld volume bij aanrakingen > 1.5x overall gemiddeld volume
- +1 als het niveau een rolwisseling heeft ondergaan
- +1 als meest recente aanraking < 50 candles geleden
- +1 als het niveau een rond getal is ($1000 interval voor BTC, $100 voor ETH, $10 voor kleinere coins — baseer op prijs magnitude)
- Cap op 10

### Stap 4: Zone-breedte
De "zone" rond een S/R niveau is niet een exacte lijn maar een band:
- zoneWidth = max(prijs van hoogste punt in cluster) - min(prijs van laagste punt in cluster)
- Minimum zoneWidth: 0.1% van de huidige prijs

### Stap 5: Fibonacci (optioneel)
- Vind de meest recente significante swing high + swing low (minimaal 30% van de zichtbare range)
- Bereken Fibonacci levels: 0.236, 0.382, 0.5, 0.618, 0.786
- Controleer of prijs eerder op een Fibonacci level reageerde → verhoogt betrouwbaarheid

### Output
```typescript
interface SRDetectionResult {
  levels: AnalyzeSRLevel[];     // Top 6 (3 support + 3 resistance), gesorteerd op sterkte
  fibonacci?: AnalyzeFibonacci;
  swingPoints: { timestamp: number; price: number; type: 'high' | 'low' }[];
}
```

De swingPoints worden ook doorgegeven aan de pattern detector (AA-05).
```

---

## AA-05: Backend — Pattern Detection

**Dependencies:** AA-02 (indicator data), AA-04 (swing points)
**Parallel with:** AA-04, AA-08
**Estimated effort:** 3 dagen

### Claude Code Prompt

```
Je bouwt de algoritmische pattern detection voor AI Analyze. Dit omvat zowel candlestick patterns als chart patterns.

## Deel 1: Candlestick Pattern Detection

Per candle (of combinatie van 2-3 candles), detecteer:

### Single-candle patterns
```
Hammer:
- Lower shadow >= 2x body size
- Upper shadow <= 10% van total range
- In context: na een decline, bij support → significance HIGH
- Anders: significance LOW

Shooting Star:
- Upper shadow >= 2x body size
- Lower shadow <= 10% van total range
- In context: na een rally, bij resistance → significance HIGH

Doji:
- |open - close| < 5% van total range
- Varianten: standard (kleine shadows), long-legged (lange shadows), dragonfly (lange lower), gravestone (lange upper)

Marubozu:
- Geen of minimale shadows (< 5% van total range)
- Sterk momentum signaal
```

### Multi-candle patterns
```
Bullish Engulfing:
- Candle 1: bearish (close < open)
- Candle 2: bullish (close > open)
- Body van candle 2 omsluit body van candle 1 compleet
- Extra check: volume candle 2 > volume candle 1 → bevestiging

Bearish Engulfing: inverse

Morning Star:
- Candle 1: lange bearish body
- Candle 2: kleine body (kleur onbelangrijk), gap down optioneel
- Candle 3: lange bullish body, sluit boven midpoint candle 1
- In crypto: gaps zijn zeldzaam, dus "gap" = candle 2 opent dicht bij close candle 1

Evening Star: inverse

Three White Soldiers:
- 3 opeenvolgende bullish candles
- Elke candle opent binnen body vorige, sluit hoger
- Progressief kleiner wordende upper shadows

Three Black Crows: inverse
```

### Significance scoring
CRUCIAAL: een candlestick pattern is alleen HIGH significance als het op een relevante locatie valt:
- Op een S/R niveau (input van AA-04) → HIGH
- Op een trendlijn → HIGH
- Op een Fibonacci niveau → HIGH
- Midden in het niets → LOW
- In een sterke trend (ADX > 25) maar tegen de trend in → MEDIUM

### Output
```typescript
interface CandlestickDetectionResult {
  signals: AnalyzeCandlestickSignal[];  // Max 5 meest recente + significante
}
```

## Deel 2: Chart Pattern Detection

Op basis van swing high/low sequentie (input van AA-04):

### Head & Shoulders
```
Detectie:
1. Vind sequentie van 5 swing points: High-Low-Higher_High-Low-Lower_High
2. De twee lows vormen de neckline
3. Het middelste high (head) moet significant hoger zijn dan de shoulders (>= 1.5x verschil)
4. De rechter shoulder mag niet hoger zijn dan de linker (anders: ascending broadening)
5. Volume: idealiter afnemend bij rechter shoulder

Status:
- "forming" als rechter shoulder nog bezig is
- "complete" als patroon af is maar neckline niet gebroken
- "breakout" als prijs door neckline is gezakt

Target: hoogte head-neckline, geprojecteerd onder neckline
```

### Inverse Head & Shoulders: inverse logica

### Double Top / Double Bottom
```
Double Top:
1. Twee swing highs binnen 2% van elkaar
2. Tussendal (neckline) minimaal 3% lager
3. Volume: tweede top idealiter lager volume dan eerste
4. Breakout: prijs breekt onder het dal

Double Bottom: inverse
```

### Triangles
```
Symmetrical: trendlijn door swing highs daalt, trendlijn door swing lows stijgt, convergeren
Ascending: flat trendlijn door highs, stijgende trendlijn door lows
Descending: dalende trendlijn door highs, flat trendlijn door lows

Detectie:
1. Minimaal 4 swing points (2 highs + 2 lows) binnen de formatie
2. Fit lineaire regressie op highs en op lows
3. Check convergentie: de twee lijnen moeten naar elkaar toe bewegen
4. Classification op basis van slopes
```

### Flags / Pennants
```
Flag:
1. Scherpe move (>5% in < 10 candles) = "pole"
2. Gevolgd door tight consolidation (< 3% range) in tegengestelde richting
3. Minimaal 5, maximaal 20 candles in de flag
4. Bull flag: pole up, flag drifts down
5. Bear flag: pole down, flag drifts up
```

### Wedges
```
Rising Wedge (bearish):
1. Beide trendlijnen (highs + lows) stijgen
2. Maar de lows stijgen sneller dan de highs (convergentie naar boven)

Falling Wedge (bullish): inverse
```

### Per patroon output
```typescript
interface ChartPatternResult {
  type: string;
  status: 'forming' | 'complete' | 'breakout';
  points: [number, number][];       // Key swing points van het patroon
  neckline?: [number, number][];    // Voor H&S en double top/bottom
  target?: number;                  // Measured move target
  reliability?: number;             // 0-1, gebaseerd op Bulkowski statistics
  volumeConfirmation: boolean;
}
```

## Pattern reliability scores (Bulkowski-referentie)

| Pattern | Success Rate (break even or better) |
|---------|-------------------------------------|
| H&S Top | 93% |
| Inverse H&S | 89% |
| Double Bottom | 73% |
| Double Top | 73% |
| Ascending Triangle | 75% |
| Descending Triangle | 72% |
| Bull Flag | 67% |
| Bear Flag | 67% |
| Rising Wedge (bearish) | 65% |
| Falling Wedge (bullish) | 68% |

Neem deze als referentie-reliability. Pas aan op basis van volume-bevestiging (+5%) en locatie bij S/R (+5%).

## Totale output
```typescript
interface PatternDetectionResult {
  chartPatterns: AnalyzeChartPattern[];       // Max 3 meest significante
  candlestickSignals: AnalyzeCandlestickSignal[];  // Max 5 meest recente significante
}
```
```

---

## AA-06: Backend — Divergence Detection

**Dependencies:** AA-02 (RSI/MACD waarden + swing points)
**Parallel with:** AA-04, AA-05
**Estimated effort:** 1 dag

### Claude Code Prompt

```
Je bouwt de divergentie-detectie voor AI Analyze.

## Algoritme

### Input
- RSI waarden (per candle) + swing highs/lows in RSI
- MACD histogram waarden (per candle) + swing highs/lows in MACD
- Prijs swing highs/lows (van AA-04)

### Swing point detectie in indicatoren
Gebruik dezelfde swing point methode als voor prijs (N=3 voor indicatoren, die bewegen sneller).

### Divergentie matching
```
Voor elke recente prijs swing high (max laatste 50 candles):
  Vind de corresponderende RSI swing high (dichtstbijzijnde in tijd, max 5 candles verschil)
  Als prijs hogere high maar RSI lagere high → BEARISH DIVERGENCE
  Als prijs lagere high maar RSI hogere high → HIDDEN BEARISH

Voor elke recente prijs swing low:
  Vind de corresponderende RSI swing low
  Als prijs lagere low maar RSI hogere low → BULLISH DIVERGENCE
  Als prijs hogere low maar RSI lagere low → HIDDEN BULLISH
```

Herhaal voor MACD histogram.

### Output
```typescript
interface DivergenceResult {
  divergences: AnalyzeDivergence[];  // Max 3 meest recente
}
```

Retourneer alleen divergenties van de laatste 50 candles. Oudere divergenties zijn niet meer relevant.
```

---

## AA-07: Backend — LLM Integration & Response Assembly

**Dependencies:** AA-02, AA-04, AA-05, AA-06 (alle berekeningen klaar)
**Parallel with:** Niets — dit assembleert alles
**Estimated effort:** 2 dagen

### Claude Code Prompt

```
Je bouwt de LLM-integratie die alle algoritmische resultaten combineert met een Claude API call om de tekstuele analyse te genereren.

## Input
Alle resultaten van AA-02 (indicators), AA-04 (S/R), AA-05 (patterns), AA-06 (divergences).

## Stap 1: Confluence-score berekenen

Algoritmisch (niet LLM):

```typescript
const signals = [
  { name: 'Primary Trend', direction: indicators.trend.direction === 'uptrend' ? 'bullish' : indicators.trend.direction === 'downtrend' ? 'bearish' : 'neutral' },
  { name: 'Higher TF Trend', direction: higherTF.direction... },
  { name: 'Price vs MAs', direction: /* above all 3 = bullish, below all 3 = bearish, mixed = neutral */ },
  { name: 'RSI', direction: /* < 30 or bullish div = bullish, > 70 or bearish div = bearish, else neutral */ },
  { name: 'MACD', direction: /* bullish cross/div = bullish, bearish cross/div = bearish, else neutral */ },
  { name: 'Volume', direction: /* increasing on up candles = bullish, on down = bearish, else neutral */ },
  { name: 'Candlestick', direction: /* most recent high-significance signal direction, else neutral */ },
  { name: 'Chart Pattern', direction: /* breakout direction, or forming direction, else neutral */ },
  { name: 'S/R Context', direction: /* bouncing off support = bullish, rejected at resistance = bearish, else neutral */ },
];

const bullishCount = signals.filter(s => s.direction === 'bullish').length;
const bearishCount = signals.filter(s => s.direction === 'bearish').length;
const bias = bullishCount >= 7 ? 'strong_bullish' :
             bullishCount >= 5 ? 'mildly_bullish' :
             bearishCount >= 7 ? 'strong_bearish' :
             bearishCount >= 5 ? 'mildly_bearish' : 'neutral';
```

## Stap 2: LLM prompt bouwen

Gebruik de Anthropic SDK (Claude API).

System prompt: het analyse-framework (7 lagen), taalregels, must/must-not regels.
User prompt: alle pre-computed data in gestructureerd tekstformat.

```typescript
import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic();

const response = await client.messages.create({
  model: 'claude-sonnet-4-5-20250514',
  max_tokens: 3000,
  system: ANALYSIS_SYSTEM_PROMPT,    // Groot template met framework
  messages: [{
    role: 'user',
    content: buildAnalysisPrompt(indicators, srLevels, patterns, divergences, confluence, request)
  }],
});
```

LLM moet JSON retourneren met:
- `summary.headline` (max 10 woorden)
- `summary.text` (max 150 woorden)
- `sections.trend.text` (max 100 woorden)
- `sections.supportResistance.text` (max 100 woorden)
- `sections.patterns.text` (max 100 woorden)
- `sections.indicators.text` (max 100 woorden)
- `sections.volume.text` (max 100 woorden)
- `scenarios.bullish` (condition + target + text)
- `scenarios.bearish` (condition + target + text)

De `overlays` komen NIET van het LLM — die komen van de algoritmische stappen (AA-04, AA-05, AA-06). Het LLM genereert alleen tekst.

## Stap 3: Response assembleren

Combineer:
- `summary` van LLM + confluence score (algoritmisch)
- `overlays` van AA-04 + AA-05 + AA-06 (algoritmisch)
- `sections` van LLM
- `scenarios` van LLM
- `rawData` van AA-02 (algoritmisch)
- `disclaimer` (hardcoded)
- `generatedAt`, `model`, `processingTimeMs` (meta)

## Stap 4: Post-processing safety check

Scan LLM-output op verboden termen:
- "koop", "buy", "verkoop", "sell" (als advies, niet als beschrijving)
- "garandeert", "zeker", "100%"
- Concrete tijdsgebonden voorspellingen: "volgende week", "morgen", "over 3 dagen"

Vervang of verwijder deze indien gevonden.

## Streaming

Gebruik Anthropic's streaming API. Return SSE naar de frontend:
1. Eerst: stuur overlays (algoritmisch, direct beschikbaar)
2. Dan: stream LLM-tekst progressief

```typescript
// SSE response format
event: overlays
data: { ...overlays JSON... }

event: summary
data: { ...summary JSON... }

event: section
data: { name: "trend", ...section JSON... }

event: section
data: { name: "supportResistance", ...section JSON... }

... etc.

event: complete
data: { processingTimeMs: 3400, model: "claude-sonnet-4-5-20250514" }
```

## Error handling
- LLM timeout (>10s): retry 1x met claude-haiku-4-5-20251001 als fallback
- LLM error: return overlays-only response (geen tekst)
- Parse error op LLM output: retry 1x met striktere prompt
```

---

## AA-08: Frontend — Analyse Overlay Primitives

**Dependencies:** AA-01 (types), AA-03 (store)
**Parallel with:** AA-04, AA-05, AA-09
**Estimated effort:** 3 dagen

### Claude Code Prompt

```
Je bouwt de LWC primitives die de AI Analyze resultaten visueel op de chart renderen. Werk in `packages/chart/src/plugins/analyze/`.

## Context

De bestaande HopCharts codebase heeft al:
- Drawing tool primitives (WP-06): TrendlinePrimitive, FibonacciPrimitive
- AI overlay primitives (WP-04): AIPatternPrimitive

AI Analyze heeft deels vergelijkbare maar specifiek gestylde primitives nodig. Hergebruik waar mogelijk.

## Primitives te bouwen

### 1. AnalyzeTrendlinePrimitive
Hergebruik `TrendlinePrimitive` uit WP-06 maar:
- Read-only (geen interactie, geen drag)
- Stijl: dashed, visueel onderscheidbaar van user-drawn trendlines (kleuren, lijndikte: zie Chart Design)
- Label aan het einde met "AI Trendline"

### 2. SRZonePrimitive (NIEUW)
Rendert semi-transparante horizontale banden:
```typescript
class SRZonePrimitive implements ISeriesPrimitive<Time> {
  private levels: AnalyzeSRLevel[];

  updateLevels(levels: AnalyzeSRLevel[]): void;
}
```

Renderer:
- Per level: teken een horizontale band van `price - zoneWidth/2` tot `price + zoneWidth/2`
- Support/Resistance fill: kleuren en opacity uit Chart Design theme (opacity schaalt met strength/10)
- Dunne dashed lijn door het midden van de zone
- Label rechts: prijs + sterkte-bars (■ per 2 punten sterkte)
- Hover: show tooltip met label (e.g., "3x getest, hoog volume")

### 3. CandlestickSignalPrimitive (NIEUW)
Kleine markers boven/onder individuele candles:
```typescript
class CandlestickSignalPrimitive implements ISeriesPrimitive<Time> {
  private signals: AnalyzeCandlestickSignal[];
}
```

Renderer:
- Bullish: marker (▲) onder de candle's low
- Bearish: marker (▼) boven de candle's high
- Kleuren en sizing per significance level (HIGH/MEDIUM/LOW): zie Chart Design theme
- Hover tooltip: patroon naam + uitleg

Alternatief: gebruik LWC series markers (`series.setMarkers()`). Dit is eenvoudiger en built-in. Markers worden automatisch op de juiste positie gerenderd. Nadeel: minder controle over hover-tooltips.

**Keuze: gebruik series markers voor v1**, custom primitive voor v2 als we meer controle nodig hebben.

### 4. ChartPatternPrimitive
Hergebruik/extend de bestaande `AIPatternPrimitive` uit WP-04:
- Pattern outline: dashed polygon door de key points
- Neckline: horizontale dashed lijn (voor H&S, double top/bottom)
- Target projection: dunne dashed lijn naar target prijs
- Label: pattern naam + status + reliability %

### 5. FibonacciOverlayPrimitive
Hergebruik `FibonacciPrimitive` uit WP-06 maar:
- Read-only, niet interactief
- Levels berekend door backend (niet door user anchor points)
- Visueel onderscheidbaar van user-drawn Fibonacci (styling: zie Chart Design)

### 6. DivergencePrimitive (NIEUW)
Meest complexe primitive:
```typescript
class DivergencePrimitive implements ISeriesPrimitive<Time> {
  private divergences: AnalyzeDivergence[];
}
```

Renderer — op de main price pane:
- Teken diagonale lijn tussen de twee price swing points
- Kleur: bullish/bearish kleuren uit Chart Design theme
- Label: "Bull. Div. (RSI)" of "Bear. Div. (MACD)"

De corresponderende lijn op de indicator sub-pane wordt als aparte primitive gerenderd (pane primitive, niet series primitive). Dit vereist toegang tot het indicator sub-pane object.

### 7. AnalyzeOverlayManager
Coördineert alle primitives:
```typescript
class AnalyzeOverlayManager {
  constructor(chart: IChartApi, series: ISeriesApi<'Candlestick'>);

  applyAnalysis(analysis: AnalyzeResponse): void {
    this.clearAnalysis();
    // Create + attach all primitives based on analysis.overlays
  }

  clearAnalysis(): void {
    // Detach all primitives, remove markers
  }

  toggleLayer(layer: AnalyzeLayer): void {
    // Show/hide specific layer
  }
}
```

## Styling / theming
Alle kleuren moeten theme-aware zijn (dark/light). Import theme van de bestaande theme system.
```

---

## AA-09: Frontend — Analyse Panel UI

**Dependencies:** AA-03 (store), AA-01 (types)
**Parallel with:** AA-08, AA-10
**Estimated effort:** 2 dagen

### Claude Code Prompt

```
Je bouwt het Analyse Panel UI component voor AI Analyze. Werk in `packages/chart/src/Panels/AnalysePanel/`.

## Design Reference

Before building, read the following design files in `Chart Design/src/app/components/`:
- `indicators-panel.tsx` — Reference for panel structure (slide-in pattern, width, header, close button, scrollable area)
- `ui/accordion.tsx` — For collapsible sections
- `ui/badge.tsx` — For signal direction badges (bullish/bearish/neutral)
- `ui/card.tsx` — For scenario cards
- `ui/tabs.tsx` — For Data tab
- `ui/progress.tsx` — For strength bars on S/R levels
- `theme-context.tsx` — For theme-aware colors

Follow the same panel pattern as `indicators-panel.tsx` (slide-in from right, same width, same close button, same header style). Use the same shadcn/ui primitives the design project uses throughout.

## Components

### AnalysePanel.tsx (container)
- Slide-in panel met overlay
- Header: "AI Analyse — {pair} ({timeframe})"
- Close button
- Scrollable content area
- Width en responsive gedrag: volg Chart Design (refereer indicators-panel.tsx voor panel dimensies en breakpoints)

### BiasIndicator.tsx
- Visuele meter van "Strong Bearish" tot "Strong Bullish"
- 5-staps kleurenschaal: zie Chart Design theme voor de exacte kleuren (bearish → neutral → bullish gradient)
- Marker op de huidige bias positie
- Onder de meter: "Confluence: 5/7 signalen bullish"

### KeyLevelsSection.tsx
- Lijst van S/R niveaus
- Per niveau: kleur (support/resistance kleuren uit Chart Design theme), prijs, sterkte-bars (gebruik `ui/progress.tsx`), label
- Klikbaar: klikt → chart scrollt naar dat prijsniveau (`series.priceToCoordinate()`)

### ScenariosSection.tsx
- Twee kaarten: Bullish scenario + Bearish scenario (randkleuren uit Chart Design theme, gebruik `ui/card.tsx`)
- Per scenario: conditie, target prijs, korte uitleg

### CollapsibleSection.tsx
- Uitklapbare sectie met titel + chevron
- Standaard: ingeklapt (behalve eerste 2)
- Content: de sectie-tekst uit `analysis.sections`
- Per sectie: lijst van signals met kleur-indicator (bull/bear/neutral)

### LayerToggles.tsx
- Rij checkboxes voor elke overlay-laag
- Trendlijnen ✓ | S/R Zones ✓ | Patronen ✓ | Candle Signalen ✓ | Fibonacci ✓ | Divergenties ✓
- Toggle synct met `analyzeStore.toggleLayer()`

### RawDataTab.tsx
- Tabel met alle ruwe indicator-waarden
- Voor expert-gebruikers
- Achter een "Data" tab of onderaan het panel

### DisclaimerFooter.tsx
- Vaste footer: "Dit is geen financieel advies. Doe altijd je eigen onderzoek."
- Klein, subtiel, maar altijd zichtbaar

## Styling
- Tailwind CSS
- Dark mode first (consistent met rest van HopCharts)
- Smooth slide-in animatie (timing en easing: refereer Chart Design indicators-panel.tsx)
- Beginner-vriendelijke tekst: geen muur van tekst, korte alinea's, duidelijke koppen
```

---

## AA-10: Frontend — Toolbar Button + Loading UX

**Dependencies:** AA-03 (store), AA-09 (panel)
**Parallel with:** AA-09
**Estimated effort:** 0.5 dag

### Claude Code Prompt

```
Je voegt de "AI Analyze" knop toe aan de HopCharts toolbar en implementeert de loading UX.

## Design Reference

Read `Chart Design/src/app/components/top-bar.tsx` for the toolbar layout and button styling patterns. Place the AI Analyze button following the same visual pattern as existing toolbar buttons. Use the same button component from `Chart Design/src/app/components/ui/button.tsx`.

## Toolbar button

In `packages/chart/src/Toolbar/AIAnalyzeButton.tsx`:
- Button in the toolbar following the design's button patterns
- Disabled state wanneer isLoading
- Subscription gate: als user geen Pro/AI tier heeft → toon lock icon, klik opent upgrade prompt
- Cooldown indicator: als rate limit actief → toon countdown timer

## Loading UX

Wanneer analyse loopt:
1. Button toont loading spinner
2. Chart krijgt subtiele loading overlay (styling: zie Chart Design theme)
3. Panel opent met skeleton loading state:
   - Bias meter: pulserende grijze bar
   - Key levels: 4 skeleton lines
   - Sections: skeleton text blocks
4. Als overlays binnenkomen (SSE): render ze meteen op de chart, shimmer verdwijnt
5. Als tekst binnenkomt (SSE): vul panel progressief in (typewriter effect)

## Cancel
- Als gebruiker wegnavigeren of op een nieuw pair switcht tijdens loading → cancel de request
- AbortController op de fetch request
```

---

## AA-11: Integration & Polish

**Dependencies:** AA-07, AA-08, AA-09, AA-10
**Parallel with:** Niets — finale integratie
**Estimated effort:** 2 dagen

### Claude Code Prompt

```
Je integreert alle AI Analyze componenten tot een werkend geheel en polisht de UX.

## Integratie-checklist

1. **End-to-end flow:** Button click → API call → overlays renderen → panel opent
2. **SSE streaming:** Overlays verschijnen eerst, tekst streamt in
3. **Panel ↔ chart interactie:** Klik op level in panel → chart highlight
4. **Layer toggles:** Checkboxes in panel → overlays tonen/verbergen
5. **Theme support:** Alles werkt in dark + light mode
6. **Clear analyse:** "Nieuwe analyse" knop verwijdert huidige overlays + sluit panel
7. **Pair/TF switch:** Bij pair of timeframe switch → auto-clear vorige analyse
8. **Responsive:** Panel wordt bottom sheet op mobile
9. **Keyboard:** Escape sluit panel

## Edge cases
- Gebruiker klikt "Analyze" terwijl eerdere analyse nog loopt → cancel vorige, start nieuwe
- Gebruiker heeft geen candle data (lege chart) → toon foutmelding
- Backend retourneert gedeeltelijke response (alleen overlays, geen tekst) → toon wat er is
- Zeer korte data range (< 50 candles) → backend rejected, frontend toont duidelijke melding
- Panel open + gebruiker zoomt/pant → overlays bewegen mee (automatisch door LWC)

## Polish
- Smooth animaties op overlay verschijning (timing: consistent met Chart Design animatie-patroon)
- Tooltip formatting consistent met rest van HopCharts
- Error states met retry button
- "Opnieuw analyseren" knop in het panel
```

---

## AA-12: Rate Limiting, Caching & Gating

**Dependencies:** AA-01
**Parallel with:** AA-02, AA-03
**Estimated effort:** 1 dag

### Claude Code Prompt

```
Je implementeert rate limiting, caching, en subscription gating voor AI Analyze.

## Backend

### Caching
- Cache key: `analyze:{exchange}:{pair}:{timeframe}:{floor(timestamp/900000)}`
- TTL: 15 minuten
- Storage: Redis of in-memory (configureerbaar)
- Bij cache hit: return cached response, skip alle berekeningen

### Rate limiting
- Per user ID (uit auth token)
- Redis-based counter met sliding window
- Tiers: Free=3/dag, Pro=onbeperkt (30s cooldown), AI+=onbeperkt (10s cooldown)
- Return 429 met `retryAfter` header bij overschrijding

### Subscription check
- Verifieer subscription tier uit auth token / user profile
- Free: mag alleen summary (geen overlays) → filter response
- Pro/AI+: volledige response

## Frontend

### Gating UI
- `useAuth().canAccess('ai_analyze')` check
- Free: button toont "✨ AI Analyze (Pro)" met lock icon
- Bij klik zonder access: toon UpgradePrompt component (hergebruik uit WP-15)

### Rate limit UI
- Na analyse: toon cooldown timer op button
- Bij 429: toon "Limiet bereikt" + upgrade CTA (voor free tier)
```

---

## AA-13: Testing & Validation

**Dependencies:** AA-11 (alles geïntegreerd)
**Parallel with:** Niets — finale validatie
**Estimated effort:** 2 dagen

### Claude Code Prompt

```
Je zet de testing en validatie op voor AI Analyze.

## Unit tests

### Indicator berekeningen (backend)
- Test elke indicator (RSI, MACD, etc.) tegen bekende waarden
- Input: vaste OHLCV dataset → output moet exact matchen met referentie

### S/R detectie
- Test met synthetische data (duidelijke swing points) → correcte levels gevonden
- Test sterkte-scoring: meer aanrakingen → hogere score

### Pattern detectie
- Test elke pattern met handgemaakte OHLCV data die het patroon bevat
- Test false positives: data zonder patroon → geen detectie

### Divergentie detectie
- Synthetische prijs + RSI data met bekende divergentie → correct gedetecteerd

### Confluence scoring
- Test alle combinaties: 9 bullish → strong_bullish, 5 → mildly, etc.

## Integration tests

### API endpoint
- Mock LLM response → test volledige pipeline van request tot response
- Test caching: tweede identieke request → cached response
- Test rate limiting: te veel requests → 429

### Frontend
- Mock API response → test dat overlays correct renderen
- Test panel content population
- Test layer toggle
- Test loading/error states

## LLM output validatie
- Stuur 10 diverse analyse-requests met echte data
- Controleer handmatig:
  - Geen verboden termen (koop/verkoop)
  - Disclaimer aanwezig
  - Bias consistent met confluence score
  - Scenario's bevatten concrete prijsniveaus
  - Tekst is in de juiste taal
  - Max lengtes gerespecteerd

## Visual regression
- Screenshot test: chart met analyse overlays (dark + light theme)
- Screenshot test: analyse panel in verschillende states
```

---

## Summary Table

| WP | Name | Depends On | Effort | Phase |
|----|------|-----------|--------|-------|
| AA-01 | Types & API Contract | HopCharts core | 0.5d | A |
| AA-02 | Backend: Indicator Pipeline | AA-01 | 2d | A |
| AA-03 | Frontend: Store + Hook | AA-01 | 0.5d | A |
| AA-04 | Backend: S/R Detection | AA-02 | 1.5d | B |
| AA-05 | Backend: Pattern Detection | AA-02, AA-04 | 3d | B |
| AA-06 | Backend: Divergence Detection | AA-02 | 1d | B |
| AA-07 | Backend: LLM Integration | AA-02-06 | 2d | C |
| AA-08 | Frontend: Overlay Primitives | AA-01, AA-03 | 3d | B |
| AA-09 | Frontend: Analyse Panel UI | AA-03 | 2d | B |
| AA-10 | Frontend: Button + Loading UX | AA-03 | 0.5d | B |
| AA-11 | Integration & Polish | AA-07-10 | 2d | C |
| AA-12 | Rate Limiting, Caching, Gating | AA-01 | 1d | A |
| AA-13 | Testing & Validation | AA-11 | 2d | D |

**Total estimated effort: ~21 developer-days**

## Developer Schedule (2 developers)

```
Day 1      : AA-01 (both, quick)
Day 1-2    : Dev A (backend): AA-02 (Indicator Pipeline)
             Dev B (frontend): AA-03 (Store) → AA-12 (Gating) → start AA-08 (Primitives)
Day 3-5    : Dev A (backend): AA-04 (S/R) → AA-06 (Divergence) → start AA-05 (Patterns)
             Dev B (frontend): AA-08 (Primitives, cont.) → AA-09 (Panel UI) → AA-10 (Button)
Day 6-7    : Dev A (backend): AA-05 (Patterns, cont.) → AA-07 (LLM Integration)
             Dev B (frontend): AA-09 (cont.) → begin AA-11 wachten op backend
Day 8-9    : Both: AA-11 (Integration & Polish)
Day 10-11  : Both: AA-13 (Testing & Validation)
```

**~11 werkdagen met 2 developers. ~2.5 kalenderweken.**

Kritiek pad: AA-05 (Pattern Detection, 3d) is het langste backend WP. De frontend kan grotendeels parallel werken met mock data tot de backend klaar is.

---

## Fasering vs. Product Plan

Dit implementatieplan dekt **Fase 1 (MVP) + Fase 2 (Pattern Recognition)** uit het Product Plan in één keer, omdat:
1. De backend pipeline voor patterns is hetzelfde als voor trend/S/R — het is niet efficiënt om ze te splitsen
2. De LWC primitives voor patterns hergebruiken bestaande code
3. De LLM prompt bevat sowieso alle lagen — je kunt er niet zinvol een subset van doen

**Wat NIET in dit plan zit (Fase 3 van Product Plan):**
- Ichimoku Cloud analyse
- Bollinger Band squeeze als aparte feature
- Volume Profile (VPVR)
- Wyckoff fase-detectie (expliciet)
- Multi-timeframe dashboard
- Animaties op chart overlays
- Meertalige output (v1 doet NL + EN)

**Wat NIET in dit plan zit (Fase 4 van Product Plan):**
- Gebruiker-voorkeuren per analyse
- Historische analyses opslaan
- Alerts op pattern-detectie
- Batch-analyse
- API-toegang voor bots
