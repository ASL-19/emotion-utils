import { css } from "@emotion/react";
import { FC, memo, ReactNode, useMemo } from "react";
import React from "react";

import devLabel from "./devLabel";
import Styles from "./Styles";

/**
 * Apply styles when viewport width is greater than or equal to AND/OR less
 * than the specified breakpoint.
 *
 * @public
 */
const createMedia = <
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
   * Apply styles when viewport width is greater than or equal to AND/OR less
   * than the specified breakpoint.
   */
  const breakpointStyles = (args: {
    [Breakpoint in keyof Breakpoints]?: {
      /**
       * Styles to apply when viewport width is greater than or equal to the
       * specified breakpoint.
       */
      gte?: Styles;

      /**
       * Styles to apply when viewport width is less than the specified
       * breakpoint.
       */
      lt?: Styles;
    };
  }) =>
    css(
      (Object.keys(args) as Array<keyof Breakpoints>).map((breakpoint) =>
        css(
          args[breakpoint]?.gte && {
            [`@media (min-width: ${breakpoints[breakpoint]}px)`]:
              args[breakpoint]?.gte,
          },
          args[breakpoint]?.lt && {
            [`@media (max-width: ${
              (breakpoints[breakpoint] as number) - 1
            }px)`]: args[breakpoint]?.lt,
          },
        ),
      ),
    );

  // ======================
  // === DisplayAtWidth ===
  // ======================
  const DisplayAtWidth: FC<
    | {
        children: ReactNode;
        greaterThanOrEqual: keyof typeof breakpoints;
        lessThan?: never;
      }
    | {
        children: ReactNode;
        greaterThanOrEqual?: never;
        lessThan: keyof typeof breakpoints;
      }
  > = memo(({ children, greaterThanOrEqual, lessThan }) => {
    const containerCss = useMemo(() => {
      const displayContents = css({
        display: "contents",
      });
      const displayNone = css({
        display: "none",
      });

      return css(
        devLabel("Media-containerCss"),
        greaterThanOrEqual
          ? // @ts-expect-error (TS insists greaterThanOrEqual is a string, but
            // it’s actually keyof Breakpoints)
            breakpointStyles({
              [greaterThanOrEqual]: {
                gte: displayContents,
                lt: displayNone,
              },
            })
          : lessThan
          ? // @ts-expect-error (TS insists lessThan is a string, but it’s
            // actually keyof Breakpoints)
            breakpointStyles({
              [lessThan]: {
                gte: displayNone,
                lt: displayContents,
              },
            })
          : // This should never be reached
            css({}),
      );
    }, [greaterThanOrEqual, lessThan]);

    return <div css={containerCss}>{children}</div>;
  });

  DisplayAtWidth.displayName = "DisplayAtWidth";

  return {
    breakpointStyles,
    DisplayAtWidth,
  };
};

export default createMedia;
