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
  ux?: number;
  dx?: number;
  ci?: number;
  co?: number;
  showDotux?: boolean;
  showDotdx?: boolean;
  showDotci?: boolean;
  showDotco?: boolean;
  tooltip?: number;
  explanation?: number;
  issue?: number;
  resolution?: number;
  yaxis?: number;
  uxDiff?: number;
  dxDiff?: number;
  ciDiff?: number;
  coDiff?: number;
}

export interface SlideDocument extends SlideData {
  id: string;
}

export interface PresentationData {
  visibleIds: string[];
  openModal?: string;
  scrollIntoView?: string;
}
