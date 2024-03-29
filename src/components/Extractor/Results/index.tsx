import { Fragment, useContext, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon, DocumentIcon } from '@heroicons/react/outline'

import SlideOverContext from '../../../context/slideOver'
import ResultContext from '../../../context/results'
import Review from '../Review'

export default function Result() {
  const { setState, state } = useContext(SlideOverContext);
  const { setResultState, resultState } = useContext(ResultContext);

  useEffect(() => {
    resultState.result.map((item: any) => {
      console.log('Teste', item)
    })
  }, [resultState])

  return (
    <Transition.Root show={state.visible} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => setState({...state, visible: false})}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => setState({...state, visible: false})}
                      >
                        <span className="sr-only">Fechar</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      <div className="absolute inset-0 px-4 sm:px-6">
                        {
                          resultState.result.length
                          ?
                            resultState.result.map((item: any) => {
                              return (
                                <Review type={item.type} page={item.page} crops={item.crops} />
                              )
                            })
                          :
                          <div className='w-full h-full flex flex-wrap justify-center items-center content-center'>
                            <DocumentIcon className="h-10 w-10" aria-hidden="true" />
                            <h1 className='w-full font-semibold text-center mt-3'>Nenhum corte realizado até o momento</h1>
                          </div>
                        }
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
