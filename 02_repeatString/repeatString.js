const repeatString = function(string,times) {
    let count = 1;
    stringComb = "";
    while(count<=times){
        stringComb += string;
        count+=1;
    }
    return stringComb;
};

// Do not edit below this line
module.exports = repeatString;
