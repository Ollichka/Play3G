var Product_List = require('../Product_List');
var Equipment_List = require('../Equipment_List');
var Templates = require('../Templates');

//HTML едемент куди будуть додаватися піци
var $kitchen = $(".kitchen-one");

var number = 1;
var step=1;
var ondesk=0;
var cut=0;
var sand;


function showProductOnPageList(list) {

    function showOneProd(prod) {
        console.log("products");
        var html_code = Templates.Product_OneItem({prod: prod});
        var $node = $(html_code);
        if(prod.id==="Sandwich") {sand=prod; }
        $kitchen.append($node);

    }

    list.forEach(showOneProd);
}


function readyTask() {
    console.log(step);
    console.log('#demo-step'+step+"");
    $('#demo-step'+step+"").css('text-decoration', 'line-through');
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
            if(ondesk===4){
                readyTask();
            }
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
                         $(ui.draggable).hide("slow");
                         $("#Sandwich").attr("src",function(){
                             if(number==1) return sand.icon1;
                             else if(number==2) return sand.icon2;
                             else if(number==3) return sand.icon3;
                             else if(number==4) return sand.icon4;
                             else return sand.icon4;
                         });
                         number++;
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
    $('#congratulation').show();
//    alert("congratulation you finish demo level!");
}


function initialiseMenu() {
    showProductOnPageList(Product_List);
    showEquipmentOnPageList(Equipment_List);
    dragProduct();
}

exports.initialiseMenu = initialiseMenu;
