import { Fragment } from 'react'

import { Dialog as UIDialog, Transition } from '@headlessui/react'

import { DialogProps } from './Dialog.types'

const Dialog = (dailogProps: DialogProps) => {
  const { isOpen, onClose, children, initialFocus } = dailogProps
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <UIDialog
        as="div"
        className="relative z-10"
        onClose={onClose}
        initialFocus={initialFocus}
      >
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <UIDialog.Panel
                onClick={onClose}
                className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
              >
                <div>type radio name</div>
                {children}
              </UIDialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </UIDialog>
    </Transition>
  )
}

export default Dialog
