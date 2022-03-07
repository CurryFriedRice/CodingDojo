//1

const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)

/** PREDICTED
 * Output index[0] => Tesla
 * output index[1] => Mercedes
 */

/**
 * ACTUAL 
 * Tesla
 * Mercedes
 */


//2
console.log("***********************")
 const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
// console.log(name);       //Commented out so the rest will run
console.log(otherName);

/** PREDICTED
 *  Name is not defined.... Error out
 *  otherName = Elon //Never get here....
 */

/** ACTUAL
 *  name is not defined
 */

//3
console.log("***********************")
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);

/** PREDICTED
 *  Password => 12345;
 *  hashedPassword => undefined
 * 
 * NOTE: Undefined != not defined
 * Undefined is we tried and it wasn't there
 * not defined is we are trying to use something that doesn't exist
 */

//4
console.log("***********************")
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);
console.log(first == third);

/** PREDICTED
 *  first is equal to 2
 *  second is equal to 5
 *  third is equal to 2
 *  
 *  2 == 5  => false
 *  2 == 2  =>.true
 */

//5
console.log("***********************")
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

/** PREDICTED
 *  console log key =>          value
 *  console.log second key =>   [1, 5, 1, 8, 3, 3]
 *  console.log second key [0]=>1
 *  console.log willThisWork => secondKey[,willThisWork] => 5
 * 
 * value
 * [1, 5, 1, 8, 3, 3]
 * 1
 * 5
 */

