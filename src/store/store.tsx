import React, { createContext, useReducer } from "react";

interface example1Interface {
  name: string;
}

interface example2Interface {
  index: number;
}

interface StateInterface {
  example1: example1Interface;
  example2: example2Interface;
}

type StateAction =
  | {
      type: "example1";
      payload: example1Interface;
    }
  | {
      type: "example2";
      payload: example2Interface;
    };

const initialState: StateInterface = {
  example1: {
    name: "Home",
  },
  example2: {
    index: 0,
  },
};

export const Context = createContext([
  initialState,
  (action: StateAction) => {},
] as const);

export const Store: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(
    (state: StateInterface, action: StateAction): StateInterface => {
      switch (action.type) {
        case "example1":
          return { ...state, example1: action.payload };
        case "example2":
          return { ...state, example2: action.payload };

        default:
          return state;
      }
    },
    initialState
  );

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

// useCase :
// const [state, dispatch] = useContext(Context);

// dispatch({
//     type: "example1",
//     payload: {
//       name: "Bio",
//     },
//   })
