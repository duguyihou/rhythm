import { ContentLayout } from '../../components/layout'
import { FilteredStationList } from '../stations/components'
import { Filter } from '../stations/components/filteredStationList/FilteredStationList.types'

const ListenNow = () => {
  return (
    <ContentLayout>
      <FilteredStationList filter={Filter.topvote} />
      <FilteredStationList filter={Filter.topclick} />
    </ContentLayout>
  )
}

export default ListenNow
