import format from "format/date";

describe("format/date", () => {
  test("formats a date", () => {
    let date = new Date(1996, 6, 9);
    expect(format(date)).toEqual("09/07/1996");
  });
});
