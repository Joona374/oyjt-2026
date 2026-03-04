const logger = require("../src/logger");

describe("main.js", () => {
  // Chai v5+ is ESM-only; Node.js 18 requires dynamic import() as it lacks Node 22's ability to require() ESM modules.
  let expect;
  before(async () => {
    const chai = await import("chai");
    expect = chai.expect;
  });

  // Clear require cache before each test so main.js executes fresh every time
  beforeEach(() => {
    delete require.cache[require.resolve("../src/main")];
  });

  describe("Execution", () => {
    it("should execute and log messages without throwing errors", () => {
      expect(() => {
        require("../src/main");
      }).to.not.throw();
    });

    it("should call logger.info, logger.warn, and logger.error methods", () => {
      let infoCalled = false;
      let warnCalled = false;
      let errorCalled = false;

      // Temporarily intercept the methods
      logger.info = () => {
        infoCalled = true;
      };
      logger.warn = () => {
        warnCalled = true;
      };
      logger.error = () => {
        errorCalled = true;
      };

      // requiring main executes the logging statements
      require("../src/main");

      expect(infoCalled).to.be.true;
      expect(warnCalled).to.be.true;
      expect(errorCalled).to.be.true;
    });
  });
});
