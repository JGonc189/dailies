// create a function that removes the first and last character of the string...
function removeChar(str) {
    // use the javascript slice method to remove the first and last characters of the string.
    char = str.slice(1, -1);
    // console.log(char);
    return char;
}

removeChar('jason');