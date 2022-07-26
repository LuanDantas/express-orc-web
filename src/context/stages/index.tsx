import React, { createContext, useEffect, useState } from "react";

type StagesType = {
  stage: string;
}

type StagesContextProps = {
  stageState: StagesType;
  setStageState: React.Dispatch<React.SetStateAction<StagesType>>;
}

const DEFAULT_VALUE = {
  stageState: {
    stage: 'type',
  },
  setStageState: () => {},
}

const StagesContext = createContext<StagesContextProps>(DEFAULT_VALUE);

const StagesContextProvider: React.FC = ({ children }) => {
  const [stageState, setStageState] = useState(DEFAULT_VALUE.stageState);

  return (
    <StagesContext.Provider
      value={{
        stageState,
        setStageState,
      }}
    >
      {children}
    </StagesContext.Provider>
  );
};

export { StagesContextProvider };
export default StagesContext;