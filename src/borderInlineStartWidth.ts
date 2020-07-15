import { css, SerializedStyles } from "@emotion/react";

/**
 * Equivalent to the
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-start-width|border-inline-start-width}
 * CSS property.
 *
 * @remarks
 * As of 2020-05
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties|logical properties}
 * aren’t pervasive enough to use on their own.
 *
 * @public
 */
const borderInlineStartWidth = (value: string): SerializedStyles => css`
  html[dir="ltr"] & {
    border-left-width: ${value};
  }
  html[dir="rtl"] & {
    border-right-width: ${value};
  }
`;

export default borderInlineStartWidth;
