import React from 'react'

import { clsx } from 'clsx'
import Image from 'next/image'

import { usePlayerStore } from 'features/player'

import { Station as StationProps } from './StationItem.types'

const StationItem = (station: StationProps) => {
  const { name, favicon } = station
  const { setCurrentPlaying } = usePlayerStore()

  const handleClick = (station: StationProps) => {
    setCurrentPlaying(station)
  }

  const hasFavicon =
    station.favicon.startsWith('https://') && station.favicon !== 'ff'
  return (
    <span
      className={clsx(
        'bg-slate-50 hover:bg-slate-100 ',
        'py-4 px-2 cursor-pointer',
        'shadow-sm hover:shadow-md',
        'flex flex-col justify-center items-center'
      )}
      onClick={() => handleClick(station)}
    >
      {hasFavicon ? (
        <div className="w-20 h-20 relative">
          <Image
            src={favicon}
            alt={name}
            layout="fill"
            objectFit="contain"
            className="rounded-md"
          />
        </div>
      ) : (
        <div
          className={clsx(
            'w-20 h-20 text-6xl font-extrabold',
            'bg-slate-500 rounded-md',
            'flex justify-center items-center'
          )}
        >
          {name.trim() !== '' ? name[0].toUpperCase() : 'unamed'}
        </div>
      )}
      <h1 className="text-base truncate">{name}</h1>
    </span>
  )
}

export default StationItem
