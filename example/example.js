(function() {

    var selector = document.getElementById('preset');
    var button = document.getElementsByTagName('button')[0];

    function setPreset(e) {
        var selected = selector.options[selector.selectedIndex].value;
        button.className = selected;
    }

    window.onload = function() {
        selector.addEventListener('change', setPreset);
    };

}());