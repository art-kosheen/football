$(document).ready(function () {

    var cart = {};

    var temp_product_name = $(".tabs__controls-item.active .tabs__control-link").attr("data-name");
    cart["data-name"]=temp_product_name;

    $(".color__btn").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
    });

    $(".size__btn").click(function () {

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
            // localStorage.getItem('itemsArray');
            localStorage.setItem('itemsCart', JSON.stringify(cart));
        }
    });

})

