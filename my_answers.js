// ------- #1 Greetings -----------

function greeting(name) {
  if (name) {
    return `Hello, ${name}!`
  }
  return  'Hello!'
}
// greeting('Charlotte')



// ------- #2 Do You Play Banjo ----------

function areYouPlayingBanjo(name) {
  let firstChr = name[0].toLowerCase()

  return firstChr === 's' ?
    `${name} plays banjo!` :
    `${name} does not play banjo!`
}
// areYouPlayingBanjo("Scott")



// ------- #3 Miles per minute --------------

function miles(speed, minutes) {
  return speed/60*minutes
}
// miles(40,60)



// ------- #4 Party at My House --------------

function totalFriends(arr) {
  let sum = 0
	for (let i = 0; i < arr.length; ++i) sum += arr[i] 
	return sum
}
// totalFriends([2,4,1,3])



// ------- #5 Cookie Baking -----------------

function cookiesToMake(n) {
	return n <= 10 ? n*3: n*2
}
// cookiesToMake(5)



// ------- #6 Counting Duplicates -----------

function countDuplicates(arr) {
  let uniqueArr = [...new Set(arr)]
  let numWithDup = 0
  
  uniqueArr.forEach( elm => {
    let currance = 0;
    
    arr.forEach( num => {
      if (elm === num) currance += 1
    })
    if (cnt > 1) numWithDup += 1
  })
  return numWithDup
}
// countDuplicates([10,20,30,20,30,20,10,90,80,70,70,60])



// ------- #8 #1A Palindrome --------

function palindrome(str) {
  let lenStr = str.length
  str = str.toLowerCase()
  
  for ( let i = 0; i < lenStr; ++i) {
    if (str[i] !== str[lenStr -1 -i]) return false
  }
  return true
}

function palindrome2(str) {
  let newStr = ''
  str = str.toLowerCase()

  for (let i = str.length - 1; i >= 0; i--) {
      newStr += str[i]}
  return newStr === str
}

function palindrome3(str) {
  str = str.toLowerCase()
	let newStr = str.split('').reverse().join('')
  return newStr === str
}
// palindrome3('racecar')



// ------- #8 #2A First Repeating Letter --------

function firstRepeatingLetter(str) {
  for (let i = 0; i < str.length; ++i) {
    for (let k = i + 1; k < str.length; ++k) {
      if (str[i] === str[k]) return str[i]
    }
  }
}



// ------- #9 #3A Utopian Tree --------

function getHeight(cycles) {
  let height = 1;
    for (let i = 1; i <= cycles; i++) {
     i % 2 === 1 ? height *= 2 : height += 1
    }
  return height
}



// ------- #10 #4A Nested Loops --------

function rightTriangle(rows) {
  let trString = ''
  
  for (let i = 0; i < rows; i++) {
    for (let k = 0; k < rows - i; k++) trString += '*'
    trString += '\n'
  }
  return trString.slice(0, -1)
} 
// rightTriangle(4)



// ------- #11 #5A Rotate --------

function rotate(arr, steps) {
  while (steps--) arr.unshift(arr.pop())
  return arr
}
// rotate([1,2,3,4,5],2)



// ------- #12 #6A Index Of --------

function indexOf(str, queryStr) {
  for (let i = 0; i < str.length; i++) {
    if (str.substr(i, queryStr.length) === queryStr) return i
  }
  return -1
}
// indexOf('helloWorld', 'o')