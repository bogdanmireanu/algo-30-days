const map = require("../src/array_transformations/transform_each_el");

describe("map function", () => {
  test("transforms array elements using the plusone function", () => {
    const arr = [1, 2, 3];
    const plusone = (n) => n + 1;
    const result = map(arr, plusone);
    expect(result).toEqual([2, 3, 4]);
  });

  test("transforms array elements using the plusI function", () => {
    const arr = [1, 2, 3];
    const plusI = (n, i) => n + i;
    const result = map(arr, plusI);
    expect(result).toEqual([1, 3, 5]);
  });

  test("transforms array elements using the constant function", () => {
    const arr = [10, 20, 30];
    const constant = () => 42;
    const result = map(arr, constant);
    expect(result).toEqual([42, 42, 42]);
  });
});
