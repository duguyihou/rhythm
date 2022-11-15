import { useMemo } from 'react'

import { faCirclePlay, faCircleStop } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'

import { useAudioPlayer, usePlayerStore } from '../../hooks'
import { PlayerProps } from './Player.types'

const Player = ({ station }: PlayerProps) => {
  const { name, url } = useMemo(() => station, [station])
  const { playing, setPlaying } = usePlayerStore()
  const { audioRef } = useAudioPlayer(playing)
  return (
    <figure className={clsx('w-fit h-fit p-2', 'flex flex-col')}>
      <div
        className={clsx(
          'w-32 h-32 text-6xl font-extrabold',
          'bg-slate-500 rounded-md',
          'flex justify-center items-center',
          'relative'
        )}
      >
        {name.trim() !== '' ? name[0].toUpperCase() : 'X'}
        <FontAwesomeIcon
          className={clsx(
            'w-10 h-10 cursor-pointer rounded-full',
            'absolute bottom-2 right-2'
          )}
          onClick={() => setPlaying(!playing)}
          icon={playing ? faCircleStop : faCirclePlay}
        />
      </div>
      <figcaption
        className={clsx('font-bold py-4', playing && 'animate-bounce')}
      >
        {name}
      </figcaption>
      <audio ref={audioRef} src={url} />
    </figure>
  )
}

export default Player
