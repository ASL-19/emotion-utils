import { css, SerializedStyles } from "@emotion/react";

/**
 * Equivalent to the
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/padding-inline|padding-inline}
 * CSS property.
 *
 * @deprecated Should be replaced with `padding-inline`.
 * @public
 */
const paddingInline = (value: string): SerializedStyles =>
  css({
    paddingLeft: value,
    paddingRight: value,
  });

export default paddingInline;
