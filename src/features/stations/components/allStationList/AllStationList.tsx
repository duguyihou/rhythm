import React, { useState } from 'react'

import clsx from 'clsx'

import { Spinner } from 'components/elements'
import { fetchAllStationList, useAllStationList } from 'features/stations/hooks'

import { StationItem } from '../stationItem'

const AllStationList = () => {
  const [page, setPage] = useState(0)
  const { data, isLoading, isPreviousData } = useAllStationList(page, () =>
    fetchAllStationList({ offset: page * 30 })
  )
  if (isLoading) {
    return <Spinner />
  }

  return (
    <div className="relative h-[calc(100vh_-_4rem)]">
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
      <section
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
      </section>
      <section
        className={clsx(
          'flex justify-center items-center',
          'absolute w-full bottom-8'
        )}
      >
        <button
          className={clsx(
            'text-sm bg-black text-white rounded-lg p-2 w-32',
            'disabled:bg-slate-200 disabled:text-slate-500'
          )}
          onClick={() => setPage((old) => Math.max(old - 1, 0))}
          disabled={page === 0}
        >
          Previous Page
        </button>
        <span className="p-2">{page + 1}</span>
        <button
          className={clsx(
            'text-sm bg-black text-white rounded-lg p-2 w-32',
            'disabled:bg-slate-200 disabled:text-slate-500'
          )}
          onClick={() => setPage((old) => old + 1)}
          //TODO: Disable the Next Page button when no more data
          disabled={isPreviousData}
        >
          Next Page
        </button>
      </section>
    </div>
  )
}

export default AllStationList
