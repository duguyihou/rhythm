import { StationList } from '../stations/components'
import { Filter } from '../stations/components/stationList/StationList.types'

const ListenNow = () => {
  return (
    <>
      <StationList filter={Filter.topvote} />
      <StationList filter={Filter.topclick} />
    </>
  )
}

export default ListenNow
