
$(function(){
    //This code will execute when the page is ready
    var LevelOne = require('./levels/LevelOne');
    var Product_List = require('./Product_List');

    var API = require('./API');
    API.getProductList(function(err,prod_list){
        if(err) return console.error(err);
        LevelOne.initialiseMenu();
    })

    $(".lets").click(function(){
        window.location = "/levelOne.html";
    })




});