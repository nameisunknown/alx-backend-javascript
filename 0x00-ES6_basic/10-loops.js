export default function appendToEachArrayValue(array, appendString) {
  const newArry = [];
  for (const idx of array) {
    newArry.push(newArry + appendString);
  }

  return array;
}
