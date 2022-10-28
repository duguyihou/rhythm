import { faCirclePlay, faStop } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'

import useAudioPlayer from '../../hooks'

const Player = () => {
  const { playing, setPlaying } = useAudioPlayer()
  return (
    <figure
      className={clsx(
        'w-fit h-fit p-2 bg-slate-50',
        'flex flex-row justify-start items-center '
      )}
    >
      <FontAwesomeIcon
        className="w-10 h-10 cursor-pointer"
        onClick={() => setPlaying(playing ? false : true)}
        icon={playing ? faStop : faCirclePlay}
      />
      <figcaption className="font-bold pl-8">BBC World Service</figcaption>
      <audio id="audio">
        <source
          src="http://stream.live.vc.bbcmedia.co.uk/bbc_world_service"
          type="audio/mpeg"
        />
      </audio>
    </figure>
  )
}

export default Player
