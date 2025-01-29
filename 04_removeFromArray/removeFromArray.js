const removeFromArray = function(array, ...args) {
    // Create a new array to hold elements that should not be removed
    const newArray = [];
  
    // Loop through each element in the array
    array.forEach((item) => {
      // Check if the item is not in the args list
      if (!args.includes(item)) {
        // If the item is not in args, add it to the new array
        newArray.push(item);
      }
    });
  
    // Return the new array with the items removed
    return newArray;
  };


// Do not edit below this line
module.exports = removeFromArray;
