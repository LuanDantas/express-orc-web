import { useEffect, useState } from 'react';
import { ReactMultiCrop as ReactMultiCropEdit, IOutputData } from '@berviantoleo/react-multi-crop';

interface CropProps {
  image: string;
}

// const Crops = {
//   type: 'DOCUMENT' | 'CONTENT' | 'DATE'
//   page: 1,
//   crop: {
//     top: 20,
//     left: 30,
//     height: 50,
//     width: 60
//   }
// }

export function CropDefault({ image }: CropProps) {
  const [cropValue, setCropValue] = useState<Array<IOutputData>>([]);
  const cropsArray: Array<any> = [];

  useEffect(() => {
    cropValue.map((item) => {
      const obj = JSON.parse(String(item.crop));

      cropsArray.push({
        type: 'DOCUMENT',
        page: 1,
        crop: {
          top: obj.y,
          left: obj.x,
          height: obj.h,
          width: obj.w,
        },
      });

      console.log(cropsArray);
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
        record={{
          clippings: [
            {
              id: 1,
              rect: { x1: 0.0, y1: 0.0, x2: 0.2, y2: 0.2 },
              rectPx: {},
            },
          ],
        }}
        style={{
          margin: "0",
        }}
      />
    </>
  )
}