var textContent = '';
var fullname = '';
var email = '';
var number = '';
var mastery = '';
var level = '';
var usedTools1 = '';
var usedTools2 = '';
var usedTools3 = '';
var usedTools4 = '';
var usedTools5 = '';
var getUrl = window.location.search.slice(1);

getUrl = getUrl.replace(/=/g,'":"');
getUrl = getUrl.replace(/&/g,'","');

getUrl = '{"'+ getUrl +'"}';

var obj = JSON.parse(getUrl);

/**setting up dp **/
//document.getElementById("dp").src = obj.dp;
var dpSession = localStorage.getItem("dp-session");
document.querySelector("#dp").setAttribute("src", dpSession);
/**setting up dp **/

/**setting up content text area**/
if (obj.textarea == ""){
    $("#textarea-content").prop('innerText', '---');
} else {
    var removeSymbol = obj.textarea.split('+').join(' ')
    var finalTextArea = removeSymbol.charAt(0).toUpperCase() + removeSymbol.slice(1)
    $("#textarea-content").prop('innerText', finalTextArea);
}
/**setting up content text area**/

/**setting up personal information**/
if (obj.fullname == ""){
    $("#fullname").prop('innerText', '---');
} else {
    $("#fullname").prop('innerText', ' ' + obj.fullname.split('+').join(' '));
}

if (obj.email == ""){
    $("#email").prop('innerText', '---');
} else {
    $("#email").prop('innerText', ' ' + decodeURIComponent(obj.email));
}

if (obj.number == ""){
    $("#number").prop('innerText', '---');
} else {
    $("#number").prop('innerText', ' ' + obj.number);
}
/**setting up personal information**/

/**setting up mastery**/
if (obj.mastery == ""){
    $("#prog-lang").prop('innerText', '---');
} else {
    $("#prog-lang").prop('innerText', ' ' + obj.mastery.toUpperCase());
}

if (obj.level == ""){
    $("#level").prop('innerText', '---');
} else {
    $("#level").prop('innerText', ' ' + obj.level.toUpperCase());
}

var usedTools = [];
var undefinedCounter = 0;
var toolsSelected = '';

usedTools.push(obj.usedTools1, obj.usedTools2, obj.usedTools3, obj.usedTools4, obj.usedTools5);

for (i = 0; i < usedTools.length; i++){
    if (usedTools[i] == undefined){
        undefinedCounter++;;
    }
}

if (undefinedCounter == 5){
    $("#tools-used").prop('innerText', '---');
} else {
    for (x = 0; x < usedTools.length; x++){
        if (usedTools[x] != undefined){
            toolsSelected += usedTools[x].split('+').join(' ') + ', ';
        }
    }

    $("#tools-used").prop('innerText', toolsSelected.slice(0, -2));
}
/**setting up mastery**/

//alert(obj.textarea);
//console.log(obj);