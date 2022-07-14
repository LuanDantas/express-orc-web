import { PreviewBlank } from "./preview-blank";

interface PreviewProps {
  selectedFile: any;
  preview: any;
}

export function Preview({ selectedFile, preview }: PreviewProps) {
  return (
    <>
      {selectedFile ? (
        <div>
          <img src={preview} className="w-auto" />
        </div>
      ) : (
        <PreviewBlank />
      )}
    </>
  )
}