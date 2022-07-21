import React, { createContext, useEffect, useState } from "react";

type SliderOverType = {
  visible: boolean;
}

type SlideOverContextProps = {
  state: SliderOverType;
  setState: React.Dispatch<React.SetStateAction<SliderOverType>>;
}

const DEFAULT_VALUE = {
  state: {
    visible: false,
  },
  setState: () => {},
}

const SlideOverContext = createContext<SlideOverContextProps>(DEFAULT_VALUE);

const SlideOverContextProvider: React.FC = ({ children }) => {
  const [state, setState] = useState(DEFAULT_VALUE.state);

  return (
    <SlideOverContext.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </SlideOverContext.Provider>
  );
};

export { SlideOverContextProvider };
export default SlideOverContext;