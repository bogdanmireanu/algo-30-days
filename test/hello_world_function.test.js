const createHelloWorld = require("../src/closures/hello_world_function");

describe("createHelloWorld", () => {
  it('should return a function that always returns "Hello World"', () => {
    const f = createHelloWorld();
    expect(f()).toBe("Hello World");
    expect(f({}, null, 42)).toBe("Hello World");
    expect(f("any", "number", "of", "arguments")).toBe("Hello World");
  });
});
