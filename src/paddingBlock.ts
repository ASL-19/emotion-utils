import { css, SerializedStyles } from "@emotion/react";

/**
 * Equivalent to the
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/padding-block|padding-block}
 * CSS property.
 *
 * @remarks
 * As of 2020-05 logical properties aren’t pervasive enough to use on their own.
 *
 * @public
 */
const paddingBlock = (value: string): SerializedStyles => css`
  padding-top: ${value};
  padding-bottom: ${value};
`;

export default paddingBlock;
