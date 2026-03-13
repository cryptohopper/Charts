# HopCharts — AI Analyze: Product Plan

**Versie:** 0.1 (Draft)
**Datum:** 10 maart 2026
**Auteur:** Hoppie / CryptoHopper Team

---

## 1. Visie & Positionering

### Het probleem
De meeste crypto-traders — van beginner tot gevorderd — missen de tijd, kennis of discipline om een chart consistent en grondig te analyseren. Ze kijken naar candles, zien "iets", maar missen het totaalplaatje: de trend, de context, de bevestigingen.

TradingView biedt uitstekende tooling, maar geen **interpretatie**. De gebruiker moet zelf weten wat ze zoeken. Dat is precies de kloof die HopCharts AI Analyze vult.

### De propositie
Eén klik op "AI Analyze" en de gebruiker krijgt een **volledige, professionele technische analyse** van de chart die ze bekijken — visueel (lijnen, zones, patronen op de chart) én tekstueel (uitleg in begrijpelijke taal). Alsof je een ervaren technisch analist over je schouder hebt staan.

### Branding-opties
- **charts.cryptohopper.com** — eenvoudig, autoritair, direct gekoppeld aan het merk
- **HopCharts** — speels, past bij Hopper-brand, goed als standalone product
- Suggestie: gebruik `charts.cryptohopper.com` als domein, "HopCharts" als productnaam

---

## 2. Scope: Wat Analyseert de AI?

De analyse moet het volledige arsenaal van een professionele technisch analist nabootsen. Op basis van de beschikbare vakliteratuur (Pring, Elder, Nison, Murphy, Grimes, Wyckoff, Bulkowski, Carney, Boroden, Patel e.a.) identificeren we **7 analyse-lagen** die elk een onmisbaar onderdeel vormen van een complete chart-beoordeling.

### Laag 1: Trend-identificatie (de basis van alles)

> *"The single most important concept in technical analysis is trend."* — Martin Pring

**Wat de AI moet bepalen:**

- **Primaire trend** — bullish, bearish, of zijwaarts (range-bound)
- **Trendsterkte** — sterk trending vs. zwak/uitgeput
- **Trendpositie** — vroeg, midden, of laat in de trend (cruciaal voor risico-inschatting)
- **Multi-timeframe context** — de trend op het hogere timeframe geeft context. Als de gebruiker 1H candles bekijkt, moet de AI ook de 4H- en dagtrend meewegen

**Methodes:**

| Methode | Toepassing | Bron |
|---------|-----------|------|
| Higher highs / higher lows (en omgekeerd) | Primaire trendrichting | Murphy, Pring |
| Trendlijnen | Dynamische support/resistance, hoek van de trend | Wyckoff, Elder |
| Moving Averages (20, 50, 200 EMA/SMA) | Trendrichting + trendsterkte (afstand prijs tot MA) | Pring, Elder |
| ADX (Average Directional Index) | Objectieve meting trendsterkte (>25 = trending) | Wilder |

**Output:**
De AI tekent trendlijnen op de chart en geeft een duidelijk oordeel: *"BTC/USD bevindt zich in een opwaartse trend op het uur-timeframe, bevestigd door hogere toppen en hogere bodems. De 200 EMA op het dag-timeframe bevestigt een bullish bias op de langere termijn."*

---

### Laag 2: Support & Resistance

> *"The basic building blocks on which price patterns are based are support and resistance levels."* — Murphy

**Wat de AI moet identificeren:**

- **Horizontale S/R-niveaus** — historische pieken en dalen waar prijs eerder draaide
- **Ronde getallen** — psychologische niveaus ($50.000, $60.000 etc.) die als magneet werken
- **Rolwisseling** — voormalige resistance die nu support is (en omgekeerd); dit is een van de krachtigste signalen
- **Sterkte-classificatie** — gebaseerd op:
  - Aantal keren dat het niveau is aangeraakt
  - Volume op dat niveau
  - Recentheid van de aanraking
  - Hoe lang het niveau stand heeft gehouden

**Methodes:**

| Methode | Toepassing | Bron |
|---------|-----------|------|
| Swing highs / swing lows | Identificatie horizontale niveaus | Murphy, Elder |
| Volume profile | Niveaus met hoog handelsvolume = sterkere S/R | Wyckoff, TPO |
| Pivot points | Berekende intraday-niveaus | Carter |
| Fibonacci retracements (0.382, 0.5, 0.618, 0.786) | Waarschijnlijke support-/resistance-zones binnen een trend | Boroden, Carney |

**Output:**
Horizontale lijnen op de chart met labels en sterkte-indicatie. *"Sterke support rond $62.400 (3x getest, hoog volume). Eerste resistance bij $65.800 (voormalige support, nu weerstand). Psychologisch level $70.000 als volgende grote horde."*

---

### Laag 3: Candlestick Patterns

> *"Candlestick charting can often make it easier to spot certain technical phenomena not readily apparent with a quick glance at a bar chart."* — Pring

**Wat de AI moet herkennen:**

**Reversal patterns (enkelvoudig):**
- Hammer / Hanging Man
- Inverted Hammer / Shooting Star
- Doji (standaard, dragonfly, gravestone, long-legged)
- Kangaroo Tail (lange staart, kort lichaam — krachtig reversal-signaal)
- Marubozu (opening = high of low, sterk momentum)

**Reversal patterns (meervoudig):**
- Engulfing (bullish/bearish)
- Harami (bullish/bearish)
- Morning Star / Evening Star
- Three White Soldiers / Three Black Crows
- Tweezer Tops / Bottoms

**Continuation patterns:**
- Rising/Falling Three Methods
- Windows (gaps)

**Cruciale regel:**
Candlestick patterns zijn **alleen significant op relevante locaties** — bij support/resistance, bij trendlijnen, bij Fibonacci-niveaus. Een hammer midden in het niets zegt weinig. Een hammer exact op een major support-level is een krachtig signaal. De AI moet dit contextueel beoordelen.

**Output:**
Markering op de chart met icoon/highlight. *"Bullish engulfing pattern gedetecteerd op de $62.400 support zone — dit is een sterk reversal-signaal, versterkt door de locatie op een 3x geteste support."*

---

### Laag 4: Chart Patterns (grotere formaties)

> *"We do not trade patterns in markets — we trade the underlying imbalances that create those patterns."* — Adam Grimes

**Wat de AI moet herkennen:**

**Reversal patterns:**
- Head & Shoulders (top en inverse)
- Double Top / Double Bottom ("Wammies" en "Moolahs")
- Triple Top / Bottom
- Rounding Top / Bottom
- V-reversals (spike reversals)

**Continuation patterns:**
- Symmetrical / Ascending / Descending Triangles
- Bull / Bear Flags
- Pennants
- Rectangles (trading ranges)
- Cup & Handle

**Wedges:**
- Rising Wedge (bearish)
- Falling Wedge (bullish)

**Per patroon moet de AI bepalen:**
- Completeness — is het patroon voltooid of nog in vorming?
- Neckline / breakout-level — waar ligt het kritische niveau?
- Prijsdoel — berekend via de klassieke meetregel (hoogte patroon geprojecteerd vanaf breakout)
- Volume-bevestiging — neemt volume af tijdens formatie en toe bij breakout? (Wyckoff)
- Betrouwbaarheid — op basis van Bulkowski's statistische data over slaagpercentages

**Output:**
Het patroon wordt visueel gemarkeerd (omtrek, neckline, projectie). *"Potentieel inverse head & shoulders in vorming. Neckline op $64.200. Bij breakout is het prijsdoel $67.800 (hoogte: $3.600). Volume neemt af in de rechter schouder — klassiek bevestigend."*

---

### Laag 5: Technische Indicatoren

> *"Momentum indicators can warn of latent strengths or weaknesses, often well before the final high or low has been reached."* — Pring

**Verplichte indicatoren in de analyse:**

**Momentum/Oscillatoren:**

| Indicator | Wat het meet | Sleutel-signalen |
|-----------|-------------|-------------------|
| RSI (14) | Overbought/oversold momentum | >70 overbought, <30 oversold, divergenties |
| MACD (12, 26, 9) | Trend-momentum + richting | Signal-line crossovers, histogrambewegingen, divergenties |
| Stochastic (14, 3) | Momentum vs. recent bereik | Crossovers in extreme zones |

**Trend-indicatoren:**

| Indicator | Wat het meet | Sleutel-signalen |
|-----------|-------------|-------------------|
| EMA 20 / 50 / 200 | Kortetermijn / medium / langetermijn trend | Golden/death cross, prijs vs. MA-positie |
| Bollinger Bands (20, 2) | Volatiliteit + mean reversion | Squeeze (lage vol → uitbraak), walks along band |
| Ichimoku Cloud | All-in-one trend/S&R systeem | Prijs vs. cloud, Tenkan/Kijun cross, toekomstige cloud |
| ADX (14) | Trendsterkte (los van richting) | >25 trending, <20 range |

**Volume-indicatoren:**

| Indicator | Wat het meet | Sleutel-signalen |
|-----------|-------------|-------------------|
| Volume (absoluut) | Handelsactiviteit | Bevestiging van breakouts, climax volume |
| OBV (On-Balance Volume) | Cumulatieve koop-/verkoopdruk | Divergenties met prijs |
| Volume Profile (VPVR) | Volume per prijsniveau | High Volume Nodes = S/R, Low Volume Nodes = snelle doorgang |

**Cruciaal concept — Divergenties:**
Dit is een van de krachtigste signalen in technische analyse. De AI moet actief zoeken naar:
- **Bullish divergentie** — prijs maakt lagere low, indicator maakt hogere low → verzwakkend neerwaarts momentum
- **Bearish divergentie** — prijs maakt hogere high, indicator maakt lagere high → verzwakkend opwaarts momentum
- **Hidden divergenties** — voor trend-continuatie

Divergenties op RSI en MACD zijn het meest betrouwbaar en moeten prominent worden uitgelicht.

**Output:**
Indicatoren worden (optioneel) op de chart getoond. De analyse vermeldt altijd de status: *"RSI op 72 — overbought territory. Bearish divergentie zichtbaar: prijs maakt hogere top, RSI maakt lagere top. Dit waarschuwt voor een mogelijke correctie."*

---

### Laag 6: Volume & Marktstructuur (Wyckoff)

> *"Volume is the fuel that drives the market."* — Wyckoff

**Wat de AI moet beoordelen:**

- **Volume-trend** — neemt volume toe of af met de prijstrend? (afnemend volume in een uptrend = verzwakking)
- **Volume op breakouts** — een breakout zonder volume is verdacht
- **Climax volume** — extreem hoge volume na een lange trend duidt op uitputting (selling climax of buying climax)
- **Accumulatie vs. distributie** — hoog volume met weinig prijsbeweging na een daling = accumulatie (bullish). Hoog volume met weinig beweging na een stijging = distributie (bearish)

**Wyckoff-fasen:**
- **Phase A** — Stopping van de vorige trend (preliminary support/supply, selling/buying climax)
- **Phase B** — Building the cause (trading range, tests van S/R)
- **Phase C** — Test (spring/upthrust — de "shakeout" die de zwakke handen eruit gooit)
- **Phase D** — Trend binnen de range (signs of strength/weakness)
- **Phase E** — Trend buiten de range (markup/markdown)

De AI hoeft niet altijd een Wyckoff-fase te labelen, maar moet wél de volume-prijs-relatie beoordelen.

**Output:**
*"Volume neemt af tijdens deze rally — minder kopers ondersteunen de stijging. De recente daling naar $62.400 ging gepaard met bovengemiddeld volume maar de prijs herstelde snel — dit lijkt op accumulatie."*

---

### Laag 7: Samenvatting & Conclusie

**Dit is waar de AI echte waarde toevoegt:** het combineren van alle lagen tot een coherent verhaal.

**De samenvatting moet bevatten:**

1. **Bias** — Bullish, bearish, of neutraal (met nuance: "mildly bullish", "cautiously bearish")
2. **Key levels** — De 2-3 belangrijkste niveaus om in de gaten te houden
3. **Scenario's** — Wat gebeurt er als prijs boven/onder een bepaald level komt?
   - *Bullish scenario:* "Bij een break boven $65.800 met volume opent de weg naar $70.000"
   - *Bearish scenario:* "Verlies van $62.400 support zou de weg openen richting $58.000"
4. **Risico-factoren** — Wat kan het beeld ontkrachten?
5. **Confluence-score** — Hoeveel signalen wijzen dezelfde richting op?

---

## 3. Wat Mag er NIET Ontbreken

Onderstaande checklist definieert de minimale kwaliteitsstandaard voor elke AI-analyse:

### Must-haves (elke analyse)

- [ ] **Trend-beoordeling** met richting en sterkte
- [ ] **Minimaal 2 support-niveaus en 2 resistance-niveaus** geïdentificeerd
- [ ] **Volume-analyse** — is volume bevestigend of divergerend?
- [ ] **Minstens 2 indicatoren** besproken (RSI + MACD als baseline)
- [ ] **Divergentie-check** — expliciet vermelden of er divergenties zijn (of niet)
- [ ] **Multi-timeframe context** — hogere timeframe trend vermelden
- [ ] **Candlestick patterns** op relevante locaties benoemen (als aanwezig)
- [ ] **Duidelijke bias** met onderbouwing
- [ ] **Scenario's** (bullish/bearish) met concrete prijsniveaus
- [ ] **Disclaimer** — "Dit is geen financieel advies"

### Should-haves (als relevant)

- [ ] Chart patterns (als er een herkenbaar patroon aanwezig is)
- [ ] Fibonacci-niveaus (bij duidelijke swing high/low)
- [ ] Wyckoff-fase-indicatie (bij duidelijke accumulatie/distributie)
- [ ] Ichimoku-status (als toegevoegd aan chart)
- [ ] Bollinger Band squeeze/walk (als relevant voor volatiliteitscontext)

### Must-NOT-haves

- **Geen koopsignalen** — de AI geeft nooit een "koop nu" of "verkoop nu" signaal
- **Geen prijsvoorspellingen met tijdslijn** — "BTC gaat volgende week naar $80k" mag niet
- **Geen overmoed** — altijd nuance, altijd scenario's, altijd "mogelijkheid" niet "zekerheid"
- **Geen verwarrend jargon zonder uitleg** — als de AI "bearish divergentie" zegt, moet er een korte uitleg bij staan voor beginners

---

## 4. User Experience

### De Flow

```
Gebruiker bekijkt BTC/USD 1H chart (30 dagen)
        │
        ▼
Klikt op "✨ AI Analyze" knop (prominent in toolbar)
        │
        ▼
Loading state (2-5 sec): shimmer/skeleton op chart + "Analyzing..."
        │
        ▼
Chart wordt verrijkt:
  ├── Trendlijnen verschijnen (geanimeerd)
  ├── S/R zones worden gemarkeerd (semi-transparante banden)
  ├── Patronen worden omcirkeld/gehighlight
  └── Indicator-overlays verschijnen (optioneel)
        │
        ▼
Analyse-panel opent (slide-in van rechts of bottom sheet):
  ├── Samenvatting met bias-indicator (bullish/bearish meter)
  ├── Key levels overzicht
  ├── Per-laag uitleg (inklapbare secties)
  └── "Hoe lees ik dit?" tooltip voor beginners
```

### Visuele Elementen op de Chart

| Element | Visueel | Interactie |
|---------|---------|------------|
| Trendlijnen | Blauwe/rode gestippelde lijnen | Hover → tooltip met uitleg |
| S/R zones | Semi-transparante horizontale banden (groen=support, rood=resistance) | Hover → sterkte-score + uitleg |
| Chart patterns | Gestippelde omtrek + projectielijn | Hover → patroon naam + slagingskans |
| Candlestick signals | Klein icoon boven/onder candle | Hover → patroon uitleg |
| Fibonacci levels | Dunne horizontale lijnen met ratio-labels | Hover → uitleg |
| Divergenties | Diagonale lijn op indicator + prijs | Hover → "bearish divergentie" uitleg |

### Analyse-panel Design

```
┌─────────────────────────────────────────────┐
│  AI Analyse — BTC/USD (1H)                  │
│  ─────────────────────────────────────────── │
│                                             │
│  🟢 MILDLY BULLISH                         │
│  Confluence: 5/7 signalen bullish           │
│                                             │
│  ─── Key Levels ───                         │
│  Resistance: $65,800 ■■■■■ (sterk)         │
│  Resistance: $70,000 ■■■ (psychologisch)   │
│  Support:    $62,400 ■■■■■■ (zeer sterk)   │
│  Support:    $60,000 ■■■ (psychologisch)   │
│                                             │
│  ─── Scenario's ───                         │
│  ▲ Bullish: Break boven $65,800 → target   │
│    $70,000 (cup & handle projectie)         │
│  ▼ Bearish: Verlies $62,400 → target       │
│    $58,000 (dubbele bodem steun)            │
│                                             │
│  ▼ Trend (uitklapbaar)                      │
│  ▼ Support & Resistance                     │
│  ▼ Patronen                                 │
│  ▼ Indicatoren                              │
│  ▼ Volume                                   │
│                                             │
│  ⚠️ Dit is geen financieel advies.          │
│  Doe altijd je eigen onderzoek.             │
└─────────────────────────────────────────────┘
```

---

## 5. Analyse-criteria & Scoring

### Confluence-systeem

De AI beoordeelt per signaal of het bullish, bearish, of neutraal is en telt de confluence:

| Signaal | Bullish | Bearish | Neutraal |
|---------|---------|---------|----------|
| Primaire trend | Uptrend | Downtrend | Zijwaarts |
| Hogere TF trend | Uptrend | Downtrend | Zijwaarts |
| Prijs vs. key MA's | Boven 20+50+200 | Onder 20+50+200 | Gemengd |
| RSI | <30 of bullish div | >70 of bearish div | 40-60 |
| MACD | Bullish cross/div | Bearish cross/div | Neutraal |
| Volume | Stijgend bij up | Stijgend bij down | Laag/onbepaald |
| Candlestick | Bullish patroon op S | Bearish patroon op R | Geen relevant patroon |
| Chart pattern | Bullish breakout | Bearish breakout | In vorming |
| S/R context | Bounce van support | Rejectie bij resistance | Midden range |

**Scoring:**
- 7-9 signalen gelijklijnend → **Sterk bullish/bearish**
- 5-6 signalen → **Mildly bullish/bearish**
- 3-4 signalen → **Neutraal met lichte neiging**
- Evenwicht → **Neutraal / afwachten**

---

## 6. Crypto-specifieke Overwegingen

Crypto-spotmarkten hebben eigen karakteristieken die de AI moet meewegen:

### 24/7 markt
- Geen opening/closing gaps (behalve bij CME futures)
- Volume-patronen volgen geen beurs-uren maar globale wake/sleep cycles
- Weekendvolume is typisch lager → breakouts op zondag zijn minder betrouwbaar

### Hoge volatiliteit
- Standaard Bollinger Band settings (20, 2) werken maar wick-noise is groter
- RSI bereikt vaker extreme waarden → in sterke trends kan RSI lang >70 of <30 blijven
- De AI moet onderscheid maken tussen "overbought in een uptrend" (kan lang doorgaan) en "overbought met divergentie" (sterker signaal)

### Whale-activiteit & liquiditeit
- Plotselinge volumepieken zonder duidelijke nieuwsaanleiding kunnen whale orders zijn
- Thin orderbooks kunnen false breakouts versterken
- De AI moet extra kritisch zijn op breakouts met laag volume

### Correlatie met Bitcoin
- Altcoins correleren sterk met BTC — een altcoin-analyse zonder BTC-context is incompleet
- De AI moet (bij altcoins) de BTC-trend als extra signaal meewegen

### Funding rates & sentiment (toekomstige uitbreiding)
- Niet in scope voor v1, maar funding rates (perpetual futures) zijn een krachtig sentiment-signaal
- Extreme funding = potentiële contrarian indicator

---

## 7. Taalgebruik & Toon

### Doelgroep-niveaus

De analyse moet leesbaar zijn voor drie niveaus:

| Niveau | Voorbeeld |
|--------|-----------|
| **Beginner** | "De prijs stuitert van een belangrijk steunniveau — dit betekent dat kopers hier actief zijn." |
| **Gevorderd** | "Bullish engulfing op de $62.400 support zone met stijgend volume bevestigt koperinteresse." |
| **Expert** | De ruwe data: RSI(14)=34, MACD histogram positief wordend, OBV stijgend |

**Oplossing:** De samenvatting is geschreven voor beginners/gevorderden. Elke uitklapbare sectie bevat meer technisch detail. Een "Data" tab toont de ruwe indicatorwaarden.

### Taalregels

- Schrijf in de **taal van de gebruiker** (detecteer UI-taal of bied keuze)
- Gebruik **actieve, directe zinnen**: "De trend is opwaarts" niet "Er kan worden geobserveerd dat..."
- Vermijd absolute termen: gebruik "suggereert", "wijst op", "waarschuwt voor" — niet "bewijst" of "garandeert"
- Leg jargon uit bij eerste gebruik
- Houd de samenvatting onder 150 woorden, detail-secties onder 100 woorden elk

---

## 8. Technische Architectuur (High Level)

### Data-input voor de AI

```
{
  pair: "BTC/USD",
  exchange: "binance",
  timeframe: "1h",
  candles: [...],          // OHLCV data (zichtbare range + buffer)
  higher_tf_candles: [...], // 4H of Daily candles voor context
  user_indicators: [...]   // Welke indicators de user al aan heeft staan
}
```

### Verwerkingsopties

**Optie A: Server-side AI Model (aanbevolen voor v1)**
- CryptoHopper backend ontvangt candle data
- Pre-processing: bereken alle indicators, detecteer patterns algoritmisch
- LLM (Claude/GPT) ontvangt de berekende data + prompt met analyse-framework
- LLM genereert analyse-tekst + gestructureerde overlay-data
- Response naar frontend: tekst + coördinaten voor visuele overlays

**Optie B: Hybrid (toekomstig)**
- Algoritmische pattern detection (deterministic, snel, goedkoop)
- LLM alleen voor tekstgeneratie en conclusie-synthese
- Vermindert LLM-kosten en latency

**Optie C: Fine-tuned model (lange termijn)**
- Custom model getraind op chart-analyse data
- Hogere kwaliteit, lagere inference-kosten per call
- Vereist significante investering in training data

### Response-structuur

```json
{
  "summary": {
    "bias": "mildly_bullish",
    "confluence_score": 5,
    "confluence_total": 7,
    "headline": "Mildly bullish — support houdt stand, momentum herstellend",
    "text": "..."
  },
  "overlays": {
    "trendlines": [
      { "type": "uptrend", "points": [[ts1, price1], [ts2, price2]], "confidence": 0.85 }
    ],
    "support_resistance": [
      { "price": 62400, "type": "support", "strength": 5, "label": "3x getest" }
    ],
    "patterns": [
      { "type": "inverse_head_and_shoulders", "status": "forming", "points": [...], "target": 67800 }
    ],
    "candlestick_signals": [
      { "timestamp": "...", "type": "bullish_engulfing", "significance": "high" }
    ],
    "fibonacci": [
      { "high": 65800, "low": 58000, "levels": [0.236, 0.382, 0.5, 0.618, 0.786] }
    ]
  },
  "sections": {
    "trend": { "title": "Trend", "text": "...", "signals": [...] },
    "support_resistance": { "title": "Support & Resistance", "text": "...", "signals": [...] },
    "patterns": { "title": "Patronen", "text": "...", "signals": [...] },
    "indicators": { "title": "Indicatoren", "text": "...", "signals": [...] },
    "volume": { "title": "Volume", "text": "...", "signals": [...] }
  },
  "scenarios": {
    "bullish": { "condition": "Break boven $65,800", "target": "$70,000", "text": "..." },
    "bearish": { "condition": "Verlies $62,400", "target": "$58,000", "text": "..." }
  },
  "disclaimer": "Dit is geen financieel advies. Doe altijd je eigen onderzoek."
}
```

---

## 9. Fasering

### Fase 1: MVP (4-6 weken)

**Scope:** Basisanalyse met de hoogste ROI-onderdelen.

- Trend-identificatie (MA's + higher highs/lows)
- 3 key support & 3 key resistance niveaus
- RSI + MACD status (incl. divergentie-check)
- Volume-trend beoordeling
- Tekstuele samenvatting met bias
- Simpele visuele overlays (horizontale S/R lijnen, MA's)
- Analyse-panel met samenvatting

**Niet in MVP:** chart patterns, candlestick patterns, Fibonacci, Ichimoku, Wyckoff, animaties.

### Fase 2: Pattern Recognition (4-6 weken)

- Candlestick pattern detection (top 10 meest betrouwbare)
- Chart pattern detection (head & shoulders, double top/bottom, triangles, flags)
- Pattern-visualisatie op chart (omtrek + projectie)
- Fibonacci retracements
- Confluence-scoring systeem

### Fase 3: Advanced & Polish (4-6 weken)

- Ichimoku Cloud analyse
- Bollinger Bands squeeze-detectie
- Volume Profile (VPVR)
- Wyckoff fase-detectie (accumulatie/distributie)
- Multi-timeframe dashboard
- Altcoin-BTC correlatie-check
- Animaties en verbeterde UX
- Meertalige output

### Fase 4: Personalisatie & Scale (doorlopend)

- Analyse-voorkeuren per gebruiker (welke lagen wil je zien?)
- Historische analyses opslaan en vergelijken
- Alert op pattern-detectie ("Laat me weten als er een H&S vormt op BTC/USD 4H")
- Batch-analyse (meerdere paren tegelijk)
- API-toegang voor bots

---

## 10. Monetisatie

| Tier | AI Analyze | Prijs (suggestie) |
|------|-----------|-------------------|
| Free | 3 analyses per dag, alleen samenvatting (geen chart overlays) | €0 |
| Pro | Onbeperkt, volledige analyse + overlays, alle lagen | Onderdeel Pro subscription |
| AI+ | Pro + alerts, batch-analyse, API, historische vergelijking | Premium add-on |

---

## 11. Kwaliteitswaarborgen

### Hoe meten we of de AI goed analyseert?

1. **Expert review** — Laat 3-5 ervaren traders wekelijks 10 analyses beoordelen op correctheid
2. **Backtest-validatie** — Was de bias achteraf correct? (niet als absoluut oordeel, maar als trend)
3. **Pattern accuracy** — Detecteert de AI patronen die er echt zijn? (precision/recall meten)
4. **User feedback** — Thumbs up/down op elke analyse + optioneel commentaar
5. **A/B testing** — Test verschillende analyse-frameworks en meet user engagement

### Risico's

| Risico | Mitigatie |
|--------|----------|
| AI geeft "advies" dat als financieel advies wordt gezien | Juridische disclaimer, nooit "koop/verkoop", altijd scenario's |
| Hallucinaties — AI ziet patronen die er niet zijn | Algoritmische pre-check + confidence thresholds |
| Kosten per analyse te hoog (LLM tokens) | Hybrid model (algo + LLM), caching, batch processing |
| Gebruikers vertrouwen blind op AI | Educatie-component, altijd scenario's tonen, track record transparant maken |
| Latency te hoog (>5 sec) | Pre-compute indicatoren, streamen van analyse, skeleton loading |

---

## 12. Bronvermelding & Theoretisch Fundament

Dit productplan is gebaseerd op inzichten uit de volgende werken uit de CryptoHopper investment_advisor library:

- **Martin Pring** — *Technical Analysis Explained* (trend, momentum, candlesticks)
- **John Murphy** — *Technical Analysis of the Financial Markets* (S/R, trendlines, chart patterns)
- **Alexander Elder** — *Come Into My Trading Room* / *Trading for a Living* (triple screen, indicators)
- **Steve Nison** — *Japanese Candlestick Charting Techniques* (candlestick taxonomie)
- **Thomas Bulkowski** — *Encyclopedia of Chart Patterns* (statistische betrouwbaarheid patronen)
- **David Weis / Wyckoff** — *Trades About to Happen* (volume-analyse, accumulatie/distributie)
- **Rubén Villahermosa** — *The Wyckoff Methodology in Depth* (Wyckoff fasen, structuuranalyse)
- **Adam Grimes** — *The Art and Science of Technical Analysis* (marktstructuur, imbalances)
- **Scott Carney** — *Harmonic Trading* (Fibonacci, harmonische patronen)
- **Carolyn Boroden** — *Fibonacci Trading* (Fibonacci tijd en prijs)
- **Manesh Patel** — *Trading with Ichimoku Clouds* (Ichimoku-systeem)
- **Perry Kaufman** — *Trading Systems and Methods* (volume-indicatoren, Bollinger Bands)
- **Walter Peters / Alex Nekritin** — *Naked Forex* (catalysts, kangaroo tails, wammies)
- **Burniske & Tatar** — *Cryptoassets* (crypto-specifieke marktkenmerken)

---

*Dit document is een levend product plan. Versie 0.1 dient als basis voor verdere discussie en verfijning.*
