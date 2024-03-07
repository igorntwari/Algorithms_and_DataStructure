function areAllCharactersUnique(str) {
// for(let i = 0 ; i<str.length; i++) {
//   for(let j = i+1; j<str.length;j++){
//     if(str[i] === str[j]) {
//         console.log(str[i],str[j],str[i]===str[j])
//        return false
//     }
//   }
// }
// return true
}

const uniques = Array.from(new Set(str.split(''))).join('')
return str ===uniques;
module.exports = areAllCharactersUnique;
'programming'