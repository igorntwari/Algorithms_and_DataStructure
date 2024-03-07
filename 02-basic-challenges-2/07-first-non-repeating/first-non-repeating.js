function findFirstNonRepeatingCharacter(str) {
    for(let i = 0; i<str.length; i++) {
        for (let j = 0; j<str.length; j++) {
            if(str[i] === str[j] && i !== j) {
                break
            } else if(j+1 === str.length) {
                return str[i]
            }
        }
    }
    return null
}

module.exports = findFirstNonRepeatingCharacter;
