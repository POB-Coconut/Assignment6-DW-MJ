export const quickSort = (array, command) => {
  if (array.length < 2) {
    return array;
  }

  const pivot = [array[0]];
  const left = [];
  const right = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else if (array[i] > pivot) {
      right.push(array[i]);
    } else {
      pivot.push(array[i]);
    }
  }

  return command === "asc"
    ? quickSort(left, command).concat(pivot, quickSort(right, command))
    : quickSort(right, command).concat(pivot, quickSort(left, command));
};
