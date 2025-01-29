const sumAll = function(int1, int2) {

    let sum = 0;

    if (int1 < 0 || int2 < 0) {
        return 'ERROR';

    } else if ((!Number.isInteger(int1)) || (!Number.isInteger(int2))) {
        return 'ERROR';

    } else if ((typeof int1 !== "number") || (typeof int2 !== "number")) {
        return 'ERROR';
    
    } else if ((int1 > int2) && (int1 && int2 >= 0)) {
        for (let i = int1; i >= int2; i--) {
            sum += i;
        };

    } else if ((int1 < int2) && (int1 && int2 >= 0)) {
        for (let i = 0; i <= int2; i++) {
            sum += i;
        };

    };

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
