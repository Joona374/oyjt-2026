// math.test.js

const { expect } = require("chai");
const { hex2rgb, rgb2hex } = require("../src/utils");

/**
 * Unit tests for math.js
 *
 * @module test/math
 */
describe("utils.js", () => {
  /**
   * Tests for the hex2rgb() function
   */
  describe("hex2rgb()", () => {
    /**
     * It should correctly convert a hex string to rgb string.
     */
    it("should correctly convert a hex string to rgb string", () => {
      expect(hex2rgb("#009AFF")).to.equal("rgb(0, 154, 255)");
    });

    /**
     * It should throw an error if inputs is invalid.
     */
    it("should throw an error if inputs is invalid", () => {
      expect(() => hex2rgb("009AFF")).to.throw("Invalid hex string");
    });
  });

  /**
   * Tests for the rgb2hex() function
   */
  describe("rgb2hex()", () => {
    /**
     * It should correctly convert a hex string to rgb string.
     */
    it("should correctly convert a hex string to rgb string", () => {
      expect(rgb2hex("rgb(0, 154, 255)")).to.equal("#009AFF");
    });

    /**
     * It should throw an error if inputs is invalid.
     */
    it("should throw an error if inputs is invalid", () => {
      expect(() => rgb2hex("rgb(123, 100, 50")).to.throw("Invalid hex string");
    });
  });
});

