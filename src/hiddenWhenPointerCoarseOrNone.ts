import { css } from "@emotion/react";

/**
 * Hide element when pointer is coarse or none
 *
 * @public
 */

const hiddenWhenPointerCoarseOrNone = css({
  "@media (pointer: coarse), (pointer: none)": {
    display: "none",
  },
});

export default hiddenWhenPointerCoarseOrNone;
