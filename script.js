function scrollToSection(id){
    document
    .getElementById(id)
    .scrollIntoView({
        behavior:"smooth"
    });
}

function calculateCompatibility(){
    const score =
    Math.floor(Math.random()*15)+85;

    document
    .getElementById("score")
    .innerText = score + "%";
}

function saveSurvey(){
    alert("Survey saved!");
    document
    .querySelector(".compatibility")
    .scrollIntoView({
        behavior:"smooth"
    });
}

function saveWedding(answer){
    alert("Answer selected: " + answer);
}
