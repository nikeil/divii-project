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

async function saveSurvey(){

    const data = {
        impression: document.getElementById("impression").value,
        nikType: document.getElementById("nikType").value,
        rideDestination: document.getElementById("rideDestination").value,
        diagnosis: document.getElementById("diagnosis").value
    };

    console.log(data);

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
function saveFinal(answer){
    alert("Date answer: " + answer);

    document
    .querySelector(".rides")
    .scrollIntoView({
        behavior:"smooth"
    });
}
