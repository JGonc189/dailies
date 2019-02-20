function square(num) {
    // convert the number into a string, then split each digit, then loop through each digit and conver back into a number..
    var digits = num.toString().split('').map(Number);
    // console.log(digits); 
    // loop through each iteration of the array, and multiply it by its self
    for(var i = 0; i < digits.length; i++) {
        var sq = digits[i] * digits[i];
        // console.log(sq);
        return sq;
    }
}

square(81392341);