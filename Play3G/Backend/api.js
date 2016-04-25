 
var Product_List = require('./data/Product_List');
var Equipment_List = require('./data/Equipment_List');

exports.getProductList = function(req, res) {
    console.log("api");
    res.send(Product_List);
} ;

exports.getEquipmentList = function(req, res) {
    console.log("api");
    res.send(Equipment_List);
} ;

