export enum ENavigationVisibleItems {
  '#home',
  '#projects',
  '#me',
  '#contact'
}

export type TNavigationVisibleItemsCondition = keyof typeof ENavigationVisibleItems
