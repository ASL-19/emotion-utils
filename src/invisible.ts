import { css, SerializedStyles } from "@emotion/react";

/**
 * Hide element
 *
 * @public
 */

const invisible: SerializedStyles = css({
  clip: "rect(1px, 1px, 1px, 1px)",
  float: "none",
  height: "auto !important",
  lineHeight: "initial !important",
  margin: "0",
  overflow: "hidden",
  padding: "0",
  position: "absolute !important" as "absolute",
  whiteSpace: "nowrap",
});

export default invisible;
