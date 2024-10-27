
function isPalindrome(string) {
    let splitedString = []
    let reversedArray = []
    let reversedString = []


    for(let i = 0; i < string.length; i++){
        splitedString.push(string[i])
    }

    for(let i = splitedString.length-1; i >= 0; i-- ){
        reversedArray.push(splitedString[i])
    }

    for( let i = 0; i < reversedArray.length; i++){
        reversedString += reversedArray[i]
    }

    return string === reversedString
    
}

console.log(isPalindrome("ana"))
console.log(isPalindrome("joseluis"))
console.log(isPalindrome("otto"))