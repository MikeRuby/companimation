(function() {

    var needle;

    function scrollHandler() {
        var scrollSegment = 200,
            scrollTop,
            percentage,
            rotation;

        scrollTop = document.body.scrollTop;

        percentage = ((scrollTop % scrollSegment) / scrollSegment) * 0.5;
        rotation = 360 * percentage;

        needle.style.webkitTransform = "rotate(" + parseInt(rotation) + "deg)";
        needle.style.mozTransform = "rotate(" + parseInt(rotation) + "deg)";
        needle.style.oTransform = "rotate(" + parseInt(rotation) + "deg)";
        needle.style.transform = "rotate(" + parseInt(rotation) + "deg)";

    }

    function loaded() {
        needle = document.getElementsByClassName('banner-logo-inner')[0];
        window.addEventListener('scroll', scrollHandler);
    }

    window.addEventListener('load', loaded, false);

}());