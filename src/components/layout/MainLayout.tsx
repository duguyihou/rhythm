import React from 'react'

import { Sidebar } from '../sidebar'
import { MainLayoutProps } from './MainLayout.types'

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <Sidebar />
      <main className="flex-1 relative overflow-y-auto focus:outline-none">
        {children}
      </main>
    </div>
  )
}

export default MainLayout
