$(document).ready(function(){
    $("#signup").validate({
       rules: {
        fname: {
            required: true,
            minlength: 4,
            maxlength: 8
        },

        sname: {
            required: true, 
            minlength: 2,
            maxlength: 8
        },
        userName: {
            required: true,
            minlength: 6,
            maxlength: 16

        },

        mail: {
            required: true,
            email: true,
        },
        password: {
            required: true,
            minlength: 8,
            maxlength: 10
        },
        confirmPassword: {
            required: true,
            equalTo: "#password"
        },
        days: {
            required: true
        },
        gender: {
            required: true
        }
       },

       
       messages: {
        fname: {
            required: "Please Enter your First Name",
            minlength: "Enter atleast 4 characters",
            maxlength: "Enter only 8 characters"
        },
        mail: {
            required: "Enter your Email Id"
        },
        password: {
            required: "Enter your Password",
            minlength: "Enter minimum 8 characters",
            maxlength: "Enter maximum 10 charactes"
        },
        confirmPassword: {
            required: "Re Enter your password",
            equalTo: "Enter Same Password"
        },
        userName: {
            required: "Enter your User Name"
        }
       }
    })

    $("#userName").focus(function() {
        var firstname= $("#fname").val()
        var lastname= $("#sname").val()
        if(firstname && lastname && !this.value) {
            this.value= firstname + "." + lastname;
        }
    });
})