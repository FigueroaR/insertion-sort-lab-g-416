function findMinAndRemove(array){
  let min = array[0];
  let newIndex = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i]
      newIndex = i
    }
  }
  array.splice(newIndex, 1)
  return min
}

function insertionSort(array) {
  let sorted = [];
  for (let i = 0; i < array.length; i++) {
    findMinAndRemove(array).push(sorted)
    return sorted
  }
}
