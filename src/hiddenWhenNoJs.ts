import { css } from "@emotion/react";

/**
 * Hidden element when javascript is disabled
 *
 * @public
 */

const hiddenWhenNoJs = css({
  "html:not(.js) &": {
    display: "none",
  },
});

export default hiddenWhenNoJs;
