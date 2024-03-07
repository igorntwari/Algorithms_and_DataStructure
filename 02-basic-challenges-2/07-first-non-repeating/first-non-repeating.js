function findFirstNonRepeatingCharacter(str) {
 const count = {}

 str.split('').forEach(elt => {
    if(count.hasOwnProperty(elt)){
        count[elt]++
    }else{
        count[elt]=1
    }
 })

const igor = Object.entries(count)

if(igor.every(([,elt]) => elt > 1)){
    return null
}

for(let i = 0; i <= igor.length; i++){
    const [key, value] = igor[i]

    if(value === 1){
        return key
    }
}
 
}

module.exports = findFirstNonRepeatingCharacter;
