import type {
  ISeriesPrimitive,
  SeriesAttachedParameter,
  IPrimitivePaneView,
  Time,
  SeriesType,
  IChartApiBase,
  ISeriesApi,
} from 'lightweight-charts';
import type { DetectedPattern } from '@hopcharts/core';
import type { RendererData } from './types.js';

/**
 * Abstract base for AI overlay primitives. Handles the ISeriesPrimitive<Time>
 * lifecycle (attached/detached/paneViews/updateAllViews) so subclasses only
 * need to implement createPaneView() and optionally filterPatterns().
 */
export abstract class BaseAIPrimitive implements ISeriesPrimitive<Time> {
  protected _patterns: DetectedPattern[] = [];
  protected _chart: IChartApiBase<Time> | null = null;
  protected _series: ISeriesApi<SeriesType, Time> | null = null;
  protected _requestUpdate: (() => void) | null = null;
  protected _highlightedId: string | null = null;
  private _paneViews: IPrimitivePaneView[] = [];

  attached({ chart, series, requestUpdate }: SeriesAttachedParameter<Time, SeriesType>): void {
    this._chart = chart;
    this._series = series;
    this._requestUpdate = requestUpdate;
  }

  detached(): void {
    this._chart = null;
    this._series = null;
    this._requestUpdate = null;
    this._paneViews = [];
  }

  updatePatterns(patterns: DetectedPattern[]): void {
    this._patterns = this.filterPatterns(patterns);
    this._rebuildViews();
    this._requestUpdate?.();
  }

  setHighlightedId(sourceId: string | null): void {
    this._highlightedId = sourceId;
    this._rebuildViews();
    this._requestUpdate?.();
  }

  updateAllViews(): void {
    this._rebuildViews();
  }

  paneViews(): readonly IPrimitivePaneView[] {
    return this._paneViews;
  }

  /** Override to filter patterns before storing (e.g., only those with projections). */
  protected filterPatterns(patterns: DetectedPattern[]): DetectedPattern[] {
    return patterns;
  }

  /** Subclasses provide their specific pane view. */
  protected abstract createPaneView(data: RendererData): IPrimitivePaneView;

  protected _rebuildViews(): void {
    if (!this._chart || !this._series || this._patterns.length === 0) {
      this._paneViews = [];
      return;
    }
    this._paneViews = [
      this.createPaneView({
        patterns: this._patterns,
        chart: this._chart,
        series: this._series,
        highlightedId: this._highlightedId,
      }),
    ];
  }
}
