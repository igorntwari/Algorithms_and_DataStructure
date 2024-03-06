function arrayIntersection(arr1,arr2) {
    let intersectionArr = []
    for(let i = 0 ; i<arr1.length; i++) {
     for(let j = 0 ; j<arr2.length; j++){
        if(arr1[i] === arr2[j]) {
            intersectionArr.push(arr1[i])
          break
        }
     }
    }
    return intersectionArr
}

module.exports = arrayIntersection;
