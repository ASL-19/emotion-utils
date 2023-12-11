/**
 * A collection of Emotion utility functions.
 *
 * @packageDocumentation
 */

import { CSSObject } from '@emotion/react';
import { SerializedStyles } from '@emotion/react';

/**
 * Create function that applies styles when viewport width is greater than or
 * equal to and/or less than the specified breakpoints.
 *
 * @remarks
 * The returned function’s args can only accept keys from the provided
 * `breakpoints`.
 *
 * @public
 */
export declare const createBreakpointStyles: <Breakpoints extends {
    [name: string]: number;
}>({ breakpoints, }: {
    breakpoints: Breakpoints;
}) => (args: { [Breakpoint in keyof Breakpoints]?: {
        gte: Styles;
        lt?: Styles | undefined;
    } | {
        gte?: Styles | undefined;
        lt: Styles;
    } | undefined; }) => SerializedStyles;

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
 * Hide when JavaScript loaded.
 *
 * @remarks
 * Relies on `<html>` `js` class, which we set in the
 * `getBeforeRenderScriptContent` function in most web projects.
 *
 * @public
 */
export declare const hiddenWhenJs: SerializedStyles;

/**
 * Hide when JavaScript not loaded.
 *
 * @remarks
 * Relies on `<html>` `js` class, which we set in the
 * `getBeforeRenderScriptContent` function in most web projects.
 *
 * @public
 */
export declare const hiddenWhenNoJs: SerializedStyles;

/**
 * Hide when
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/@media/pointer|pointer media feature}
 * is `coarse` or `none` (not `fine`).
 *
 * @public
 */
export declare const hiddenWhenPointerCoarseOrNone: SerializedStyles;

/**
 * Hide when
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/@media/pointer|pointer media feature}
 * is `fine` (not `coarse` or `none`).
 *
 * @public
 */
export declare const hiddenWhenPointerFine: SerializedStyles;

/**
 * Apply provided styles on hover.
 *
 * @remarks
 * Uses the
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/@media/any-hover|`any-hover` media condition}
 * (rather than
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/@media/hover|`hover`})
 * so hover styles still appear on devices that support both touch and cursor
 * input (e.g. iPads and touch laptops).
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
 * Visually hide element while keeping it accessible to keyboard and screen
 * reader navigation.
 *
 * @public
 */
export declare const invisible: SerializedStyles;

/**
 * Clamp with ellipsis when text extends past the provided number of lines.
 *
 * @remarks
 * The box will always have a height equivalent to `lineCount` * `lineHeight` *
 * `fontSize`. This is necessary to ensure the overflow is cut off at the
 * correct vertical position.
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
export declare type Styles = SerializedStyles | CSSObject | Array<SerializedStyles | CSSObject>;

/**
 * Set a transition duration with override to 0 if the user has enabled an
 * OS/browser setting to request sites to reduce motion.
 *
 * @public
 */
export declare const transitionDurationWithPrefersReducedMotion: (transitionDuration: string) => SerializedStyles;

export { }
