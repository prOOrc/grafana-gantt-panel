import { LegendDisplayMode, LegendPlacement } from '@grafana/ui';

type SortBy = 'text' | 'startTime';
type SortOrder = 'asc' | 'desc';

export interface GanttOptions {
  textField?: string;
  startField?: string;
  endField?: string;
  groupByField?: string;
  labelFields: string[];
  sortBy: SortBy;
  sortOrder: SortOrder;

  colors: Record<string, string>;
  legendMode: LegendDisplayMode;
  legendPlacement: LegendPlacement;

  experiments: {
    enabled: boolean;
    lockToExtents: boolean;
    relativeXAxis: boolean;
  };
}
