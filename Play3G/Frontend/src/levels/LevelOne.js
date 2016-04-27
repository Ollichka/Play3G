var Product_List = require('../Product_List');
var Equipment_List = require('../Equipment_List');
var Templates = require('../Templates');

//HTML едемент куди будуть додаватися піци
var $kitchen = $(".kitchen-one");

var number = 1;
var step=1;
var ondesk=0;
var cut=0;


function showProductOnPageList(list) {

    function showOneProd(prod) {
        console.log("products");
        var html_code = Templates.Product_OneItem({prod: prod});
        var $node = $(html_code);
        if(prod.id==="Sandwich") $(prod).hide();
        $kitchen.append($node);

    }

    list.forEach(showOneProd);
}


function readyTask() {
    console.log('#demo-step'+step+"");
    $('#demo-step'+step+"").addClass("cross");
    if(step==7) endLevel();
    step++;
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
            $(ui.draggable).attr("id",$(ui.draggable).attr("id")+"-desk");
            ondesk++;
            if(ondesk===4) readyTask();
            $(ui.draggable).droppable({
                scope:"product",
                over: function(event, ui) {
                    var curr = this;
                    function addSmallIcon(pr) {
                        if($(curr).attr("id")===pr.id+"-desk") {
                            cut++;
                            $(curr).draggable({
                                containment: $kitchen,
                                revert:true,
                                scope: "plate"
                            });
                            $(curr).attr("src", pr.iconSmall);
                            if(cut===4) readyTask();
                        }
                    }
                    Product_List.forEach(addSmallIcon);

                }
            });
        }
    });
    $('#Plate').droppable({
         scope:"plate",
         over: function(event, ui) {
             function stages(pr) {
                 if ($(ui.draggable).attr("id") === pr.id + "-desk"||$(ui.draggable).attr("id") ==="Mayonnaise" ) {
                     if(number==pr.queue) {
                         console.log(number);
                         number++;
                         $(ui.draggable).hide("slow");
                         readyTask();
                     }
                 }
             }

             Product_List.forEach(stages);

         }
    });

    $('#Tomato').draggable({
        containment: $kitchen,
        revert:true,
        scope: "desk"
    });
    $('#Cheese').draggable({
        containment: $kitchen,
        revert:true,
        scope: "desk"
    });
    $('#Mayonnaise').draggable({
        containment: $kitchen,
        scope: "plate"
    });
    $('#Cucumber').draggable({
        containment: $kitchen,
        revert:true,
        scope: "desk"
    });
    $('#Cheese').draggable({
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

function endLevel(){
        alert("congratulation you finish it!");
}


function initialiseMenu() {
    showProductOnPageList(Product_List);
    showEquipmentOnPageList(Equipment_List);
    dragProduct();
}

exports.initialiseMenu = initialiseMenu;
