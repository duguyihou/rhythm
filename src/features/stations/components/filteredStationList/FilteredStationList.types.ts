export enum Filter {
  topclick = 'Top click',
  topvote = 'Top vote',
  lastclick = 'Recently click',
  lastchange = 'Recently change',
  country = 'Country',
}

export type FilteredStationListProps = {
  filter: `${Filter}`
  offset?: number
}
