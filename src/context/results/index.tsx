import React, { createContext, useState } from "react";

type ResultType = {
  result: any;
}

type ResultContextProps = {
  resultState: ResultType;
  setResultState: React.Dispatch<React.SetStateAction<ResultType>>;
}

const DEFAULT_VALUE = {
  resultState: {
    result: [],
  },
  setResultState: () => {},
}

const ResultContext = createContext<ResultContextProps>(DEFAULT_VALUE);

const ResultContextProvider: React.FC = ({ children }) => {
  const [resultState, setResultState] = useState(DEFAULT_VALUE.resultState);

  return (
    <ResultContext.Provider
      value={{
        resultState,
        setResultState,
      }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export { ResultContextProvider };
export default ResultContext;