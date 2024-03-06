function arrayIntersection(arr1,arr2) {
    let intersectionArr = []
    for(let i = 0 ; i<arr1.length; i++) {
      if(arr2.includes(arr1[i]) && !intersectionArr.includes(arr1[i])){
        intersectionArr.push(arr1[i])
      }
    }
    return intersectionArr
}

module.exports = arrayIntersection;
