import { createMedia as fresnelCreateMedia } from "@artsy/fresnel";
import { css } from "@emotion/react";

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

  // [2023-11-20] TODO: Remove DisplayAtWidth and make this change in other
  // projects if we don’t see any problems with @artsy/fresnel’s Media component
  // with React 18.
  //
  // We implemented DisplayAtWidth as a replacement for Media since Fresnel was
  // previously incompatible with React 18, but they finally found a solution
  // recently: https://github.com/artsy/fresnel/pull/341

  // ======================
  // === DisplayAtWidth ===
  // ======================

  // const DisplayAtWidth: FC<
  //   | {
  //       children: ReactNode;
  //       greaterThanOrEqual: keyof typeof breakpoints;
  //       lessThan?: never;
  //     }
  //   | {
  //       children: ReactNode;
  //       greaterThanOrEqual?: never;
  //       lessThan: keyof typeof breakpoints;
  //     }
  // > = memo(({ children, greaterThanOrEqual, lessThan }) => {
  //   const containerCss = useMemo(() => {
  //     const displayContents = css({
  //       display: "contents",
  //     });
  //     const displayNone = css({
  //       display: "none",
  //     });

  //     return css(
  //       devLabel("Media-containerCss"),
  //       greaterThanOrEqual
  //         ? // @ts-expect-error (TS insists greaterThanOrEqual is a string, but
  //           // it’s actually keyof Breakpoints)
  //           breakpointStyles({
  //             [greaterThanOrEqual]: {
  //               gte: displayContents,
  //               lt: displayNone,
  //             },
  //           })
  //         : lessThan
  //         ? // @ts-expect-error (TS insists lessThan is a string, but it’s
  //           // actually keyof Breakpoints)
  //           breakpointStyles({
  //             [lessThan]: {
  //               gte: displayNone,
  //               lt: displayContents,
  //             },
  //           })
  //         : // This should never be reached
  //           css({}),
  //     );
  //   }, [greaterThanOrEqual, lessThan]);

  //   return <div css={containerCss}>{children}</div>;
  // });

  // DisplayAtWidth.displayName = "DisplayAtWidth";

  // ===============
  // === Fresnel ===
  // ===============

  const fresnelMedia = fresnelCreateMedia({ breakpoints });

  const mediaStyles = fresnelMedia.createMediaStyle();

  const { Media, MediaContextProvider } = fresnelMedia;

  return {
    breakpointStyles,
    // DisplayAtWidth,
    Media,
    MediaContextProvider,
    mediaStyles,
  };
};

export default createMedia;
