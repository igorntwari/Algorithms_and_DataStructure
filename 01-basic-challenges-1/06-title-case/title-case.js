function titleCase(str) {
   const word =  str.toLowerCase().split(' ')
   for(let i = 0; i < word.length; i++) {
    word[i] = word[i][0].toUpperCase() + word[i].slice(1)
   }
return word.join(' ')
}

module.exports = titleCase;
