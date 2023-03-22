import { css, SerializedStyles } from "@emotion/react";

/**
 * Equivalent to the
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/padding-block|padding-block}
 * CSS property.
 *
 * @deprecated Should be replaced with `padding-block`.
 * @public
 */
const paddingBlock = (value: string): SerializedStyles =>
  css({
    paddingBottom: value,
    paddingTop: value,
  });

export default paddingBlock;
