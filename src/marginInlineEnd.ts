import { css, SerializedStyles } from "@emotion/react";

/**
 * Equivalent to the
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/margin-inline-end|margin-inline-end}
 * CSS property.
 *
 * @remarks
 * As of 2020-05 logical properties aren’t pervasive enough to use on their own.
 *
 * @public
 */
const marginInlineEnd = (value: string): SerializedStyles => css`
  html[dir="ltr"] & {
    margin-right: ${value};
  }
  html[dir="rtl"] & {
    margin-left: ${value};
  }
`;

export default marginInlineEnd;
