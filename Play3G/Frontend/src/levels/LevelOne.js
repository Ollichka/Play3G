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
    $('#Desk').droppable({
        scope:"desk",
        over: function(event, ui) {
            $(ui.draggable).draggable("destroy");
            $(ui.draggable).droppable({
                scope:"product",
                over: function(event, ui) {
                    var curr = this;
                    function addSmallIcon(pr) {
                        if($(curr).attr("id")===pr.id)
                            $(curr).attr("src",pr.iconSmall);
                    }
                    Product_List.forEach(addSmallIcon);

                }
            });
        }
    });

    $('#Tomato').draggable({
        containment: $kitchen,
        revert:true,
        scope: "desk"
    });
    $('#Mayonnaise').draggable({
        containment: $kitchen,
        scope: "desk"
    });
    $('#Cucumber').draggable({
        containment: $kitchen,
        revert:true,
        scope: "desk"
    });
    $('#Knife').draggable({
        containment: $kitchen,
        revert:true,
        scope: "product"
    });
    $('#Bread').draggable({
        containment: $kitchen,
        revert:true,
        scope: "desk"
    });
}


function initialiseMenu() {
    showProductOnPageList(Product_List);
    showEquipmentOnPageList(Equipment_List);
    dragProduct();
}

exports.initialiseMenu = initialiseMenu;
