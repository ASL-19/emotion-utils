[**@asl-19/emotion-utils**](../README.md)

***

[@asl-19/emotion-utils](../README.md) / devLabel

# Function: devLabel()

> **devLabel**(`label`): `CSSObject` \| `null`

Returns `CSSObject` containing provided `label`, but only in development.

## Parameters

### label

`string`

## Returns

`CSSObject` \| `null`

## Remarks

Emotion’s `css` prop transform doesn’t strip manually added `label`s in prod,
so we should use this utility to avoid long (and potentially CPU expensive?)
generated `className`s in production.
