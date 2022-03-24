$(document).ready(function(){
    injectElem("/elements/nav.html", "nav");
    injectElem("/elements/bot.html", "div.bot");
});

function addNav(){
    $.get("/elements/nav.html", function(response){
        nav = $.parseHTML(response);
        $("nav").html(nav);
    });
}

function injectElem(elemPath, elem){
    $.get(elemPath, function(response){
        nav = $.parseHTML(response);
        $(elem).html(nav);
    });
}