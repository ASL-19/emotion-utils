import { css, SerializedStyles } from "@emotion/react";

/**
 * Equivalent to the
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/padding-inline-end|padding-inline-end}
 * CSS property. [DEPRECATED]
 *
 * @deprecated Should be replaced with native padding-inline-end.
 * @public
 */
const paddingInlineEnd = (value: string): SerializedStyles => css`
  html[dir="ltr"] & {
    padding-right: ${value};
  }
  html[dir="rtl"] & {
    padding-left: ${value};
  }
`;

export default paddingInlineEnd;
