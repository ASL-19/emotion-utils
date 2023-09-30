import { css, SerializedStyles } from "@emotion/react";

/**
 * Hide element when pointer is fine
 *
 * @public
 */

const hiddenWhenPointerFine: SerializedStyles = css({
  "@media (pointer: fine)": {
    display: "none",
  },
});

export default hiddenWhenPointerFine;
