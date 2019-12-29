import React, { useReducer, createContext, ReactChild } from "react";
import { animationReducer } from "./reducer";

export const initialState = {
  1: { y: 1 },
  2: { y: 1 },
  3: { y: 1 }
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
