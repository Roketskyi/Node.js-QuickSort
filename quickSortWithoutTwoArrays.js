const arr = [3, 7, 0, 1, 4, 2];

function quickSort(arr, ascending = true, left = 0, right = arr.length - 1) {
  if (left < right) {
    let i = left - 1;

    for (let j = left; j < right; j++) {
      if ((ascending && arr[j] < arr[right]) || (!ascending && arr[j] > arr[right])) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }

    [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];

    const pivotIndex = i + 1;

    quickSort(arr, ascending, left, pivotIndex - 1);
    quickSort(arr, ascending, pivotIndex + 1, right);
  }

  return arr;
}

console.log("Сортування за зростанням:", quickSort(arr.slice(), true));
console.log("Сортування за спаданням:", quickSort(arr.slice(), false));
