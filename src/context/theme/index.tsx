import React, { createContext, useEffect, useState } from "react";

type ThemeType = {
  type: string;
}

type ThemContextProps = {
  state: ThemeType;
  setState: React.Dispatch<React.SetStateAction<ThemeType>>;
}

const DEFAULT_VALUE = {
  state: {
    type: 'default',
  },
  setState: () => {},
}

const ThemeContext = createContext<ThemContextProps>(DEFAULT_VALUE);

const ThemeContextProvider: React.FC = ({ children }) => {
  const [state, setState] = useState(DEFAULT_VALUE.state);

  return (
    <ThemeContext.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContextProvider };
export default ThemeContext;