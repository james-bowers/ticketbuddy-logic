export default function(pence: number): string {
  return (pence / 100).toFixed(2) + "";
}
