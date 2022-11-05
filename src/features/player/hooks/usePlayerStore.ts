import create from 'zustand'

import { Station } from '../../stations/components'

type PlayerStore = {
  currentPlaying?: Station
  setCurrentPlaying: (station: Station) => void
  playingStatus: boolean
}

const usePlayerStore = create<PlayerStore>((set) => ({
  currentPlaying: undefined,
  playingStatus: false,
  setCurrentPlaying: (station) =>
    set(() => ({ currentPlaying: station, playingStatus: true })),
}))

export default usePlayerStore
