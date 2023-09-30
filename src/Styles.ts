import { CSSObject, SerializedStyles } from "@emotion/react";

/**
 * Emotion `CSSObject` or `SerializedStyles` (or array containing them).
 *
 * @remarks
 * Useful to allow style utility functions to accept `CSSObject` directly with
 * type safety and IntelliSense.
 *
 * This should only be used for functions that accept styles and return
 * `SerializedStyles` — not for raw values passed to the `css` prop. If we pass
 * an object or array to the `css` prop directly the styles will be serialized
 * on each render (rather than serialized once when the module loads).
 *
 * @see
 * https://emotion.sh/docs/best-practices#consider-defining-styles-outside-your-components
 *
 * @public
 */
type Styles =
  | SerializedStyles
  | CSSObject
  | Array<SerializedStyles | CSSObject>;

export default Styles;
