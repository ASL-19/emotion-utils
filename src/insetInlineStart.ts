import { css, SerializedStyles } from "@emotion/react";

/**
 * Equivalent to the
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/inset-inline-start|inset-inline-start}
 * CSS property.
 *
 * @deprecated Should be replaced with `inset-inline-start`.
 * @public
 */
const insetInlineStart = (value: string): SerializedStyles =>
  css({
    'html[dir="ltr"] &': {
      left: value,
    },
    'html[dir="rtl"] &': {
      right: value,
    },
  });

export default insetInlineStart;
