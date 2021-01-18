function changeButtonColour(e) {
    var x = document.getElementById('about-button');
    if (x.style.backgroundColor === 'transparent') {
        x.style.backgroundColor = 'goldenrod';
        x.style.color = 'transparent';
    }
}

$(document).ready(function() {
    console.log( "Home page loaded" );

    var currentPage = "about";
    document.getElementById("about-text").style.color = "whitesmoke"
    $("#projects").addClass("hide");
    $("#experience").addClass("hide");


    $("#projects-btn").on('click', function() {

        $("#about, #experience").hide();
        $("#projects").show();
        document.getElementById("projects-text").style.color = "whitesmoke"
        document.getElementById("about-text").style.color = "#262626"
        document.getElementById("experience-text").style.color = "#262626"

        
    });

    $("#about-btn").on('click', function() {
        $("#projects, #experience").hide();
        $("#about").show();
        document.getElementById("about-text").style.color = "whitesmoke"
        document.getElementById("projects-text").style.color = "#262626"
        document.getElementById("experience-text").style.color = "#262626"

    });

    $("#experience-btn").on('click', function() {
        $("#about, #projects").hide();
        $("#experience").show();
        document.getElementById("experience-text").style.color = "whitesmoke"
        document.getElementById("about-text").style.color = "#262626"
        document.getElementById("projects-text").style.color = "#262626"

    });

});

  