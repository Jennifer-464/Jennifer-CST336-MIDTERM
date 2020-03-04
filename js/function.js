$("button").on("click", function(){
    // gets IBSN
    var isbn = $("#bookISBN").val();
    $.ajax({
        method: "GET",
        url: "https://openlibrary.org/api/books?bibkeys=" + isbn + "&format=json&jscmd=data",
        dataType: "json",
        data: {"info": "jscmd"},
        success: function(data) {
            // console.log(data[isbn])
            var title = data[isbn]["title"]
            var bookImg = data[isbn]["cover"]["medium"]
            var authors = data[isbn]["authors"]
            var publishers = data[isbn]["publishers"]
            var publish_date = data[isbn]["publish_date"]
            var number_of_pages = data[isbn]["number_of_pages"]
            
            
            // console.log(title)
            // console.log(bookImg)
            console.log(authors)
            console.log(publishers)
            // console.log(publish_date)
            // console.log(number_of_pages)
            
            $("#img").html("<img class='image' src=" + bookImg + " width='100%'/>");
            $("#title").html("<p class='edit'>Title: " + title + "</p>");
            $("#author").html("<p class='edit'>Author: </p>");
            $("#publishDate").html("<p class='edit'>Publish: " + publish_date + "</p>");
            $("#publisher").html  ("<p class='edit'>Publisher: </p>");
            $("#isbn").html("<p class='edit'>ISBN: " + isbn + "</p>");
            $("#numOfPages").html("<p class='edit'>Pages: " + number_of_pages + "</p>");
        },
        error:function(error){
            alert(error);
            console.log(error);
        }
    })
})












/*
var fruits = ["apple", "orange", "cherry"];

fruits.forEach(function(item, index){
    document.getElementById("demo").innerHTML+= index + " : " + item + "<br>";
})

fruits.forEach(function(item){
    document.getElementById("basket").innerHTML += item + "<br>";
})
*/
// fruits.forEach(myFunction);

// function myFunction(item, index) {
//   document.getElementById("demo").innerHTML += index + " : " + item + "<br>"; 
// }
