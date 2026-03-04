# Task 1 Overview
- This task implements a simple demo version of a logging system.
- The system uses the winston logging library to log messages to both the console and a file.
- The main file ``main.js`` imports the logger from ``logger.js`` and uses it to log messages at different levels (info, warn, error). 
- The logger "transports" these log messages to the console and a files named ``combined.log`` and ``error.log`` depending on the level of the message.

## Built and tested with
- NodeJS: 18.20.8
- Express: 4.18.2
- Winston: 3.11.0
- Chai: 6.2.2
- Mocha: 11.7.5