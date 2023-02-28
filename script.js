function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades [0].classList.add("yamdu");
        habilidades [1].classList.add("movie-magic");
        habilidades [2].classList.add("adobe-premier");
        habilidades [3].classList.add("after-effects");
        habilidades [4].classList.add("final-draft");
        habilidades [5].classList.add("comunicacion");
        habilidades [6].classList.add("trabajo-en-equipo");
        habilidades [7].classList.add("tecnicas-creatividad");
        habilidades [8].classList.add("ingles");
        habilidades [9].classList.add("direccion-proyecto");
    }
}
window.onscroll = function(){
    efectoHabilidades ();
}