import { ReactNode, MutableRefObject } from 'react'

export type DialogProps = {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  initialFocus?: MutableRefObject<null>
}
