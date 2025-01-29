const reverseString = function(string) {
  let reversed = ''; // Establishing a variable to throw letters into new string called 'reversed'

  for (let i = string.length - 1; i >= 0; i--) { // decrementing the the string from the end of the length of the string
    reversed += string[i]; // appending the string pointer value to the variable 'reversed'
  }             

  return reversed; // returning my new reversed string
};

// Do not edit below this line
module.exports = reverseString;
