class Wine {

    constructor(wine_dict) {
        this.name = wine_dict['name'];
        this.hex = wine_dict['hex'];
        this.color = wine_dict['color'];
        this.sweetness = wine_dict['sweetness'];
    }

    set startPos(x, y) {
        this.cx = x;
        this.cy = y;
    }
}


var wine_dict = {
    "wine01" : {
        "name": "Pinot Noir",
        "hex": "#ad2e41",
        "color": "red",
        "sweetness": "dry",
    },
    "wine02" : {
        "name": "Cabernet Sauvignon",
        "hex": "#68171b",
        "color": "red",
        "sweetness": "dry",
    },
};

// create Wine objects
var wine_lst = [];
wine_dict.forEach(function(wine) { 
    wine_lst.push(Wine(wine));
})

// generate start positions


var lLen = wine_lst.length;

var x_space = 60;
var rowCount = 6;
var numOfRows = (lLen > rowCount) ? 2 : 1;

var startX_lst = [];
var startY_lst = [];

for (var i = 0; i < numOfRows; i++) {
    
}

for (var i = 0; i < wine_lst.length; i++) {

    
    


}
    wine = wine_lst[i];
    wine.startPos();
    //Do something
}
