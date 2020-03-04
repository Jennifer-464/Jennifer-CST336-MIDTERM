var fruits = ["apple", "orange", "cherry"];

fruits.forEach(function(item, index){
    document.getElementById("demo").innerHTML+= index + " : " + item + "<br>";
})

fruits.forEach(function(item){
    document.getElementById("basket").innerHTML += item + "<br>";
})

// fruits.forEach(myFunction);

// function myFunction(item, index) {
//   document.getElementById("demo").innerHTML += index + " : " + item + "<br>"; 
// }


var a1 = [1,2,3,4,5,6,7,8,9,10]
var a2 = a1.splice(2);
console.log(a1)
var a3 = a1.slice(2);
console.log(a1)