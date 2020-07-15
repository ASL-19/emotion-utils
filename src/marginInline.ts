import { css, SerializedStyles } from "@emotion/react";

/**
 * Equivalent to the
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/margin-inline|margin-inline}
 * CSS property.
 *
 * @remarks
 * As of 2020-05 logical properties aren’t pervasive enough to use on their own.
 *
 * @public
 */
const marginInline = (value: string): SerializedStyles => css`
  margin-right: ${value};
  margin-left: ${value};
`;

export default marginInline;
