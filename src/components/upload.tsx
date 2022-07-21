import React, { useState } from 'react';
import { ReactMultiCrop as ReactMultiCropEdit, IOutputData } from '@berviantoleo/react-multi-crop';

export function Upload() {
  const [cropValue, setCropValue] = useState<Array<IOutputData>>([]);

  return (
    <>
      <ReactMultiCropEdit
        id="canvas"
        input={{
          onChange: function (value: Array<IOutputData>) {
            setCropValue(value);
          },
        }}
        image="https://picsum.photos/2000"
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
          margin: "10px",
        }}
      />

      <div>
        <h2>Crop Result</h2>
        {cropValue &&
          cropValue.map((objectData: IOutputData, i) => {
            const canvasElement = objectData?.canvasElement?.toDataURL();
            console.log(objectData.crop)

            return (
              <div key={`crop-result-${i}`}>
                Result {i}:
                <img src={canvasElement} alt={`crop-${i}`} />
              </div>
            );
          })
        }
      </div>
    </>
  )
}