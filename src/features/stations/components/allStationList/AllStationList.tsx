import React from 'react'

import clsx from 'clsx'

import { Spinner } from 'components/elements'
import { useAllStationList } from 'features/stations/hooks'

import { StationItem } from '../stationItem'

const AllStationList = () => {
  const { data, isLoading } = useAllStationList({})

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
    </>
  )
}

export default AllStationList
