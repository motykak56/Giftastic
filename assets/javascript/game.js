
function run (e){
var player="userclick1";
var character=["batmanImg", "supermanImg", "powerOneImg", "supercatImg", "stormImg", "pinkImg"];
  
function choosePlayer (){
  var batmanImg = document.getElementById("batmanImg")
  el.addEventListener("click")
  var supermanImg = document.getElementById("supermanImg")
  el.addEventListener("click")
  var powerOneImg = document.getElementById("powerOneImg")
  el.addEventListener("click")
  var supercatImg = document.getElementById("supercatImg")
  el.addEventListener("click")
  var stormImg = document.getElementById("stormImg")
  el.addEventListener("click")
  var pinkImg = document.getElementById("pinkImg")
  el.addEventListener("click")

if(click==="batmanImg"){
    $("batmanImg").animate({
      top: "-=200px"}, "normal")
      var player="batmanImg";
    }
else if(click==="supermanImg"){
    $("supermanImg").animate({
      top:  "-=200px"}, "normal")
      var player="supermanImg";
    }
else if(click=="powerOneImg"){
    $("powerOneImg").animate({
      top: "-=200px"}, "normal")
      var player="powerOneImg";
    }
else if(click=="supercatImg"){
    $("supercatImg").animate({
      top: "-=200px"}, "normal")
      var player="supercatImg";
      }
else if(click=="stormImg"){
    $("stormImg").animate({
      top:  "-=200px"}, "normal")
      var player="stormImg";
    }
else if (click=="pinkImg"){
    $("pinkImg").animate({
        top:  "-=200px"}, "normal")
        var player="pinkImg";
    }
    $("image").click(function(){
      $(this).data('clicked', true);
      if($('#character').data('clicked')) {
        alert('this is your player for the game');
    }
  })
}
function chooseEnemy (){
var enemy=["sicknessImg", "pestilenceImg", "bullyImg","slanderImg"];
  var sicknessImg = document.getElementById("sicknessImg")
  el.addEventListener("click")
  var pestilenceImg = document.getElementById("pestilenceImg")
  el.addEventListener("click")
  var bullyImg = document.getElementById("bullyImg")
  el.addEventListener("click")
  var supercatImg = document.getElementById("slanderImg")
  el.addEventListener("click")

if(click==="sicknessImg"){
  $("sicknessImg").animate({
    top: "-=400px"}, "normal");
    var opposition="sicknessImg"
  }
else if(click==="pestilenceImg"){
  $("pestilenceImg").animate({
    top:  "-=400px"}, "normal");
    var opposition="pestilenceImg"
  }
else if(click=="bullyImg"){
  $("bullyImg").animate({
    top: "-=400px"}, "normal")
    var opposition="bullyImg";
  }
else if (click=="slanderImg"){
  $("slanderImg").animate({
    top:  "-=400px"}, "normal")
    var opposition="slanderImg"; 
  }
}
$("image").click(function(){
  $(this).data('clicked', true);
  if($('#enemy').data('clicked')) {
    alert('this is your first opposition for the game');
}
})
    var enemyPlaying1="userclick2";
    var enemyPlaying2="userclick3";
    var enemyPlaying3="userclick4";
    var enemyPlaying4="userclick5";

document.onkeyup=function(click){
    var userclick=event.click;}
    
    // Visibility Buttons
      // ==================

      // Make Visible
   //   $(".vis-button").on("click", function() {
   //     $(".captain-planet").animate({opacity: "1"
   //     });
   //   });

      // Make Invisible
  //    $(".invis-button").on("click", function() {
  //      $(".captain-planet").animate({
  //        opacity: "0.0"
  //      });
  //    });

      // Move Buttons
      // ============

      // Move Character Playing upward 
 //     $(".up-button").on("click", function() {
 //       $("charPlaying").animate({
//          top: "-=200px"
 //       }, "normal");
 //     });

      // Move Character Playing Downward
//      $(".down-button").on("click", function() {
//        $(".captain-planet").animate({
//          top: "+=200px"
//        }, "normal");
//      });

      // Move Character Playing Leftward
//      $(".left-button").on("click", function() {
//        $(".captain-planet").animate({
//          left: "-=200px"
//        }, "normal");
//      });

      // Move Character Playing to the Right
//      $(".right-button").on("click", function() {
//        $(".captain-planet").animate({
//          left: "+=200px"
//        }, "normal");
//      });

      // Bring Character Playing Back to His First Position
//      $(".back-button").on("click", function() {
//        $(".captain-planet").animate({
//          top: "50px",
//          left: "80px"
//        }, "fast");
//      });

      // Move Events for Keyboard Presses
      // ============================

      // Keyboard Up
//      $(document).keyup(function(e) {
//        switch (e.which) {
//        case 38:
//          $(".captain-planet").animate({
//            top: "-=200px"
//          }, "normal");
//        }
//      });

      // Keyboard Down
//    $(document).keyup(function(e) {
//        switch (e.which) {
//        case 40:
//          $(".captain-planet").animate({
//            top: "+=200px"
//          }, "normal");
//        }
//      });

      // Keyboard Left
//      $(document).keyup(function(e) {
//        switch (e.which) {
//        case 37:
//          $(".captain-planet").animate({
//            left: "-=200px"
//          }, "normal");
//        }
//      });

//   Keyboard Right
//     $(document).keyup(function(e) {
//        switch (e.which) {
//        case 39:
//          $(".captain-planet").animate({
//            left: "+=200px"
//          }, "normal");
//         }
//      })}