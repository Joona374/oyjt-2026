const { expect } = require('chai');
const { add, sub, multiply, divide } = require('../src/mylib');

describe("mylib.js", () => {
    before(() => console.log("Starting mylib.js tests..."));
    describe("add()", () => {
        it("Adds two numbers together correctly", () => {
            expect(add(6, 3)).to.equal(9);
        })

        it("Throws an error if not provided two numbers", () => {
            expect(() => add("x", "y")).to.throw(Error);
        })
    })

    describe("sub()", () => {
        it("Subtracts two numbers correctly", () => {
        expect(sub(6, 3)).to.equal(3);
        });

        it("Throws an error if not provided two numbers", () => {
        expect(() => sub("x", "y")).to.throw(Error);
        });
    });

    describe("multiply()", () => {
        it("Multiplies two numbers correctly", () => {
            expect(multiply(6, 3)).to.equal(18);
        });

        it("Throws an error if not provided two numbers", () => {
            expect(() => multiply("x", "y")).to.throw(Error);
        });
    });

    describe("divide()", () => {
        it("Divides two numbers correctly", () => {
            expect(divide(6, 3)).to.equal(2);
        });

        it("Throws an error if not provided two numbers", () => {
            expect(() => divide("x", "y")).to.throw(Error);
        });

        it("Throws an error when dividing by zero", () => {
            expect(() => divide(6, 0)).to.throw(Error);
        });
    });
    after(() => console.log("Finished mylib.js tests."));
})
