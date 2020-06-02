import { css, SerializedStyles } from "@emotion/core";

/**
 * Equivalent to the
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/inset-inline-start|inset-inline-start}
 * CSS property.
 *
 * @remarks
 * As of 2020-05 logical properties aren’t pervasive enough to use on their own.
 *
 * @public
 */
const insetInlineStart = (value: string): SerializedStyles => css`
  html[dir="ltr"] & {
    left: ${value};
  }
  html[dir="rtl"] & {
    right: ${value};
  }
`;

export default insetInlineStart;
