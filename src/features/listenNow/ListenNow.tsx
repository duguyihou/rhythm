import { ContentLayout } from '../../components/layout'
import { FilteredStationList, Filter } from '../stations'

const ListenNow = () => {
  return (
    <ContentLayout>
      <FilteredStationList filter={Filter.topvote} />
      <FilteredStationList filter={Filter.topclick} />
    </ContentLayout>
  )
}

export default ListenNow
