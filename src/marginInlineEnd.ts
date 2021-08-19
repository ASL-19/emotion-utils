import { css, SerializedStyles } from "@emotion/react";

/**
 * Equivalent to the
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/margin-inline-end|margin-inline-end}
 * CSS property. [DEPRECATED]
 *
 * @deprecated Should be replaced with native margin-inline-end.
 * @public
 */
const marginInlineEnd = (value: string): SerializedStyles => {
  console.info(
    "marginInlineEnd is deprecated due to pervasive browser support for the native margin-inline-end property. Please replace with margin-inline-end."
  );

  return css`
    html[dir="ltr"] & {
      margin-right: ${value};
    }
    html[dir="rtl"] & {
      margin-left: ${value};
    }
  `;
};

export default marginInlineEnd;
