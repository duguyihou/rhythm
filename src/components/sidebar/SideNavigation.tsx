import React from 'react'

import {
  faCirclePlay,
  faBorderAll,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import Link from 'next/link'

type SideNavigationItem = {
  name: string
  to: string
  icon: IconDefinition
}

const SideNavigation = () => {
  const navigation: SideNavigationItem[] = [
    { name: 'Listen Now', to: '/', icon: faCirclePlay },
    { name: 'Browse', to: '/browse', icon: faBorderAll },
  ]
  return (
    <>
      {navigation.map(({ name, to, icon }) => (
        <Link key={name} href={to}>
          <div
            className={clsx(
              'text-gray-700 hover:bg-gray-300 hover:text-gray-900 cursor-pointer',
              'group flex items-center px-2 py-2 text-base font-medium rounded-md'
            )}
          >
            <div className="w-4 h-4">
              <FontAwesomeIcon icon={icon} />
            </div>
            <div className="px-2">{name}</div>
          </div>
        </Link>
      ))}
    </>
  )
}

export default SideNavigation
