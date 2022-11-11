import create from 'zustand'

import { Station } from '../../stations'

type PlayerStore = {
  currentPlaying?: Station
  setCurrentPlaying: (station: Station) => void
  playing: boolean
  setPlaying: (status: boolean) => void
}

const usePlayerStore = create<PlayerStore>((set) => ({
  currentPlaying: undefined,
  playing: false,
  setCurrentPlaying: (station) => set(() => ({ currentPlaying: station })),
  setPlaying: (status) => set(() => ({ playing: status })),
}))

export default usePlayerStore
