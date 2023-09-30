import { css, SerializedStyles } from "@emotion/react";

/**
 * Hidden element when javascript is disabled
 *
 * @public
 */

const hiddenWhenNoJs: SerializedStyles = css({
  "html:not(.js) &": {
    display: "none",
  },
});

export default hiddenWhenNoJs;
