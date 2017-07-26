/**
 * Create a function that takes an unlimited amount of number parameters, 
 * and returns an array of all the permutations possible. For example, 
 * myFunction(4, 7, 2) {} should return [472, 427, 724, 742, 247, 274].
 */

function permutation() {
  var args = Array.prototype.slice.call(arguments, 0);
  return permute(args, [], []);
}

function permute(input, used, array) {
  for (var i = 0; i < input.length; i++) {
    var characters = input.splice(i, 1)[0];
    used.push(characters);
    if (input.length == 0) {
      array.push(used.slice().join(''));
    }
    console.log(input);
    permute(input, used, array);
    input.splice(i, 0, characters);
    used.pop();
  }
  return array;
};

