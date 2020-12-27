function changeButtonColour(e) {
    var x = document.getElementById('about-button');
    if (x.style.backgroundColor === 'transparent') {
        x.style.backgroundColor = 'goldenrod';
        x.style.color = 'transparent';
    }
}
$(document).ready(function() {
    console.log( "Home page loaded" );

    //keep track of which page I am on
    var currentPage = "about";
    

    $('#projects-button').click(function(e) {
        if(currentPage === "about"){
            $("#about-page").addClass("hide");
        }
        else if(currentPage === "experience"){
            $("#experience-page").addClass("hide");
        }
        document.getElementById("projects-button").style.color = "whitesmoke";
        whichPage = "projects";  
    })
__
    $('#about-button').click(function(e) {
        if(currentPage === "projects"){
            $("projects-page").addClass("hide");
            
        }
        else if(currentPage === "experience"){
            $("#experience-page").addClass("hide");
        }
        whichPage = "about"; 
        document.getElementById("about-button").style.color = "whitesmoke";
    })

    $('#experience-button').click(function(e) {
        if(currentPage === "projects"){
            $("projects-page").addClass("hide");
        }
        else if(currentPage === "experience"){
            $("#experience-page").addClass("hide");
        }
        whichPage = "about"; 
    })


});