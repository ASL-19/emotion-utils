[**@asl-19/emotion-utils**](../README.md)

***

[@asl-19/emotion-utils](../README.md) / Styles

# Type Alias: Styles

> **Styles** = (`CSSObject` \| `SerializedStyles`)[] \| `CSSObject` \| `SerializedStyles`

Emotion `CSSObject` or `SerializedStyles` (or array containing them).

## Remarks

Useful to allow style utility functions to accept `CSSObject` directly with
type safety and IntelliSense.

This should only be used for functions that accept styles and return
`SerializedStyles` — not for raw values passed to the `css` prop. If we pass
an object or array to the `css` prop directly the styles will be serialized
on each render (rather than serialized once when the module loads).

## See

https://emotion.sh/docs/best-practices#consider-defining-styles-outside-your-components
