const createCounter = require("../src/closures/counter2");

describe("createCounter", () => {
  test("should handle increment, reset, and decrement correctly", () => {
    const counter = createCounter(5);

    expect(counter.increment()).toBe(6); // Increment from 5 to 6
    expect(counter.reset()).toBe(5); // Reset to initial value 5
    expect(counter.decrement()).toBe(4); // Decrement from 5 to 4
  });

  test("should handle multiple operations correctly", () => {
    const counter = createCounter(0);

    expect(counter.increment()).toBe(1); // Increment from 0 to 1
    expect(counter.increment()).toBe(2); // Increment from 1 to 2
    expect(counter.decrement()).toBe(1); // Decrement from 2 to 1
    expect(counter.reset()).toBe(0); // Reset to initial value 0
    expect(counter.reset()).toBe(0); // Reset again to initial value 0
  });
});
