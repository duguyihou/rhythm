import React from 'react'

import clsx from 'clsx'

import { Spinner } from 'components/elements'

import { useCountries } from '../hooks'

const CountryList = () => {
  const { data, isLoading } = useCountries()
  if (isLoading) {
    return <Spinner />
  }
  return (
    <div className="grid grid-flow-row grid-cols-5">
      {data?.map(({ name }) => (
        <span
          className={clsx(
            'text-lg bg-slate-50 hover:bg-slate-100 ',
            'py-4 px-2 cursor-pointer'
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
