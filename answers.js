/*
 * Complete the function below.
 */
function greeting(name) {
    
    if (name) return `Hello, ${name}!`
    return 'Hello!'
}

function areYouPlayingBanjo(name) {
  return name[0].toLowerCase() === 's' ?
      `${name} plays banjo!` :
      `${name} does not play banjo!`
}
/*
 * Complete the function below.
 */
function miles(speed, minutes) {
  return speed/60*minutes
}

/*
 * Complete the function below.
 */
function totalFriends(arr) {
  let sum = 0
    for (let i = 0; i < arr.length; ++i) sum += arr[i] 
  return sum
}

/*
 * Complete the function below.
 */
function cookiesToMake(n) {
  return n <= 10 ? n*3: n*2
}

/*
 * Complete the function below.
 */
function countDuplicates(arr) {
  let dupCnt = 0
  let uniq = [...new Set(arr)]

  uniq.forEach( num => {
    let ocurrance = 0

    arr.forEach( elem => {
      if (elem === num)  ocurrance += 1
    })
    
    if (ocurrance > 1) dupCnt += 1
  })
  return dupCnt
}

function palindrome(str) {
  let newStr = ''
  str = str.toLowerCase()

  for (let i = str.length - 1; i >= 0; i--) {
      newStr += str[i]}
  return newStr === str
}

function firstRepeatingLetter(str) {
  
  for ( let i = 0; i < str.length; ++i ) {
    let letter = str[i]

    for ( let j = i + 1; j < str.length; ++j ) {
      if (letter === str[j]) return letter
    }
  }
}
/*
 * Complete the function below.
 */
function getHeight(cycles) {
  let height = 1
  for ( let i = 1; i <= cycles; ++i) {
    if ( i % 2 === 1) height *= 2
    else height += 1  
  }
  return height
}

function rightTriangle(rows) {
  let trStr = ''
  for (let j = 0; j < rows; ++j) {
    for (let i = 1; i <= rows - j; ++i) trStr += '*'
    trStr += '\n'
  }
  return trStr.slice(0, -1)
} 
/*
 * Complete the function below.
 */
function rotate(arr, steps) {
  for (let i = 1; i <= steps; ++i) arr.unshift(arr.pop())
  return arr
}

/*
 * Complete the function below.
 */
function indexOf(str, queryStr) {

  for (let i = 0; i < str.length; ++i) {
    if (str.substr(i, queryStr.length) === queryStr) return i
  }
  return -1
}

