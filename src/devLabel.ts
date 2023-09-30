import { CSSObject } from "@emotion/react";

/**
 * Returns `CSSObject` containing provided `label`, but only in development.
 *
 * @remarks
 * Emotion’s `css` prop transform doesn’t strip manually added `label`s in prod,
 * so we should use this utility to avoid long (and potentially CPU expensive?)
 * generated `className`s in production.
 */
const devLabel = (label: string) =>
  process.env.NODE_ENV === "development"
    ? ({
        label,
      } as CSSObject)
    : null;

export default devLabel;
