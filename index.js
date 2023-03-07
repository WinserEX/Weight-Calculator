let lbsKgs = (x) => {
    kg = 0.453592
    res = x * kg
    return `${res} Kg`;          
}

function validateForm() {
    let x = document.forms["myForm"]["num"].value;
    let y = document.forms["myForm"]["nombre"].value;
    if (x == "" || y == "") {
      alert("Los campos no pueden estar en blanco");
      return false;
    }
}

let con = document.querySelector('.container')
document.querySelector(".btn").addEventListener("click", function(event){
    event.preventDefault()
    //Query Selectors
    let num = document.querySelector(".num");
    let nombre = document.querySelector(".nombre");
    let valNum = document.querySelector(".valNum");
    let valCol = document.querySelector(".valCol");


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
        divSuccess.append(`${num.value} lbs son ${lbsKgs(num.value)}`);
        valNum.append(divSuccess);
    } 
    else if (nombre.value == "") {
        valCol.append(`Agrega tu nombre por favor`);
    }
    else {
        divAlert.append(`Por favor agrega la medida para poder convertirla`);
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

