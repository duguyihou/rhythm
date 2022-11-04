import { ContentLayout } from '../../components/layout'
import { StationList } from '../stations/components'
import { Filter } from '../stations/components/stationList/StationList.types'

const ListenNow = () => {
  return (
    <ContentLayout>
      <StationList filter={Filter.topvote} />
      <StationList filter={Filter.topclick} />
    </ContentLayout>
  )
}

export default ListenNow
