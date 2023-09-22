import { css } from "@emotion/react";

/**
 * Hidden element when javascript is enabled
 *
 * @public
 */

const hiddenWhenJs = css({
  "html.js &": {
    display: "none",
  },
});

export default hiddenWhenJs;
