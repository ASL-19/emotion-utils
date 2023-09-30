import { css, SerializedStyles } from "@emotion/react";

/**
 * Hidden element when javascript is enabled
 *
 * @public
 */

const hiddenWhenJs: SerializedStyles = css({
  "html.js &": {
    display: "none",
  },
});

export default hiddenWhenJs;
