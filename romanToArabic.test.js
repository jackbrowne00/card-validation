import romanToArabic from "./romanToArabic";

// describe("describe", () => {
//   it("it", () => {
//     const actual = romanToArabic("I");
//     expect(actual).toEqual(1);
//   });
// });
test("Given I, return 1", () => {
  const actual = romanToArabic("I");
  expect(actual).toEqual(1);
});
test("Given IV, return 4", () => {
  const actual = romanToArabic("IV");
  expect(actual).toEqual(4);
});

test("Given V, return 5", () => {
  const actual = romanToArabic("V");
  expect(actual).toEqual(5);
});
test("Given IX, return 9", () => {
  const actual = romanToArabic("IX");
  expect(actual).toEqual(9);
});

test("Given XLII, return 42", () => {
  const actual = romanToArabic("XLII");
  expect(actual).toEqual(42);
});

test("Given MCMLXXV, return 1975", () => {
  const actual = romanToArabic("MCMLXXV");
  expect(actual).toEqual(1975);
});
test("Given MMXIII, return 2013", () => {
  const actual = romanToArabic("MMXIII");
  expect(actual).toEqual(2013);
});

test("Given function is not passed an argument, throw an error", () => {
  expect(romanToArabic()).toEqual("ERROR!!");
});
