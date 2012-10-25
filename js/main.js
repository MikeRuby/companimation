(function() {

    var needle,
        scrollSegment = 220,
        minBodyWidth = 630;

    function scrollHandler() {
        var scrollTop,
            percentage,
            rotation;

        scrollTop = document.body.scrollTop;

        percentage = ((scrollTop % 800) / 800);
        rotation = 360 * percentage;

        needle.style.webkitTransform = "rotate(" + parseInt(rotation, 0) + "deg)";
        needle.style.mozTransform = "rotate(" + parseInt(rotation, 0) + "deg)";
        needle.style.oTransform = "rotate(" + parseInt(rotation, 0) + "deg)";
        needle.style.transform = "rotate(" + parseInt(rotation, 0) + "deg)";

        fixLogoToWindow();

    }

    function loaded() {
        needle = document.getElementsByClassName('banner-logo-inner')[0];

        window.addEventListener('scroll', scrollHandler);
        window.addEventListener('resize', fixLogoToWindow);
    }

    function fixLogoToWindow() {
        var horizontalCondition,
            verticalCondition,
            bodyClass = "fixed-logo";

        horizontalCondition = window.outerWidth >= minBodyWidth + scrollSegment;
        verticalCondition = document.body.scrollTop >= scrollSegment;

        if (horizontalCondition && verticalCondition) {
            document.body.className = bodyClass;
        } else {
            document.body.className = "";
        }
    }

    window.addEventListener('load', loaded, false);

}());