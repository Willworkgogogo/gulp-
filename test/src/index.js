Ad1p = /** @class */ (function () {
            function Ad1p(dom, fn, fn1) {
                this.dom = dom;
                this.fn = fn;
                this.fn1 = fn1;
                this._init();
            }})()
function log() {
    console.log(123)
}
new Ad1p($('.jinzhu-box2 li'), function (dom) {
    dom.find('strong').hide();
    dom.find('span').show();
    dom.find('em').show();
    dom.find('dd').css({ left: '0' });
}, function (dom) {
    dom.find('strong').show();
    dom.find('em').hide();
    dom.find('span').hide();
    dom.find('dd').css({ left: '-86px' });
});

(function () {
    $(".jinzhu-dl").hover(function () {
        clearTimeout(bddl);
        $(".jinzhu-dl-detail").css("display", "none");
        $(this).children(".jinzhu-dl-detail").css("display", "block");
    }, function () {
        bddl = setTimeout(function () { $(".jinzhu-dl-detail").css("display", "none"); }, 8000);
    });
    $(".jinzhu-dl-detail").find("em").click(function () {
        $(this).parent().parent().hide();
    });
    //棣栭〉鎼滅储
    var searchVal, searchLastVal;
    $(".smm-search li").on("click", function () {
        searchVal = $(this).html();
        searchLastVal = $(".smm-search-nav span").html();
        $(".smm-search-nav>span").html(searchVal);
        $(this).html(searchLastVal);
    });
    function SearchSmm() {
        $("#search_btn").on("click", function () {
            var searchValue = $.trim(String($("#bdcsMain").val())).replace(/\s+/g, '+');
            if (!searchValue) {
                window.open("https://news.smm.cn");
                return;
            }
            window.open("https://news.smm.cn/search/" + encodeURIComponent(searchValue) + "?page=1&field=4", "_blank");
        });
    }
    SearchSmm();
})();
(function () {
    $(".jinzhu-dl").hover(function () {
        clearTimeout(bddl);
        $(".jinzhu-dl-detail").css("display", "none");
        $(this).children(".jinzhu-dl-detail").css("display", "block");
    }, function () {
        bddl = setTimeout(function () { $(".jinzhu-dl-detail").css("display", "none"); }, 8000);
    });
    $(".jinzhu-dl-detail").find("em").click(function () {
        $(this).parent().parent().hide();
    });
    //棣栭〉鎼滅储
    var searchVal, searchLastVal;
    $(".smm-search li").on("click", function () {
        searchVal = $(this).html();
        searchLastVal = $(".smm-search-nav span").html();
        $(".smm-search-nav>span").html(searchVal);
        $(this).html(searchLastVal);
    });
    function SearchSmm() {
        $("#search_btn").on("click", function () {
            var searchValue = $.trim(String($("#bdcsMain").val())).replace(/\s+/g, '+');
            if (!searchValue) {
                window.open("https://news.smm.cn");
                return;
            }
            window.open("https://news.smm.cn/search/" + encodeURIComponent(searchValue) + "?page=1&field=4", "_blank");
        });
    }
    SearchSmm();
})();

