var topics = ["Ford", "Nissan", "Saab", "Honda"];


$(document).on("click", ".gif-btn", function() {
// function getGifs(){
 // $('#car-view').empty();
selectedCar = this.id;
console.log(selectedCar)

// var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=JGuKfVek4arxnvmcGckgh8t8msc1UUWb&limit=10&rating=R&lang=en$q="
// var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=JGuKfVek4arxnvmcGckgh8t8msc1UUWb&limit=10&q="+ selectedCar
var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=JGuKfVek4arxnvmcGckgh8t8msc1UUWb&limit=10&q="+selectedCar
$.ajax({
 url: queryURL,
 method: "GET",
})
 .then(function (response) {
   $("#car-view").empty();
   var results = response.data;

   // console.log(response.data);

   for (var i = 0; i < results.length; i++) {
     // var rating = results[i].rating;
     // rating = ("<p>").text("Rated: " + rating);
     // newDiv = ("<div");
     // gifImage = ("<img>");
     // gifImage.attr("src", results[i].images.original.url);
     // newDiv.append(gifImage);
     // $("#car-view").append(newDiv);
     console.log(results[i].images.fixed_height_small_still.url)
     // gifImage = ("<img>");
     // gifImage.attr("id", selectedCar-i);
     // gifImage.attr("src", results[i].images.fixed_height_small_still.url);
     gifImage = "<img class='aniGIF' id='"+results[i].images.fixed_height_small_still.url+"' src='"+results[i].images.fixed_height_small_still.url+"'>"
     $("#car-view").append(gifImage);
   }
 });
});

function newButtons() {

 $("#button-view").empty();

 for(var i = 0; i < topics.length; i++) {

   var newBtn = $("<button>");
   newBtn.addClass("gif-btn");
   newBtn.attr("id", topics[i]);
   newBtn.attr("data", topics[i]);
   newBtn.text(topics[i]);
   $("#button-view").prepend(newBtn);

 };
}

$("#add-car").on("click", function(event){
 event.preventDefault();
 var newCar = $("#car-input").val().trim();
 topics.push(newCar);
 newButtons();
})

// $(document).on("click", ".gif-btn", getGifs);

newButtons();
