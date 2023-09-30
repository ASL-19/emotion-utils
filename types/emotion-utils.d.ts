/**
 * A collection of Emotion utility functions.
 *
 * @packageDocumentation
 */

import { CSSObject } from '@emotion/react';
import { SerializedStyles } from '@emotion/react';

/**
 * Returns `CSSObject` containing provided `label`, but only in development.
 *
 * @remarks
 * Emotion’s `css` prop transform doesn’t strip manually added `label`s in prod,
 * so we should use this utility to avoid long (and potentially CPU expensive?)
 * generated `className`s in production.
 */
export declare const devLabel: (label: string) => CSSObject | null;

/**
 * Create grid container with provided `gap` (or separate `columnGap` and
 * `rowGap` values).
 *
 * @public
 */
export declare const gridContainer: ({ columnGap, columns, gap, rowGap, }: {
    columns: number;
} & ({
    columnGap?: string | undefined;
    gap?: undefined;
    rowGap?: string | undefined;
} | {
    columnGap?: undefined;
    gap?: string | undefined;
    rowGap?: undefined;
})) => SerializedStyles;

/**
 * Hidden element when javascript is enabled
 *
 * @public
 */
export declare const hiddenWhenJs: SerializedStyles;

/**
 * Hidden element when javascript is disabled
 *
 * @public
 */
export declare const hiddenWhenNoJs: SerializedStyles;

/**
 * Hide element when pointer is coarse or none
 *
 * @public
 */
export declare const hiddenWhenPointerCoarseOrNone: SerializedStyles;

/**
 * Hide element when pointer is fine
 *
 * @public
 */
export declare const hiddenWhenPointerFine: SerializedStyles;

/**
 * Apply provided styles on hover.
 *
 * Uses the `any-hover` media condition (rather than `hover`) so hover styles
 * still appear on devices that support both touch and cursor input (e.g. iPads
 * and touch laptops).
 *
 * @public
 */
export declare const hoverStyles: (styles: Styles) => SerializedStyles;

/**
 * Equivalent to the
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/inset-inline-end|inset-inline-end}
 * CSS property.
 *
 * @deprecated Should be replaced with `inset-inline-end`.
 * @public
 */
export declare const insetInlineEnd: (value: string) => SerializedStyles;

/**
 * Equivalent to the
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/inset-inline-start|inset-inline-start}
 * CSS property.
 *
 * @deprecated Should be replaced with `inset-inline-start`.
 * @public
 */
export declare const insetInlineStart: (value: string) => SerializedStyles;

/**
 * Hide element
 *
 * @public
 */
export declare const invisible: SerializedStyles;

/**
 * Display ellipsis for overflow text
 *
 * @public
 */
export declare const lineClampedText: ({ fontSize, lineCount, lineHeight, }: {
    fontSize: string;
    lineCount: number;
    lineHeight: number;
}) => SerializedStyles;

/**
 * Equivalent to the
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/margin-block|margin-block}
 * CSS property.
 *
 * @deprecated Should be replaced with `margin-block`.
 * @public
 */
export declare const marginBlock: (value: string) => SerializedStyles;

/**
 * Equivalent to the
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/margin-inline|margin-inline}
 * CSS property.
 *
 * @deprecated Should be replaced with `margin-inline`.
 * @public
 */
export declare const marginInline: (value: string) => SerializedStyles;

/**
 * Equivalent to the
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/padding-block|padding-block}
 * CSS property.
 *
 * @deprecated Should be replaced with `padding-block`.
 * @public
 */
export declare const paddingBlock: (value: string) => SerializedStyles;

/**
 * Emotion object or serialized style(s). Useful to allow style utility
 * functions (e.g. `breakpointStyles`) to accept a `CSSObject` directly with
 * type safety and IntelliSense.
 *
 * This should only be used for functions that accept styles and return
 * `SerializedStyles` — not for raw values passed to the `css` prop. If we pass
 * an object or array to the `css` prop directly the styles will be serialized
 * on each render (rather than serialized once when the module loads).
 *
 * @see
 * https://emotion.sh/docs/best-practices#consider-defining-styles-outside-your-components
 */
export declare type Styles = SerializedStyles | CSSObject | Array<SerializedStyles | CSSObject>;

/**
 * Render hidden pseudo-element to pre-fill space taken up by bolded text (to
 * avoid layout shift)*/
export declare const transitionDurationWithPrefersReducedMotion: (transitionDuration: string) => SerializedStyles;

export { }
