import { faCirclePlay, faStop } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'

import { useAudioPlayer } from '../../hooks'
import { PlayerProps } from './Player.types'

const Player = ({ station }: PlayerProps) => {
  const { audioRef, playing, setPlaying } = useAudioPlayer()

  return (
    <figure
      className={clsx(
        'w-fit h-fit p-2 ml-auto',
        'flex flex-row justify-start items-center '
      )}
    >
      <figcaption className="font-bold px-8">{station.name}</figcaption>
      <FontAwesomeIcon
        className="w-10 h-10 cursor-pointer rounded-full"
        onClick={() => setPlaying(playing ? false : true)}
        icon={playing ? faStop : faCirclePlay}
      />
      <audio ref={audioRef} src={station.url} />
    </figure>
  )
}

export default Player
