import { css, SerializedStyles } from "@emotion/react";

/**
 * Hide when JavaScript loaded.
 *
 * @remarks
 * Relies on `<html>` `js` class, which we set in the
 * `getBeforeRenderScriptContent` function in most web projects.
 *
 * @public
 */
const hiddenWhenJs: SerializedStyles = css({
  "html.js &": {
    display: "none",
  },
});

export default hiddenWhenJs;
