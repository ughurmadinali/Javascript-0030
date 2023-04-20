1
function addNums(str) {
    return eval(str)
}

2
function ifPrefix(word, prefix) {
    let prefixes = [`auto`]
    if (word.includes(prefix) | prefixes.includes(prefix)) {
        return true
    } else {
        return false
    }
}

3
function isSufix(word, sufix) {
    let sufixes = [`fob`, `log`]
    if (word.includes(sufix) | sufixes.includes(sufix)) {
        return true
    } 
    else {
        return false
    }
}

4
function toArray(obj) {
    let arr = new Array()
    for (let x in obj) {
        arr.push([`${x}`, obj[x]])
    }
    return arr
}

5
function concat(arr) {
    let arr = new Array()
    for (let x of arr) {
        arr.push(...x)
    }
    return arr
}

6
function count(num) {
    let counter = 0
    num = String(num)
    num = number.split(``)
    for (let x in num) {
        if (!isNaN(num[x])) {
            counter++
        } 
        else if (num[x] == `.`) {
            break
        }
    }
    return counter
}