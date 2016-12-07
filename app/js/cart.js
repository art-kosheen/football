// localStorage.setItem('key', string)
// localStorage.getItem('key')
//
// object = JSON.parse(string)
// string = JSON.stringify(object)
$(document).ready(function () {

    var cart = {};

    var temp_product_name = $(".tabs__controls-item.active .tabs__control-link").attr("data-name");
    cart["data-name"]=temp_product_name;

    $(".color__btn").on('click', (function (e) {
        e.preventDefault();
        $(this).addClass("active").siblings().removeClass("active");
    }));

    $(".size__btn").click(function () {

        var temp_product_name = $(".tabs__controls-item.active .tabs__control-link").attr("data-name");
        cart["data-name"]=temp_product_name;

        var temp_product_size = $(".tabs__item.active .content__item__size input[name=\"size\"]:checked").val();
        if (temp_product_size != undefined)
            cart["data-size"]=temp_product_size;

        var temp_product_color = $(".color__btn.active").attr("data-color");
        if (temp_product_color != undefined)
            cart["data-color"]=temp_product_color;


        if (cart["data-size"] == undefined || cart["data-color"] == undefined) {
            alert("выберите цвет/размер");
        }
        else {
            console.log(cart);
            localStorage.setItem('itemsCart', JSON.stringify(cart));
        }
    });

})

