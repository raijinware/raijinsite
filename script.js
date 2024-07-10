//alert("Javascript has been added");
/*

function addition(p1, p2){
    return p1 + p2;
}

*/


function milesToKilometers(){
    var miles = document.getElementById("milesToKilometers").value;
    var milesFloat = parseFloat(miles);

    document.getElementById("mToK").innerHTML = milesFloat * 1.60934;
}

function kilometersToMiles(){
    var kilometers = document.getElementById("kilometersToMiles").value;
    var kilometersFloat = parseFloat(kilometers);

    document.getElementById("kToM").innerHTML = kilometersFloat * 0.621371;
}