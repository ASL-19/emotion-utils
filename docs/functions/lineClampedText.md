[**@asl-19/emotion-utils**](../README.md)

***

[@asl-19/emotion-utils](../README.md) / lineClampedText

# Function: lineClampedText()

> **lineClampedText**(`__namedParameters`): `SerializedStyles`

Clamp with ellipsis when text extends past the provided number of lines.

## Parameters

### \_\_namedParameters

#### fontSize

`string`

#### height?

`"auto"` \| `"fixed"` = `"fixed"`

Values:

- `"fixed"` (default): The resolved `height` will be calculated based on
  `fontSize`, `lineCount`, and `lineHeight`.

  The element will always take up the same amount of vertical space, which
  is good for layouts where vertical alignment is important.

- `"auto"`: The resolved `height` will be `auto`.

  The element’s height will be fully dynamic (based on its content), but
  still constrained to `lineCount`. This is good for layouts where vertical
  rhythm is more important than vertical alignment.

#### lineCount

`number`

#### lineHeight

`number`

## Returns

`SerializedStyles`

## Remarks

By default the box will have a fixed height equivalent calculated using
`fontSize`, `lineCount`, and `lineHeight`. This can be overridden by passing
`height: "auto"` (more details in `height` argument docstring).
