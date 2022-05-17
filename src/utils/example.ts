export default function sum(input: Array<number>): number {
  return input.reduce((a, b) => a + b, 0);
}
