import ReactCrop, { Crop } from 'react-image-crop'
import { PreviewBlank } from "./preview-blank";
import { useEffect, useState } from 'react';

import 'react-image-crop/dist/ReactCrop.css'

interface PreviewProps {
  selectedFile: any;
  preview: any;
}

export function Preview({ selectedFile, preview }: PreviewProps) {
  const [crop, setCrop] = useState<Crop>()

  useEffect(() => {
    console.log(crop)
  }, [crop])

  return (
    <>
      {selectedFile ? (
        <>
          {selectedFile.type === 'application/pdf' ? (
            {preview}
          ) : (
            <ReactCrop crop={crop} onChange={c => setCrop(c)}>
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