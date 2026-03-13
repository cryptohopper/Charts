export interface CandleData {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

// Realistic BTC/USD data matching the Figma design range (~9600–13600)
export const generateCandleData = (): CandleData[] => {
  const data: CandleData[] = [];
  const startDate = new Date(2020, 7, 17); // Aug 17

  // Simulate price action matching the design: starts mid-range, drops, rallies, drops again
  const priceSequence = [
    // Aug 17 - Aug 31 (15 days): sideways around 11500-11800
    11600, 11900, 11850, 11500, 11400, 11350, 11450, 11600, 11550, 11650,
    11700, 11850, 11800, 11750, 11600,
    // Sep 1 - Sep 14 (14 days): drop to 10200
    11400, 11100, 10800, 10500, 10900, 10700, 10400, 10200, 10350, 10500,
    10600, 10550, 10700, 10850,
    // Sep 15 - Sep 30 (16 days): big rally to 13400
    11200, 11600, 12000, 12400, 12200, 12500, 12800, 13100, 13400, 13200,
    13000, 13200, 13400, 13600, 13500, 13200,
    // Oct 1 - Oct 12 (12 days): sell off
    12800, 12200, 11600, 11000, 10400, 10300, 10200, 10100, 10300, 10500,
    10700, 10600,
    // Oct 13 - Oct 22 (10 days): recovery
    10800, 10750, 11000, 10900, 11100, 10950, 11200, 10900, 11100, 10654,
  ];

  for (let i = 0; i < priceSequence.length; i++) {
    const date = new Date(startDate);
    date.setDate(date.getDate() + i);

    const close = priceSequence[i];
    const prevClose = i > 0 ? priceSequence[i - 1] : close + 50;
    const open = prevClose;
    const range = Math.abs(close - open);
    const wickExtra = range * (0.15 + Math.random() * 0.4);

    const high = Math.max(open, close) + wickExtra + Math.random() * 50;
    const low = Math.min(open, close) - wickExtra - Math.random() * 50;
    const volume = 5000 + Math.random() * 15000;

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const day = date.getDate();
    const month = monthNames[date.getMonth()];

    // Show month name on the 1st, otherwise show day number
    const label = day === 1 ? month : String(day);

    data.push({
      date: label,
      open: Math.round(open * 100) / 100,
      high: Math.round(high * 100) / 100,
      low: Math.round(low * 100) / 100,
      close: Math.round(close * 100) / 100,
      volume: Math.round(volume),
    });
  }

  return data;
};
