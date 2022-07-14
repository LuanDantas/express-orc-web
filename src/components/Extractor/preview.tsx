import { PreviewBlank } from "./preview-blank";

interface PreviewProps {
  selectedFile: any;
  preview: any;
}

export function Preview({ selectedFile, preview }: PreviewProps) {
  return (
    <>
      {selectedFile ? (
        <img src={preview} />
      ) : (
        <PreviewBlank />
      )}
    </>
  )
}