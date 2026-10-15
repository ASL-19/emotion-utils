import asl19 from "@asl-19/eslint-config";
import { defineConfig } from "eslint/config";

const eslintConfig = defineConfig([
  { ignores: ["dist/", ".yalc/"] },
  {
    extends: [
      asl19.base, // (for all projects)
      asl19.typescript, // (for TypeScript projects)
    ],
    rules: {
      // https://github.com/eslint-community/eslint-plugin-security/issues/21
      "security/detect-object-injection": "off",
    },
  },
  {
    // Deprecated utilities are still exported (and tested) until they’re
    // removed
    files: [
      "src/index.ts",
      "src/insetInline{End,Start}.ts",
      "src/{margin,padding}{Block,Inline}.ts",
      "src/logicalProperties.test.ts",
    ],
    rules: {
      "@typescript-eslint/no-deprecated": "off",
    },
  },
]);

export default eslintConfig;
