export type StationProps = {
  changeuuid: string
  stationuuid: string
  serveruuid: string | null
  name: string
  url: string
  url_resolved: string
  homepage: string
  favicon: string
  tags: string
  country: string
  countrycode: string
  iso_3166_2: string | null
  state: string
  language: string
  languagecodes: string
  votes: number
  lastchangetime: string
  lastchangetime_iso8601: string
  codec: string
  bitrate: number
  hls: number
  lastcheckok: number
  lastchecktime: string
  lastchecktime_iso8601: string
  lastcheckoktime: string
  lastcheckoktime_iso8601: string
  lastlocalchecktime: string
  lastlocalchecktime_iso8601: string | null
  clicktimestamp: string
  clicktimestamp_iso8601: string
  clickcount: number
  clicktrend: number
  ssl_error: number
  geo_lat: string | null
  geo_long: string | null
  has_extended_info: boolean
}

export enum Filter {
  topclick = 'Top click',
  topvote = 'Top vote',
  lastclick = 'Recently click',
  lastchange = 'Recently change',
}

export type StationListProps = {
  filter: `${Filter}`
}
