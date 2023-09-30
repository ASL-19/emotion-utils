import { css, SerializedStyles } from "@emotion/react";

/**
 * Set a transition duration with override to 0 if the user has enabled an
 * OS/browser setting to request sites to reduce motion.
 *
 * @public
 */
const transitionDurationWithPrefersReducedMotion = (
  transitionDuration: string,
): SerializedStyles =>
  css(
    {
      transitionDuration,
    },
    {
      "@media (prefers-reduced-motion)": {
        // For Ariakit dialogs we need to set transition-duration to 0.01s or
        // its animation detection code (which waits for exit animations to
        // complete before unmounting dialogs) will fail.

        // Without this trick we’d need to use matchMedia to track the state of
        // the (prefers-reduced-motion) media condition and dynamically update
        // the useDialogState animated argument.
        " &[data-backdrop], &[data-dialog]": {
          transitionDuration: "0.01s",
        },

        transitionDuration: "0s",
      },
    },
  );

export default transitionDurationWithPrefersReducedMotion;
