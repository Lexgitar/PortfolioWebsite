var deviceIsAndroid = /(android)/i.test(navigator.userAgent);

$(document).ready(function () {
    if (deviceIsAndroid) {
        $(document).bind("click", function () {
            if (document.activeElement.nodeName == 'TEXTAREA' || document.activeElement.nodeName == 'INPUT') {
                var textBox = document.activeElement.id;
                document.getElementById(textBox).scrollIntoView();
            }
        });
    }
});