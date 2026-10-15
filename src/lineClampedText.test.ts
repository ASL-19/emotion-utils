import { expect, test } from "vitest";

import lineClampedText from "./lineClampedText.js";

test("clamps to lineCount with a fixed height by default", () => {
  const { styles } = lineClampedText({
    fontSize: "1rem",
    lineCount: 2,
    lineHeight: 1.5,
  });

  expect(styles).toContain("-webkit-line-clamp:2;");
  expect(styles).toContain("height:calc(3 * 1rem);");
  expect(styles).toContain("line-height:1.5;");
});

test("uses auto height when height is auto", () => {
  const { styles } = lineClampedText({
    fontSize: "1rem",
    height: "auto",
    lineCount: 2,
    lineHeight: 1.5,
  });

  expect(styles).toContain("height:auto;");
});
