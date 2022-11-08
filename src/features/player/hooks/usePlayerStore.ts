import create from 'zustand'

import { Station } from '../../stations'

type PlayerStore = {
  currentPlaying?: Station
  setCurrentPlaying: (station: Station) => void
  playing: boolean
  setPlaying: () => void
}

const usePlayerStore = create<PlayerStore>((set) => ({
  currentPlaying: undefined,
  playing: false,
  setCurrentPlaying: (station) =>
    set(() => ({ currentPlaying: station, playing: true })),
  setPlaying: () => set((playing) => ({ playing: !playing })),
}))

export default usePlayerStore
