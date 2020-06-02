import { css, SerializedStyles } from "@emotion/core";

/**
 * Equivalent to the
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/padding-inline|padding-inline}
 * CSS property.
 *
 * @remarks
 * As of 2020-05 logical properties aren’t pervasive enough to use on their own.
 *
 * @public
 */
const paddingInline = (value: string): SerializedStyles => css`
  padding-right: ${value};
  padding-left: ${value};
`;

export default paddingInline;
