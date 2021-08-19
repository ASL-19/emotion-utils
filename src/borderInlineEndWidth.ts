import { css, SerializedStyles } from "@emotion/react";

/**
 * Equivalent to the
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-end-width|border-inline-end-width}
 * CSS property. [DEPRECATED]
 *
 * @deprecated Should be replaced with native border-inline-end-width.
 * @public
 */
const borderInlineEndWidth = (value: string): SerializedStyles => {
  console.info(
    "borderInlineEndWidth is deprecated due to pervasive browser support for the native border-inline-end-width property. Please replace with border-inline-end-width."
  );

  return css`
    html[dir="ltr"] & {
      border-right-width: ${value};
    }
    html[dir="rtl"] & {
      border-left-width: ${value};
    }
  `;
};

export default borderInlineEndWidth;
