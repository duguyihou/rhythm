import React from 'react'

import { useRouter } from 'next/router'

const FilterPage = () => {
  const {
    query: { filter },
  } = useRouter()

  return <div>{filter}</div>
}

export default FilterPage
