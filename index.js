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

    //test 1
    console.log(`Num has child: ${valNum.hasChildNodes()}`)
    console.log(`Name has child: ${valCol.hasChildNodes()}`)

    if (valNum.hasChildNodes() == true || valCol.hasChildNodes() == true) {
        valNum.removeChild(valNum.childNodes[0])
        valCol.removeChild(valCol.childNodes[0])
        console.log("Child nodes")
    } else {
        console.log("No child nodes")
    }

    if (num.value != null) {
        valNum.append(`${num.value} lbs son ${lbsKgs(num.value)}`);
    } 
    else {
        valNum.append(`Por favor agrega la medida para poder convertirla`);
    }

    if (num.value > 250 && nombre.value != "") {
        valCol.append(`${nombre.value}, si este es tu peso lo mejor es que cuides más tu salud.`);
    } 
    else if (nombre.value == "") {
        valCol.append(`Agrega tu nombre por favor`);
    }
    else {
        valCol.append(`Gracias por usar este convertidor ${nombre.value}`);
    }
    num.value = 0;
    nombre.value = "";
    //test 2
    console.log(`Num has child: ${valNum.hasChildNodes()}`)
    console.log(`Name has child: ${valCol.hasChildNodes()}`)
  });



  //1 libra == 0.453592

