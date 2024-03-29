<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@asl-19/emotion-utils](./emotion-utils.md) &gt; [lineClampedText](./emotion-utils.lineclampedtext.md)

## lineClampedText variable

Clamp with ellipsis when text extends past the provided number of lines.

**Signature:**

```typescript
lineClampedText: ({ fontSize, height, lineCount, lineHeight, }: {
    fontSize: string;
    height?: "auto" | "fixed" | undefined;
    lineCount: number;
    lineHeight: number;
}) => SerializedStyles
```

## Remarks

By default the box will have a fixed height equivalent calculated using `fontSize`<!-- -->, `lineCount`<!-- -->, and `lineHeight`<!-- -->. This can be overridden by passing `height: "auto"` (more details in `height` argument docstring).

