import { css, SerializedStyles } from "@emotion/react";

/**
 * Equivalent to the
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/margin-inline|margin-inline}
 * CSS property.
 *
 * @deprecated Should be replaced with `margin-inline`.
 * @public
 */
const marginInline = (value: string): SerializedStyles =>
  css({
    marginLeft: value,
    marginRight: value,
  });

export default marginInline;
