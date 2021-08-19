import { css, SerializedStyles } from "@emotion/react";

/**
 * Equivalent to the
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/margin-inline-start|margin-inline-start}
 * CSS property. [DEPRECATED]
 *
 * @deprecated Should be replaced with margin-inline-start.
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
