import { css, SerializedStyles } from "@emotion/react";

/**
 * Hide element when pointer is coarse or none
 *
 * @public
 */

const hiddenWhenPointerCoarseOrNone: SerializedStyles = css({
  "@media (pointer: coarse), (pointer: none)": {
    display: "none",
  },
});

export default hiddenWhenPointerCoarseOrNone;
