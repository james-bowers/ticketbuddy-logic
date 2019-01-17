import fromPence from "format/amount/fromPence";

describe("format/amount/fromPence", () => {
  test("formats pence to float", () => {
    expect(fromPence(3000)).toEqual("30.00");
  });

  test("formats pence to float - does not round up oddly", () => {
    expect(fromPence(3071)).toEqual("30.71");
  });

  test("formats pence to float - does not round down oddly", () => {
    expect(fromPence(3021)).toEqual("30.21");
  });

  test("formats pence to float to 2 dp", () => {
    expect(fromPence(3050)).toEqual("30.50");
  });
});
