import { css, SerializedStyles } from "@emotion/react";

/**
 * Hide when
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/@media/pointer|pointer media feature}
 * is `fine` (not `coarse` or `none`).
 *
 * @public
 */
const hiddenWhenPointerFine: SerializedStyles = css({
  "@media (pointer: fine)": {
    display: "none",
  },
});

export default hiddenWhenPointerFine;
