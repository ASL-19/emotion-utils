# @asl-19/emotion-utils

Shared [Emotion](https://emotion.sh/) utility functions for [ASL19](https://asl19.org/) projects.

See [`docs/emotion-utils.md`](./docs/emotion-utils.md) for API documentation.

## Install

```sh
npm install @asl-19/emotion-utils
```

## Development

This package is developed with Node.js 18 (the active LTS [release](https://nodejs.org/en/about/releases/) as of 2023-08).

In this folder:

```sh
# Watch src and build into dist/cjs and dist/esm on change
npm run dev
```

If you add a new function or making a change to the arguments of an existing function (without this TypeScript won’t be aware of the changes, and the `build-lint-test` script will fail):

```sh
# Update api-extractor/* (metadata about code generated by api-extractor), docs/* (Markdown documentation generated by api-documenter using api-extractor metadata) and types/emotion-utils.d.ts (types generated by api-extractor)
npm run api-extractor-update
```

In a project that uses `emotion-utils`:

```sh
# Replace project‘s copy of emotion-utils with local version
npm link /absolute/path/to/emotion-utils
```

After running `npm link` you’ll see something like `"@asl-19/emotion-utils": "file:../../../emotion-utils"` in your project’s `package.json`, with corresponding changes in `package-lock.json`. And if you look at the project’s `node_modules/@asl-19/emotion-utils` you’ll see that it’s a [symlink](https://en.wikipedia.org/wiki/Symbolic_link) to the path provided to `npm link`. This means that any changes built into the `dist` directory will immediately apply to the project it’s linked into.

While testing in the project you may see this warning in your browser console:

> You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used.

This error seemingly happens because of the symlink created by `npm link` and won’t cause any problems once the package is installed normally.

Once you’re finished testing make sure you reset your `package.json` and `package-lock.json`, then run `npm install` to revert to the published copy of the package.
