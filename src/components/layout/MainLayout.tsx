import React from 'react'

import { MainLayoutProps } from './MainLayout.types'

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <main className="flex-1 relative overflow-y-auto focus:outline-none">
        {children}
      </main>
    </div>
  )
}

export default MainLayout
