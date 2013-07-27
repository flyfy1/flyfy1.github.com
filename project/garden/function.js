var $window = $(window),
    gardenCtx, gardenCanvas, $garden, garden;
var clientWidth = $(window).width();
var clientHeight = $(window).height();
$(function () { // init the garden
    $imageDiv = $("#imageDiv");
    var a = $imageDiv.width() / 2;
    var b = $imageDiv.height() / 2 - 55;
    $garden = $("#garden");
    gardenCanvas = $garden[0];
    gardenCanvas.width = $("#imageDiv").width();
    gardenCanvas.height = $("#imageDiv").height();
    gardenCtx = gardenCanvas.getContext("2d");
    gardenCtx.globalCompositeOperation = "lighter";
    garden = new Garden(gardenCtx, gardenCanvas);
    $("#content").css("width", $imageDiv.width() + $("#code").width());
    $("#content").css("height", Math.max($imageDiv.height(), $("#code").height()));
    $("#content").css("margin-top", Math.max(($window.height() - $("#content").height()) / 2, 10));
    $("#content").css("margin-left", Math.max(($window.width() - $("#content").width()) / 2, 10));
    setInterval(function () {
        garden.render()
    }, Garden.options.growSpeed)
});
$(window).resize(function () {
    var b = $(window).width();
    var a = $(window).height();
    if (b != clientWidth && a != clientHeight) {
        location.replace(location)
    }
});

/**
 * Get the point of the image, following the pre-defined function
 * @return: as an array, can be passed directly by the Garden.js
 */
function getImagePoint(ctime) {
    var radius = ctime / Math.PI;
    console.log(radius);
    var xShift = 19.5 * (16 * Math.pow(Math.sin(radius), 3));
    var yShift = -20 * (13 * Math.cos(radius) - 5 * Math.cos(2 * radius) - 2 * Math.cos(3 * radius) - Math.cos(4 * radius));
    return new Array(offsetX + xShift, offsetY + yShift)
}

function startImageAnimation() {
    var tInterval = 50;
    var num = 10;
    var b = new Array();
    var a = setInterval(function () {
        var imagePoint = getImagePoint(num);
        var e = true;
        for (var f = 0; f < b.length; f++) {
            var g = b[f];
            var j = Math.sqrt(Math.pow(g[0] - imagePoint[0], 2) + Math.pow(g[1] - imagePoint[1], 2));
            if (j < Garden.options.bloomRadius.max * 1.3) {
                e = false;
                break
            }
        }
        if (e) {
            b.push(imagePoint);
            garden.createRandomBloom(imagePoint[0], imagePoint[1])
        }
        if (num >= 30) {
            clearInterval(a);
            showMessages()
        } else {
            num += 0.2
        }
    }, tInterval)
}(function (a) {
    a.fn.typewriter = function () {
        this.each(function () {
            var d = a(this),
                c = d.html(),
                b = 0;
            d.html("");
            var e = setInterval(function () {
                var f = c.substr(b, 1);
                if (f == "<") {
                    b = c.indexOf(">", b) + 1
                } else {
                    b++
                }
                d.html(c.substring(0, b) + (b & 1 ? "_" : ""));
                if (b >= c.length) {
                    clearInterval(e)
                }
            }, 75)
        });
        return this
    }
})(jQuery);

function showMessages() {
    $("#messages").fadeIn(5000, function () {
        showLoveU()
    })
}

function adjustWordsPosition() {
    $("#words").css("position", "absolute");
    $("#words").css("top", $("#garden").position().top + 195);
    $("#words").css("left", $("#garden").position().left + 70)
}

function adjustCodePosition() {
    $("#code").css("margin-top", ($("#garden").height() - $("#code").height()) / 2)
}

function showLoveU() {
    $("#loveu").fadeIn(3000)
};
