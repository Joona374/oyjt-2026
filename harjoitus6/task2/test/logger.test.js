const logger = require("../src/logger");

describe("logger.js", () => {
  // Chai v5+ is ESM-only; Node.js 18 requires dynamic import() as it lacks Node 22's ability to require() ESM modules.
  let expect;
  before(async () => {
    const chai = await import("chai");
    expect = chai.expect;
  });

  describe("Logger Configuration", () => {
    it("should export a logger instance defined with info level", () => {
      expect(logger).to.be.an("object");
      expect(logger.level).to.equal("info");
    });

    it("should have three transports configured", () => {
      expect(logger.transports).to.be.an("array");
      expect(logger.transports.length).to.equal(3);
    });

    it("should expose info, warn, and error methods", () => {
      expect(logger.info).to.be.a("function");
      expect(logger.warn).to.be.a("function");
      expect(logger.error).to.be.a("function");
    });
  });
});
