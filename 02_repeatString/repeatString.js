const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR"; // Handle negative numbers
    }

    if (num === 0) {
        return ''; // If num is 0, return an empty string
    }

    let result = string; // Initialize result with the input string

    // Start loop from 1 to num-1, because the first string is already in result
    for (let i = 1; i < num; i++) {
        result += string; // Append the string to the result
    }

    return result;
};

// Do not edit below this line
module.exports = repeatString;
