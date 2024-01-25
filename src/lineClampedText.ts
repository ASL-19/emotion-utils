import { css, SerializedStyles } from "@emotion/react";

/**
 * Clamp with ellipsis when text extends past the provided number of lines.
 *
 * @remarks
 * The box will always have a height equivalent to `lineCount` * `lineHeight` *
 * `fontSize`. This is necessary to ensure the overflow is cut off at the
 * correct vertical position.
 *
 * @public
 */
const lineClampedText = ({
  fontSize,
  lineCount,
  lineHeight,
}: {
  fontSize: string;
  lineCount: number;
  lineHeight: number;
}): SerializedStyles =>
  css({
    display: "-webkit-box",
    fontSize,
    height: `calc(${lineCount * lineHeight} * ${fontSize})`,
    overflow: "hidden",
    textOverflow: "ellipsis",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: lineCount,
  });

export default lineClampedText;
