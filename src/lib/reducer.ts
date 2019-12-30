enum ActionEnum {
  "LIGHT" = 1,
  "DARK" = 2
}

interface ActionType {
  type: ActionEnum;
}

interface Y {
  y: number;
}

export interface ThemeIF {
  outerBackground: string;
  innerBackground: string;
  navColor: string;
  navUnderline: string;
  socialIcons: string;
  innerBorder: string;
  socialLine: string;
  linkedInInnerFill: string;
}

interface State {
  1: Y;
  2: Y;
  3: Y;
  theme: ThemeIF;
}

export const animationReducer = (state: State, action: ActionType) => {
  switch (action.type) {
    case 1:
      return {
        1: { y: 0 },
        2: { y: 0 },
        3: { y: 0 },
        theme: {
          outerBackground: "var(--color-light)",
          innerBackground: "var(--color-grey)",
          navColor: "#000",
          navUnderline: "var(--color-primary-green)",
          socialIcons: "var(--color-primary-green)",
          socialLine: 'var(--color-primary-gradient)',
          innerBorder: '1px solid var(--color-grey)',
          linkedInInnerFill: 'var(--color-light)',
        }
      };
    case 2:
      return {
        1: { y: -4 },
        2: { y: 5 },
        3: { y: -5 },
        theme: {
          outerBackground: "var(--color-primary-gradient)",
          innerBackground: "transparent",
          navColor: "var(--color-light)",
          navUnderline: "var(--color-light)",
          socialIcons: "var(--color-light)",
          socialLine: 'var(--color-light)',
          innerBorder: 'none',
          linkedInInnerFill: 'var(--color-primary-blue)',
        }
      };
    default:
      return state;
  }
};
