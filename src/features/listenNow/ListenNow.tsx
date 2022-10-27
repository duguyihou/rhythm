import { RadioList } from '../radio/components'
import { Filter } from '../radio/components/radioList/RadioList.types'

const ListenNow = () => {
  return (
    <>
      <RadioList filter={Filter.topvote} />
      <RadioList filter={Filter.topclick} />
    </>
  )
}

export default ListenNow
