import { useState } from "react";
import { Preview } from "./Preview";
import Result from "./Results";
import { Upload } from "./Upload";

export function Extractor() {
  const [selectedFile, setSelectedFile] = useState()
  const [preview, setPreview] = useState<string | undefined>()

  return (
    <>
      <section className="flex justify-between h-5/6 mt-2 px-5">
        <div className="flex w-2/4 pr-3 flex-wrap">
          <Upload
            selectedFile={selectedFile}
            setSelectedFile={setSelectedFile}
            setPreview={setPreview}
          />
        </div>
        <div className="flex w-2/4 pl-3">
          <Preview selectedFile={selectedFile} preview={preview} />
        </div>
        <Result />
      </section>
    </>
  )
}