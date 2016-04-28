

function addPhoto(){
    console.log("vocab photo")
    $("#br").hover({
      over:  function(){
         $(".illustration").attr("src", "http://parentingwithunderstanding.files.wordpress.com/2011/11/slice-of-bread.png")
    }
    });
}

exports.addPhoto = addPhoto;