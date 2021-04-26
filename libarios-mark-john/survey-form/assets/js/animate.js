document.querySelector('#personal-info-validity').addEventListener('click', function() {
    //var isValid = document.querySelector('#survey-form').reportValidity();
    var isValid = document.querySelector('#survey-form, #name, #email, #number').reportValidity();
    if (isValid){
        document.getElementById("personal-info").style.display = 'none';
        document.getElementById("career-info").style.display = 'block';
        $("#dropdown, #beginner").prop('required', true);
        //$("select, #beginner").prop('required', true);
        $("#mastery").prop('class', 'active');
    } 
});

document.querySelector('#career-info-validity').addEventListener('click', function() {
    var isValid = document.querySelector('#survey-form').reportValidity();
    if (isValid){
        document.getElementById("career-info").style.display = 'none';
        document.getElementById("profile-info").style.display = 'block';
        $("#dp-settings").prop('required', true);
        //$("#dropdown, #beginner").prop('required', true);
        //$("select, #beginner").prop('required', true);
        $("#profile").prop('class', 'active');
    } 
});

document.querySelector('#profile-info-validity').addEventListener('click', function() {
    var isValid = document.querySelector('#survey-form').reportValidity();
    if (isValid){
        document.getElementById("profile-info").style.display = 'none';
        document.getElementById("finish-info").style.display = 'block';
        $("#finish").prop('class', 'active');

        fullname = document.getElementById("name").value;
        document.getElementById("greetings").innerHTML = "Thank you " + fullname + "!"
    } 
});

document.querySelector('#career-info-invalidate').addEventListener('click', function() {
    document.getElementById("personal-info").style.display = 'block';
    document.getElementById("career-info").style.display = 'none';
    $("#dropdown, #beginner").prop('required', false);
    $("#mastery").prop('class', '');
    /*var isValid = document.querySelector('#survey-form, #dropdown').reportValidity();
    if (isValid){
        alert(1);
    } */
});

document.querySelector('#profile-info-invalidate').addEventListener('click', function() {
    document.getElementById("profile-info").style.display = 'none';
    document.getElementById("career-info").style.display = 'block';
    $("#profile").prop('class', '');
    $("#dp-settings").prop('required', false);
    /*var isValid = document.querySelector('#survey-form, #dropdown').reportValidity();
    if (isValid){
        alert(1);
    } */
});

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#dp')
            .attr('src', e.target.result)
            .width(150)
            .height(150);

            //document.getElementById("hiddenFilePath").value = e.target.result;
            
            //console.log(e.target.result);
            /*var myObject, newpath;
            myObject = new ActiveXObject("Scripting.FileSystemObject");
            myObject.CopyFile ("e.target.result", "d:\\" + input.files[0].name);*/
           /* var object = new ActiveXObject("Scripting.FileSystemObject");
            var file = object.GetFile(e.target.result);
            file.Move("D:\\" + input.files[0].name);
            console.log(input.files[0].name);*/
            localStorage.setItem("dp-session", e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
        //alert(reader.readAsDataURL(input.files[0]));
    }
}
