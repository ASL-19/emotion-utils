import { expect, test } from "vitest";

import hiddenWhenJs from "./hiddenWhenJs.js";
import hiddenWhenNoJs from "./hiddenWhenNoJs.js";
import hiddenWhenPointerCoarseOrNone from "./hiddenWhenPointerCoarseOrNone.js";
import hiddenWhenPointerFine from "./hiddenWhenPointerFine.js";
import invisible from "./invisible.js";

test.each([
  ["hiddenWhenJs", hiddenWhenJs, "html.js &{display:none;}"],
  ["hiddenWhenNoJs", hiddenWhenNoJs, "html:not(.js) &{display:none;}"],
  [
    "hiddenWhenPointerCoarseOrNone",
    hiddenWhenPointerCoarseOrNone,
    "@media (pointer: coarse), (pointer: none){display:none;}",
  ],
  [
    "hiddenWhenPointerFine",
    hiddenWhenPointerFine,
    "@media (pointer: fine){display:none;}",
  ],
])("%s hides the element", (_name, styles, expected) => {
  expect(styles.styles).toBe(expected);
});

test("invisible hides the element visually without display: none", () => {
  expect(invisible.styles).toContain("position:absolute !important;");
  expect(invisible.styles).toContain("clip:rect(1px, 1px, 1px, 1px);");
  expect(invisible.styles).not.toContain("display:none");
});
