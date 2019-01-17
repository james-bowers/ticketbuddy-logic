import totalTickets from "orders/totalTickets";
import { Order } from "types/resources";
import * as helper from "../helper";

describe("orders/totalTickets", () => {
  test("empty list of orders", () => {
    expect(totalTickets([])).toEqual(0);
  });

  test("multiple orders", () => {
    let orders: Order[] = [
      helper.buildOrder({
        items: [
          {
            parent: "ticket-id-1",
            quantity: 2
          }
        ]
      }),
      helper.buildOrder({
        items: [
          {
            parent: "ticket-id-1",
            quantity: 5
          },
          {
            parent: "ticket-id-2",
            quantity: 3
          }
        ]
      })
    ];
    expect(totalTickets(orders)).toEqual(10);
  });
});
