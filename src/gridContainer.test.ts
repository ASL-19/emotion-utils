import { expect, test } from "vitest";

import gridContainer from "./gridContainer.js";

test("creates columns with gap for both axes", () => {
  const { styles } = gridContainer({ columns: 3, gap: "1rem" });

  expect(styles).toContain("display:grid;");
  expect(styles).toContain("grid-template-columns:repeat(3, minmax(0, 1fr));");
  expect(styles).toContain("column-gap:1rem;");
  expect(styles).toContain("row-gap:1rem;");
});

test("accepts separate columnGap and rowGap", () => {
  const { styles } = gridContainer({
    columnGap: "1rem",
    columns: 2,
    rowGap: "2rem",
  });

  expect(styles).toContain("column-gap:1rem;");
  expect(styles).toContain("row-gap:2rem;");
});

test("defaults gaps to 0", () => {
  const { styles } = gridContainer({ columns: 2 });

  expect(styles).toContain("column-gap:0;");
  expect(styles).toContain("row-gap:0;");
});
