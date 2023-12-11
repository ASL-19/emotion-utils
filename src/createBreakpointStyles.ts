import { css, SerializedStyles } from "@emotion/react";

import Styles from "./Styles";

/**
 * Create function that applies styles when viewport width is greater than or
 * equal to and/or less than the specified breakpoints.
 *
 * @remarks
 * The returned function’s args can only accept keys from the provided
 * `breakpoints`.
 *
 * @public
 */
const createBreakpointStyles = <
  Breakpoints extends {
    [name: string]: number;
  },
>({
  breakpoints,
}: {
  breakpoints: Breakpoints;
}) => {
  // ========================
  // === breakpointStyles ===
  // ========================

  /**
   * Apply styles when viewport width is greater than or equal to and/or less
   * than the specified breakpoints.
   */
  const breakpointStyles = (args: {
    [Breakpoint in keyof Breakpoints]?:
      | {
          gte: Styles;
          lt?: Styles;
        }
      | {
          gte?: Styles;
          lt: Styles;
        };
  }): SerializedStyles =>
    css(
      (Object.keys(args) as Array<keyof Breakpoints>).map((breakpoint) => {
        const breakpointGteAndOrLtStyles = args[breakpoint];
        const breakpointViewportWidth = breakpoints[breakpoint];

        // This should only happen if called with an unknown breakpoint
        // (causing type checking to fail)
        if (
          breakpointViewportWidth === undefined ||
          breakpointGteAndOrLtStyles === undefined
        ) {
          return null;
        }

        return [
          breakpointGteAndOrLtStyles.gte && {
            [`@media (min-width: ${breakpointViewportWidth}px)`]:
              breakpointGteAndOrLtStyles.gte,
          },
          breakpointGteAndOrLtStyles.lt && {
            [`@media (max-width: ${breakpointViewportWidth - 1}px)`]:
              breakpointGteAndOrLtStyles.lt,
          },
        ];
      }),
    );

  return breakpointStyles;
};

export default createBreakpointStyles;
