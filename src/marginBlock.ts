import { css, SerializedStyles } from "@emotion/react";

/**
 * Equivalent to the
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/margin-block|margin-block}
 * CSS property.
 *
 * @deprecated Should be replaced with `margin-block`.
 * @public
 */
const marginBlock = (value: string): SerializedStyles => css`
  margin-top: ${value};
  margin-bottom: ${value};
`;

export default marginBlock;
