import { ContentLayout } from 'components/layout'
import { CountryList } from 'features/countries'
import { Filter, FilteredStationList } from 'features/stations'

const ListenNow = () => {
  return (
    <ContentLayout>
      <FilteredStationList filter={Filter.topvote} />
      <FilteredStationList filter={Filter.topclick} />
      <CountryList />
    </ContentLayout>
  )
}

export default ListenNow
