var Storage = require('../Storage');

var level=[];

function saveProgress(lev){
    level.push(lev);
    Storage.set('level',level);
    console.log(Storage.get('level'))
}

function update(){
    var lev = Storage.get('level');
    if(lev) {
        level = lev;
    }
}

exports.saveProgress = saveProgress;