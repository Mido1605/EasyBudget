// Diplay the Value of the range input 

var slider1 = document.getElementById('pourcentage_cons');
var output1 = document.getElementById('value__display1');

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
var slider3 = document.getElementById('prix_vente');
var output3 = document.getElementById('value__display3');

output3.innerHTML = slider3.value; 

slider3.oninput = function() {
    output3.innerHTML = this.value;
}

// var slider4 = document.getElementById('interest');
// var output4 = document.getElementById('value__display4');

// output4.innerHTML = slider4.value; 

// slider4.oninput = function() {
//     output4.innerHTML = this.value;
// }
// var slider5 = document.getElementById('years');
// var output5 = document.getElementById('value__display5');

// output5.innerHTML = slider5.value; 

// slider5.oninput = function() {
//     output5.innerHTML = this.value;
// }

function done(){

    // Varibales 
    var area = parseFloat(document.getElementById('area').value) ;
    var land = parseFloat(document.getElementById('land__value').value);
    var pourcentage_cons = parseInt(document.getElementById('pourcentage_cons').value);
    var price_cons = parseFloat(document.getElementById('prix_cons').value);
    var price_sell = parseFloat(document.getElementById('prix_vente').value);
    var floor= parseInt(document.getElementById('floor').value);
    var appart = parseInt(document.getElementById('appart').value);
    // var interest = parseFloat(document.getElementById('interest').value);
    // var years = parseInt(document.getElementById('years').value);

    var parking = document.getElementById('parking').checked;
    var prestation = document.getElementById('prestation').checked;


    // outputs
    var output1 = document.getElementById('price__apppart');
    var priceAppart = price__apppart(area, pourcentage_cons, price_sell, appart);
    output1.innerHTML = +priceAppart.toFixed(2);

    var output2 = document.getElementById('total__budget');
    var totalBudget = budget(area, pourcentage_cons, price_cons, floor, parking, prestation);
    output2.innerHTML = +totalBudget.toFixed(2) ;

    var output3 = document.getElementById('total__revenu');
    var totalRevenu = revenu(priceAppart, appart, floor);
    output3.innerHTML = +totalRevenu.toFixed(2);

    var output4 = document.getElementById('total__profit');
    var totalProfit = profit(totalRevenu, totalBudget) ;
    output4.innerHTML = +totalProfit.toFixed(2);






}

function price__apppart(area, pourcentage, price, appart){
    return  area * pourcentage/100 * price / appart;
}

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
}

function revenu(priceAppart, appart, floor){
    return priceAppart * appart * floor;
}

function profit(revenu, budget) {
    return revenu - budget;
}
