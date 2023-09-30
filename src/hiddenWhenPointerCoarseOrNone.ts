import { css, SerializedStyles } from "@emotion/react";

/**
 * Hide when
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/@media/pointer|pointer media feature}
 * is `coarse` or `none` (not `fine`).
 *
 * @public
 */
const hiddenWhenPointerCoarseOrNone: SerializedStyles = css({
  "@media (pointer: coarse), (pointer: none)": {
    display: "none",
  },
});

export default hiddenWhenPointerCoarseOrNone;
