import { afterEach, expect, test, vi } from "vitest";

import devLabel from "./devLabel.js";

afterEach(() => {
  vi.unstubAllEnvs();
});

test("returns label in development", () => {
  vi.stubEnv("NODE_ENV", "development");

  expect(devLabel("Button")).toEqual({ label: "Button" });
});

test("returns null in production", () => {
  vi.stubEnv("NODE_ENV", "production");

  expect(devLabel("Button")).toBeNull();
});
