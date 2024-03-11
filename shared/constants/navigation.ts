export enum ENavigationVisibleItems {
  '#app',
  '#projects',
  '#about',
  '#contact'
}

export type TNavigationVisibleItemsCondition = keyof typeof ENavigationVisibleItems
