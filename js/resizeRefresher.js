window.onresize = refreshPage;

const MIN_VARIATION_PERCENT = 0.05;

var lastWidth = width();
var lastHeight = height();

function refreshPage() {
    if (deltaWidth() / width() > MIN_VARIATION_PERCENT || deltaHeight() / height() > MIN_VARIATION_PERCENT)
        location.reload(true);

    lastWidth = width();
    lastHeight = height();
}

function width() {
    return $(window).width();
}

function height() {
    return $(window).height();
}

function deltaWidth() {
    return Math.abs(width() - lastWidth);
}

function deltaHeight() {
    return Math.abs(height() - lastHeight);
}