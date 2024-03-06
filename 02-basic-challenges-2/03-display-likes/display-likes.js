function displayLikes(namesArr) {
  if(namesArr.length > 3)   return `${namesArr[0]}, ${namesArr[1]} and ${namesArr.length - 2} others like this`
  if(namesArr.length ===3)  return `${namesArr[0]}, ${namesArr[1]} and ${namesArr[2]} like this`
  if(namesArr.length === 2) return `${namesArr[0]} and ${namesArr[1]} like this`
  if(namesArr.length === 1) return `${namesArr[0]} likes this`
  if(namesArr.length === 0) return `no one likes this`

}
module.exports = displayLikes;
