import { expect, test } from "vitest";

import transitionDurationWithPrefersReducedMotion from "./transitionDurationWithPrefersReducedMotion.js";

test("sets transition duration, overridden when reduced motion is preferred", () => {
  const { styles } = transitionDurationWithPrefersReducedMotion("0.2s");

  expect(styles).toMatch(/^transition-duration:0\.2s;/);
  expect(styles).toContain(
    "@media (prefers-reduced-motion){ &[data-backdrop], &[data-dialog]{transition-duration:0.01s;}transition-duration:0s;}",
  );
});
