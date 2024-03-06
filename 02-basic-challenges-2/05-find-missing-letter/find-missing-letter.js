function findMissingLetter(letters) {
    const aplaha = 'abcdefghijklmnopqrstuvwxyz'
   let startingPoint = aplaha.indexOf(letters[0])
   for (let i = 0 ; i<letters.length; i++) {
    if(letters[i] !== aplaha[startingPoint + i]) {
        return aplaha[startingPoint + i]
    }
   }
   return ""
}

module.exports = findMissingLetter;
