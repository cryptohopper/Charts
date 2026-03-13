# AI Analyze Engine — Architectuur-opties

**Datum:** 10 maart 2026

---

## De kernvraag

De AI Analyze feature heeft twee fundamenteel verschillende taken:

1. **Computation** — bereken indicatoren, detecteer patronen, identificeer S/R-niveaus
2. **Synthesis** — combineer alle signalen tot een coherent verhaal met visuele overlays

De architectuurkeuze draait om: *wie doet wat?*

---

## Optie A: CryptoHopper Strategy API als rekenmotor

### Hoe het werkt

```
Gebruiker klikt "AI Analyze"
       │
       ▼
HopCharts backend maakt via CH API een tijdelijke "analyse-strategie"
  ├── Configureert alle relevante indicators (RSI, MACD, BB, etc.)
  ├── Configureert candlestick pattern detection
  └── Voert strategie uit tegen het geselecteerde paar + timeframe
       │
       ▼
CH API retourneert welke condities TRUE/FALSE zijn
  (bijv. RSI > 70 = true, bullish engulfing = true, etc.)
       │
       ▼
LLM ontvangt de resultaten + OHLCV context
       │
       ▼
LLM genereert analyse-tekst + overlay-coördinaten
```

### Voordelen

- **Al gebouwd** — indicator-berekeningen en candlestick patterns bestaan al
- **Subscription gating gratis** — gebruiker moet CH-account hebben
- **Maintenance is andermans probleem** — CH team onderhoudt de indicator-logica
- **Consistentie** — zelfde berekeningen als de Strategy Designer, geen discrepanties

### Nadelen

- **API is niet ontworpen voor analyse** — Strategy Designer is gebouwd voor "trigger ja/nee", niet voor "geef me de RSI-waarde van de laatste 200 candles". Je krijgt booleans, geen data.
- **Beperkt tot wat CH ondersteunt** — als CH geen Wyckoff-fase-detectie heeft, kun je het niet gebruiken. Fibonacci retracements? Volume Profile? Waarschijnlijk niet in de Strategy API.
- **Latency** — je maakt meerdere API-calls om één analyse te doen. Elke call heeft netwerk-overhead.
- **Afhankelijkheid** — als de CH API wijzigt of rate-limited is, breekt je analyse-feature.
- **Hack-achtig** — je misbruikt een trading-API als analyse-engine. Het voelt als een vierkante pin in een rond gat.
- **Geen ruwe waarden** — je weet dat RSI > 70, maar niet dát het 78.3 is, of dat het een divergentie toont. De nuance verdwijnt.

### Verdict: ⚠️ Creatief maar te beperkt

De CH Strategy API geeft je booleans ("is RSI overbought?") terwijl je datapoints nodig hebt ("RSI = 78.3, vorige swing was 82.1, dus bearish divergentie"). Het verschil is fundamenteel. Een analyse die zegt "RSI is overbought" is nutteloos — een analyse die zegt "RSI toont bearish divergentie op 78 terwijl prijs een hogere top maakt" is waardevol.

**Mogelijke uitzondering:** als de CH API wél ruwe indicator-waarden kan teruggeven (niet alleen trigger-resultaten), wordt deze optie significant aantrekkelijker. Dat is het waard om te onderzoeken.

---

## Optie B: Dedicated TA Microservice (Python)

### Hoe het werkt

```
Gebruiker klikt "AI Analyze"
       │
       ▼
HopCharts backend haalt OHLCV data op (al beschikbaar via CH proxy)
       │
       ▼
Stuurt OHLCV naar dedicated Python TA-service
  ├── pandas-ta of TA-Lib berekent ALLE indicators
  ├── Custom algoritmes detecteren chart patterns
  ├── S/R-detectie via swing high/low analyse
  ├── Divergentie-detectie (RSI vs prijs, MACD vs prijs)
  ├── Fibonacci berekening
  └── Volume-analyse
       │
       ▼
Gestructureerde JSON output:
  {
    "indicators": { "rsi": [waarden...], "macd": {...}, ... },
    "patterns": { "candlestick": [...], "chart": [...] },
    "support_resistance": [...],
    "divergences": [...],
    "trend": { "direction": "up", "strength": 0.72 }
  }
       │
       ▼
LLM ontvangt gestructureerde data + analyse-prompt
       │
       ▼
LLM genereert analyse-tekst + overlay-instructies
```

### Tech stack

```
Python service:
  ├── pandas-ta          (130+ indicators, actief onderhouden)
  ├── numpy / scipy      (custom pattern detection, peak finding)
  ├── FastAPI            (API layer, async, snel)
  └── Docker container   (deployment)
```

### Voordelen

- **Volledige controle** — je bepaalt exact welke indicators, welke settings, welke patronen
- **Rijke data** — niet booleans maar volledige tijdreeksen. RSI(14) = [34.2, 36.1, 38.7, ...] over de hele range
- **Divergentie-detectie** — dit is algoritmisch goed te doen en is een van de krachtigste signalen
- **Onafhankelijk van CH API-beperkingen** — je kunt Wyckoff, Volume Profile, Fibonacci, harmonische patronen etc. toevoegen
- **Schaalbaar** — de Python service kan onafhankelijk schalen
- **Open source libraries** — pandas-ta heeft 130+ indicators, is gratis, en wordt actief onderhouden
- **Testbaar** — unit tests op elke indicator, backtest-validatie tegen bekende data

### Nadelen

- **Bouwen & onderhouden** — je hebt een extra service die je moet deployen en onderhouden
- **Pattern detection is moeilijk** — candlestick patterns zijn relatief eenvoudig (regels op OHLC data), maar chart patterns (head & shoulders, triangles) zijn complex en foutgevoelig
- **Kosten** — extra server, extra team-kennis (Python naast TypeScript)
- **Dubbele logica** — als CH ook indicators berekent voor de Strategy Designer, bereken je dezelfde dingen twee keer

### Verdict: ✅ Beste balans kwaliteit/controle

Dit is de aanpak die de meeste professionele analyse-platforms gebruiken. De initiële investering is hoger, maar je hebt volledige controle over de kwaliteit van de analyse.

---

## Optie C: Client-side (Highcharts + Browser)

### Hoe het werkt

```
Gebruiker klikt "AI Analyze"
       │
       ▼
JavaScript in de browser:
  ├── Highcharts heeft 40+ indicators al berekend (als ze aan staan)
  ├── Of: bereken on-the-fly met Highcharts indicator modules
  ├── Custom JS voor pattern detection
  └── Exporteer alle berekende data als JSON
       │
       ▼
Stuur JSON naar backend → LLM
       │
       ▼
LLM retourneert analyse + overlay-data
       │
       ▼
Canvas overlay tekent patronen op chart
```

### Voordelen

- **Geen extra backend service** — alles draait in de browser + bestaande LLM-backend
- **Highcharts doet het werk** — 40+ indicators zijn al ingebouwd, berekeningen zijn geoptimaliseerd
- **Instant data** — geen extra API-calls voor indicator-berekening, data is er al
- **Goedkoop** — geen extra server-kosten voor computation
- **Consistentie** — exact dezelfde indicator-waarden die de gebruiker op de chart ziet

### Nadelen

- **Beperkte pattern detection** — Highcharts berekent indicators maar detecteert geen chart patterns (geen H&S, geen triangles). Dat moet je zelf bouwen in JS.
- **Performance** — zware berekeningen in de browser op mobiel = probleem
- **Geen background processing** — de tab moet open zijn
- **JavaScript TA-libraries zijn minder volwassen** — er zijn opties (technicalindicators.js, tulind) maar ze zijn minder compleet dan Python's pandas-ta
- **Divergentie-detectie in JS** — mogelijk maar minder elegant dan in Python/numpy
- **Token-grootte** — je moet de berekende data serialiseren en naar een API sturen, dat kan groot worden

### Verdict: ⚠️ Goed voor MVP, beperkt voor advanced features

Handig als snelle eerste stap: Highcharts kan RSI/MACD/EMA's berekenen, je stuurt die waarden naar het LLM. Maar voor chart patterns en geavanceerde analyse loop je snel tegen grenzen aan.

---

## Optie D: LLM-native (stuur ruwe candles naar het model)

### Hoe het werkt

```
Gebruiker klikt "AI Analyze"
       │
       ▼
Backend stuurt ruwe OHLCV data (bijv. 720 uur-candles = 30 dagen)
naar Claude/GPT met een uitgebreide system prompt:
  "Je bent een technisch analist. Hier zijn de OHLCV data.
   Bereken RSI, MACD, identificeer S/R, detecteer patronen..."
       │
       ▼
LLM doet ALLES: berekening + synthese + tekst
       │
       ▼
LLM retourneert analyse + overlay-coördinaten
```

### Voordelen

- **Minimale architectuur** — geen extra services, geen libraries, gewoon een API-call
- **LLMs worden snel beter** — Claude en GPT worden steeds beter in numerieke taken
- **Flexibel** — je kunt de analyse-stijl aanpassen door alleen de prompt te wijzigen

### Nadelen

- **LLMs zijn SLECHT in wiskunde** — RSI, MACD, Bollinger Bands vereisen exacte berekeningen over honderden datapunten. LLMs maken fouten. Niet soms — regelmatig.
- **Hallucinaties** — het model kan patronen "zien" die er niet zijn. Of exact de juiste RSI-waarde verzinnen die toevallig klopt.
- **Kosten** — 720 candles × 6 waarden = 4.320 getallen in de prompt. Dat is veel tokens. Per analyse. Per gebruiker.
- **Latency** — grote prompts = langzame inference (10-30 sec)
- **Niet reproduceerbaar** — dezelfde data kan een andere analyse opleveren
- **Niet verifieerbaar** — hoe weet je of de RSI die het model noemt klopt?
- **Token-limiet** — bij grotere datasets (1min candles, 30 dagen = 43.200 candles) loop je tegen context-limieten aan

### Verdict: ❌ Niet betrouwbaar genoeg voor productie

Een analyse die misschien klopt is erger dan geen analyse. Gebruikers gaan beslissingen nemen op basis van deze output — de berekeningen moeten deterministisch correct zijn.

---

## Optie E: Hybrid (Aanbevolen) 🏆

### Hoe het werkt

```
Gebruiker klikt "AI Analyze"
       │
       ▼
Stap 1: DETERMINISTISCHE COMPUTATION (snel, exact, goedkoop)
  │
  ├── Indicator-berekening (kies één):
  │   ├── Optie E1: Python microservice (pandas-ta) — meeste controle
  │   ├── Optie E2: Client-side Highcharts — minste overhead
  │   └── Optie E3: CH API — als die ruwe waarden kan teruggeven
  │
  ├── Candlestick pattern detection (algoritmisch)
  │   └── Regels op OHLC: body_size, upper_wick, lower_wick, prev_candle
  │
  ├── Support & Resistance detectie
  │   └── scipy.signal.find_peaks of vergelijkbaar
  │
  ├── Divergentie-detectie
  │   └── Vergelijk swing highs/lows van prijs vs. indicator
  │
  ├── Trendlijnen
  │   └── Linear regression op swing highs/lows
  │
  └── Fibonacci levels (pure wiskunde)
       │
       ▼
Stap 2: GESTRUCTUREERDE DATA (compact, verifieerbaar)
  {
    "pair": "BTC/USD",
    "timeframe": "1h",
    "range": "2026-02-08 → 2026-03-10",
    "current_price": 64250,
    "trend": {
      "direction": "up",
      "higher_highs": true,
      "higher_lows": true,
      "above_ema20": true,
      "above_ema50": true,
      "above_ema200": true,
      "adx": 28.4
    },
    "indicators": {
      "rsi_14": { "current": 62.3, "prev_swing_high": 78.1, "prev_swing_low": 34.2 },
      "macd": { "macd": 245, "signal": 198, "histogram": 47, "cross": "bullish_3_bars_ago" },
      "bollinger": { "upper": 66100, "middle": 63800, "lower": 61500, "bandwidth": 0.072 }
    },
    "divergences": [
      { "type": "none_detected" }
    ],
    "support_resistance": [
      { "price": 62400, "type": "support", "touches": 3, "recency": "5_days" },
      { "price": 65800, "type": "resistance", "touches": 2, "recency": "12_days" },
      { "price": 60000, "type": "support", "touches": 1, "source": "psychological" }
    ],
    "candlestick_patterns": [
      { "type": "bullish_engulfing", "timestamp": "2026-03-09T14:00Z", "at_support": true }
    ],
    "chart_patterns": [
      { "type": "ascending_triangle", "status": "forming", "resistance": 65800,
        "support_line_slope": 0.002, "completion": 0.75 }
    ],
    "volume": {
      "trend": "declining_in_uptrend",
      "avg_20": 12500,
      "last": 8900,
      "notable": "below_average_3_consecutive_bars"
    },
    "higher_timeframe": {
      "daily_trend": "bullish",
      "daily_ema200_position": "above",
      "weekly_rsi": 58.1
    }
  }
       │
       ▼
Stap 3: LLM SYNTHESIS (slim, creatief, goedkoop op kleine input)
  │
  LLM ontvangt:
  ├── Bovenstaande JSON (~500-800 tokens, niet 4000+)
  ├── System prompt met analyse-framework
  └── Instructies voor output-formaat
  │
  LLM genereert:
  ├── Samenvattende tekst (bias, key levels, scenario's)
  ├── Per-sectie uitleg
  ├── Confluence score
  └── Overlay-instructies (welke lijnen/zones te tekenen, met coördinaten)
       │
       ▼
Stap 4: RENDERING (Canvas overlay + analyse panel)
```

### Waarom dit de beste aanpak is

| Aspect | Hybrid voordeel |
|--------|-----------------|
| **Correctheid** | Indicatoren zijn deterministisch berekend — 100% correct, altijd |
| **Kosten** | LLM krijgt ~800 tokens input ipv 4000+. Dat scheelt 70-80% per analyse-call |
| **Latency** | Computation: <500ms. LLM: 2-4 sec op kleine input. Totaal: <5 sec |
| **Vertrouwen** | Elke indicator-waarde is verifieerbaar. Het LLM "interpreteert" maar "berekent" niet |
| **Flexibiliteit** | Nieuwe indicator toevoegen = toevoegen aan computation layer, LLM prompt aanpassen |
| **Schaalbaarheid** | Computation kan gecached worden. Meerdere gebruikers op dezelfde pair/timeframe = 1x berekenen |
| **LLM-kwaliteit** | Het LLM doet waar het goed in is: patronen herkennen in gestructureerde data, context geven, verhaal vertellen |

### Sub-keuze: waar draait de computation?

Binnen de hybrid-aanpak moet je nog kiezen waar de berekeningen draaien:

#### E1: Python Microservice + LLM

```
[Browser] → [HopCharts API] → [Python TA Service] → [LLM API] → [Browser]
```

**Best voor:** volledige feature set, chart pattern detection, Volume Profile, Wyckoff.
**Nadeel:** extra service om te onderhouden.

#### E2: Client-side Highcharts + LLM

```
[Browser/Highcharts] → [HopCharts API] → [LLM API] → [Browser]
```

**Best voor:** MVP. Highcharts berekent RSI, MACD, EMA's, Bollinger. Browser exporteert waarden, stuurt naar LLM. Geen extra service nodig.
**Nadeel:** geen chart pattern detection, geen divergentie-detectie, geen Volume Profile.

#### E3: CryptoHopper API + Aanvulling + LLM

```
[Browser] → [CH API: indicators] + [Eigen code: patronen/S&R] → [LLM API] → [Browser]
```

**Best voor:** als CH API ruwe indicator-waarden kan leveren (niet alleen booleans). Je leunt op CH voor wat het kan, en vult aan voor wat het niet kan.
**Nadeel:** afhankelijk van CH API-capabilities. Twee data-bronnen = complexer.

---

## Aanbevolen Pad

### Fase 1 (MVP): E2 — Client-side + LLM

**Waarom:** snelste time-to-market, geen extra infra.

```
Wat Highcharts al kan:
  ✅ RSI, MACD, EMA's, SMA's, Bollinger Bands, Stochastic, ADX
  ✅ Volume data (absoluut)
  ✅ OHLCV data export

Wat je er zelf bij bouwt (JS, relatief simpel):
  ✅ S/R-detectie (swing high/low via lokale maxima/minima)
  ✅ Trend-bepaling (higher highs/lows check)
  ✅ Basis candlestick patterns (engulfing, hammer, doji — 10 regels per patroon)

Wat het LLM doet:
  ✅ Interpretatie van alle data
  ✅ Tekst-generatie
  ✅ Confluence-beoordeling
  ✅ Scenario's formuleren
```

**Geschatte effort:** 2-3 weken voor de data-export + LLM-integratie + UI.

### Fase 2 (Enhancement): Migreer computation naar E1 (Python)

**Waarom:** zodra je chart pattern detection, divergenties, Fibonacci, en Volume Profile wilt, is Python de juiste tool.

```
Wat de Python service toevoegt:
  ✅ Chart pattern detection (H&S, triangles, flags, etc.)
  ✅ Divergentie-detectie (RSI/MACD vs. prijs)
  ✅ Fibonacci retracements + extensions
  ✅ Volume Profile (VPVR)
  ✅ Wyckoff fase-detectie
  ✅ Multi-timeframe berekeningen (hogere TF's in één call)
  ✅ Caching van berekeningen (zelfde pair/TF = 1x berekenen)
```

**Geschatte effort:** 4-6 weken voor de Python service + migratie.

### Fase 3 (Optioneel): Integreer CH API waar het waarde toevoegt

**Waarom:** als CH API ruwe waarden kan teruggeven, kun je voor bepaalde indicators de CH API gebruiken in plaats van zelf te berekenen. Dit garandeert consistentie met wat de Strategy Designer toont.

---

## Kostenvergelijking (per analyse)

| Component | Optie A (CH API) | Optie B (Python) | Optie C (Client) | Optie D (LLM-only) | Optie E (Hybrid) |
|-----------|-----------------|-----------------|-------------------|--------------------|--------------------|
| API/compute kosten | CH API calls | ~$0.001 (server) | $0 (browser) | $0 | ~$0.001 of $0 |
| LLM tokens input | ~800 tok | ~800 tok | ~800 tok | ~5000 tok | ~800 tok |
| LLM tokens output | ~1500 tok | ~1500 tok | ~1500 tok | ~2000 tok | ~1500 tok |
| LLM kosten (Claude Sonnet) | ~$0.009 | ~$0.009 | ~$0.009 | ~$0.030 | ~$0.009 |
| **Totaal per analyse** | **~$0.01** | **~$0.01** | **~$0.009** | **~$0.03** | **~$0.01** |
| **Bij 100k analyses/maand** | **~$1,000** | **~$1,100** | **~$900** | **~$3,000** | **~$1,000** |

*Prijzen gebaseerd op Claude Sonnet pricing. Bij Claude Haiku als optie voor de synthesis-stap: ~60-70% goedkoper.*

---

## LLM-keuze voor de Synthesis Stap

| Model | Pro | Con | Geschikt voor |
|-------|-----|-----|---------------|
| **Claude Sonnet** | Goede balans kwaliteit/prijs/snelheid | — | Default keuze |
| **Claude Haiku** | Zeer snel, zeer goedkoop | Minder diepgaande analyse | Free tier, snelle refresh |
| **Claude Opus** | Beste analyse-kwaliteit | Duurder, langzamer | Premium tier, uitgebreide analyse |
| **GPT-4o** | Snel, goedkoop | Minder gestructureerd | Alternatief |
| **Fine-tuned model** | Consistent, goedkoop op schaal | Grote investering upfront | Fase 3+ |

**Aanbeveling:** Start met Claude Sonnet. Bied Claude Haiku aan voor de free tier (snelle, beknopte analyse). Overweeg Opus voor een "deep analysis" premium optie.

---

## Samenvatting

| | Bouwen | Onderhouden | Kwaliteit analyse | Time to market | Schaalbaar |
|---|---|---|---|---|---|
| **A: CH API** | Laag | Laag | Beperkt (booleans) | 2-3 weken | Via CH |
| **B: Python** | Hoog | Medium | Uitstekend | 6-8 weken | Ja |
| **C: Client** | Medium | Laag | Basis goed, advanced beperkt | 2-3 weken | N.v.t. |
| **D: LLM-only** | Laag | Laag | Onbetrouwbaar | 1-2 weken | Duur |
| **E: Hybrid** | Medium → Hoog | Medium | Uitstekend | **2-3 weken (MVP)** | Ja |

### **Aanbeveling: Optie E (Hybrid), startend met E2 (client-side) voor MVP, migreer naar E1 (Python) voor advanced features.**

Dit geeft je:
- Snelle launch (2-3 weken)
- Correcte indicator-waarden (deterministisch)
- LLM doet wat het goed doet (interpreteren, niet berekenen)
- Duidelijk upgrade-pad naar volledige feature set
- Beheersbare kosten (~$0.01 per analyse)
