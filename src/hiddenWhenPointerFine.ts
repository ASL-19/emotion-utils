import { css } from "@emotion/react";

/**
 * Hide element when pointer is fine
 *
 * @public
 */

const hiddenWhenPointerFine = css({
  "@media (pointer: fine)": {
    display: "none",
  },
});

export default hiddenWhenPointerFine;
