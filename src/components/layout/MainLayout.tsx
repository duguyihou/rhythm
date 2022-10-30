import React from 'react'

import { Head } from '../head'
import { Sidebar } from '../sidebar'
import { MainLayoutProps } from './MainLayout.types'

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Head />
      <div className="h-screen flex justify-center overflow-hidden bg-gray-100">
        <Sidebar />
        <main className="relative overflow-y-auto focus:outline-none w-2/5 min-w-min">
          {children}
        </main>
        <div className="hidden md:flex md:flex-shrink-0">
          <div className="flex flex-col w-64">
            <div className="flex flex-col h-0 flex-1">
              <div className="flex-1 flex flex-col overflow-y-auto">
                <div>right side bar</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainLayout
