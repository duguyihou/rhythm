import { useRef } from 'react'

import { faCirclePlay, faStop } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'

import useAudioPlayer from '../../hooks'

const Player = () => {
  const audio = useRef<HTMLAudioElement | null>(null)
  const { playing, setPlaying } = useAudioPlayer(audio)
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
      <figcaption className="font-bold px-8">BBC World Service</figcaption>
      <audio ref={audio}>
        <source
          src="http://stream.live.vc.bbcmedia.co.uk/bbc_world_service"
          type="audio/mpeg"
        />
      </audio>
    </figure>
  )
}

export default Player
