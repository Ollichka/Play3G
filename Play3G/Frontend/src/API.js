
var API_URL = "http://localhost:5050";

function backendGet(url, callback) {
    console.log(url);
    $.ajax({
        url: API_URL + url,
        type: 'GET',
        success: function(data){
            callback(null, data);
        },
        fail: function() {
            callback(new Error("Ajax Failed"));
        }
    })
}

function backendPost(url, data, callback) {
    $.ajax({
        url: API_URL + url,
        type: 'POST',
        contentType : 'application/json',
        data: JSON.stringify(data),
        success: function(data){
            callback(null, data);
        },
        fail: function() {
            callback(new Error("Ajax Failed"));
        }
    })
}

exports.getProductList = function(callback) {
    console.log("Api");
    backendGet("/api/get-product-list/", callback);
};

exports.getEquipmentList = function(callback) {
    console.log("Api");
    backendGet("/api/get-equipment-list/", callback);
};

