export enum SlideType {
  ACTION = 'ACTION',
  IMPACT = 'IMPACT',
  ISSUE = 'ISSUE',
  RESULTS = 'RESULTS',
}

export enum RenderTo {
  MODAL = 'MODAL',
  DIV_WITH_ID = 'DIV_WITH_ID',
}

export interface SlideData {
  name: string;
  type: SlideType;
  time: number;
  height: number;
  ux: number;
  dx: number;
  ci: number;
  tooltip: number;
}

export interface SlideDocument extends SlideData {
  id: string;
}
