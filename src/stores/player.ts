import create from 'zustand'

import { StationProps } from '../features/stations/components/stationList'

type Station = StationProps
type PlayerStore = {
  currentPlaying?: Station
  setCurrentPlaying: (station: Station) => void
}
export const usePlayerStore = create<PlayerStore>((set) => ({
  currentPlaying: undefined,
  setCurrentPlaying: (station) => set(() => ({ currentPlaying: station })),
}))
