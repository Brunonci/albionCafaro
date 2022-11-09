const pocionVeneno = [
    {nombre: "Poción de veneno menor", tier: "T4", precioaprox: 700, materiales: ["Bardana almenada", "Consuelda hojabrillante"], cantidadMaterial: [8, 4]},
    {nombre: "Poción de veneno", tier: "T6", precioaprox: 3500, materiales: ["Dedalera elusiva", "Cardo de dragón", "Consuelda hojabrillante", "Leche de oveja"], cantidadMaterial: [24, 12, 12, 6]},
    {nombre: "Poción de veneno mayor", tier: "T8", precioaprox: 12000, materiales: ["Milenrama demoníaca", "Gordolobo de fuego", "Cardo de dragón", "Leche de vaca", "Aguardiente de calabaza"], cantidadMaterial: [72, 36, 36, 18, 18]}
];
const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
guardarLocal("listaPociones", JSON.stringify(pocionVeneno));
console.log(pocionVeneno[0].nombre)

function cardExpand1Display() {
    let x = document.getElementById("cardExpand1");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function cardExpand2Display() {
    let x = document.getElementById("cardExpand2");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function cardExpand3Display() {
    let x = document.getElementById("cardExpand3");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function cardExpand4Display() {
    let x = document.getElementById("cardExpand4");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function cardExpand5Display() {
    let x = document.getElementById("cardExpand5");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function cardExpand6Display() {
    let x = document.getElementById("cardExpand6");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


function refinatorBtnCarleon() {
    const element = document.getElementById("btnCarleon");
    element.classList.remove("btn-sm");
    element.classList.add("btn-lg");
    const element1 = document.getElementById("btnBridgewatch");
    element1.classList.remove("btn-lg");
    element1.classList.add("btn-sm");
    const element2 = document.getElementById("btnFortsterling");
    element2.classList.remove("btn-lg");
    element2.classList.add("btn-sm");
    const element3 = document.getElementById("btnLymhurst");
    element3.classList.remove("btn-lg");
    element3.classList.add("btn-sm");
    const element4 = document.getElementById("btnMartlock");
    element4.classList.remove("btn-lg");
    element4.classList.add("btn-sm");
    const element5 = document.getElementById("btnThetford");
    element5.classList.remove("btn-lg");
    element5.classList.add("btn-sm");
    document.getElementById("selecionCuidad").innerHTML = "Carleon";
    document.getElementById("selecionCuidad").style.color = "#858796";
}
function refinatorBtnBridgewatch() {
    const element = document.getElementById("btnBridgewatch");
    element.classList.remove("btn-sm");
    element.classList.add("btn-lg");
    const element1 = document.getElementById("btnCarleon");
    element1.classList.remove("btn-lg");
    element1.classList.add("btn-sm");
    const element2 = document.getElementById("btnFortsterling");
    element2.classList.remove("btn-lg");
    element2.classList.add("btn-sm");
    const element3 = document.getElementById("btnLymhurst");
    element3.classList.remove("btn-lg");
    element3.classList.add("btn-sm");
    const element4 = document.getElementById("btnMartlock");
    element4.classList.remove("btn-lg");
    element4.classList.add("btn-sm");
    const element5 = document.getElementById("btnThetford");
    element5.classList.remove("btn-lg");
    element5.classList.add("btn-sm");
    document.getElementById("selecionCuidad").innerHTML = "Bridgewatch";
    document.getElementById("selecionCuidad").style.color = "#f6c23e";
}
function refinatorBtnFortsterling() {
    const element = document.getElementById("btnFortsterling");
    element.classList.remove("btn-sm");
    element.classList.add("btn-lg");
    const element1 = document.getElementById("btnCarleon");
    element1.classList.remove("btn-lg");
    element1.classList.add("btn-sm");
    const element2 = document.getElementById("btnBridgewatch");
    element2.classList.remove("btn-lg");
    element2.classList.add("btn-sm");
    const element3 = document.getElementById("btnLymhurst");
    element3.classList.remove("btn-lg");
    element3.classList.add("btn-sm");
    const element4 = document.getElementById("btnMartlock");
    element4.classList.remove("btn-lg");
    element4.classList.add("btn-sm");
    const element5 = document.getElementById("btnThetford");
    element5.classList.remove("btn-lg");
    element5.classList.add("btn-sm");
    document.getElementById("selecionCuidad").innerHTML = "Fortsterling";
    document.getElementById("selecionCuidad").style.color = "#c0c1c2";
}
function refinatorBtnLymhurst() {
    const element = document.getElementById("btnLymhurst");
    element.classList.remove("btn-sm");
    element.classList.add("btn-lg");
    const element1 = document.getElementById("btnCarleon");
    element1.classList.remove("btn-lg");
    element1.classList.add("btn-sm");
    const element2 = document.getElementById("btnBridgewatch");
    element2.classList.remove("btn-lg");
    element2.classList.add("btn-sm");
    const element3 = document.getElementById("btnFortsterling");
    element3.classList.remove("btn-lg");
    element3.classList.add("btn-sm");
    const element4 = document.getElementById("btnMartlock");
    element4.classList.remove("btn-lg");
    element4.classList.add("btn-sm");
    const element5 = document.getElementById("btnThetford");
    element5.classList.remove("btn-lg");
    element5.classList.add("btn-sm");
    document.getElementById("selecionCuidad").innerHTML = "Lymhurst";
    document.getElementById("selecionCuidad").style.color = "#1cc88a";
}
function refinatorBtnMartlock() {
    const element = document.getElementById("btnMartlock");
    element.classList.remove("btn-sm");
    element.classList.add("btn-lg");
    const element1 = document.getElementById("btnCarleon");
    element1.classList.remove("btn-lg");
    element1.classList.add("btn-sm");
    const element2 = document.getElementById("btnBridgewatch");
    element2.classList.remove("btn-lg");
    element2.classList.add("btn-sm");
    const element3 = document.getElementById("btnLymhurst");
    element3.classList.remove("btn-lg");
    element3.classList.add("btn-sm");
    const element4 = document.getElementById("btnFortsterling");
    element4.classList.remove("btn-lg");
    element4.classList.add("btn-sm");
    const element5 = document.getElementById("btnThetford");
    element5.classList.remove("btn-lg");
    element5.classList.add("btn-sm");
    document.getElementById("selecionCuidad").innerHTML = "Martlock";
    document.getElementById("selecionCuidad").style.color = "#36b9cc";
}
function refinatorBtnThetford() {
    const element = document.getElementById("btnThetford");
    element.classList.remove("btn-sm");
    element.classList.add("btn-lg");
    const element1 = document.getElementById("btnCarleon");
    element1.classList.remove("btn-lg");
    element1.classList.add("btn-sm");
    const element2 = document.getElementById("btnBridgewatch");
    element2.classList.remove("btn-lg");
    element2.classList.add("btn-sm");
    const element3 = document.getElementById("btnLymhurst");
    element3.classList.remove("btn-lg");
    element3.classList.add("btn-sm");
    const element4 = document.getElementById("btnFortsterling");
    element4.classList.remove("btn-lg");
    element4.classList.add("btn-sm");
    const element5 = document.getElementById("btnMartlock");
    element5.classList.remove("btn-lg");
    element5.classList.add("btn-sm");
    document.getElementById("selecionCuidad").innerHTML = "Thetford";
    document.getElementById("selecionCuidad").style.color = "#611BBD";
}


function precioTotal(){
    let cant = parseInt(document.getElementById("cantItem").innerText, 10);
    let precio = parseInt(document.getElementById("precioItem").value, 10);
    let total = cant * precio 
    document.getElementById("precioTotalItem").innerHTML = total.toFixed(0);
}
function precioTotalM1(){
    let cant1 = parseInt(document.getElementById("cantMaterial1").innerText, 10);
    let precio1 = parseInt(document.getElementById("precioMaterial1").value, 10);
    let total1 = cant1 * precio1 
    document.getElementById("precioTotalMaterial1").innerHTML = total1.toFixed(0);
}
function precioTotalM2(){
    let cant2 = parseInt(document.getElementById("cantMaterial2").innerText, 10);
    let precio2 = parseInt(document.getElementById("precioMaterial2").value, 10);
    let total2 = cant2 * precio2 
    document.getElementById("precioTotalMaterial2").innerHTML = total2.toFixed(0);
}
function precioTotalM3(){
    let cant3 = parseInt(document.getElementById("cantMaterial3").innerText, 10);
    let precio3 = parseInt(document.getElementById("precioMaterial3").value, 10);
    let total3 = cant3 * precio3 
    document.getElementById("precioTotalMaterial3").innerHTML = total3.toFixed(0);
}
function precioTotalM4(){
    let cant4 = parseInt(document.getElementById("cantMaterial4").innerText, 10);
    let precio4 = parseInt(document.getElementById("precioMaterial4").value, 10);
    let total4 = cant4 * precio4 
    document.getElementById("precioTotalMaterial4").innerHTML = total4.toFixed(0);
}
function precioTotalM5(){
    let cant5 = parseInt(document.getElementById("cantMaterial5").innerText, 10);
    let precio5 = parseInt(document.getElementById("precioMaterial5").value, 10);
    let total2 = cant5 * precio5
    document.getElementById("precioTotalMaterial5").innerHTML = total5.toFixed(0);
}

function customTarifa(){
    let tier = document.getElementById("nombreItem").innerHTML
    let tier4 = pocionVeneno[0].nombre
    let tier6 = pocionVeneno[1].nombre
    let tier8 = pocionVeneno[2].nombre

    if (tier === tier4){
        let tarifa = parseInt(document.getElementById("inputTarifa").value, 10);
        let tarifaTotal = (tarifa / 100) * 2400
        document.getElementById("tarifaUso").innerHTML = tarifaTotal.toFixed(0);
        document.getElementById("tarifaUso1").innerHTML = tarifaTotal.toFixed(0);
    }else if(tier === tier6){
        let tarifa = parseInt(document.getElementById("inputTarifa").value, 10);
        let tarifaTotal = (tarifa / 100) * 10800
        document.getElementById("tarifaUso").innerHTML = tarifaTotal.toFixed(0);
        document.getElementById("tarifaUso1").innerHTML = tarifaTotal.toFixed(0);
    }else if(tier === tier8){
        let tarifa = parseInt(document.getElementById("inputTarifa").value, 10);
        let tarifaTotal = (tarifa / 100) * 36000
        document.getElementById("tarifaUso").innerHTML = tarifaTotal.toFixed(0);
        document.getElementById("tarifaUso1").innerHTML = tarifaTotal.toFixed(0);
    }
    


}
function costoMateriales(){
    
    let tier = document.getElementById("nombreItem").innerHTML
    let tier4 = "Poción de veneno menor"
    let tier6 = "Poción de veneno"
    let tier8 = "Poción de veneno mayor"

    if (tier === tier4){
        let total1 = parseInt(document.getElementById("precioTotalMaterial1").innerText, 10);
        let total2 = parseInt(document.getElementById("precioTotalMaterial2").innerText, 10);
        let total = total1 + total2
        document.getElementById("costoMateriales").innerHTML = total.toFixed(0);
        document.getElementById("costoMateriales1").innerHTML = total.toFixed(0);
    }else if(tier === tier6){
        let total1 = parseInt(document.getElementById("precioTotalMaterial1").innerText, 10);
        let total2 = parseInt(document.getElementById("precioTotalMaterial2").innerText, 10);
        let total3 = parseInt(document.getElementById("precioTotalMaterial3").innerText, 10);
        let total4 = parseInt(document.getElementById("precioTotalMaterial4").innerText, 10);
        let total = total1 + total2 + total3 + total4
        document.getElementById("costoMateriales").innerHTML = total.toFixed(0);
        document.getElementById("costoMateriales1").innerHTML = total.toFixed(0);
    }else if(tier === tier8){
        let total1 = parseInt(document.getElementById("precioTotalMaterial1").innerText, 10);
        let total2 = parseInt(document.getElementById("precioTotalMaterial2").innerText, 10);
        let total3 = parseInt(document.getElementById("precioTotalMaterial3").innerText, 10);
        let total4 = parseInt(document.getElementById("precioTotalMaterial4").innerText, 10);
        let total5 = parseInt(document.getElementById("precioTotalMaterial5").innerText, 10);
        let total = total1 + total2 + total3 + total4 + total5
        document.getElementById("costoMateriales").innerHTML = total.toFixed(0);
        document.getElementById("costoMateriales1").innerHTML = total.toFixed(0);
    }

    
    retornoMateriales()
    costoTotal()


}
function retornoMateriales(){
    //sin foco
    let tarifaUso = parseInt(document.getElementById("tarifaUso").innerText, 10);
    let costoMateriales = parseInt(document.getElementById("costoMateriales").innerText, 10);
    let tasaSinFoco = parseInt(document.getElementById("retornoSinFoco").value, 10);
    let tasaSinFocoPorcentaje = tasaSinFoco / 100
    let suma = tasaSinFocoPorcentaje
    let totalRetorno = tasaSinFocoPorcentaje
    for (let count = 0; count < 5; count++){
        suma = suma * tasaSinFocoPorcentaje
        totalRetorno = totalRetorno + suma
    }
    let retornoMaterialesSinFoco = costoMateriales * totalRetorno
    document.getElementById("retornoSinFocoTotal").innerHTML = retornoMaterialesSinFoco.toFixed(0);

    //con foco
    let tarifaUso1 = parseInt(document.getElementById("tarifaUso1").innerText, 10);
    let tasaConFoco = parseInt(document.getElementById("retornoConFoco").value, 10);
    let tasaConFocoPorcentaje = tasaConFoco / 100
    let suma1 = tasaConFocoPorcentaje
    let totalRetorno1 = tasaConFocoPorcentaje
    for (let count = 0; count < 5; count++){
        suma1 = suma1 * tasaConFocoPorcentaje
        totalRetorno1 = totalRetorno1 + suma1
    }
    let retornoMaterialesConFoco = costoMateriales * totalRetorno1
    document.getElementById("retornoConFocoTotal").innerHTML = retornoMaterialesConFoco.toFixed(0);
}
function costoTotal(){
    let precioTotalItem = parseInt(document.getElementById("precioTotalItem").innerText, 10);
    let costoMateriales = parseInt(document.getElementById("costoMateriales").innerText, 10);
    let retornoSinFocoTotal = parseInt(document.getElementById("retornoSinFocoTotal").innerText, 10);
    let retornoConFocoTotal = parseInt(document.getElementById("retornoConFocoTotal").innerText, 10);
    let tarifaUso = parseInt(document.getElementById("tarifaUso").innerText, 10);
    let tarifaUso1 = parseInt(document.getElementById("tarifaUso1").innerText, 10);
    let costoTotalSinFoco = tarifaUso + costoMateriales - retornoSinFocoTotal
    let costoTotalConFoco = tarifaUso1 + costoMateriales - retornoConFocoTotal
    document.getElementById("finalTotalSinFoco").innerHTML = costoTotalSinFoco.toFixed(0);
    document.getElementById("finalTotalConFoco").innerHTML = costoTotalConFoco.toFixed(0);
    if(costoTotalSinFoco < precioTotalItem){
        const finalTotalSinFoco = document.getElementById("finalTotalSinFoco");
        finalTotalSinFoco.setAttribute("class", "btn btn-success mt-4");
    }else{
        const finalTotalSinFoco = document.getElementById("finalTotalSinFoco");
        finalTotalSinFoco.setAttribute("class", "btn btn-danger mt-4");
    }
    if(costoTotalConFoco < precioTotalItem){
        const finalTotalConFoco = document.getElementById("finalTotalConFoco");
        finalTotalConFoco.setAttribute("class", "btn btn-success mt-4");
    }else{
        const finalTotalConFoco = document.getElementById("finalTotalConFoco");
        finalTotalConFoco.setAttribute("class", "btn btn-danger mt-4");
    }
}

function potionT4(){
    document.getElementById("nombreItem").innerHTML = ("Poción de veneno menor");
    document.getElementById("imgitem").src = "../images/craft/potion/veneno/T4_POTION_COOLDOWN.png";
    document.getElementById("precioItem").value = 700;
    let contenedor = document.getElementById("cambio")
    contenedor.innerHTML = '<div class="infoMaterial"><img src="../images/craft/productos/T4_BURDOCK.png" alt=""><p id="cantMaterial1" class="numInfo">24</p><h6 id="nombreMaterial1" class="nombreMaterial">Consuelda hojabrillante</h6><input id="precioMaterial1" class="form-control" value="700" type="number" oninput="precioTotalM1(), costoMateriales(), costoTotal()"><p id="precioTotalMaterial1">3120</p></div>'
    contenedor.innerHTML += '<div class="linea"></div>'
    contenedor.innerHTML += '<div class="infoMaterial"><img src="../images/craft/productos/T3_COMFREY.png" alt=""><p id="cantMaterial2" class="numInfo">12</p><h6 id="nombreMaterial2" class="nombreMaterial">Consuelda hojabrillante</h6><input id="precioMaterial2" class="form-control" value="350" type="number" oninput="precioTotalM2(), costoMateriales(), costoTotal()"><p id="precioTotalMaterial2">1400</p></div>'
    customTarifa()
    precioTotal()
    costoMateriales() 
    costoTotal()
}
function potionT6(){
    document.getElementById("nombreItem").innerHTML = ("Poción de veneno");
    document.getElementById("imgitem").src = "../images/craft/potion/veneno/T6_POTION_COOLDOWN.png";
    document.getElementById("precioItem").value = 3800;
    
    let contenedor = document.getElementById("cambio")
    contenedor.innerHTML = '<div class="infoMaterial"><img src="../images/craft/productos/T6_FOXGLOVE.png" alt=""><p id="cantMaterial1" class="numInfo">24</p><h6 id="nombreMaterial1" class="nombreMaterial">Consuelda hojabrillante</h6><input id="precioMaterial1" class="form-control" value="374" type="number" oninput="precioTotalM1(), costoMateriales(), costoTotal()"><p id="precioTotalMaterial1">8976</p></div>'
    contenedor.innerHTML += '<div class="linea"></div>'
    contenedor.innerHTML += '<div class="infoMaterial"><img src="../images/craft/productos/T5_TEASEL.png" alt=""><p id="cantMaterial2" class="numInfo">12</p><h6 id="nombreMaterial2" class="nombreMaterial">Consuelda hojabrillante</h6><input id="precioMaterial2" class="form-control" value="354" type="number" oninput="precioTotalM1(), costoMateriales(), costoTotal()"><p id="precioTotalMaterial2">4248</p></div>'
    contenedor.innerHTML += '<div class="linea"></div>'
    contenedor.innerHTML += '<div class="infoMaterial"><img src="../images/craft/productos/T3_COMFREY.png" alt=""><p id="cantMaterial3" class="numInfo">12</p><h6 id="nombreMaterial3" class="nombreMaterial">Consuelda hojabrillante</h6><input id="precioMaterial3" class="form-control" value="350" type="number" oninput="precioTotalM3(), costoMateriales(), costoTotal()"><p id="precioTotalMaterial3">8976</p></div>'
    contenedor.innerHTML += '<div class="linea"></div>'
    contenedor.innerHTML += '<div class="infoMaterial"><img src="../images/craft/productos/T6_MILK.png" alt=""><p id="cantMaterial4" class="numInfo">6</p><h6 id="nombreMaterial4" class="nombreMaterial">Consuelda hojabrillante</h6><input id="precioMaterial4" class="form-control" value="204" type="number" oninput="precioTotalM4(), costoMateriales(), costoTotal()"><p id="precioTotalMaterial4">1224</p></div>'
    customTarifa()
    precioTotal() 
    costoMateriales()
    costoTotal()
}
function potionT8(){
    document.getElementById("nombreItem").innerHTML = ("Poción de veneno mayor");
    document.getElementById("imgitem").src = "../images/craft/potion/veneno/T8_POTION_COOLDOWN.png";
    document.getElementById("precioItem").value = 10000;

    let contenedor = document.getElementById("cambio")
    contenedor.innerHTML = '<div class="infoMaterial"><img src="../images/craft/productos/T8_YARROW.png" alt=""><p id="cantMaterial1" class="numInfo">72</p><h6 id="nombreMaterial1" class="nombreMaterial">Consuelda hojabrillante</h6><input id="precioMaterial1" class="form-control" value="438" type="number" oninput="precioTotalM1(), costoMateriales(), costoTotal()"><p id="precioTotalMaterial1">31536</p></div>'
    contenedor.innerHTML += '<div class="linea"></div>'
    contenedor.innerHTML += '<div class="infoMaterial"><img src="../images/craft/productos/T7_MULLEIN.png" alt=""><p id="cantMaterial2" class="numInfo">36</p><h6 id="nombreMaterial2" class="nombreMaterial">Consuelda hojabrillante</h6><input id="precioMaterial2" class="form-control" value="430" type="number" oninput="precioTotalM1(), costoMateriales(), costoTotal()"><p id="precioTotalMaterial2">15480</p></div>'
    contenedor.innerHTML += '<div class="linea"></div>'
    contenedor.innerHTML += '<div class="infoMaterial"><img src="../images/craft/productos/T5_TEASEL.png" alt=""><p id="cantMaterial3" class="numInfo">36</p><h6 id="nombreMaterial3" class="nombreMaterial">Consuelda hojabrillante</h6><input id="precioMaterial3" class="form-control" value="354" type="number" oninput="precioTotalM3(), costoMateriales(), costoTotal()"><p id="precioTotalMaterial3">4248</p></div>'
    contenedor.innerHTML += '<div class="linea"></div>'
    contenedor.innerHTML += '<div class="infoMaterial"><img src="../images/craft/productos/T8_MILK.png" alt=""><p id="cantMaterial4" class="numInfo">18</p><h6 id="nombreMaterial4" class="nombreMaterial">Consuelda hojabrillante</h6><input id="precioMaterial4" class="form-control" value="229" type="number" oninput="precioTotalM4(), costoMateriales(), costoTotal()"><p id="precioTotalMaterial4">4122</p></div>'
    contenedor.innerHTML += '<div class="linea"></div>'
    contenedor.innerHTML += '<div class="infoMaterial"><img src="../images/craft/productos/T6_MILK.png" alt=""><p id="cantMaterial5" class="numInfo">18</p><h6 id="nombreMaterial5" class="nombreMaterial">Consuelda hojabrillante</h6><input id="precioMaterial5" class="form-control" value="210" type="number" oninput="precioTotalM5(), costoMateriales(), costoTotal()"><p id="precioTotalMaterial5">3780</p></div>'




    customTarifa()
    costoMateriales()
    precioTotal()
    costoTotal()
}






