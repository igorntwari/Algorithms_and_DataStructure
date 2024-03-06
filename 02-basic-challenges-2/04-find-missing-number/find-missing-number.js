function findMissingNumber(numbers) {
    let startingPoint = numbers.indexOf(numbers[0])
    for (let i = 0 ; i<numbers.length; i++) {
     if(numbers[i] !== numbers[startingPoint + i]) {
         return aplaha[startingPoint + i]
     }
    }
    return ""
}

module.exports = findMissingNumber;
