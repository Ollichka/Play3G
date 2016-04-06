
var fs = require('fs');
var ejs = require('ejs');


exports.Product_OneItem = ejs.compile(fs.readFileSync('./Frontend/templates/Product_OneItem.ejs', "utf8"));
exports.Equipment_OneItem = ejs.compile(fs.readFileSync('./Frontend/templates/Equipment_OneItem.ejs', "utf8"));