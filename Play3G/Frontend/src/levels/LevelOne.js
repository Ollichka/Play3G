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

function dragProduct(){
    $('#Tomato').draggable({
        containment: $kitchen,
        scope: "desk"
    });
    $('#Mayonnaise').draggable({
        containment: $kitchen,
        scope: "desk"
    });
    $('#Cucumber').draggable({
        containment: $kitchen,
        scope: "desk"
    });
    $('#Knife').draggable({
        containment: $kitchen,
        stop: function() {
            $('#Tomato').attr("src","assets/images/40186586.png");
        },
        scope: "desk"
    });
    $('#Plate').draggable({
        containment: $kitchen,
        scope: "desk"
    });
    $('#Bread').draggable({
        containment: $kitchen,
        scope: "desk"
    });
}


function initialiseMenu() {
    showProductOnPageList(Product_List);
    showEquipmentOnPageList(Equipment_List);
    dragProduct();
}

exports.initialiseMenu = initialiseMenu;
