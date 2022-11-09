import { ChangeEvent, KeyboardEvent, useRef, useState } from 'react'

import { useStationSearchByName } from 'features/stations/hooks'
import { useDisclosure } from 'hooks'

const SearchStation = () => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [input, setInput] = useState('')
  const { close, open, isOpen } = useDisclosure()
  const [visible, setVisible] = useState(false)
  const { data, refetch } = useStationSearchByName({ name: input })

  const searchedStationList = data?.slice(0, 5)
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)
  }
  const handleOnKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      input !== '' && refetch()
    }
  }
  const handleOnBlur = () => {
    if (visible) return
    close()
  }
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center rounded-sm relative">
        <input
          ref={inputRef}
          value={input}
          className="p-1 m-4 flex-1 focus:outline-0 rounded-md"
          type="text"
          placeholder="Search..."
          onChange={handleOnChange}
          onKeyDown={handleOnKeyDown}
          onFocus={open}
          onBlur={handleOnBlur}
        />
        <div className="absolute right-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="20"
            aria-hidden="true"
            className="mr-1 header-search-key-slash"
          >
            <path
              fill="none"
              stroke="#979A9C"
              opacity=".4"
              d="M3.5.5h12c1.7 0 3 1.3 3 3v13c0 1.7-1.3 3-3 3h-12c-1.7 0-3-1.3-3-3v-13c0-1.7 1.3-3 3-3z"
            ></path>
            <path fill="#979A9C" d="M11.8 6L8 15.1h-.9L10.8 6h1z"></path>
          </svg>
        </div>
      </div>
      {isOpen && (
        <div
          className="shadow-lg rounded bg-slate-50 mx-4"
          onMouseEnter={() => setVisible(true)}
          onMouseLeave={() => {
            setVisible(false)
            inputRef.current?.focus()
          }}
        >
          {searchedStationList?.map(({ stationuuid, name }) => (
            <div className="p-2" key={stationuuid}>
              {name}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SearchStation
