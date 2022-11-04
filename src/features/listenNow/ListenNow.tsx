import { Player, usePlayerStore } from '../player'
import { StationList } from '../stations/components'
import { Filter } from '../stations/components/stationList/StationList.types'

const ListenNow = () => {
  const currentPlaying = usePlayerStore((state) => state.currentPlaying)

  return (
    <>
      {currentPlaying && <Player station={currentPlaying} />}
      <StationList filter={Filter.topvote} />
      <StationList filter={Filter.topclick} />
    </>
  )
}

export default ListenNow
