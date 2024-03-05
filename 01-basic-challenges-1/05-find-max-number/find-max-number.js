const findMaxNumber = (arr)=> {
    return arr.reduce((prevValue,curretValue)=> {
    if(prevValue > curretValue) {
        return prevValue
    }
    return curretValue

},0)}

module.exports = findMaxNumber;
