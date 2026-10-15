import { css } from "@emotion/react";
import { expect, test } from "vitest";

import hoverStyles from "./hoverStyles.js";

test("applies styles on hover for devices with any hover input", () => {
  expect(hoverStyles({ color: "red" }).styles).toBe(
    "@media (any-hover: hover){&:hover{color:red;}}",
  );
});

test("accepts SerializedStyles", () => {
  expect(hoverStyles(css({ color: "red" })).styles).toContain("color:red;");
});
