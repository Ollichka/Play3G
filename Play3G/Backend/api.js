 
var  level_List = require('./data/Level_List');

exports.getLevelList = function(req, res) {
    res.send(Level_List);
} ;