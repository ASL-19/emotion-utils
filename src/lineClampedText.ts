import { css, SerializedStyles } from "@emotion/react";

/**
 * Display ellipsis for overflow text
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
    WebkitLineClamp: "lineCount",
  });

export default lineClampedText;
