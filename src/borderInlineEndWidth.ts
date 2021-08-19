import { css, SerializedStyles } from "@emotion/react";

/**
 * Equivalent to the
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-end-width|border-inline-end-width}
 * CSS property. [DEPRECATED]
 *
 * @deprecated Should be replaced with native border-inline-end-width.
 * @public
 */
const borderInlineEndWidth = (value: string): SerializedStyles => css`
  html[dir="ltr"] & {
    border-right-width: ${value};
  }
  html[dir="rtl"] & {
    border-left-width: ${value};
  }
`;

export default borderInlineEndWidth;
