import React from 'react'

import { useRouter } from 'next/router'

import { ContentLayout } from 'components/layout'

const FilterPage = () => {
  const {
    query: { filter },
  } = useRouter()

  return <ContentLayout>{filter}</ContentLayout>
}

export default FilterPage
