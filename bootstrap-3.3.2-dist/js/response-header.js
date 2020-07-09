$(function () {
    var lastScrollTop = 0;
        delta = 15;
    $(window).scroll(function (event) {
        var st = $(this).scrollTop();
        if (Math.abs(lastScrollTop - st) <= delta) return;
        if ((st > lastScrollTop) && (lastScrollTop > 0)) {
            $(".navbar-default").css("top", "-65px");
        } else {
            $(".navbar-default").css("top", "0px");
        }
        lastScrollTop = st;
    });
});
