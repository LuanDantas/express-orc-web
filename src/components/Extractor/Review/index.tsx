import { PaperClipIcon, ArrowsExpandIcon, ArrowSmUpIcon, ArrowSmLeftIcon } from '@heroicons/react/solid'

interface ReviewProps {
  type: string;
  page: number;
  crops: [];
}

export default function Review({ type, page, crops }: ReviewProps) {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Informações</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Confira o JSON das informações cropadas.</p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Tipo</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{type ? type : '-'}</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Página</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{page ? page : '-'}</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Crops</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <ul role="list" className="border border-gray-200 rounded-md divide-y divide-gray-200">
                {
                  crops.map((crop: any, index) => {
                    return (
                      <li key={index} className="pl-3 pr-4 py-3 flex flex-col flex-wrap items-center justify-between text-sm">
                        <div className="w-full flex-1 flex items-center">
                          <ArrowSmUpIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                          <span className="ml-2 flex-1 w-0 truncate">Top: {crop.x}</span>
                        </div>
                        <div className="w-full flex-1 flex items-center mt-2">
                          <ArrowSmLeftIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                          <span className="ml-2 flex-1 w-0 truncate">Left: {crop.y}</span>
                        </div>
                        <div className="w-full flex-1 flex items-center mt-2">
                          <ArrowsExpandIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                          <span className="ml-2 flex-1 w-0 truncate">Width: {crop.w}</span>
                        </div>
                        <div className="w-full flex-1 flex items-center mt-2">
                          <ArrowsExpandIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                          <span className="ml-2 flex-1 w-0 truncate">Heigth: {crop.h}</span>
                        </div>
                        {/* <div className="ml-4 flex-shrink-0">
                          <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Download
                          </a>
                        </div> */}
                      </li>
                    )
                  })
                }
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
