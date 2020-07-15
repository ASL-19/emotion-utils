import { css, SerializedStyles } from "@emotion/react";

/**
 * Equivalent to the
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-end-width|border-inline-end-width}
 * CSS property.
 *
 * @remarks
 * As of 2020-05
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties|logical properties}
 * aren’t pervasive enough to use on their own.
 *
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
