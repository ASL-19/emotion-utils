import { css, SerializedStyles } from "@emotion/react";

import Styles from "./Styles";

/**
 * Apply provided styles on hover.
 *
 * @remarks
 * Uses the
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/@media/any-hover|`any-hover` media condition}
 * (rather than
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/@media/hover|`hover`})
 * so hover styles still appear on devices that support both touch and cursor
 * input (e.g. iPads and touch laptops).
 *
 * @public
 */
const hoverStyles = (styles: Styles): SerializedStyles =>
  css({
    "@media (any-hover: hover)": {
      "&:hover": styles,
    },
  });

export default hoverStyles;
