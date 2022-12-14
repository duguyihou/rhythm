import React from 'react'

import clsx from 'clsx'
import { useRouter } from 'next/router'

import { ContentLayoutProps } from './ContentLayout.types'

const ContentLayout = (contentLayoutProps: ContentLayoutProps) => {
  const { children } = contentLayoutProps
  const { pathname } = useRouter()

  const title = pathname === '/' ? 'HOME' : 'BROWSE'
  return (
    <div>
      <div
        className={clsx(
          'h-16 font-bold w-full text-lg',
          'flex flex-row items-center',
          'sticky top-0 z-20 bg-gray-100'
        )}
      >
        <div className="p-2">{title}</div>
      </div>
      <div className="scrollbar-none">{children}</div>
    </div>
  )
}

export default ContentLayout
