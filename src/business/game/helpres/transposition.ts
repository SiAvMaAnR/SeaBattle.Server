function transposition(array: number[][]): number[][] {
  return array[0].map((col, i) => array.map((row) => row[i]));
}
