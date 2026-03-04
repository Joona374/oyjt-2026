// Import the logger instance from the logger module
const logger = require("./logger");

// Create an Express application and set the port number
const express = require("express");
const app = express();
const port = 3000;

// Import the routes and use them in the application
const routes = require("./routes");
app.use("/", routes);

// Start the server and listen on the specified port
const server = app.listen(port, () => {
  logger.info("[MAIN] Starting");
  console.log(`Example app listening on port ${port}`);
});


// Handle graceful shutdown on SIGINT (e.g., Ctrl+C)
process.on("SIGINT", () => {
  logger.info("[MAIN] Stopping");
  process.exit(0);
});

// Export the server for testing purposes
module.exports = server;