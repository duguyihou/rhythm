import { useState, useEffect, useRef } from 'react'

const useAudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const [duration, setDuration] = useState(0)
  const [curTime, setCurTime] = useState(0)
  const [playing, setPlaying] = useState(false)
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
    if (playing) {
      const playPromise = audio.play()
      if (playPromise !== null) playPromise.catch(() => audio.play())
    } else {
      audio.pause()
    }

    console.log('🐵 playing ------ ', playing)
    if (clickedTime && clickedTime !== curTime) {
      audio.currentTime = clickedTime
      setClickedTime(null)
    }
    // effect cleanup
    return () => {
      audio.removeEventListener('loadeddata', setAudioData)
      audio.removeEventListener('timeupdate', setAudioTime)
    }
  }, [playing, clickedTime, curTime, audioRef])

  return {
    audioRef,
    curTime,
    duration,
    playing,
    setPlaying,
    setClickedTime,
  }
}

export default useAudioPlayer
