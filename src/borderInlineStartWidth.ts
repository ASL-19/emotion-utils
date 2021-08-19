import { css, SerializedStyles } from "@emotion/react";

/**
 * Equivalent to the
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-start-width|border-inline-start-width}
 * CSS property. [DEPRECATED]
 *
 * @deprecated Should be replaced with native border-inline-start-width.
 * @public
 */
const borderInlineStartWidth = (value: string): SerializedStyles => {
  console.info(
    "borderInlineStartWidth is deprecated due to pervasive browser support for the native border-inline-start-width property. Please replace with border-inline-start-width."
  );

  return css`
    html[dir="ltr"] & {
      border-left-width: ${value};
    }
    html[dir="rtl"] & {
      border-right-width: ${value};
    }
  `;
};

export default borderInlineStartWidth;
