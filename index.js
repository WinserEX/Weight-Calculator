let lbsKgs = (x) => {
    kg = 0.453592
    res = x * kg
    return `${res} Kg`;          
}

let con = document.querySelector('.container')
document.querySelector(".btn").addEventListener("click", function(event){
    event.preventDefault()
    let num = document.querySelector(".num");
    let nombre = document.querySelector(".nombre");
    let valNum = document.querySelector(".valNum");
    let valCol = document.querySelector(".valCol");
    if (valNum.hasChildNodes() == true || valCol.hasChildNodes() == true) {
        valNum.removeChild(valNum.childNodes[0])
        valCol.removeChild(valCol.childNodes[0])
    } else {
        console.log("No child nodes")
    }
    valNum.append(`${num.value} lbs son ${lbsKgs(num.value)}`);
    if (num.value > 250) {
        valCol.append(`${nombre.value}, si este es tu peso lo mejor es que cuides más tu salud.`);
    } 
    else {
        valCol.append(`Gracias por usar este convertidor ${nombre.value}`);
    }
    num.value = null;
    nombre.value = "";
  });

  //1 libra == 0.453592

