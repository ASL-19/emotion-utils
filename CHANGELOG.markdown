# @asl-19/emotion-utils changelog

## Unreleased

- Fix `Styles` imports in `createBreakpointStyles` and `hoverStyles` type declarations missing their `.js` extension, which broke type resolution for consumers using `moduleResolution: "nodenext"`

Development tooling:

- Replace API Extractor and API Documenter with TypeDoc
- Add Vitest tests for each utility
- Remove package-changed and npm-check-updates, and add `outdated` scripts
- Add publint, Are the Types Wrong? (`attw`) and a docs freshness check to `lint-test`
- Manage Node.js 24 and pinact with mise
- Add npm supply-chain gates (`.npmrc`, `devEngines`, `allowScripts`)
- Update TypeScript to 6.0, ESLint to 10, @asl-19/eslint-config to 1.0 and Prettier to 3.9, and compile with `module: "nodenext"`
- Pin GitHub Actions to commit SHAs, limit the workflow token to read-only, and run CI on pull requests
- Add agent instructions (`AGENTS.md`) and Claude Code permission settings

## [1.0.0](https://github.com/ASL-19/emotion-utils/pulls?q=is%3Aclosed+milestone%3A1.0.0+is%3Apr) [2025-08-15]

- Migrate to ESM [[#33](https://github.com/ASL-19/emotion-utils/pull/33)]

## [0.6.2](https://github.com/ASL-19/emotion-utils/pulls?q=is%3Aclosed+milestone%3A0.6.2+is%3Apr) [2024-01-25]

### Changes

- In `lineClampedText` add optional `height` argument (with new `"auto"` value) and `lineHeight` style (via internal project) [[#32](https://github.com/ASL-19/emotion-utils/pull/32)]

## [0.6.1](https://github.com/ASL-19/emotion-utils/pulls?q=is%3Aclosed+milestone%3A0.6.1+is%3Apr) [2024-01-25]

### Fixes

- In `lineClampedText` `WebkitLineClamp` (`-webkit-line-clamp`) replace `"lineCount"` with `lineCount` [[#30](https://github.com/ASL-19/emotion-utils/pull/30)]

## [0.6.0](https://github.com/ASL-19/emotion-utils/pulls?q=is%3Aclosed+milestone%3A0.6.0+is%3Apr) [2023-12-11]

### Changes

- Added `createBreakpointStyles` [[#26](https://github.com/ASL-19/emotion-utils/pull/26)]
- Updated dependencies [[#28](https://github.com/ASL-19/emotion-utils/pull/28)]

## [0.5.0](https://github.com/ASL-19/emotion-utils/pulls?q=is%3Aclosed+milestone%3A0.5.0+is%3Apr) [2023-09-30]

### Changes

- Added new styles (types, styles, and style functions) [[#25](https://github.com/ASL-19/emotion-utils/pull/25)]

## [0.4.0](https://github.com/ASL-19/emotion-utils/pulls?q=is%3Aclosed+milestone%3A0.4.0+is%3Apr) [2023-03-22]

### Changes

- Removed deprecated logical property functions; marked existing logical property functions as deprecated
- Upgraded dependencies and project configuration

## [0.3.0](https://github.com/ASL-19/emotion-utils/pulls?q=is%3Aclosed+milestone%3A0.3.0+is%3Apr) [2021-08-19]

### Changes

- Upgraded dependencies [[#10](https://github.com/ASL-19/emotion-utils/pull/10)]

### Deprecations

- Deprecated some CSS logical property utilities [[#16](https://github.com/ASL-19/emotion-utils/pull/16)]:

  Deprecated the following:
  - borderInlineEndWidth
  - borderInlineStartWidth
  - marginInlineEnd
  - marginInlineStart
  - paddingInlineEnd
  - paddingInlineStart

  The native equivalent of each of these have been supported by all major browsers (excluding IE) since 2019.

## [0.2.1](https://github.com/ASL-19/emotion-utils/pulls?q=is%3Aclosed+milestone%3A0.2.1+is%3Apr) [2020-10-21]

### Changes

- Switched to [@asl-19/eslint-config](https://github.com/ASL-19/eslint-config), upgraded dependencies [[#6](https://github.com/ASL-19/emotion-utils/pull/6)]
- Upgraded dependencies, added stylelint [[#8](https://github.com/ASL-19/emotion-utils/pull/8)]

## [0.2.0](https://github.com/ASL-19/emotion-utils/pulls?q=is%3Aclosed+milestone%3A0.2.0+is%3Apr) [2020-07-15]

### Changes

- **Breaking**: Upgraded Emotion packages to 11.0.0-next [[#2](https://github.com/ASL-19/emotion-utils/pull/2)]

## 0.1.3 [2020-06-02]

First open-source release
