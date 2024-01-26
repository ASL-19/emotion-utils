import { css, SerializedStyles } from "@emotion/react";

/**
 * Clamp with ellipsis when text extends past the provided number of lines.
 *
 * @remarks
 * By default the box will have a fixed height equivalent calculated using
 * `fontSize`, `lineCount`, and `lineHeight`. This can be overridden by passing
 * `height: "auto"` (more details in `height` argument docstring).
 *
 * @public
 */
const lineClampedText = ({
  fontSize,
  height = "fixed",
  lineCount,
  lineHeight,
}: {
  fontSize: string;
  /**
   * Values:
   *
   * - `"fixed"` (default): The resolved `height` will be calculated based on
   *   `fontSize`, `lineCount`, and `lineHeight`.
   *
   *   The element will always take up the same amount of vertical space, which
   *   is good for layouts where vertical alignment is important.
   *
   * - `"auto"`: The resolved `height` will be `auto`.
   *
   *   The element’s height will be fully dynamic (based on its content), but
   *   still constrained to `lineCount`. This is good for layouts where vertical
   *   rhythm is more important than vertical alignment.
   */
  height?: "auto" | "fixed";
  lineCount: number;
  lineHeight: number;
}): SerializedStyles =>
  css({
    display: "-webkit-box",
    fontSize,
    height:
      height === "auto"
        ? "auto"
        : `calc(${lineCount * lineHeight} * ${fontSize})`,
    lineHeight,
    overflow: "hidden",
    textOverflow: "ellipsis",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: lineCount,
  });

export default lineClampedText;
