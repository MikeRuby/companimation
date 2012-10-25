(function() {

    var needle,
        scrollSegment = 220,
        minBodyWidth = 630;

    function scrollHandler() {
        var scrollTop,
            percentage,
            rotation,
            needle;

        needle = document.getElementsByClassName('banner-logo-inner')[0];
        scrollTop = document.body.scrollTop;

        percentage = ((scrollTop % 800) / 800);
        rotation = 360 * percentage;

        needle.style.webkitTransform = "rotate(" + parseInt(rotation, 0) + "deg)";
        needle.style.mozTransform = "rotate(" + parseInt(rotation, 0) + "deg)";
        needle.style.oTransform = "rotate(" + parseInt(rotation, 0) + "deg)";
        needle.style.transform = "rotate(" + parseInt(rotation, 0) + "deg)";

        fixLogoToWindow();

    }

    function fixLogoToWindow() {
        var horizontalCondition,
            verticalCondition,
            bodyClass = "fixed-logo";

        horizontalCondition = window.outerWidth >= minBodyWidth + scrollSegment;
        verticalCondition = document.body.scrollTop >= scrollSegment;

        if (horizontalCondition && verticalCondition) {
            document.body.classList.add(bodyClass);
        } else {
            document.body.classList.remove(bodyClass);
        }
    }

    function loaded() {
        // Prevent intro animation if linking to a hash
        if (window.location.hash) {
            document.body.classList.add('no-animation');
        }

        window.addEventListener('scroll', scrollHandler);
        window.addEventListener('resize', fixLogoToWindow);
    }

    window.addEventListener('load', loaded, false);

}());