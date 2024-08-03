$(document).ready(function() {
    $(".LinkedIn").hover(
        function() {
            $("svg").attr("fill", "blue");
        },
        function() {
            $("svg").attr("fill", "#727c42");
        }
    );
});

$(document).ready(function() {
    $(".email-button").hover(
        function() {
            $("svg").attr("fill", "#727c12");
        },
        function() {
            $("svg").attr("fill", "#727c42");
        }
    );
});

