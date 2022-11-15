import clsx from 'clsx'
import Link from 'next/link'

import { Spinner } from 'components/elements'
import { useFilteredStationList } from 'features/stations/hooks'

import { StationItem } from '../stationItem'
import { Filter, FilteredStationListProps } from './FilteredStationList.types'

const FilteredStationList = (
  filteredStationListProps: FilteredStationListProps
) => {
  const { filter } = filteredStationListProps
  // TODO: extract a util function with generic type
  const filterVar = Object.keys(Filter)[
    Object.values(Filter).indexOf(filter as Filter)
  ] as keyof typeof Filter

  const variables = { filter: filterVar }
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
          className={clsx(
            'text-base text-slate-900 font-bold py-1',
            'uppercase'
          )}
        >
          {filter}
        </h1>
        <Link href={`./browse`}>
          <div className="cursor-pointer text-sm hover:underline">See All</div>
        </Link>
      </section>
      <div
        className={clsx(
          'grid grid-flow-row gap-2',
          '2xl:grid-cols-3',
          'xl:grid-cols-2',
          'lg:grid-cols-2',
          'md:grid-cols-1',
          'sm:grid-cols-1'
        )}
      >
        {data?.map((station) => (
          <StationItem key={station.stationuuid} {...station} />
        ))}
      </div>
    </>
  )
}

export default FilteredStationList
