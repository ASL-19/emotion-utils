import { css } from "@emotion/react";

/**
 * Create grid container with provided `gap` (or separate `columnGap` and
 * `rowGap` values).
 *
 * @public
 */
const gridContainer = ({
  columnGap,
  columns,
  gap,
  rowGap,
}: {
  columns: number;
} & (
  | {
      columnGap?: string;
      gap?: never;
      rowGap?: string;
    }
  | {
      columnGap?: never;
      gap?: string;
      rowGap?: never;
    }
)) => {
  const resolvedColumnGap = columnGap ?? gap ?? 0;
  const resolvedRowGap = rowGap ?? gap ?? 0;

  return css({
    columnGap: resolvedColumnGap,
    display: "grid",
    gridAutoRows: "min-content",
    gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
    justifyItems: "stretch",
    rowGap: resolvedRowGap,
  });
};

export default gridContainer;
