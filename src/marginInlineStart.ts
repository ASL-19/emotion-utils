import { css, SerializedStyles } from "@emotion/core";

/**
 * Equivalent to the
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/margin-inline-start|margin-inline-start}
 * CSS property.
 *
 * @remarks
 * As of 2020-05 logical properties aren’t pervasive enough to use on their own.
 *
 * @public
 */
const marginInlineStart = (value: string): SerializedStyles => css`
  html[dir="ltr"] & {
    margin-left: ${value};
  }
  html[dir="rtl"] & {
    margin-right: ${value};
  }
`;

export default marginInlineStart;
