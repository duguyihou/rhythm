import React from 'react'

import clsx from 'clsx'
import Link from 'next/link'

import { ListHeadProps } from './ListHead.types'

const ListHead = (listHeadProps: ListHeadProps) => {
  const { filter, href } = listHeadProps
  return (
    <section
      className={clsx('flex flex-row items-center justify-between', 'mx-2')}
    >
      <h1
        className={clsx('text-base text-slate-900 font-bold py-1', 'uppercase')}
      >
        {filter}
      </h1>
      <Link href={href}>
        <div className="cursor-pointer text-sm hover:underline">See All</div>
      </Link>
    </section>
  )
}

export default ListHead
