/**
 * Create a function that can find the Nth smallest number in an array. 
 * The array can be very very big, so you are not allowed using the  
 * Array.sort() method. Try to build a function that would perform fast.  
 * Also, explain why using Array.sort() isn't a good idea when sorting  
 * large arrays.  
 * 
 * Response: While there isn't a definition to which sorting algorithm a 
 * browser should implement on array.sort() we can't ensure it will be the 
 * fastest or best option for a given data set. A benchmark using both 
 * Google Chrome and Safari demonstrated the performance of a simple quick 
 * sort implementation over both browsers implementation to array.sort() 
 * when sorting an array of 50.000.000 elements.
 * 
 * Google Chrome:
 * quicksort(): 33655.604736328125ms
 * array.sort(): 59112.30908203125ms
 * 
 * Safari:
 * quicksort(): 35472.037ms
 * array.sort(): passed 5min
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