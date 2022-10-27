import clsx from 'clsx'
import Image from 'next/image'

import { Spinner } from '../../../../components/elements'
import { useStationList } from '../../hooks'
import { Filter, StationListProps } from './StationList.types'

const StationList = ({ filter }: StationListProps) => {
  // TODO: extract a util function with generic type
  const filterVar = Object.keys(Filter)[
    Object.values(Filter).indexOf(filter as Filter)
  ] as keyof typeof Filter

  const variables = { filter: filterVar, offset: 5 }
  const { data, isLoading } = useStationList({ variables, suspense: true })
  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <h1 className={clsx('text-xl text-slate-900 font-bold p-1', 'uppercase')}>
        {filter}
      </h1>
      <div className={clsx('grid grid-flow-row gap-4 grid-cols-5')}>
        {data?.map(({ name, favicon }) => (
          <span
            className={clsx(
              'bg-slate-50 hover:bg-slate-100 ',
              'py-4 px-2 cursor-pointer',
              'shadow-sm hover:shadow-md',
              'flex flex-col justify-center items-center'
            )}
            key={name}
          >
            {favicon !== '' ? (
              <div className="w-20 h-20 relative">
                <Image
                  src={favicon}
                  alt={name}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-md"
                />
              </div>
            ) : (
              <div
                className={clsx(
                  'w-20 h-20 text-6xl font-extrabold',
                  'bg-slate-500 rounded-md',
                  'flex justify-center items-center'
                )}
              >
                {name[0].toUpperCase()}
              </div>
            )}
            <h1 className="text-base truncate">{name}</h1>
          </span>
        ))}
      </div>
    </>
  )
}

export default StationList
