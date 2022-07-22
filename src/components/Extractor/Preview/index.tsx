import { PreviewBlank } from '../BlankPreview';
import { CropDefault } from '../Crop';
import { CropWithButton } from "../CropWithButton";
import { useContext } from 'react';

import ThemeContext from '../../../context/theme'

interface PreviewProps {
  selectedFile: any;
  preview: any;
}

export function Preview({ selectedFile, preview }: PreviewProps) {
  const { setState, state } = useContext(ThemeContext);

  return (
    <>
      {selectedFile ? (
        <>
          {selectedFile.type === 'application/pdf' ? (
            {preview}
          ) : (
            <div className="w-full mt-1 justify-center items-center px-1 pt-1 pb-1 border-2 border-gray-300 border-dashed rounded-md relative overflow-auto">
              { state.type == 'default' ? <CropDefault image={preview} /> : <CropWithButton image={preview} /> }
            </div>
          )}
        </>
      ) : (
        <PreviewBlank />
      )}
    </>
  )
}