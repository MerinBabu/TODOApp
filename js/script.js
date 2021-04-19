$(function() {
    function redirect() {
        $("#form").submit();
    }

    $("#login").click(function() { validate($("#userid").val(), $("#password").val(), redirect) });

    function validate(uid, pwd, func) {
        let userid = uid;
        let password = pwd;
        try {
            if (uid === "") throw 'User id empty';
            else if (pwd === "") throw 'Password empty';
            else if (uid === "admin" && pwd === "12345") func();
            else throw "Invalid input";


        } catch (error) {
            $("#error").html(error);
        } finally {
            $("uid").html("");
            $("pwd").html("");
        }
        // if (uid === "admin" && pwd === "12345") func();
        // else $("#error").html("Authentication Invalid");


    }
});