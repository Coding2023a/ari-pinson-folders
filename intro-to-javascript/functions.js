function name(params) {

}
function returnName(name) {
    return name
}
console.log(returnName('Ari rocks!'))
//That's true!
let uly = returnName('Pinsons rock too!')
//That's also true!
console.log(uly)

function NAME(firstName, lastName) {
    console.log("Your First Name Is " + firstName + ", And Your Last Name Is " + lastName + '.')
}
      NAME("Ari", "Pinson")
      NAME("Ches", "Pinson")
      NAME() //Since the () are empty it ends up "undefined".
      function addNumbers(number1, number2) {
        return number1 + number2;
      }
      function subtractNumbers(number1, number2) {
        return number1 - number2;
      }
console.log(subtractNumbers(1, 1001));
let result = addNumbers(1, 999);
console.log("The sum is " + result);
let computers = ['mac', 'lenovo'];
let phones = ['iphone', 'samsung', 'pixel']
function loopThroughAnArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
        // if (array[i] ===) {
        //     11109
        // }
    }
}
loopThroughAnArray(computers);
loopThroughAnArray(phones)
