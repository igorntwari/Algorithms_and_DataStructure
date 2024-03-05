const isPalindrome = (str)=>  str.toLowerCase().replace(/[^a-z0-9]/g, '') === str.split('').reverse().join('') ? true: false

module.exports = isPalindrome;
