import React from 'react'

import clsx from 'clsx'

import { Spinner } from 'components/elements'

import { fetchCountries, useCountries } from '../../hooks'

const CountryList = () => {
  const { data, isLoading } = useCountries(() => fetchCountries({ offset: 0 }))
  if (isLoading) {
    return <Spinner />
  }
  return (
    <div
      className={clsx(
        'grid grid-flow-row gap-2',
        '2xl:grid-cols-4',
        'xl:grid-cols-3',
        'lg:grid-cols-3',
        'md:grid-cols-2',
        'sm:grid-cols-2'
      )}
    >
      {data?.map(({ name }) => (
        <span
          className={clsx(
            'p-2 rounded w-full min-w-fit text-sm',
            'bg-slate-50 hover:bg-slate-100',
            'cursor-pointer shadow-sm hover:shadow-md',
            'flex flex-row justify-center items-center'
          )}
          key={name}
        >
          {name}
        </span>
      ))}
    </div>
  )
}

export default CountryList
