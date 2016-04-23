var Product_List = require('../Product_List');
var Equipment_List = require('../Equipment_List');
var Templates = require('../Templates');

//HTML едемент куди будуть додаватися піци
var $kitchen = $(".kitchen-one");

function showProductOnPageList(list) {

    function showOneProd(prod) {
        console.log("products");
        var html_code = Templates.Product_OneItem({prod: prod});

        var $node = $(html_code);
//        console.log($node.find("#draggable"));
//        $(function() {
//
//            $('#draggable').draggable();
//
//        });
        $kitchen.append($node);
    }

    list.forEach(showOneProd);
}

function showEquipmentOnPageList(list) {

    function showOneEquip(eq) {
        console.log("equipment");
        var html_code = Templates.Equipment_OneItem({eq: eq});

        var $node = $(html_code);

        $kitchen.append($node);
    }

    list.forEach(showOneEquip);
}

function dragProduct(prod){
    $('#draggable').draggable();
}

function initialiseMenu() {
    showProductOnPageList(Product_List);
    showEquipmentOnPageList(Equipment_List);
}

exports.initialiseMenu = initialiseMenu;
