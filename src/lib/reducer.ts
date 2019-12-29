enum ActionEnum {
  "ONE" = 1,
  "TWO" = 2
}

interface ActionType {
  type: ActionEnum;
}

type lineNumber = 1 | 2 | 3;

interface Y {
  y: number;
}

type State<L> = {
  [num in lineNumber]: L;
}

export const animationReducer = (state: State<Y>, action: ActionType) => {
  
  switch (action.type) {
    case 1:
      return {
        1: { y: 1 },
        2: { y: 1 },
        3: { y: 1 }
      };
    case 2:
      return {
        1: { y: 0.4 },
        2: { y: 1.6 },
        3: { y: 0.4 }
      };
    default:
      return state;
  }
};
