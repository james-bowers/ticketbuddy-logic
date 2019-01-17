export default function(amount: string): number {
  return Number(amount.replace(/[^0-9.-]+/g, ""));
}
