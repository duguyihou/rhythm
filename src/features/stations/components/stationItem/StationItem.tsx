import React from 'react'

import { faCirclePlay, faCircleStop } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'

import { usePlayerStore } from 'features/player'
import { useDisclosure } from 'hooks'

import { Station as StationProps } from './StationItem.types'

const StationItem = (station: StationProps) => {
  const { name, homepage } = station
  const { setCurrentPlaying, playing, setPlaying, currentPlaying } =
    usePlayerStore()
  const { open, close, isOpen } = useDisclosure()

  const handleClick = (station: StationProps) => {
    setCurrentPlaying(station)
    setPlaying(currentPlaying === station ? !playing : true)
  }

  return (
    <span
      className={clsx(
        'p-2 rounded w-full min-w-fit',
        'bg-slate-50 hover:bg-slate-100',
        'cursor-pointer shadow-sm hover:shadow-md',
        'flex flex-row'
      )}
      onClick={() => handleClick(station)}
      onMouseEnter={open}
      onMouseLeave={close}
    >
      <div className="relative">
        {isOpen && (
          <div
            className={clsx(
              'absolute inset-0 m-auto w-10 h-10 z-10',
              'text-slate-100'
            )}
          >
            <FontAwesomeIcon
              icon={
                currentPlaying === station && playing
                  ? faCircleStop
                  : faCirclePlay
              }
            />
          </div>
        )}
        <div
          className={clsx(
            'w-12 h-12 text-3xl font-extrabold',
            'bg-slate-500 rounded-md',
            'flex justify-center items-center'
          )}
        >
          {name.trim() !== '' ? name[0].toUpperCase() : 'X'}
        </div>
      </div>
      <section className="flex flex-col w-44 h-full p-1">
        <h1 className="text-sm truncate w-full">{name}</h1>
        <h1 className="text-xs truncate text-slate-500">{homepage}</h1>
      </section>
    </span>
  )
}

export default StationItem
