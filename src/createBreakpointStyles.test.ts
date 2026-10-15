import { expect, test } from "vitest";

import createBreakpointStyles from "./createBreakpointStyles.js";

const breakpointStyles = createBreakpointStyles({
  breakpoints: { lg: 1024, md: 768 },
});

test("applies gte styles at and above the breakpoint", () => {
  expect(breakpointStyles({ md: { gte: { color: "red" } } }).styles).toContain(
    "@media (min-width: 768px){color:red;}",
  );
});

test("applies lt styles below the breakpoint", () => {
  expect(breakpointStyles({ lg: { lt: { color: "blue" } } }).styles).toContain(
    "@media (max-width: 1023px){color:blue;}",
  );
});

test("applies gte and lt styles together", () => {
  const { styles } = breakpointStyles({
    md: { gte: { color: "red" }, lt: { color: "blue" } },
  });

  expect(styles).toContain("@media (min-width: 768px){color:red;}");
  expect(styles).toContain("@media (max-width: 767px){color:blue;}");
});
