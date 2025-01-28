const sumAll = function(x,y) {
    if(x<0||y<0){
        return "ERROR"
    };

    console.log(typeof(x))
    if(typeof(x)!="number"||typeof(y)!="number"||!Number.isInteger(x)||!Number.isInteger(y)){
        return "ERROR"
    }
    const min_val = Math.min(x,y);
    const max_val = Math.max(x,y)
    let summation = 0;

    for(let i = min_val; i<=max_val; i++){
        summation += i;
    };
    return summation;
};

// Do not edit below this line
module.exports = sumAll;
