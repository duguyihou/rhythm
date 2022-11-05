export enum Filter {
  topclick = 'Top click',
  topvote = 'Top vote',
  lastclick = 'Recently click',
  lastchange = 'Recently change',
}

export type FilteredStationListProps = {
  filter: `${Filter}`
  offset?: number
}
