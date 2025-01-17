const createCounter = require("../src/closures/counter");

describe("createCounter", () => {
  it("should return a function that returns incremented values starting from n", () => {
    const counter1 = createCounter(10);
    expect(counter1()).toBe(10);
    expect(counter1()).toBe(11);
    expect(counter1()).toBe(12);

    const counter2 = createCounter(-2);
    expect(counter2()).toBe(-2);
    expect(counter2()).toBe(-1);
    expect(counter2()).toBe(0);
    expect(counter2()).toBe(1);
    expect(counter2()).toBe(2);
  });
});
