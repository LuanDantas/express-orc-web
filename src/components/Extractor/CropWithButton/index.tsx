import { useEffect, useState } from "react";
import { ReactMultiCrop, IOutputData } from "@berviantoleo/react-multi-crop";
import { PlusCircleIcon, TrashIcon } from "@heroicons/react/solid";

import styles from './styles.module.css';

interface CropProps {
  image: string;
}

export function CropWithButton({ image }: CropProps) {
  const [cropValue, setCropValue] = useState<Array<IOutputData>>([]);

  const Crops = {
    // type: 'DOCUMENT' | 'CONTENT' | 'DATE'
    type: 'DOCUMENT',
    page: 1,
    crop: {
      top: 20,
      left: 30,
      height: 50,
      width: 60
    }
  }
  
  useEffect(() => {
    cropValue.map((item) => {
      console.log(item)
    })
  }, [cropValue])

  return (
    <>
      <div className={styles.cropContainer}>
        <ReactMultiCrop
          addButton={
            <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <PlusCircleIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              Adicionar seleção
            </button>
          }
          deleteButton={
            <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-rose-400 hover:bg-rose-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <TrashIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              Deletar seleção
            </button>
          }
          id="canvas"
          image={image}
          input={{
            onChange: function (value: Array<IOutputData>) {
              setCropValue(value);
            },
          }}
          includeHtmlCanvas
          record={{
            clippings: [
              {
                id: 1,
                rect: { x1: 0.0, y1: 0.0, x2: 0.2, y2: 0.2 },
                rectPx: {},
              },
            ],
          }}
          showButton
          style={{
            margin: "0",
            position: 'relative'
          }}
        />
      </div>
    </>
  )
}