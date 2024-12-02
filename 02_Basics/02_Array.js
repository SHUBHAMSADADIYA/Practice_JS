
const marvelHeros = ["Ironman", "Thor", "Hulk"]
const dcHeros = ["Superman", "Batman", "Flash"]

const allHeros = marvelHeros.concat(dcHeros)
console.log(allHeros);          // [ 'Ironman', 'Thor', 'Hulk', 'Superman', 'Batman', 'Flash' ]
// It combine or concat all element of arrays in one array

const allNewHeros = [...marvelHeros,...dcHeros]
console.log(allNewHeros);       // [ 'Ironman', 'Thor', 'Hulk', 'Superman', 'Batman', 'Flash' ]
// It also works as a concat 

const multipleArr = [1, 2, 3, [4, 5 , 6], 7, [8 ,[ 9, 10]]]
console.log(multipleArr);         // [ 1, 2, 3, [ 4, 5, 6 ], 7, [ 8, [ 9, 10 ] ] ]

const flatArr = multipleArr.flat(Infinity)
console.log(flatArr);            //  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]   
// It removes associated or levels of array and gives you all elements in one array

console.log(Array.isArray("Shubham"));  // False

console.log(Array.from("Shubham"));  // ['S', 'h', 'u', 'b', 'h', 'a', 'm']
// It converts string into array

console.log(Array.from({name: "Shubham"})); // [] // Interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  // [ 100, 200, 300 ]
// It converts string into array
