var a_idx = 0;

function getRandom(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

jQuery(document).ready(function ($) {
    $("body").click(function (e) {
        var a = new Array("你好可爱呀~",
            "感谢你这么漂亮还点击我~",
            "有你真好~",
            "星夜兼程",
            "奋力前行",
            "乐观",
            "❤",
            "积极",
            "向上",
            "自由",
            "正能量",
            "(*^▽^*)",
            "元气满满",
            "开心",
            "快乐",
            "善良",
            "可爱",
            "暴富"
        );
        var $i = $("<span/>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
            y = e.pageY;
        $i.css({
            "z-index": 999999999999999999999999999999999999999999999999999999999999999999999,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": `rgb(${getRandom(255, 0)},${getRandom(255, 0)},${getRandom(255, 0)})`,
            "user-select": 'none',
            "cursor": 'default'
        });
        $("body").append($i);
        $i.animate({
                "top": y - 180,
                "opacity": 0
            },
            1500,
            function () {
                $i.remove();
            });
    });
});
