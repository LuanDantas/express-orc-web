import ReactCrop, { Crop } from 'react-image-crop'
import { PreviewBlank } from "./preview-blank";
import { useEffect, useState } from 'react';

import 'react-image-crop/dist/ReactCrop.css'

interface PreviewProps {
  selectedFile: any;
  preview: any;
}

interface CropProps {
  top: number;
  left: number;
  height: number;
  width: number;
}

interface CropsProps {
  type: string;
  page: number;
  crop: CropProps[];
}

export function Preview({ selectedFile, preview }: PreviewProps) {
  const [cropImage, setCropImage] = useState<Crop>()

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
    console.log(
      {
        type: 'DOCUMENT',
        page: 1,
        crop: {
          top: cropImage?.y,
          left: cropImage?.x,
          height: cropImage?.height,
          width: cropImage?.width
        }
      }
    )
  }, [cropImage])

  return (
    <>
      {selectedFile ? (
        <>
          {selectedFile.type === 'application/pdf' ? (
            {preview}
          ) : (
            <ReactCrop crop={cropImage} onChange={c => setCropImage(c)}>
              <img src={preview} />
            </ReactCrop>
          )}
        </>
      ) : (
        <PreviewBlank />
      )}
    </>
  )
}