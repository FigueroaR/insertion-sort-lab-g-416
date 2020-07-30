function findMinAndRemove(array){
  let min;
  let newIndex;
  for (let i = 0; i < array.length; i++) {
    if (i < array[0]) {
      min = array[i]
    }
  }
  array.splice(min, 1)
  return min
}

function insertionSort(array){
  
}
