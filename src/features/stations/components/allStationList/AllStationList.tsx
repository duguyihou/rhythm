import React, { useState } from 'react'

import { useQuery } from '@tanstack/react-query'
import clsx from 'clsx'

import { Spinner } from 'components/elements'
import { fetchAllStationList, stationKeys } from 'features/stations/hooks'

import { StationItem } from '../stationItem'

const AllStationList = () => {
  const [page, setPage] = useState(0)

  const { data, isLoading } = useQuery(
    [...stationKeys.lists(), page],
    () => fetchAllStationList({ offset: page * 20 }),
    { staleTime: 1000 * 60 * 60, keepPreviousData: true }
  )

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
          ALL
        </h1>
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
      <button
        onClick={() => setPage((old) => Math.max(old - 1, 0))}
        disabled={page === 0}
      >
        Previous Page
      </button>
      <button
        onClick={() => setPage((old) => old + 1)}
        // Disable the Next Page button until we know a next page is available
        // disabled={isPreviousData || !data?.hasMore}
      >
        Next Page
      </button>
    </>
  )
}

export default AllStationList
