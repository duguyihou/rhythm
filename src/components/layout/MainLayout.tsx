import React from 'react'

import clsx from 'clsx'
import { useRouter } from 'next/router'

import { SearchStation } from 'features/stations'

import { Head } from '../head'
import { Sidebar } from '../sidebar'
import { MainLayoutProps } from './MainLayout.types'

const MainLayout = ({ children }: MainLayoutProps) => {
  const { pathname } = useRouter()
  const showSearchStation = pathname === '/'
  return (
    <>
      <Head />
      <div className="h-screen flex justify-center overflow-hidden bg-gray-100">
        <Sidebar />
        <main
          className={clsx(
            'relative focus:outline-none w-2/5 min-w-min',
            'scrollbar-none overflow-y-auto'
          )}
        >
          {children}
        </main>
        <div className="hidden md:flex md:flex-shrink-0">
          <div className="flex flex-col w-64">
            <div className="flex flex-col h-0 flex-1">
              <div className="flex-1 flex flex-col overflow-y-auto">
                {showSearchStation && <SearchStation />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainLayout
