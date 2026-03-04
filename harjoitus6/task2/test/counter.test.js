const counterModule = require("../src/counter");

describe("counter.js", () => {
  // Chai v5+ is ESM-only; Node.js 18 requires dynamic import() as it lacks Node 22's ability to require() ESM modules.
  let expect;
  before(async () => {
    const chai = await import("chai");
    expect = chai.expect;
  });

  beforeEach(() => {
    counterModule.resetCounter();
  });

  describe("Counter logic", () => {
    it("should initially return 0", () => {
      expect(counterModule.getCounter()).to.equal(0);
    });

    it("should increment the counter by 1", () => {
      counterModule.incrementCounter();
      expect(counterModule.getCounter()).to.equal(1);
    });

    it("should increment the counter multiple times", () => {
      counterModule.incrementCounter();
      counterModule.incrementCounter();
      expect(counterModule.getCounter()).to.equal(2);
    });

    it("should reset the counter to 0", () => {
      counterModule.incrementCounter();
      counterModule.resetCounter();
      expect(counterModule.getCounter()).to.equal(0);
    });
  });
});
