# Task2 

## Overview
- In this task I'm implementing a simple Tally counter REST API.
- The API controlls a in memory counter that can be read, incremented and reset.
- The API is implemented using Express.js
- Project also includes logging ussing Winston
- Tests are implemented using Mocha and Chai

## Running the project
- Install dependencies: `npm install`
- Start the server (from root ): `node src/main.js`
- Run tests (from root): `npm test`
- Manual testing: A `rest.http` file is provided for the VS Code REST Client extension.

## API Endpoints
- `GET /`: Returns a "Hello World" sanity check.
- `GET /counter-increase`: Increments the counter by 1.
- `GET /counter-read`: Returns the current counter value as JSON.
- `GET /counter-reset`: Sets the counter back to 0.

## Project Structure
- `src/`: Contains the application logic (routes, counter logic, logger).
- `test/`: Contains the test suites for checking the counter, routes, and server startup.
- `logs/`: Application logs are saved here by Winston (error.log, and combined.log).

## Logging
Logging is implemented using Winston. It tracks endpoint access, counter changes, and server lifecycle events. Logs are output both to the console and to files in the `logs/` directory.
