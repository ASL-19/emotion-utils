import { css } from "@emotion/react";

/**
 * Render hidden pseudo-element to pre-fill space taken up by bolded text (to
 * avoid layout shift)*/
const transitionDurationWithPrefersReducedMotion = (
  transitionDuration: string,
) =>
  css(
    {
      transitionDuration,
    },
    {
      "@media (prefers-reduced-motion)": {
        /* For Ariakit dialogs we need to set transition-duration to 0.01s or its
  animation detection code (which waits for exit animations to complete before
  unmounting dialogs) will fail.

  Without this trick we’d need to use matchMedia to track the state of the
  (prefers-reduced-motion) media condition and dynamically update the
  useDialogState animated argument.  */
        " &[data-backdrop], &[data-dialog]": {
          transitionDuration: "0.01s",
        },

        transitionDuration: "0s",
      },
    },
  );

export default transitionDurationWithPrefersReducedMotion;
