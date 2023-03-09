// ASSESSMENT 3: Coding Practical Questions with Jest

const { number } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.



// a) Create a test with expect statements for each of the variables provided.
// Pseudo: create a test that takes in the fibSequence function that takes in a number greater than 2 and returns the expected outputs of [1, 1, 2, 3, 5, 8] for the input of 6 and [1, 1, 2, 3, 5, 8, 13, 21, 34, 55] for the input of 10.
// Run test using yarn jest to see the correct reference error (ReferenceError: fibSequence is not defined)
// describe("fibSequence", () => {
//   it(" takes in a number greater than 2 and returns the an array of the same length containing the numbers following the rules of the Fibonacci sequence.", () => {
//     expect(fibSequence(6)).toEqual([1, 1, 2, 3, 5, 8])
//     expect(fibSequence(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
//   })
// }) // ---> fibSequence ✓  takes in a number greater than 2 and returns the an array of the same length containing the numbers following the rules of the Fibonacci sequence. (3 ms) (Tests passed)

const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// b) Create the function that makes the test pass.
// Pseudo: create a function called fibSequence that takes in a number greater than 2 and returns the an array of the same length containing the numbers following the rules of the Fibonacci sequence.
// Within the function create an array called fibArray that contains the values [1,1]. Then create a for loop that iterates through fibArray while adding the current number and the previous number together but only when the index is at 2. The results will then be pushed into fibArray. The function will then return the desired Fibonacci sequence in fibArray.
// const fibSequence = (number) => {
//   let fibArray = [1, 1]
//   for (let i = 2; i < number; i++) {
//     fibArray.push(fibArray[i-1] + fibArray[i-2]);
//   }
//   return fibArray;
// }



// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.
// Pseudo: create a test that takes in the sortObject function that takes in an object and returns an array of the values sorted from least to greatest. Expected output for the the studyMinuteWeek1 object is [15, 15, 20, 30, 30, 60, 90] and the expected out for studyMinutesWeek2 is [10, 15, 20, 45, 60, 65, 100]
// describe("sortObject", () => {
//     it(" takes in an object and returns an array of the values sorted from least to greatest.", () => {
//       expect(sortObject(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
//       expect(sortObject(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
//     })
//   }) // ---> sortObject is not defined. Correct Reference error
//   // sortObject ✓  takes in an object and returns an array of the values sorted from least to greatest. (2 ms)


const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

// b) Create the function that makes the test pass.
// Pseudo: Create a function called sortObject that takes in an object and returns an array of the values sorted from least to greatest.
// Within the function create a variable called objectArray that contains the object argument transformed into an array. Using the sort method on objectArray to return the array with the numbers sorted from least to greatest.
// const sortObject = (object) => {
//   const objectArray = Object.values(object)
//   objectArray.sort((a, b) => {
//     return a - b
//   })
//   return objectArray
// }
// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.
// Pseudo: Create a test that takes in the accumulatingSum function and returns the expected outputs of [100, 83, 60, 51] for the input accountTransactions1, [250, 161, 261, 165] for accountTransactions2, and [] for accountTransactions3.
// describe("accumulatingSum", () => {
//     it(" takes in an array and returns an array of the accumulating sum.", () => {
//       expect(accumulatingSum(accountTransactions1)).toEqual([100, 83, 60, 51])
//       expect(accumulatingSum(accountTransactions2)).toEqual([250, 161, 261, 165])
//       expect(accumulatingSum(accountTransactions3)).toEqual([])
//     })
//   }) // ---> ReferenceError: accumulatingSum is not defined
//   //   accumulatingSum ✓  takes in an array and returns an array of the accumulating sum. (2 ms)


const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []

// b) Create the function that makes the test pass.
// Pseudo: create a function called accumulatingSum that takes in an array.
// Within the function create a variable using let and call it sum. This variable will be equal to 0.
// Use the map method on the array perform the logic ogf adding the value to the sum as it iterates through the array. Return the sum after each iteration.


// const accumulatingSum = (array) => {
// let sum = 0
// return array.map((value => {
//   sum += value
//   return sum
// }))}

