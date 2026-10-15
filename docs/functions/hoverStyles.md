[**@asl-19/emotion-utils**](../README.md)

***

[@asl-19/emotion-utils](../README.md) / hoverStyles

# Function: hoverStyles()

> **hoverStyles**(`styles`): `SerializedStyles`

Apply provided styles on hover.

## Parameters

### styles

[`Styles`](../type-aliases/Styles.md)

## Returns

`SerializedStyles`

## Remarks

Uses the
[media condition](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/any-hover|`any-hover`)
(rather than
[https://developer.mozilla.org/en-US/docs/Web/CSS/@media/hover\|\`hover\`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/hover|`hover`))
so hover styles still appear on devices that support both touch and cursor
input (e.g. iPads and touch laptops).
