import Link from 'next/link'

import { Logo } from 'components/logo'
import { Player, usePlayerStore } from 'features/player'

import SideNavigation from './SideNavigation'

const Sidebar = () => {
  const { currentPlaying } = usePlayerStore()
  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64">
        <div className="flex flex-col h-0 flex-1">
          <div className="flex items-center h-16 flex-shrink-0 px-4">
            <Link href={'/'}>
              <div className="cursor-pointer">
                <Logo />
              </div>
            </Link>
          </div>
          <div className="flex-1 flex flex-col overflow-y-auto">
            <nav className="flex-1 px-2 py-4 space-y-1">
              <SideNavigation />
            </nav>
            <section className="mb-10">
              {currentPlaying && <Player station={currentPlaying} />}
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
