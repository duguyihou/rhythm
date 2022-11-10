import clsx from 'clsx'
import Link from 'next/link'

import { Spinner } from 'components/elements'
import { useFilteredStationList } from 'features/stations/hooks'

import { StationItem } from '../stationItem'
import { Filter, FilteredStationListProps } from './FilteredStationList.types'

const FilteredStationList = (
  filteredStationListProps: FilteredStationListProps
) => {
  const { filter, offset = 10 } = filteredStationListProps
  // TODO: extract a util function with generic type
  const filterVar = Object.keys(Filter)[
    Object.values(Filter).indexOf(filter as Filter)
  ] as keyof typeof Filter

  const variables = { filter: filterVar, offset }
  const { data, isLoading } = useFilteredStationList(variables)

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section
        className={clsx('flex flex-row items-center justify-between', 'mx-2')}
      >
        <h1
          className={clsx('text-xl text-slate-900 font-bold p-1', 'uppercase')}
        >
          {filter}
        </h1>
        <Link href={`./browse/${filterVar}`}>
          <div className="cursor-pointer">See All</div>
        </Link>
      </section>
      <div className={clsx('grid grid-flow-row gap-4 grid-cols-5')}>
        {data?.map((station) => (
          <StationItem key={station.stationuuid} {...station} />
        ))}
      </div>
    </>
  )
}

export default FilteredStationList
