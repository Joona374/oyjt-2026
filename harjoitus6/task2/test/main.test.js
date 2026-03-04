const logger = require("../src/logger");

describe("main.js", () => {
  // Chai v5+ is ESM-only; Node.js 18 requires dynamic import() as it lacks Node 22's ability to require() ESM modules.
  let expect;
  let server;

  before(async () => {
    const chai = await import("chai");
    expect = chai.expect;
    // Require main to start the server
    server = require("../src/main");
  });

  describe("Server basic setup", () => {
    it("should be listening on port 3000", () => {
      const address = server.address();
      expect(address.port).to.equal(3000);
      expect(server.listening).to.be.true;
    });

    it("should have logger available", () => {
      expect(logger).to.be.an("object");
      expect(logger.info).to.be.a("function");
    });
  });

  after((done) => {
    // Close the server after tests to free up the port
    if (server && server.close) {
        server.close(done);
    } else {
        done();
    }
  });


});
