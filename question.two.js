/**
 * Create a function that can find the Nth smallest number in an array. 
 * The array can be very very big, so you are not allowed using the  
 * Array.sort() method. Try to build a function that would perform fast.  
 * Also, explain why using Array.sort() isn't a good idea when sorting  
 * large arrays.  
 */

function quicksort(array, left, right) {
  var i, j, pivot, aux;
  i = left;
  j = right;
  pivot = array[ ((left + right) / 2).toFixed() ];
  while (i <= j) {
    while (array[i] < pivot) {
      i++;
    }
    while (array[j] > pivot) {
      j--;
    }
    if (i <= j) {
      aux = array[i];
      array[i] = array[j];
      array[j] = aux;
      i++;
      j--;
    }
  }
  if (left < j) {
    quicksort(array, left, j);
  }
  if (right > i) {
    quicksort(array, i, right);
  }
  return array;
}

function nSmall(array, n) {
  quicksort(array, 0, array.length - 1);
  return array[n-1];
}