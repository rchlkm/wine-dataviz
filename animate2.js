https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_animate_3

// https://davidwalsh.name/svg-animation
// https://www.hongkiat.com/blog/javascript-libraries-animate-svg/
var wines = getWineList(11);
console.log(wines);
function getWineList(N) {
    lst = [];
    for (i = 1; i <= N; i++) {
        if(i < 10) {  num = "0" + String(i); } 
        else { num = i; }
        lst.push(".wine" + num);
      }
    return lst;
}

var dict = {
    ".wine01" : {
        "cx" : 690,
        "cy" : 300,
        "color_cx" : 980,
        "color_cy" : 1140
    },
    ".wine02" : {
        "cx" : 750,
        "cy" : 300,
        "color_cx" : 1025,
        "color_cy" : 1140
    }
}



// https://www.w3.org/wiki/Dynamic_style_-_manipulating_CSS_with_JavaScript

// $(".wine01")
//     .delay(500)
// 	  .velocity({ x: "+=200", y: "25%" })
//     .velocity({ fillGreen: 255, strokeWidth: 2 })
// 	  .velocity({ height: 50, width: 50 })
//     .velocity({ rotateZ: 90, scaleX: 0.5 })
//     .velocity("reverse", { delay: 250 });

// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_animate_3
function myMove() {
    var elem = document.getElementsByClassName("wine01");   
    var pos = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (pos == 1140) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.top = pos + 'px'; 
        elem.style.left = pos + 'px'; 
      }
    }
  }


  var style = document.createElement('style');
  document.head.appendChild(style);
  style.sheet.insertRule(".wine01_animate {transform: translate(100px,400px); transition: 1s ease-in-out;}");

  $(document).ready(function(){
    
    // $(".wine01").click(function(){
    //     $(".wine01").animate({
    //       top:"986px",
    //       left:"1138.5px", //+=420
    //       speed: "slow"
    //     },2000);
    // });

    $( ".wine01" ).click(function() {
        $(".wine01").addClass("wine01_animate");
        // wines.forEach(function(wineClass) {
        //     $(wineClass).addClass("animate");
        // });
        
      });
});



// $(document).ready(function(){
//     wines.forEach(function(wineSVG) {
//         $(wineSVG).addClass(wineSVG + "_animate");
//     });
// });


// function button_colors() {
//     console.log("button_pressed!")

//     $(document).ready(function() {
//         // $( ".wine03" ).click(function() {


//             wines.forEach(function(wineSVG) {
//                 $(wineSVG).addClass(wineSVG + "_animate");
//             });

//             // $(".wine03").addClass("wine03_animate");
            
//             // wines.forEach(function(wineClass) {
//             //     $(wineClass).addClass("animate");
//             // });
            
//         //   });
//     });
// }
