import { CSSObject } from "@emotion/react";

// Library code is checked without Node types, but bundlers replace
// process.env.NODE_ENV at build time
declare const process: { env: { NODE_ENV?: string } };

/**
 * Returns `CSSObject` containing provided `label`, but only in development.
 *
 * @remarks
 * Emotion’s `css` prop transform doesn’t strip manually added `label`s in prod,
 * so we should use this utility to avoid long (and potentially CPU expensive?)
 * generated `className`s in production.
 *
 * @public
 */
const devLabel = (label: string) =>
  process.env.NODE_ENV === "development" ? ({ label } as CSSObject) : null;

export default devLabel;
