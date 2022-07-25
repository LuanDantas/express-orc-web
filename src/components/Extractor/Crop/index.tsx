import { useContext, useEffect, useState } from 'react';
import { ReactMultiCrop as ReactMultiCropEdit, IOutputData } from '@berviantoleo/react-multi-crop';

import ResultContext from '../../../context/results'

interface CropProps {
  image: string;
}

export function CropDefault({ image }: CropProps) {
  const cropArray: Array<any> = [];
  let cropsArray: Array<any> = [];
  const [cropValue, setCropValue] = useState<Array<IOutputData>>([]);
  const { setResultState, resultState } = useContext(ResultContext);

  cropArray.push({
    type: 'DOCUMENT',
    page: 1,
    crops: {},
  });

  useEffect(() => {
    cropValue.map((item) => {
      const newCrops = JSON.parse(String(item.crop));
      cropsArray.push(newCrops);

      let carsProperties = cropArray.map(car => {
        let properties = {
          ...car,
          "crops": cropsArray,
        };

        return properties;
      });

      setResultState({
        ...resultState,
        result: [...carsProperties],
      })
    })
  }, [cropValue])

  return (
    <>
      <ReactMultiCropEdit
        id="canvas"
        input={{
          onChange: function (value: Array<IOutputData>) {
            setCropValue(value);
          },
        }}
        image={image}
        includeHtmlCanvas
        // record={{
        //   clippings: [
        //     {
        //       id: 1,
        //       rect: { x1: 0.0, y1: 0.0, x2: 0.2, y2: 0.2 },
        //       rectPx: {},
        //     },
        //   ],
        // }}
        style={{
          margin: "0",
        }}
      />
    </>
  )
}