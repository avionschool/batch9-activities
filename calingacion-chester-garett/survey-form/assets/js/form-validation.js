$(document).ready(function() {
  /*validation for contact-form */
  $("#contact-form").validate({
    errorClass: "error fail-alert",
    validClass: "valid success-alert",
    rules: {
      name : {
        required: true,
        minlength: 2
      },
      age: {
        required: true,
        number: true,
        min: 1,
        max: 100
      },
      email: {
        required: true,
        email: true
      },
      password : {
        required: true,
        minlength : 5
      },
      password_confirm : {
        minlength : 5,
        equalTo : '[name="password"]'
    }
    },
    messages : {
      name: {
        minlength: "Name should be at least 2 characters"
      },
      age: {
        required: "Please enter your age",
        number: "Please enter your age as a numerical value",
        min: "You must be at least 18 years old"
      },
      email: {
        email: "The email you entered is invalid."
      }
    },
    // to display main content
      submitHandler: function(form) {
        $('.personal-details-form').hide();
        $('.main-content').show();
        $('.main-header').show();
        return false;
    }
  });

  $("#survey-form").validate({
    errorClass: "error fail-alert",
    validClass: "valid success-alert",
    rules: {
      loginemail: {
        required: true,
        email: true
      },
      loginpassword:{
        required: true
      }
    },
    messages:{
      loginemail: {
        required: "Email address or password invalid.",
        email: "Email address or password invalid"
      },
      loginpassword: {
        required: "Email address or password invalid."
      }
    },
    //to display main content
    submitHandler: function(form) {
      $('.personal-details-form').hide();
      $('.main-content').show();
      $('.main-header').show();
      return false;
  }
  });

  /*validation for mythical-five */
  $('input[name=mythical-five]').on('change', function (e) {
    if ($('input[name=mythical-five]:checked').length > 5) {
        $(this).prop('checked', false);
        alert("Choose only 5 players.");
    }
  });

  /*validation for champion team */
  $('input[name=champion]').on('change', function (e) {
    if ($('input[name=champion]:checked').length > 1) {
        $(this).prop('checked', false);
        alert("You can only choose 1 champion.");
    }
  });

  /* For the sticky navigation */
  $('.js--section-main-content').waypoint(function(direction) {
    if (direction == "down") {
        $('.main-header').addClass('sticky');
    } else {
        $('.main-header').removeClass('sticky');
    }
  }, {
  offset: '200px;'
  });

  /*to submit chatbox form but retain existing page*/
  $('.chatbox').validate({
    submitHandler: function(form) {
      $('#text-chatbox').val('');
      $('.personal-details-form').hide();
      $('.main-content').show();
      $('.main-header').show();
      return false;
    }
  });

  /*bet form validation*/
  $(".bet-form").validate({
    errorClass: "error fail-alert",
    validClass: "valid success-alert",
    rules: {
      diamonds:{
        required: true,
        min: 100}
    },
    messages: {
      diamonds:{
        required: 'Minimum of 100 diamonds to bet.',
        min: 'Minimum of 100 diamonds to bet.'
      }
    },
    submitHandler: function(form) {
      $('.personal-details-form').hide();
      $('.bg-modal').hide();
      $('.main-content').show();
      $('.main-header').show();
      return false;
      }
  });
  
  /*shortcut to logout form */
  $(".logo").on('click', function(){
    $('.personal-details-form').show();
    $('.main-content').hide();
    $('.main-header').hide();   
  });
});


