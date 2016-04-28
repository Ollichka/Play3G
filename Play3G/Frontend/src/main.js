
$(function(){
    //This code will execute when the page is ready
    var LevelOne = require('./levels/LevelOne');
    var Product_List = require('./Product_List');
    var Vocabulary =  require('./levels/Vocabulary');

    var API = require('./API');
    API.getProductList(function(err,prod_list){
        if(err) return console.error(err);
        LevelOne.initialiseMenu();
    })

    $(".tester").click(function(){
        window.location = "/levelOne.html";
    })

    $("#vocabulary").click(function(){
        console.log("voc");
        Vocabulary.addPhoto();

    })



});