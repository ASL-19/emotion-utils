import { css, SerializedStyles } from "@emotion/react";

/**
 * Equivalent to the
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/inset-inline-end|inset-inline-end}
 * CSS property.
 *
 * @deprecated Should be replaced with `inset-inline-end`.
 * @public
 */
const insetInlineEnd = (value: string): SerializedStyles =>
  css({
    'html[dir="ltr"] &': {
      right: value,
    },
    'html[dir="rtl"] &': {
      left: value,
    },
  });

export default insetInlineEnd;
