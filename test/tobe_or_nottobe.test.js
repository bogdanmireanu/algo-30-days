const expectFunction = require("../src/closures/tobe_or_nottobe");

describe("expect", () => {
  it("should return true when values are equal using toBe", () => {
    expect(expectFunction(5).toBe(5)).toBe(true);
  });

  it("should throw an error when values are not equal using toBe", () => {
    expect(() => expectFunction(5).toBe(null)).toThrow("Not Equal");
  });

  it("should return true when values are not equal using notToBe", () => {
    expect(expectFunction(5).notToBe(null)).toBe(true);
  });

  it("should throw an error when values are equal using notToBe", () => {
    expect(() => expectFunction(5).notToBe(5)).toThrow("Equal");
  });
});
