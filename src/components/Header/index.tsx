import { Fragment, useContext, useEffect, useState } from 'react'
import {
  ChevronDownIcon,
  PhotographIcon,
} from '@heroicons/react/solid'
import { Menu, Transition } from '@headlessui/react'
import SelectStep from '../Extractor/SelectStep'
import SelectTheme from '../Extractor/SelectTheme'

import SlideOverContext from '../../context/slideOver'

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export function Header() {
  const { setState, state } = useContext(SlideOverContext);

  return (
    <div className="lg:flex lg:items-center lg:justify-between w-full py-4 px-5">
      <div className="flex-1 min-w-0">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Express OCR Web</h2>
      </div>
      <div className="mt-5 flex lg:mt-0 lg:ml-4">
        <SelectStep />
        {/* <SelectTheme /> */}

        <span className="sm:ml-3">
          <button
            type="button"
            onClick={() => setState({
              ...state,
              visible: true,
            })}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <PhotographIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            Exibir detalhes
          </button>
        </span>

        <Menu as="div" className="ml-3 relative sm:hidden">
          <Menu.Button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Mais
            <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5 text-gray-500" aria-hidden="true" />
          </Menu.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="origin-top-right absolute right-0 mt-2 -mr-1 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                  >
                    Editar
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                  >
                    Visualizar
                  </a>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  )
}
