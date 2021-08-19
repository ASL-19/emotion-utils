import { css, SerializedStyles } from "@emotion/react";

/**
 * Equivalent to the
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/padding-inline-start|padding-inline-start}
 * CSS property. [DEPRECATED]
 *
 * @deprecated Should be replaced with native padding-inline-start.
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
