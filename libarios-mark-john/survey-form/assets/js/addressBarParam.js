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

if (obj.usedTools1 == undefined && obj.usedTools2 == undefined && obj.usedTools3 == undefined && obj.usedTools4 == undefined && obj.usedTools5 == undefined){
    $("#tools-used").prop('innerText', '---');
}
/*else {
    $("#level").prop('innerText', ' ' + obj.level.toUpperCase());
}*/
/**setting up mastery**/

//alert(obj.textarea);
//console.log(obj);