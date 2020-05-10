/* 
    Array is the simplest form of storing data with javascript
    Array can contain multiple types of js Objects, including;
    numbers, strings, booleans, undefind, null ...
*/

let simpleArr = ["one", 2, true, false, undefined, null, {}];
console.log(simpleArr[0]);




/* 
    Access an Array's Contents Using Bracket Notation
*/

let alphArray = ['a', 'b', 'c', 'd', 'e'];

alphArray[0] = 'z';
console.log(alphArray);






/* 
    Add Items to an Array with push() and unshift()
    In javascript arrays are mutable, it means, we can remove or add items to the end or beggining of the array. to do so, we use array methodes to perform certain tasks on arrays

    .push() methode taks one or more elements and adds them to the end of the array.

    .unshift() also takes one or more argumens, and add them to the beggining of the array.

*/

const mixNumbers = (arr) => {
    arr.unshift('I', 2, 'three');
    arr.push('7', 'XIII', 9);
    return arr;
}

console.log(mixNumbers([22, '3', null]));



/* 
    Remove Items from an Array with pop() and shift()

    we can also remove elements from arrays by using corresponding methodes

    .pop() methode removes the last element from an array, and it returns the value

    .shift() removes the first element from array and it returns the value.
*/


function popShift(arr) {
    let popped = arr.pop();
    let shifted = arr.shift();
    return [shifted, popped];
  }
  
console.log(popShift(['challenge', 'is', 'not', 'complete']));




/* 
  Remove Items Using splice()
  splice takes more that 3 params
  first is the index whre the removeing is occurs
  second is the amount of indexes to be removed

*/

let spArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// remove the last 5 elements
//spArr.splice(5, spArr.length)

console.log(spArr);





let copiedArr = [...spArr]
console.log(copiedArr);

copiedArr.splice( copiedArr.length / 2, copiedArr.length);

console.log(copiedArr);





/* 
  Add Items Using splice()
  the third arg of splice mehtode is to set an element to be added where the index is deleted

*/

let numbers = [10, 11, 12, 12, 15];
// add 13 and 14 respectivly to the array and remvoe the duplicate

numbers.splice(3, 1, 13, 14)

console.log(numbers);






/* 
  Copy Array Items Using slice()
  slice() takes 2 params, first is the starting index, and second is the stoping index

  slice() does not modify the original arrya, it rather creates a new array by extracting elements from an existing array.

*/

const allCaps = ['A', 'B', 'C', 'D', 'E'];

let AandB = allCaps.slice(0, 2); // extraction occurs from 0 index to 2 but 2 deoes not include

console.log(AandB);







/* 
  Copy an Array with the Spread Operator
  We can use ES6 speard operator ... to easly copy an array into new one

  newArr = [...oldArr];
*/


const copyMachine = ( arr, num ) => {
  let result = [];

  while ( num >= 1 ) {
    result.push([...arr]) // push arr to master arr;
    num--; // sub 1 from num
  }

  return result;
}

console.log(copyMachine(allCaps, 2));






/* 
  Combine Arrays with the Spread Operator
*/

let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];
let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander']

console.log(thatArray);






/* 
  Check For The Presence of an Element With indexOf()
  we can find out the presence of an element by using indexOf mehtode
*/

const quickChecker = ( arr, elem ) => {
  if ( arr.indexOf(elem) < 0 ) {
    return false;
  } else {
    return true;
  }
}

console.log(quickChecker(allCaps, 'Z'));
console.log(quickChecker(allCaps, 'A'));





/* 
  Iterate Through All an Array's Items Using For Loops
*/
// remove every nested array that contains element (elem);

const filteredArr = ( arr, elem ) => {
  let newArr = [];
  for ( let i = 0; i < arr.length; i++ ) {
    if ( arr[i].indexOf(elem) < 0 ) {
      newArr.push(arr[i])
    }
  }

  return newArr;
}

let filArr = [[1, 2, 3], [4, 5, 6], [7, 8, 3]];

console.log(filteredArr(filArr, 3));













