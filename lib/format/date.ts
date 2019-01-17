function prependZero(num: number): string {
  return num < 10 ? `0${num}` : num + "";
}

export default function(date: Date): string {
  return [
    prependZero(date.getDate()),
    prependZero(date.getMonth() + 1),
    date.getFullYear()
  ].join("/");
}
