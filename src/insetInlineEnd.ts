import { css, SerializedStyles } from "@emotion/react";

/**
 * Equivalent to the
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/inset-inline-end|inset-inline-end}
 * CSS property.
 *
 * @remarks
 * As of 2020-05
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties|logical properties}
 * aren’t pervasive enough to use on their own.
 *
 * @public
 */
const insetInlineEnd = (value: string): SerializedStyles => css`
  html[dir="ltr"] & {
    right: ${value};
  }
  html[dir="rtl"] & {
    left: ${value};
  }
`;

export default insetInlineEnd;
