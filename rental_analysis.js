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





function done(){
    // Varibales

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


    // console.log(area +" - "+ land +" - "+pourcentage_cons +" - "+price_cons +" - "+rent +" - "+floor +" - "+
    // appart +" - "+interest +" - "+years);
    // console.log(calculate__Price(area, pourcentage_cons, price_cons));
    // console.log(calcluerVPM(1600000, interest/100, years));
    // console.log(rentAppart(area, pourcentage_cons, rent, appart));

    // console.log(parking);


    // outputs
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
    output4.innerHTML = +profit(revenu, payement).toFixed(2);

    // console.log()
    // console.log(total)



};


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
}

function rentAppart(area, pourcentage, price, appart){
    return area * pourcentage/100* price /appart;

}

function profit(monthlyRevnue, monthlyPayement){
    return monthlyRevnue-monthlyPayement;
}

function calculateRevenu(rentAppart, appart, floor, occupation){
    return rentAppart * appart * floor * occupation/100;

}




