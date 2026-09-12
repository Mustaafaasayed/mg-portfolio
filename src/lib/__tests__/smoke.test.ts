import { describe, expect, it } from "vitest";

import { buildMailto } from "@/lib/mailto";

describe("buildMailto", () => {
  it("constructs a mailto href from an email address", () => {
    expect(buildMailto("placeholder@example.com")).toBe(
      "mailto:placeholder@example.com"
    );
  });
});
