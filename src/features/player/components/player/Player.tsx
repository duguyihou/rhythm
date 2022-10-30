import { useRef } from 'react'

import { faCirclePlay, faStop } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'

import { usePlayerStore } from '../../../../stores/player'
import useAudioPlayer from '../../hooks'

const Player = () => {
  const audio = useRef<HTMLAudioElement | null>(null)
  const { playing, setPlaying } = useAudioPlayer(audio)
  const currentPlaying = usePlayerStore((state) => state.currentPlaying)
  return (
    <figure
      className={clsx(
        'w-fit h-fit p-2 bg-slate-50',
        'flex flex-row justify-start items-center '
      )}
    >
      <FontAwesomeIcon
        className="w-10 h-10 cursor-pointer rounded-full"
        onClick={() => setPlaying(playing ? false : true)}
        icon={playing ? faStop : faCirclePlay}
      />
      <figcaption className="font-bold px-8">{currentPlaying?.name}</figcaption>
      <audio ref={audio}>
        <source src={currentPlaying?.url} type="audio/mpeg" />
      </audio>
    </figure>
  )
}

export default Player
