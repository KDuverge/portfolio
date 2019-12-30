import React, { useReducer, createContext, ReactChild } from "react";

import { animationReducer } from "./reducer";

export const initialState = {
  1: { y: 0 },
  2: { y: 0 },
  3: { y: 0 },
  theme: {
    outerBackground: "var(--color-light)",
    innerBackground: "var(--color-grey)",
    navColor: "#000",
    navUnderline: "var(--color-primary-gradient)",
    socialIcons: "var(--color-primary-green)",
    socialLine: 'var(--color-primary-gradient)',
    linkedInInnerFill: 'var(--color-light)',
    innerBorder: 'var(--color-grey)',
  }
};

interface AnimationProviderProps {
  children: ReactChild;
}

interface DispatchIF {
  dispatch: ({ type }: { type: number }) => void;
}

export const StateContext = createContext(initialState);
export const DispatchContext = createContext({} as DispatchIF);

export const AnimationProvider = ({ children }: AnimationProviderProps) => {
  const [state, dispatch] = useReducer(animationReducer, initialState);

  return (
    <DispatchContext.Provider value={{ dispatch }}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
};
