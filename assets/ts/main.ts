$(".main-header .button").on("click", function () {
    const tabMenuElement = $(this).parent();

    tabMenuElement.find(".button").each(function () {
        $(this).removeClass("is-transparent, is-primary");
    });

    $(this).addClass("is-primary");
});

$(".dropdown").on("click", function () {
    $(this).toggleClass("is-open");
});

$(".dropdown li").on("click", function () {
    $(this)
        .closest(".dropdown")
        .children(".title")
        .children(".text")
        .html($(this).text());
});

$(".slider-text").slick({
    dots: true,
    prevArrow: $(".icon-arrow-top"),
    nextArrow: $(".icon-arrow-bottom"),
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
});

$(".slider-img").slick({
    slidesToShow: 3,
    prevArrow: $(".arrow-left"),
    nextArrow: $(".arrow-right"),
    variableWidth: true,
    speed: 1000,
});

$(".slider-offer").slick({
    slidesToShow: 3,
    prevArrow: $(".arrow-left"),
    nextArrow: $(".arrow-right"),
    speed: 1000,
});

$(".slider-tour").slick({
    slidesToShow: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: true,
});

$(".slider-photo").slick({
    slidesToShow: 2,
    autoplay: true,
    variableWidth: true,
    prevArrow: $(".arrow-left"),
    nextArrow: $(".arrow-right"),
});

$(".slider-review").slick({
    slidesToShow: 3,
    prevArrow: $(".arrow-left"),
    nextArrow: $(".arrow-right"),
    speed: 1000,
});

$(".main-footer form").validate({
    errorElement: "div",
    rules: {
        email: {
            required: true,
            email: true,
        },
    },
    messages: {
        email: {
            required: "Email is required",
        },
    },
    submitHandler: function (form) {
        console.log(form, this);
    },
});
