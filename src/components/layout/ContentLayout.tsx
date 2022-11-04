import React from 'react'

import clsx from 'clsx'
import { useRouter } from 'next/router'

import { Player, usePlayerStore } from '../../features/player'
import { ContentLayoutProps } from './ContentLayout.types'

const ContentLayout = (contentLayoutProps: ContentLayoutProps) => {
  const currentPlaying = usePlayerStore((state) => state.currentPlaying)
  const { children } = contentLayoutProps
  const { pathname } = useRouter()

  const title = pathname === '/' ? 'HOME' : pathname.slice(1).toUpperCase()
  return (
    <div>
      <div
        className={clsx('h-16 font-bold w-full', 'flex flex-row items-center')}
      >
        <div className="p-2">{title}</div>
        {currentPlaying && <Player station={currentPlaying} />}
      </div>
      <>{children}</>
    </div>
  )
}

export default ContentLayout
