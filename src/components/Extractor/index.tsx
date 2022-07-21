import { useEffect, useState } from "react";
import { Preview } from "./Preview";
import Result from "./Results";
import { Upload } from "./Upload";

export function Extractor() {
  const [selectedFile, setSelectedFile] = useState()
  const [preview, setPreview] = useState<string | undefined>()
  const [openResults, setOpenResults] = useState(false)

  const theme = 'buttons' // default || buttons
  
  useEffect(() => {
    setOpenResults(true);
  }, [])

  return (
    <section className="flex justify-between h-5/6 mt-2 px-5">
      <div className="flex w-2/4 pr-3 flex-wrap">
        <Upload
          selectedFile={selectedFile}
          setSelectedFile={setSelectedFile}
          setPreview={setPreview}
        />
      </div>
      <div className="flex w-2/4 pl-3">
        <Preview selectedFile={selectedFile} preview={preview} theme={theme} />
      </div>

      <Result onOpenResults={setOpenResults} showResults={false} />
    </section>
  )
}