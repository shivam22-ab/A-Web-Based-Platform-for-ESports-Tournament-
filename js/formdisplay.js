$(document).ready(function(){
    $(".sign-in").on("click",function () {
        $("#log-form").show(400);
    });
    $(".close").on("click",function (){
        // console.log("this is clicked");
        $("#log-form").hide();
    });
});