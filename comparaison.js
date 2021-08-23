// Rent Variables
var output1 = document.getElementById('value__display1');
var slider1 = document.getElementById('pourcentage_cons');

output1.innerHTML = slider1.value; 

slider1.oninput = function() {
    output1.innerHTML = this.value;
}


var slider2 = document.getElementById('prix_cons');
var output2 = document.getElementById('value__display2');

output2.innerHTML = slider2.value;

slider2.oninput = function() {
    output2.innerHTML = this.value;
}

var slider3 = document.getElementById('rent');
var output3 = document.getElementById('value__display3');

output3.innerHTML = slider3.value;

slider3.oninput = function() {
    output3.innerHTML = this.value;
}

var slider31 = document.getElementById('occupation');
var output31 = document.getElementById('value__display31');

output31.innerHTML = slider31.value;

slider31.oninput = function() {
    output31.innerHTML = this.value;
}



var slider4 = document.getElementById('interest');
var output4 = document.getElementById('value__display4');

output4.innerHTML = slider4.value;

slider4.oninput = function() {
    output4.innerHTML = this.value;
}

var slider5 = document.getElementById('years');
var output5 = document.getElementById('value__display5');

output5.innerHTML = slider5.value;

slider5.oninput = function() {
    output5.innerHTML = this.value;
}

// Sell Variables 
var output12 = document.getElementById('value__display12');
var slider12 = document.getElementById('pourcentage_cons2');

output12.innerHTML = slider12.value; 

slider12.oninput = function() {
    output12.innerHTML = this.value;
}


var slider22 = document.getElementById('prix_cons2');
var output22 = document.getElementById('value__display22');

output22.innerHTML = slider22.value;

slider22.oninput = function() {
    output22.innerHTML = this.value;
}

var slider32 = document.getElementById('prix_vente2');
var output32 = document.getElementById('value__display322');

output32.innerHTML = slider32.value;

slider32.oninput = function() {
    output32.innerHTML = this.value;
}

// var slider52 = document.getElementById('years2');
// var output52 = document.getElementById('value__display52');

// output52.innerHTML = slider52.value;

// slider52.oninput = function() {
//     output52.innerHTML = this.value;
// }


function done(){

    // Declaration des variables 

    // Rent Variables
    var area = parseFloat(document.getElementById('area').value) ;
    var land = parseFloat(document.getElementById('land__value').value);
    var pourcentage_cons = parseInt(document.getElementById('pourcentage_cons').value);
    var price_cons = parseFloat(document.getElementById('prix_cons').value);
    var rent = parseFloat(document.getElementById('rent').value);
    var occupation = parseFloat(document.getElementById('occupation').value);
    var floor= parseInt(document.getElementById('floor').value);
    var appart = parseInt(document.getElementById('appart').value);
    var interest = parseFloat(document.getElementById('interest').value);
    var years = parseInt(document.getElementById('years').value);

    var parking = document.getElementById('parking').checked;
    var prestation = document.getElementById('prestation').checked;

    // Sell Variables
    var area2 = parseFloat(document.getElementById('area2').value) ;
    var land2 = parseFloat(document.getElementById('land__value2').value);
    var pourcentage_cons2 = parseInt(document.getElementById('pourcentage_cons2').value);
    var price_cons2 = parseFloat(document.getElementById('prix_cons2').value);
    var price_sell2 = parseFloat(document.getElementById('prix_vente2').value);
    var floor2= parseInt(document.getElementById('floor2').value);
    var appart2 = parseInt(document.getElementById('appart2').value);
    // var years2 = parseInt(document.getElementById('years2').value);

    var parking2 = document.getElementById('parking2').checked;
    var prestation2 = document.getElementById('prestation2').checked;
    
    // Rent outputs
    var output1 = document.getElementById('monthly__payement');
    var total = calculate__Price(area, pourcentage_cons, price_cons, floor, parking, prestation) + land;
    var payement = calcluerVPM(total, interest/100, years);
    output1.innerHTML = +payement.toFixed(2);

    var output2 = document.getElementById('rent__appart');
    var rental = rentAppart(area, pourcentage_cons, rent, appart);
    output2.innerHTML = +rental.toFixed(2);

    var output3 = document.getElementById('monthly__revenu');
    var revenu = calculateRevenu(rental, appart, floor, occupation);
    output3.innerHTML = +revenu.toFixed(2);
    
    var output4 = document.getElementById('monthly__profit');
    var monthlyProfit = profit(revenu, payement);
    output4.innerHTML= +monthlyProfit.toFixed(2)


    // var output4 = document.getElementById('total__profit');
    // Profit =monthlyProfit*12*years;
    // console.log(Profit)
    // output4.innerHTML= +monthlyProfit.toFixed(2)
    
    var output5 = document.getElementById('total__profit');
    var totalProfit = monthlyProfit * 12 * years;
    output5.innerHTML = +totalProfit.toFixed(2);
    // console.log(totalProfit);
    


    // Sell output
    var output11 = document.getElementById('price__apppart');
    var priceAppart2 = price__apppart(area2, pourcentage_cons2, price_sell2, appart2);
    output11.innerHTML = +priceAppart2.toFixed(2);

    var output22 = document.getElementById('total__budget');
    var totalBudget2 = budget(area2, pourcentage_cons2, price_cons2, floor2, parking2, prestation2);
    output22.innerHTML = +totalBudget2.toFixed(2) ;

    var output33 = document.getElementById('total__revenu');
    var totalRevenu2 = revenuftion(priceAppart2, appart2, floor2);
    output33.innerHTML = +totalRevenu2.toFixed(2);

    var output44 = document.getElementById('total__profit2');
    var totalProfit2 = profit(totalRevenu2, totalBudget2) ;
    output44.innerHTML = +totalProfit2.toFixed(2);



};

// Rental analysis fonctions 


// area represents the area of the land 
// pourcentage represents the pourcentage of the area that is going to be build
// price is the price of construction per square feet
function calculate__Price(area , pourcentage, price, floor, parking, prestation){
    var totalPrice = 0;
    if(parking && prestation){
        totalPrice = area * pourcentage/100 * price *floor *1.15;
    } else if (parking){
        totalPrice = area * pourcentage/100 * price *floor * 1.05;
    } else if (prestation) {
        totalPrice = area * pourcentage/100 * price *floor * 1.1;
    } else {
        totalPrice = area * pourcentage/100 * price *floor ;
    }

    
    return totalPrice;

};

function raisePower(x,y) {
    return Math.pow(x,y)
}
    
function calcluerVPM(mnt,taux,duree){

    var mensualite=0;
    mensualite = mnt * ( (taux/12) /(1-raisePower((1+ (taux/12) ),-duree*12)));
    return mensualite;
};

function rentAppart(area, pourcentage, price, appart){
    return area * pourcentage/100* price /appart;

};

function profit(monthlyRevnue, monthlyPayement){
    return monthlyRevnue-monthlyPayement;
};

function calculateRevenu(rentAppart, appart, floor, occupation){
    return rentAppart * appart * floor * occupation/100;

};

// Sell Analysis Functions 

function price__apppart(area, pourcentage, price, appart){
    return  area * pourcentage/100 * price / appart;
};

function budget(area, pourcentage, price, floor, parking, prestation){
    var budget = 0;
    if( parking && prestation){
        budget = area * pourcentage/100 *price * floor * 1.15;
    } else if (parking){
        budget = area * pourcentage/100 *price * floor * 1.05;
    } else if (prestation ){
        budget = area * pourcentage/100 *price * floor * 1.1;
    } else {
        budget = area * pourcentage/100 *price * floor;
    }
    return budget;
};

function revenuftion(priceAppart, appart, floor){
    return priceAppart * appart * floor;
};

function profit(revenu, budget) {
    return revenu - budget;
};
