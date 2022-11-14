import React from 'react'

import clsx from 'clsx'

import { Spinner } from 'components/elements'
import { useAllStationList } from 'features/stations/hooks'

import { StationItem } from '../stationItem'

const AllStationList = () => {
  const { data, isLoading } = useAllStationList()

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <h1 className={clsx('text-xl text-slate-900 font-bold p-1', 'uppercase')}>
        ALL
      </h1>
      <div className={clsx('grid grid-flow-row gap-4 grid-cols-5')}>
        {data?.slice(0, 100).map((station) => (
          <StationItem key={station.stationuuid} {...station} />
        ))}
      </div>
    </>
  )
}

export default AllStationList
