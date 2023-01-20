
// local scope
// function fun() {
//     let name="Mahbub Rimon";
// console.log(name);
// }
// fun();

// global scope
let name="Mahbub Rimon";
function fun() {
    console.log(name);
}
fun();
// global scope
let name="Mahbub Rimon";
function fun() {
}

console.log(name);