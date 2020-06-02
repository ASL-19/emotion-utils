import { css, SerializedStyles } from "@emotion/core";

/**
 * Equivalent to the
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/margin-block|margin-block}
 * CSS property.
 *
 * @remarks
 * As of 2020-05 logical properties aren’t pervasive enough to use on their own.
 *
 * @public
 */
const marginBlock = (value: string): SerializedStyles => css`
  margin-top: ${value};
  margin-bottom: ${value};
`;

export default marginBlock;
