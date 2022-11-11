import { Spinner } from 'components/elements'
import { useGeoLocation } from 'features/countries/hooks'

const GeoLocation = () => {
  const { data, isLoading } = useGeoLocation()
  if (isLoading) {
    return <Spinner />
  }
  return <div>{data?.country_name}</div>
}

export default GeoLocation
