

$(document).ready(function() {
  // all custom jQuery will go here
  //$('#characterLocation').empty();
  


  $(".superheroes").on("click","li",function(){
    event.preventDefault();
    var item = $(this);
    console.log(item.length);
    

 // Move the player from .superheroes to #character_assault
  $('#characterLocation').append(item);
    var player=$(item);

  //$("#btnRemove").on("click", "li", function() {
      $("#characters").player.remove();
      $("#characters").hide();
      $("#character_assault").hide();

  });
    //remove the item from the .superheroes class
  //item.toggleClass('.superheroes');

    //fade out all the other characters except for the one chosen
  //$(".superheroes").fadeOut("slow");

  // $('#enemyLocation').empty();

  $(".enemies").on("click","li",function(){
    event.preventDefault();
    var item2 = $(this);
    console.log(item2.length);
  
 

 // Move the player from .superheroes to #character_assault
 //$(item).animate({left: "-30px"}, 9000);
 //move the item left by thirty pixels
  $('#enemyLocation').append(item2);

    //remove the item from the .superheroes class
  //item.toggleClass('.superheroes');

    //fade out all the other characters except for the one chosen
  //$(".superheroes").fadeOut("slow");

})

var crClockInit1 = null;
var crClockInterval = null;

$(".enemies").on("click","li",function crInitClock(){
  event.preventDefault();
  var item2 = $(this);
  console.log(item2.length);
})

function crInitClock() {
    crClockInit1 = setInterval(function() {
        if (moment().format("SSS") <= 40) {
            clearInterval(crClockInit1);
            crStartClockNow();
        }})}


function crStartClockNow() {
    crClockInterval = setInterval(function() {
        $('#clock').html(moment().format('D. MMMM YYYY H:mm:ss'));
    }, 1000);

  }
})
