
function cardExpand1Display() {
    var x = document.getElementById("cardExpand1");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function cardExpand2Display() {
    var x = document.getElementById("cardExpand2");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function cardExpand3Display() {
    var x = document.getElementById("cardExpand3");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function cardExpand4Display() {
    var x = document.getElementById("cardExpand4");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function refinatorBtnCarleon() {
    var element = document.getElementById("btn-sm");
    element.classList.toggle("btn-lg");
}


function precioTotal(){
    let cant = parseInt(document.getElementById("cantItem").innerText, 10);
    let precio = parseInt(document.getElementById("precioItem").value, 10);
    let total = cant * precio 

    document.getElementById("precioTotalItem").innerHTML = total;
    
    console.log(total)
}

function precioTotalM1(){
    let cant1 = parseInt(document.getElementById("cantMaterial1").innerText, 10);
    let precio1 = parseInt(document.getElementById("precioMaterial1").value, 10);
    let total1 = cant1 * precio1 

    document.getElementById("precioTotalMaterial1").innerHTML = total1;
    
    console.log(total1)
}

function precioTotalM2(){
    let cant2 = parseInt(document.getElementById("cantMaterial2").innerText, 10);
    let precio2 = parseInt(document.getElementById("precioMaterial2").value, 10);
    let total2 = cant2 * precio2 

    document.getElementById("precioTotalMaterial2").innerHTML = total2;
    
    console.log(total2)
}