import { css } from "@emotion/react";

import Styles from "./Styles";

/**
 * Apply provided styles on hover.
 *
 * Uses the `any-hover` media condition (rather than `hover`) so hover styles
 * still appear on devices that support both touch and cursor input (e.g. iPads
 * and touch laptops).
 *
 * @public
 */
const hoverStyles = (styles: Styles) =>
  css({
    "@media (any-hover: hover)": {
      "&:hover": styles,
    },
  });

export default hoverStyles;
