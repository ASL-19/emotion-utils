[**@asl-19/emotion-utils**](../README.md)

***

[@asl-19/emotion-utils](../README.md) / createBreakpointStyles

# Function: createBreakpointStyles()

> **createBreakpointStyles**\<`Breakpoints`\>(`__namedParameters`): (`args`) => `SerializedStyles`

Create function that applies styles when viewport width is greater than or
equal to and/or less than the specified breakpoints.

## Type Parameters

### Breakpoints

`Breakpoints` *extends* `Record`\<`string`, `number`\>

## Parameters

### \_\_namedParameters

#### breakpoints

`Breakpoints`

## Returns

> (`args`): `SerializedStyles`

Apply styles when viewport width is greater than or equal to and/or less
than the specified breakpoints.

### Parameters

#### args

\{ \[Breakpoint in string \| number \| symbol\]?: \{ gte: Styles; lt?: Styles \} \| \{ gte?: Styles; lt: Styles \} \}

### Returns

`SerializedStyles`

## Remarks

The returned function’s args can only accept keys from the provided
`breakpoints`.
