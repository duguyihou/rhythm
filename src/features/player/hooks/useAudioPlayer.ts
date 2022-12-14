import { useState, useEffect, useRef } from 'react'

const useAudioPlayer = (playing: boolean) => {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const [duration, setDuration] = useState(0)
  const [curTime, setCurTime] = useState(0)
  const [clickedTime, setClickedTime] = useState(null)

  useEffect(() => {
    if (!audioRef?.current) return

    const audio = audioRef.current
    // state setters wrappers
    const setAudioData = () => {
      setDuration(audio.duration)
      setCurTime(audio.currentTime)
    }

    const setAudioTime = () => setCurTime(audio.currentTime)

    // DOM listeners: update React state on DOM events
    audio.addEventListener('loadeddata', setAudioData)
    audio.addEventListener('timeupdate', setAudioTime)

    // React state listeners: update DOM on React state changes
    playing ? audio.play() : audio.pause()

    if (clickedTime && clickedTime !== curTime) {
      audio.currentTime = clickedTime
      setClickedTime(null)
    }

    return () => {
      audio.removeEventListener('loadeddata', setAudioData)
      audio.removeEventListener('timeupdate', setAudioTime)
    }
  }, [playing, clickedTime, curTime, audioRef])

  return {
    audioRef,
    curTime,
    duration,
    setClickedTime,
  }
}

export default useAudioPlayer
