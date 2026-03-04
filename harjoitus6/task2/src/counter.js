// Import the logger instance from the logger module
const logger = require("./logger");

// Define a counter variable
let counter = 0;

/**
 * incrementCounter function increments the counter by one
 */
function incrementCounter() {
  counter++;
  logger.info("[COUNTER] increase " + counter);
}

/**
 * getCounter function returns the current value of the counter
 * @returns {number} The current value of the counter
 */
function getCounter() {
  logger.info("[COUNTER] read " + counter);
  return counter;
}

/**
 * Resets the counter to zero
 */
function resetCounter() {
  counter = 0;
  logger.info("[COUNTER] zeroed " + counter);
}

// Export the functions to be used in the routes.js file
module.exports = {
  incrementCounter,
  getCounter,
  resetCounter,
};
