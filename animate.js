var wines = getWineList(11);
function getWineList(N) {
    lst = [];
    for (i = 1; i <= N; i++) {
        if(i < 10) {  num = "0" + String(i); } 
        else { num = i; }
        lst.push(".wine" + num);
      }
    return lst;
}

var cy = 300;
var color_cy = 800;

var wine_dict = {
    ".wine01" : {
        "cx" : 690,
        "cy" : 300,
        "color_cx" : 980,
        // "color_cy" : 1140
        "color_cy" : 800
    },
    ".wine02" : {
        "cx" : 750,
        "cy" : 300,
        "color_cx" : 1025,
        // "color_cy" : 1140
        "color_cy" : 800
    },
    ".wine03" : {
        "cx" : 810,
        "cy" : 300,
        "color_cx" : 1060,
        "color_cy" : 800
        // "color_cy" : 1140
    },
    ".wine04" : {
        "cx" : 870,
        "cy" : 300,
        "color_cx" : 630,
        "color_cy" : 800
        // "color_cy" : 1140
    },
    ".wine05" : {
        "cx" : 930,
        "cy" : 300,
        "color_cx" : 670,
        "color_cy" : 800
        // "color_cy" : 1140
    },
    ".wine06" : {
        "cx" : 1000,
        "cy" : 300,
        "color_cx" : 825,
        "color_cy" : 800
        // "color_cy" : 1140
    },
    ".wine07" : {
        "cx" : 720,
        "cy" : 400,
        "color_cx" : 700,
        "color_cy" : 800
        // "color_cy" : 1140
    },
    ".wine08" : {
        "cx" : 780,
        "cy" : 400,
        "color_cx" : 650,
        "color_cy" : 760
        // "color_cy" : 1105
    },
    ".wine09" : {
        "cx" : 840,
        "cy" : 400,
        "color_cx" : 860,
        "color_cy" : 800
        // "color_cy" : 1140
    },
    ".wine10" : {
        "cx" : 900,
        "cy" : 400,
        "color_cx" : 690,
        "color_cy" : 760
        // "color_cy" : 1105
    },
    ".wine11" : {
        "cx" : 960,
        "cy" : 400,
        "color_cx" : 1025,
        "color_cy" : 760
        // "color_cy" : 1105
    }
}



var style = document.createElement('style');
document.head.appendChild(style);

Object.keys(wine_dict).forEach(function(wine_name) {
    var wine_vals = wine_dict[wine_name];
    var dx = wine_vals["color_cx"] - wine_vals["cx"];
    var dy = wine_vals["color_cy"] - wine_vals["cy"];
    console.log(wine_name,dx,dy);

    // style.sheet.insertRule("%s_animate {transform: translate(%dpx,%dpx); transition: 1s ease-in-out;}", wine_name, dx, dy);
    rule = wine_name + "_animate {transform: translate("+ dx +"px,"+ dy +"px); transition: 1s ease-in-out;}"
    console.log(rule);
    style.sheet.insertRule(rule);
});



style.sheet.insertRule(".wine03_animate {transform: translate(100px,400px); transition: 1s ease-in-out;}");

$(document).ready(function(){
    $( ".wine01" ).click(function() {
        // wines.forEach(function(wineClass) {
        //     $(wineClass).addClass("animate");
        // });
        wines.forEach(function(wineSVG) {
                $(wineSVG).addClass(wineSVG.slice(1) + "_animate");
            });
        
      });
});



// https://webdesign.tutsplus.com/tutorials/silky-smooth-web-animation-with-velocityjs--cms-24266