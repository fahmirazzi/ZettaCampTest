// Expected Result = 7
// Direction : Find median of this array
const input = [8, 7, 7, 9, 5, 4, 2, 9];

function result(input) {
  // Your Code Here
  if(input.length ===0) throw new Error("No Values");

  input.sort(function(a,b){
    return a-b;
  });

  var medianOdd = Math.floor(input.length / 2);
  
  if (input.length % 2)
    return input[medianOdd];
  
  return (input[medianOdd - 1] + input[medianOdd]) / 2.0;
}

console.log(result(input));


// Explanation

// First, checking input array is there any value or not
// if there is no value, return error

// Second, sorting input array from the smaller to the bigger

// Third, Checking how many input array, 
// if the result is odd number then return input array length divided by two to see the median number

// if the result is even number then we add two middle number from array and divide it by two to see the median number