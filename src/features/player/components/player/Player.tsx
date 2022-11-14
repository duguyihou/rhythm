import { faCirclePlay, faCircleStop } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'

import { useAudioPlayer, usePlayerStore } from '../../hooks'
import { PlayerProps } from './Player.types'

const Player = ({ station }: PlayerProps) => {
  const { name, url } = station
  const { playing, setPlaying } = usePlayerStore()
  const { audioRef } = useAudioPlayer(playing)
  return (
    <figure
      className={clsx(
        'w-fit h-fit p-2 ml-auto',
        'flex flex-row justify-start items-center'
      )}
    >
      <figcaption
        className={clsx('font-bold px-8', playing && 'animate-bounce')}
      >
        {name}
      </figcaption>
      <FontAwesomeIcon
        className="w-10 h-10 cursor-pointer rounded-full"
        onClick={() => setPlaying(!playing)}
        icon={playing ? faCircleStop : faCirclePlay}
      />
      <audio ref={audioRef} src={url} />
    </figure>
  )
}

export default Player
