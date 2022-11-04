import create from 'zustand'

import { Station } from '../../stations/components'

type PlayerStore = {
  currentPlaying?: Station
  setCurrentPlaying: (station: Station) => void
}

const usePlayerStore = create<PlayerStore>((set) => ({
  currentPlaying: undefined,
  setCurrentPlaying: (station) => set(() => ({ currentPlaying: station })),
}))

export default usePlayerStore
