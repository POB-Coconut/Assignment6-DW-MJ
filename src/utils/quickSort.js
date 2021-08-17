const divide = (array, command, left, right, pivot) => {
  while (left <= right) {
    if (command === "asc") {
      while (array[left] < pivot) {
        left++;
      }
      while (array[right] > pivot) {
        right--;
      }
    } else {
      while (array[left] > pivot) {
        left++;
      }
      while (array[right] < pivot) {
        right--;
      }
    }

    if (left <= right) {
      let swap = array[left];
      array[left] = array[right];
      array[right] = swap;
      left++;
      right--;
    }
  }
  return left;
};

export const quickSort = (
  array,
  command,
  left = 0,
  right = array.length - 1
) => {
  if (left >= right) {
    return;
  }

  const mid = Math.floor((left + right) / 2);
  const pivot = array[mid];
  const partition = divide(array, command, left, right, pivot);

  quickSort(array, command, left, partition - 1);
  quickSort(array, command, partition, right);

  return array;
};
