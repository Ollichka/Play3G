var Storage = require('../Storage');

var level=[];

function saveProgress(lev){
    level.push(lev);
    Storage.set('level',level);
    console.log(Storage.get('level'))
}

exports.saveProgress = saveProgress;