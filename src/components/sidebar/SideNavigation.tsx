import React from 'react'

import clsx from 'clsx'
import Link from 'next/link'

type SideNavigationItem = {
  name: string
  to: string
  // icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element
}
const SideNavigation = () => {
  const navigation: SideNavigationItem[] = [
    { name: 'Listen Now', to: '.' },
    { name: 'Browse', to: './browse' },
  ]
  return (
    <>
      {navigation.map(({ name, to }) => (
        <Link key={name} href={to}>
          <div
            className={clsx(
              'text-gray-700 hover:bg-gray-300 hover:text-gray-900 cursor-pointer',
              'group flex items-center px-2 py-2 text-base font-medium rounded-md'
            )}
          >
            {name}
          </div>
        </Link>
      ))}
    </>
  )
}

export default SideNavigation
