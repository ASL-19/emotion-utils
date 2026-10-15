import { expect, test } from "vitest";

import insetInlineEnd from "./insetInlineEnd.js";
import insetInlineStart from "./insetInlineStart.js";
import marginBlock from "./marginBlock.js";
import marginInline from "./marginInline.js";
import paddingBlock from "./paddingBlock.js";
import paddingInline from "./paddingInline.js";

test.each([
  [
    "insetInlineEnd",
    insetInlineEnd,
    'html[dir="ltr"] &{right:1px;}html[dir="rtl"] &{left:1px;}',
  ],
  [
    "insetInlineStart",
    insetInlineStart,
    'html[dir="ltr"] &{left:1px;}html[dir="rtl"] &{right:1px;}',
  ],
  ["marginBlock", marginBlock, "margin-bottom:1px;margin-top:1px;"],
  ["marginInline", marginInline, "margin-left:1px;margin-right:1px;"],
  ["paddingBlock", paddingBlock, "padding-bottom:1px;padding-top:1px;"],
  ["paddingInline", paddingInline, "padding-left:1px;padding-right:1px;"],
])("%s sets both sides", (_name, logicalProperty, expected) => {
  expect(logicalProperty("1px").styles).toBe(expected);
});
