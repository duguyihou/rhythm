import { Spinner } from 'components/elements'
import { useGeoLocation } from 'features/countries/hooks'

const GeoLocation = () => {
  const { data, isLoading } = useGeoLocation()
  if (isLoading) {
    return <Spinner />
  }
  console.log('🐵  ------ ', data)
  return <div>{data?.country_name}</div>
}

export default GeoLocation
