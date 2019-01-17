import { Order } from "types/resources";
import * as _ from "lodash";
import * as Pricing from "Pricing";

export function buildOrder(overrides?: any): Order {
  return _.merge(
    {
      userId: "string",
      eventId: "string",
      items: [],
      amount: 0,
      ticketbuddy_fee: Pricing.applicationFee(),
      refunded: 0,
      currency: "gbp",
      email_at_time_of_order: "tester@ticketbuddy.co.uk",
      paid: true
    },
    overrides
  );
}
