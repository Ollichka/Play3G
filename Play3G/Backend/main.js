
var express = require('express');
var path = require('path');
var morgan = require('morgan');
var bodyParser = require('body-parser');

function configureEndpoints(app) {
    var pages = require('./pages');
    var api = require('./api');

    app.get('/api/get-product-list/', api.getProductList);

    //Сторінки
    //Page with first level of game(temprorary)
    app.get('/', pages.mainPage);
    app.get('/levelOne.html', pages.levelOne);
    app.get('/profile.html', pages.profile);
    app.get('/vocabulary.html', pages.vocabulary);
    app.get('/about.html', pages.about);

//    app.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));
//
//    // the callback after google has authenticated the user
//    app.get('/auth/google/callback',
//        passport.authenticate('google', {
//            successRedirect : 'back',
//            failureRedirect : '/'
//        }));


    //Якщо не підійшов жоден url, тоді повертаємо файли з папки www
    app.use(express.static(path.join(__dirname, '../Frontend/www')));
}

function startServer(port) {
    //Створюється застосунок
    var app = express();

    //Налаштування директорії з шаблонами
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');

    //Налаштування виводу в консоль списку запитів до сервера
    app.use(morgan('dev'));

    //Розбір POST запитів
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    //Налаштовуємо сторінки
    configureEndpoints(app);

    //Запуск додатка за вказаним портом
    app.listen(port, function () {
        console.log('My Application Running on http://localhost:'+port+'/');
    });
}

exports.startServer = startServer;