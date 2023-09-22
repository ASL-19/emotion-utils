import { CSSObject } from "@emotion/react";

/**
 * Returns CSSObject containing provided `label`, but only in development.
 *
 * @remarks
 * Emotion’s `css` prop transform doesn’t strip manually added `label`s in prod,
 * so we should use this utility to avoid long (and potentially CPU expensive?)
 * generated `className`s in production.
 *
 * @param environment - current node environment - usually from process.env.NODE_ENV
 *
 * @public
 */
const devLabel = ({
  environment,
  label,
}: {
  environment: string;
  label: string;
}) =>
  environment === "development"
    ? ({
        label,
      } as CSSObject)
    : null;

export default devLabel;
