import totalOrders from "orders/totalOrders";
import { Order } from "types/resources";
import * as helper from "../helper";

describe("orders/totalOrders", () => {
  test("empty list of orders", () => {
    expect(totalOrders([])).toEqual(0);
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
    expect(totalOrders(orders)).toEqual(2);
  });
});
