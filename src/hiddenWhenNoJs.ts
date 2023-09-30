import { css, SerializedStyles } from "@emotion/react";

/**
 * Hide when JavaScript not loaded.
 *
 * @remarks
 * Relies on `<html>` `js` class, which we set in the
 * `getBeforeRenderScriptContent` function in most web projects.
 *
 * @public
 */
const hiddenWhenNoJs: SerializedStyles = css({
  "html:not(.js) &": {
    display: "none",
  },
});

export default hiddenWhenNoJs;
