import { Order } from "../types/resources";
import * as _ from "lodash";

export default function(orders: Order[]): number {
  return _.sumBy(orders, "amount");
}
