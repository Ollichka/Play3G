var Product_List = require('../Product_List');
var Equipment_List = require('../Equipment_List');
var Templates = require('../Templates');
var Profile = require('./Profile');

//HTML едемент куди будуть додаватися піци
var $kitchen = $(".kitchen-one");

var number = 1;
var ondesk=0;
var cut=0;
var sand;


function showProductOnPageList(list) {

    function showOneProd(prod) {
        var html_code = Templates.Product_OneItem({prod: prod});
        var $node = $(html_code);
        if(prod.id==="Sandwich") {sand=prod; }
        $kitchen.append($node);

    }

    list.forEach(showOneProd);
}


function readyTask(num) {
    $('#demo-step'+num+"").css('text-decoration', 'line-through');
    if(num==7) endLevel();
}


function showEquipmentOnPageList(list) {

    function showOneEquip(eq) {
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

            console.log($(ui.draggable).draggable( "option", "revert"));
            if($(ui.draggable).draggable( "option", "revert")){
                $(ui.draggable).attr("id",$(ui.draggable).attr("id")+"-desk");
                console.log($(ui.draggable).attr("id"));
                ondesk++;
                if(ondesk===4){
                    readyTask(1);
                }
            }
            $(ui.draggable).draggable({
                containment: $('#Desk'),
                revert:false
            });
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
                            if(cut===4) readyTask(2);
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
                 if ($(ui.draggable).attr("id") === pr.id + "-desk"||$(ui.draggable).attr("id") ===pr.id  ) {
                     if(number==pr.queue) {
                         $(ui.draggable).hide("slow");
                         $("#Sandwich").attr("src",function(){
                             if(number==1) return sand.icon1;
                             else if(number==2) return sand.icon2;
                             else if(number==3) return sand.icon3;
                             else if(number==4) return sand.icon4;
                             else return sand.icon5;
                         });
                         number++;
                         readyTask(number+1);
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
        revert:true,
        scope: "plate"
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

function endLevel(){
    $('#congratulation').show();
    Profile.saveProgress({level:1,theme:"kitchen"})
//    alert("congratulation you finish demo level!");
}


function initialiseMenu() {
    showProductOnPageList(Product_List);
    showEquipmentOnPageList(Equipment_List);
    dragProduct();
}

exports.initialiseMenu = initialiseMenu;
