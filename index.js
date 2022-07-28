console.log("working");

// Q1. Create a button , on click of which you should be able to hide a paragraph text, create another button onclick of which this paragraph should be visible

$(".hidePara").click(function(){
    $(".para").hide();
});
$(".showPara").click(function(){
    $(".para").show();
});

//----------------------------------------------------------------------------------------------------------------------------------

// Q2. Create an ajax call, by using this api "https://jsonplaceholder.typicode.com/todos/12" and print the title as the heading of the page

$('.travel').click(function(){
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/todos/12",
        type: "GET",
        success: function(data){
            console.log(data);
            document.getElementsByClassName("print")[0].innerText = data.title;
        }
    })
});