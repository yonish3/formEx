

let checkForm = function(){
    let name = document.getElementById("nameOf")
    let salary = document.getElementById("salary").value
    let birthday = document.getElementById("birthday").value
    let phone = document.getElementById("phone").value
    document.getElementById("result").innerHTML =""

    if  (name.value.length < 2){
        document.getElementById("result").innerHTML += "Name too short <br> " 
    }
    if (salary <10000 || salary> 16000) {
        document.getElementById("result").innerHTML += "Too much/littel salary requisted <br> "
    }
    if (!birthday) {
        document.getElementById("result").innerHTML += "what are you 0 years old?? <br> "
        
    }
    if (phone.length!=10) {
        document.getElementById("result").innerHTML += "Check phonenumber <br> "
        
    }
}

