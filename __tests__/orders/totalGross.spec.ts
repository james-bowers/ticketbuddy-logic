import totalGross from "orders/totalGross";
import { Order } from "types/resources";
import * as helper from "../helper";

describe("orders/totalGross", () => {
  test("empty list of orders", () => {
    expect(totalGross([])).toEqual(0);
  });

  test("multiple orders", () => {
    let orders: Order[] = [
      helper.buildOrder({
        amount: 2000
      }),
      helper.buildOrder({
        amount: 1000
      })
    ];
    expect(totalGross(orders)).toEqual(3000);
  });
});
