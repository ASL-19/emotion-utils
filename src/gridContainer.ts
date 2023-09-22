import { css } from "@emotion/react";

/**
 *
 *
 * @public
 */
const gridContainerGap = "1.25rem";

const gridContainer = ({
  columnGap = gridContainerGap,
  columns = 12,
  rowGap = gridContainerGap,
}: {
  columnGap?: string;
  columns?: number;
  rowGap?: string;
} = {}) =>
  css(
    {
      columnGap,
      display: "grid",
      gridAutoRows: "min-content",
      gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
      justifyItems: "stretch",
      rowGap,
    },
    {
      /* If the sum of every grid-column-gap is larger than the viewport width
    the container won’t shrink to fit the viewport */
      [`@media(max-width: calc(${gridContainerGap} * ${columns}))`]: {
        gridColumnGap: "0",
      },
    },
  );

export default gridContainer;
