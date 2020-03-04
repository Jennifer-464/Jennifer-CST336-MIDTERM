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