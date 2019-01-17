export default function(currency: "gbp"): string {
  return {
    gbp: "£"
  }[currency];
}
