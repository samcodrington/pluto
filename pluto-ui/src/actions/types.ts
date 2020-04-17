export interface ActionFunc {
  (): Action;
}
export interface Action {
  type: string;
  [prop: string]: any;
}
