const request = require("supertest");
const expect = require("chai").expect;

process.env.NODE_ENV = "test"; // ensure server exports app
const app = require("../src/server");

/**
 * Integration tests for the Math API.
 * Uses Supertest for HTTP requests and Chai for assertions.
 */
describe("String convertion API", () => {
  /**
   * Test the root route.
   * Expects a 200 status and "Hello" response text.
   */
  it("responds to the root route", async () => {
    const res = await request(app).get("/");
    expect(res.status).to.equal(200);
    expect(res.text).to.equal("Hello");
  });

  /**
   * Test the /hex2rgb route with query parameters.
   * Expects HTTP status 200.
   */
  it("returns status 200 for /hex2rgb", async () => {
    const res = await request(app).get("/hex2rgb?hex=%23ff00aa");
    expect(res.status).to.equal(200);
  });

  /**
   * Test the /rgb2hex route with query parameters.
   * Expects HTTP status 200.
   */
  it("returns status 200 for /rgb2hex", async () => {
    const res = await request(app).get(
      "/rgb2hex?rgb=rgb%28255%2C%200%2C%20170%29",
    );
    expect(res.status).to.equal(200);
  });

  /**
   * Test the /hex2rgb route for correct conversion.
   * Expects to receive correctly converted RGB value.
   */
  it("returns the correctly converted RGB value", async () => {
    const res = await request(app).get("/hex2rgb?hex=%23ff00aa");
    expect(res.text).to.equal("rgb(255, 0, 170)");
  });

  /**
   * Test the /rgb2hex route for correct conversion.
   * Expects to receive correctly converted RGB value.
   */
  it("returns the correctly converted RGB value", async () => {
    const res = await request(app).get("/rgb2hex?rgb=rgb%28255%2C%200%2C%20170%29");
    expect(res.text).to.equal("#FF00AA");
  });
});

