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
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");

    let testP2 = p2.hasChildNodes(); 
    console.log(testP2);
    
    if (p2.hasChildNodes()) {
        valNum.removeChild(valNum.childNodes[0]);
        valCol.removeChild(valCol.childNodes[0]);
        console.log("Has child nodes")
    } else {
        console.log("No child nodes")
    }
    p1.append(`${num.value} lbs son ${lbsKgs(num.value)}`);
    if (num.value > 250) {
        p2.append(`${nombre.value}, si este es tu peso lo mejor es que cuides más tu salud.`);
    } 
    else {
        p2.append(`Gracias por usar este convertidor ${nombre.value}`);
    }
    valNum.append(p1);
    valCol.append(p2);
    console.log(testP2);

    num.value = null;
    nombre.value = "";
  });

  //1 libra == 0.453592

