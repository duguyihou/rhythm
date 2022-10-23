import SideNavigation from './SideNavigation'

const Sidebar = () => {
  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64">
        <div className="flex flex-col h-0 flex-1">
          <div className="flex items-center h-16 flex-shrink-0 px-4 bg-gray-300">
            <div>Logo</div>
          </div>
          <div className="flex-1 flex flex-col overflow-y-auto">
            <nav className="flex-1 px-2 py-4 bg-gray-200 space-y-1">
              <SideNavigation />
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
