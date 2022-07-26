import { useContext, useEffect, useState } from "react";
import { ReactMultiCrop, IOutputData } from "@berviantoleo/react-multi-crop";
import { PlusCircleIcon, TrashIcon } from "@heroicons/react/solid";

import ResultContext from '../../../context/results';
import StagesContext from "../../../context/stages";

import styles from './styles.module.css';

interface CropProps {
  image: string;
}

export function CropWithButton({ image }: CropProps) {
  const cropArray: Array<any> = [];
  let cropsArray: Array<any> = [];

  const [cropValue, setCropValue] = useState<Array<IOutputData>>([]);

  const { setResultState, resultState } = useContext(ResultContext);
  const { stageState, setStageState } = useContext(StagesContext);

  useEffect(() => {
    console.log(stageState.stage)
  }, [stageState]);

  // useEffect(() => {
  //   const cropLength = cropValue.length

  //   if (cropLength == 0) {
  //     setStageState({
  //       ...stageState,
  //       stage: 'type',
  //     })
  //   }
  //   else if (cropLength > 0 && cropLength <= 4) {
  //     setStageState({
  //       ...stageState,
  //       stage: 'content',
  //     })
  //   }
  //   else if (cropLength > 4) {
  //     setStageState({
  //       ...stageState,
  //       stage: 'date',
  //     })
  //   }

  //   console.log(cropValue.length)
  // }, [cropValue])

  cropArray.push({
    type: stageState.stage,
    page: 1,
    crops: {},
  });

  useEffect(() => {
    cropValue.map((item) => {
      const newCrops = JSON.parse(String(item.crop));
      cropsArray.push(newCrops);

      let cropsProperties = cropArray.map(car => {
        let properties = {
          ...car,
          "crops": cropsArray,
        };

        return properties;
      });

      setResultState({
        ...resultState,
        result: [...cropsProperties],
      })
    })
  }, [cropValue])

  return (
    <>
      <div className={styles.cropContainer}>
        <ReactMultiCrop
          addButton={
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <PlusCircleIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              {stageState.stage === 'DOCUMENT' && 'Adicionar corte - Documento'}
              {stageState.stage === 'CONTENT' && 'Adicionar corte - Content'}
              {stageState.stage === 'DATE' && 'Adicionar corte - Date'}
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
          // includeHtmlCanvas
          // record={{
          //   clippings: [
          //     {
          //       id: 1,
          //       rect: { x1: 0.0, y1: 0.0, x2: 0.2, y2: 0.2 },
          //       rectPx: {},
          //     },
          //   ],
          // }}
          showButton={stageState.stage ? true : false}
          style={{
            margin: "0",
            position: 'relative'
          }}
        />
      </div>
    </>
  )
}