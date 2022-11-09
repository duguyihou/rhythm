import { ContentLayout } from 'components/layout'
import { Filter, FilteredStationList } from 'features/stations'

const ListenNow = () => {
  return (
    <ContentLayout>
      <FilteredStationList filter={Filter.topvote} />
      <FilteredStationList filter={Filter.topclick} />
    </ContentLayout>
  )
}

export default ListenNow
