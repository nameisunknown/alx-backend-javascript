export default function divideFunction(numerator, denominator) {
  switch (denominator) {
    case 0: throw Error('cannot divide by 0');
    default:
      return numerator / denominator;
  }
}
