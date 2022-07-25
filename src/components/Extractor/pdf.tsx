import { useState } from "react";
import { Document, Page } from "react-pdf";

export function PDF({ file }: any) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages);
  }
  
  return (
    <div className="w-full mt-1 justify-center items-center px-1 pt-1 pb-1 border-2 border-gray-300 border-dashed rounded-md relative overflow-auto">
      <div>
        <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>
    </div>
  )
}