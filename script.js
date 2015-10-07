$(document).ready (function() {
        $("div#unraveled").mouseover(function() {
          $(this).fadeOut(4000);
          $("h1,h2,p").css("word-spacing","inherit");
        });
    });