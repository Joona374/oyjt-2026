const express = require("express");
const routes = require("../src/routes");
const counter = require("../src/counter");

describe("routes.js", () => {
  // Chai v5+ is ESM-only; Node.js 18 requires dynamic import() as it lacks Node 22's ability to require() ESM modules.
  let expect;
  let app;
  let server;
  let port = 3001; // Use a different port for route tests to avoid conflicts

  before(async () => {
    const chai = await import("chai");
    expect = chai.expect;

    app = express();
    app.use("/", routes);

    server = app.listen(port);
  });

  after((done) => {
    server.close(done);
  });

  beforeEach(() => {
    counter.resetCounter();
  });

  describe("HTTP Endpoints", () => {
    it("GET / should return Hello World!", async () => {
      const response = await fetch(`http://localhost:${port}/`);
      const text = await response.text();
      expect(response.status).to.equal(200);
      expect(text).to.equal("Hello World!");
    });

    it("GET /counter-increase should increment the counter", async () => {
      await fetch(`http://localhost:${port}/counter-increase`);
      expect(counter.getCounter()).to.equal(1);
    });

    it("GET /counter-read should return the current count", async () => {
      counter.incrementCounter();
      const response = await fetch(`http://localhost:${port}/counter-read`);
      const data = await response.json();
      expect(response.status).to.equal(200);
      expect(data.counter).to.equal(1);
    });

    it("GET /counter-reset should reset the counter", async () => {
      counter.incrementCounter();
      await fetch(`http://localhost:${port}/counter-reset`);
      expect(counter.getCounter()).to.equal(0);
    });
  });
});
