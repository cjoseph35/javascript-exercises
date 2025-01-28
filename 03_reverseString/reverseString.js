const reverseString = function(string) {
    let reversed_string = "";
    for(let i=0; i<string.length ;i++){
        reversed_string += string[string.length-1-i];
    }
    return reversed_string;
};

// Do not edit below this line
module.exports = reverseString;
