// utils.js

/**
 * Converts hex string to rgb string.
 *
 * @param {string} hex - The hex value as a string.
 * @returns {number} The string converted to rgb(xxx, yyy, zzz).
 * @throws {Error} If input is not a valid hex string.
 */
function hex2rgb(hex) {
  if (typeof hex !== "string") {
    throw new Error("Input must be a string");
  }
  if (hex[0] !== "#" || hex.length != 7) {
    throw new Error("Invalid hex string");
  }

  try {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgb(${r}, ${g}, ${b})`;
  } catch (error){
    console.error("Error parsin the string:", error.message);
  }
}

/**
 * Converts rgb string to hex string.
 *
 * @param {string} rgb - The rgb value rgb(XXX, YY, Z) as a string.
 * @returns {number} The string converted to #XXYYZZ.
 * @throws {Error} If input is not a valid rgb string.
 */
function rgb2hex(rgb) {
  if (typeof rgb !== "string") {
    throw new Error("Input must be a string");
  }
  if (rgb.slice(0, 4) !== "rgb(" || rgb[rgb.length - 1] !== ")" || !rgb.includes(",") || rgb.split(",").length !== 3) {
    throw new Error("Invalid hex string");
  }
  
  try {
    const value = rgb.split("(")[1]
    const parts = value.split(", ")
    const r = parseInt(parts[0]).toString(16).padStart(2, "0").toUpperCase();
    const g = parseInt(parts[1]).toString(16).padStart(2, "0").toUpperCase();
    const b = parseInt(parts[2].slice(0, -1))
      .toString(16)
      .padStart(2, "0")
      .toUpperCase();
    return `#${r}${g}${b}`;
  } catch (error){
    console.error("Error parsin the string:", error.message);
  }
}

/**
 * Data conversion functions.
 *
 * @module math
 * @property {function(number, number): number} hex2rgb - Converts hex string to an rgb string.
 * @property {function(number, number): number} rgb2hex - Converts rgb string to an hex string.
 */
module.exports = { hex2rgb, rgb2hex };
