let lbsKgs = (x) => {
    res = x * 0.453592
    return `${res} Kg`;          
}

let kgLbs = (x) => {
    res = x * 2.20462;
    return `${res} Lbs`
}

//dropdown cross value

let dropA = document.querySelector("#drop1")
let dropB = document.querySelector("#drop2")

document.querySelector("#drop1").addEventListener("mouseout", function(event){
    if (dropA.value == "Lbs") {
        dropB.value = "Kgs";
    } else if (dropA.value == "Kgs") {
        dropB.value = "Lbs";
    }
    console.log('mouseout');
})

let con = document.querySelector('.container')
document.querySelector(".submit").addEventListener("click", function(event){
    event.preventDefault()
    //Query Selectors
    let drop1 = document.querySelector(".drop1")
    let drop2 = document.querySelector(".drop2")
    let num = document.querySelector(".num");
    let nombre = document.querySelector(".nombre");
    let valNum = document.querySelector(".valNum");
    let valCol = document.querySelector(".valCol");

    //Conversion logic
    let calculation = 0;
    if (drop1.value == "Lbs" && drop2.value == "Kgs") {
        calculation = lbsKgs(num.value);
    }
    else if (drop1.value == "Kgs" && drop2.value == "Lbs") {
        calculation = kgLbs(num.value);
    }
    else if (drop1.value == drop2.value) {
        calculation = `${num.value} ${drop2.value}`;
    } 
    else {
        alert("Edge Case!!!")
    }

    //Create
        //Success
    let divSuccess = document.createElement('div');
    divSuccess.classList.add("alert");
    divSuccess.classList.add("alert-success");
    divSuccess.setAttribute("role", "alert");

    let divSuccess2 = document.createElement('div');
    divSuccess2.classList.add("alert");
    divSuccess2.classList.add("alert-success");
    divSuccess2.setAttribute("role", "alert");

    //Create
        //Danger
    let divAlert = document.createElement('div');
    divAlert.classList.add("alert");
    divAlert.classList.add("alert-danger");
    divAlert.setAttribute("role", "alert");

    let divAlert2 = document.createElement('div');
    divAlert2.classList.add("alert");
    divAlert2.classList.add("alert-danger");
    divAlert2.setAttribute("role", "alert");

    //Create
        //Warning
        let divWarning = document.createElement('div');
        divWarning.classList.add("alert");
        divWarning.classList.add("alert-warning");
        divWarning.setAttribute("role", "alert");

        let divWarning2 = document.createElement('div');
        divWarning2.classList.add("alert");
        divWarning2.classList.add("alert-warning");
        divWarning2.setAttribute("role", "alert");
        
    //test 1
    console.log(`Num has child: ${valNum.hasChildNodes()}`)
    console.log(`Name has child: ${valCol.hasChildNodes()}`)

    //removeChild validation

    if (valNum.hasChildNodes() == true || valCol.hasChildNodes() == true) {
        valNum.removeChild(valNum.childNodes[0])
        valCol.removeChild(valCol.childNodes[0])
        console.log("Child nodes")
    } else {
        console.log("No child nodes")
    }
    //Appends
    if (num.value != 0) {
        divSuccess.append(`${num.value} ${drop1.value} son ${calculation}`);
        valNum.append(divSuccess);
    } 
    else if (nombre.value == "") {
        divWarning.append(`Por favor agrega la medida para poder convertirla.`);
        valNum.append(divWarning)
    }
    else {
        divAlert.append(`${nombre.value}, no olvides agregar la medida para poder convertirla.`);
        valNum.append(divAlert);
    }

    if (num.value > 250 && nombre.value != "") {
        divAlert2.append(`${nombre.value}, si este es tu peso lo mejor es que cuides más tu salud.`);
        valCol.append(divAlert2);
    } 
    else if (nombre.value == "") {
        divWarning2.append(`Agrega tu nombre por favor`);
        valCol.append(divWarning2);
    }
    else {
        divSuccess2.append(`Gracias por usar este convertidor ${nombre.value}`);
        valCol.append(divSuccess2);
    }
    num.value = 0;
    nombre.value = "";
    //test 2
    console.log(`Num has child: ${valNum.hasChildNodes()}`)
    console.log(`Name has child: ${valCol.hasChildNodes()}`)
  });



  //1 libra == 0.453592

