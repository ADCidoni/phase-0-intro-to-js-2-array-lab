const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
  cats.push(name)  
}
console.log(cats)

function destructivelyPrependCat(name) {
    cats.unshift(name)
}
console.log(cats)
function destructivelyRemoveLastCat(name) {
    cats.pop (name)
}
console.log(cats)
function destructivelyRemoveFirstCat(name) { 
    cats.shift(name)
}

 function appendCat(name)  {
return [...cats, name]
 }
 function prependCat(name) {
    return [name,...cats]
 }
function removeLastCat() {
    const newArray = [...cats]
    newArray.pop()
    return newArray
}
console.log(cats)
function removeFirstCat() {
    const newArray = [...cats]
    newArray.shift()
    return newArray
}
 console.log(cats)