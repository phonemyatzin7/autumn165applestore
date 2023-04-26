// before index.html
// jquery area
$(document).ready(function(){

    // start modal area
        $("#agree").change(function(){
            if($(this).is(":checked")){
                $("[type='submit']").removeAttr("disabled");
            }else{
                $("[type='submit']").attr("disabled",true);
            }
        });
    // end modal area
    

    // start product
    // start ipad
        $("#lightslideripad").lightSlider({
            item: 1,
            loop: true,
            speed: 600,
        auto: true
        });
    // end ipad
    

    // start watch
        $("#lightsliderwatch").lightSlider({
            item: 1,
            loop: true,
            speed: 2000,
            auto: true
        });
    // end watch
    

    // start accessories
        var getaccessories = [
            "MagSafe",
            "Cases & Protection",
            "Power & Cable",
            "Apple Pencil,Mice & Keyboards",
        ];
    
        $('#search').autocomplete({
            source:getaccessories
        });
    // end accessories
    // end product
    

    // start footer section
        $("#getyear").text(new Date().getUTCFullYear());
    // end footer section

    // changing new page using jQuery
    $(".loginbtn").click(function(){
        window.location.href="./after/index.html";
    });
});



// javascript area
// function loginbtn(){
//     location.replace("./after/index.html");
// }

function signupbtn(){
    location.replace("./after/index.html");
}

function beforebuy(){
    window.alert("Please login first!!!");
}





// after index.html
// jQuery area
$(document).ready(function(){
    $('.')
});



// javascript area
function afterbuy(){
    window.alert("Thanks for purchasing.");
}
