function checkedRadio(){
    if(document.getElementById('others').checked){
        document.getElementById('unchecked').style.display = 'block';
    } else {
        document.getElementById('unchecked').style.display = 'none';
    }
}


function checkedBox(){
    if(document.getElementById('checkboxOthers').checked){
        document.getElementById('uncheckedOthers').style.display = 'block';
    } else {
        document.getElementById('uncheckedOthers').style.display = 'none';
    }
}


// function checkBoxValues(){

//     var front = document.getElementById("front");  
//     var back = document.getElementById("back");
//     var app = document.getElementById("app");
//     var soft = document.getElementById("soft");
//     var checkboxOthers = document.getElementById("checkboxOthers");

//     if (front.checked == true){  
//         var frontEnd = document.getElementById("front").value;  
//         return document.getElementById("front-result").innerHTML = frontEnd;   
//     }   

//     if(back.checked == true){
//         var backEnd = document.getElementById("back").value;  
//         return document.getElementById("back-result").innerHTML = backEnd;   
//     }

//     if(app.checked == true){
//         var appDev = document.getElementById("app").value;  
//         return document.getElementById("app-result").innerHTML = appDev;   
//     }

//     if(soft.checked == true){
//         var softEng = document.getElementById("soft").value;  
//         return document.getElementById("soft-result").innerHTML = softEng;   
//     }

//     if(checkboxOthers.checked == true){
//         var othersValue = document.getElementById("checkboxOthers").value;  
//         return document.getElementById("other-result").innerHTML = othersValue;   
//     }
// }






window.addEventListener('load', () => {

    const params = (new URL(document.location)).searchParams;
    const name = params.get('name');
    const email = params.get('email');
    const number = parseInt(params.get('number'));
    const address = params.get('address');
    const role = params.get('role');
    const source = params.get('source');
    const prefer = params.get('prefer');
    const feedback = params.get('feedback');

    document.getElementById('name-result').innerHTML = name;
    document.getElementById('email-result').innerHTML = email;
    document.getElementById('number-result').innerHTML = number;
    document.getElementById('address-result').innerHTML = address;
    document.getElementById('role-result').innerHTML = role;
    document.getElementById('source-result').innerHTML = source;
    document.getElementById('prefer-result').innerHTML = prefer;
    document.getElementById('feedback-result').innerHTML = feedback;
});




function emailValidation(){
    var form = document.getElementById('survey-form');
    
    var email = document.getElementById('email').value;
    var text = document.getElementById('text');

    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
 

    if(email.match(pattern)){
        form.classList.add("valid")
        form.classList.remove("invalid")
        text.innerHTML = "Your Email Address is Valid."
        text.style.color = "#00ff00"
    }else{
        form.classList.remove("valid")
        form.classList.add("invalid")
        text.innerHTML = "Please Enter Valid Email Address."
        text.style.color = "#ff0000"
    }

    if(email === "" || email === null){
        form.classList.remove("valid")
        form.classList.remove("invalid")
        text.innerHTML = ""
        text.style.color = "#00ff00"
    }
    
}


function numericValidation(){
    var form = document.getElementById('survey-form');

    var number = document.getElementById('number').value;
    var numericOnly = document.getElementById('numericOnly');

    // var numeric = /^(([01]?[2-9])|(20))$/;
    var numeric = /^(1[01]|([01]?[2-9])|(20))$/
    
    if(number.match(numeric)){
        form.classList.add("valid");
        form.classList.remove("invalid");
        numericOnly.innerHTML = "Number Accepted";
        numericOnly.style.color = "#00ff00";
    } else {
        form.classList.remove("valid");
        form.classList.add("invalid");
        numericOnly.innerHTML = "Please Enter A Valid Number";
        numericOnly.style.color = "#ff0000";
    }

    if(number === "" || number === null){
        form.classList.remove("valid")
        form.classList.remove("invalid")
        text.innerHTML = ""
        text.style.color = "#00ff00"
    }
}