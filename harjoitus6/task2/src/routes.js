// Import the logger instance from the logger module
const logger = require("./logger");

const { incrementCounter, getCounter, resetCounter } = require("./counter");
const express = require("express");

// Create a router that exports the routes to be used in the main application
const router = express.Router();

// Define a route for the root URL that sends a "Hello World!" for sanity check
router.get("/", (req, res) => {
  res.send("Hello World!");
});

/* Define routes for incrementing, reading, and resetting the counter.
Because it wasnt clearly defined if /counter-increase and /counter-read should return the counter value,
I decided to not returning any value, since businnes logic-wise it doesn't make sense to return the value. */
router.get("/counter-increase", (req, res) => {
  logger.info(`[ENDPOINT] ${req.method} '${req.path}'`);
  incrementCounter();
  res.sendStatus(200);
});

router.get("/counter-read", (req, res) => {
  logger.info(`[ENDPOINT] ${req.method} '${req.path}'`);
  res.json({ counter: getCounter() });
});

router.get("/counter-reset", (req, res) => {
  logger.info(`[ENDPOINT] ${req.method} '${req.path}'`);
  resetCounter();
  res.sendStatus(200);
});

// Export the router to be used in the main application
module.exports = router;
