function removeElemnts(mainArray, elementsToRemove){
    return mainArray.filter(element => !elementsToRemove.includes(element))
}

const removeFromArray = function(originalArray, ...rest) {
    const poppedArray = removeElemnts(originalArray, rest);
    return poppedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
