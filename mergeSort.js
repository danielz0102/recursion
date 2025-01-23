function merge(left, right) {
  let result = [];
  let i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  for (; i < left.length; i++) {
    result.push(left[i]);
  }

  for (; j < right.length; j++) {
    result.push(right[j]);
  }

  return result;
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

console.log(mergeSort([105, 79, 100, 110]));
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
