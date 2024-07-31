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
