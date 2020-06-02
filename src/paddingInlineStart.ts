import { css, SerializedStyles } from "@emotion/core";

/**
 * Equivalent to the
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/padding-inline-start|padding-inline-start}
 * CSS property.
 *
 * @remarks
 * As of 2020-05 logical properties aren’t pervasive enough to use on their own.
 *
 * @public
 */
const paddingInlineStart = (value: string): SerializedStyles => css`
  html[dir="ltr"] & {
    padding-left: ${value};
  }
  html[dir="rtl"] & {
    padding-right: ${value};
  }
`;

export default paddingInlineStart;
