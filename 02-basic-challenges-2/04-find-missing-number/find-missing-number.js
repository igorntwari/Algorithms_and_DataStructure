const findMissingNumber = (numbers)=> {
    if (!numbers || numbers.length === 0) {
        return undefined;
      }
 const n = numbers.length + 1
 let expectedSum = (n * (n + 1)) / 2
 let actualSum = 0
 for (let i = 0 ;i<numbers.length; i++) {
  actualSum +=numbers[i]  
 }
 return expectedSum - actualSum
}

module.exports = findMissingNumber;
