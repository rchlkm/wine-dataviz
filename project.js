// var s = Snap();


START_CY = 100
COLOR_CY = 400
RADIUS = 20
class Wine {
    constructor(variety, hex, start_cx, color, color_cx) {
            this.variety = variety;
            this.hex = hex;
            this.start_cx = start_cx;
            // this.start_cy = start_cy;
            this.color = color;
            this.color_cx;
            // this.color_cy = color_cy;
        }
}

var pinot = new Wine("Pinot Noir","#ad2e41",800,"red",650)
console.log(pinot);

var pinot_circle = svg.circle(pinot.start_cx,START_CY,RADIUS,RADIUS);
pinot_circle.attr({
    fill: pinot.hex
  });

  
   

// // Create a blink effect by modifying the rx value
// // for ellipse from 90px to 1px and backwards
// function blink(){
//     ellipse.animate({ry:1}, 220, function(){
//       ellipse.animate({ry: 90}, 300);
//     });
//   };
   
//   // Recall blink method once every 3 seconds
   
//   setInterval(blink, 3000);



// $(document).ready(function(){ 
// 	// Sun vars
//   // Idealy, load sun via external file to keep HTML clean
// 	var sun = Snap.select('#sun');
// 	var sunCircle = sun.select('#circle');
// 	var sunRays = sun.select('#rays');
	
// 	// Sun events
// 	raysAnimation();

// 	// Infinite animation for the sun rays
// 	function raysAnimation(){
// 		sunRays.stop().animate(
// 			{ transform: 'r90,256,256'}, // Basic rotation around a point. No frills.
// 			10000, // Nice slow turning rays
// 			function(){ 
// 				sunRays.attr({ transform: 'rotate(0 256 256)'}); // Reset the position of the rays.
// 				raysAnimation(); // Repeat this animation so it appears infinite.
// 			}
// 		);
	
//   }
// });