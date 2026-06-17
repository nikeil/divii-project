import {
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

import { db } from "./firebase-config.js";

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
        diagnosis: document.getElementById("diagnosis").value,
        createdAt: new Date().toISOString()
    };

    try {

        await addDoc(
            collection(db, "surveyResponses"),
            data
        );

        alert("Survey saved!");

        document
        .querySelector(".compatibility")
        .scrollIntoView({
            behavior:"smooth"
        });

    } catch(error) {

        console.error(error);

        alert("Failed to save survey");
    }
}

function saveFinal(answer){

    alert("Date answer: " + answer);

    document
    .querySelector(".rides")
    .scrollIntoView({
        behavior:"smooth"
    });
}

function saveRide(destination){

    alert("Ride selected: " + destination);

    document
    .querySelector(".wedding")
    .scrollIntoView({
        behavior:"smooth"
    });
}

function saveWedding(answer){

    alert("Answer selected: " + answer);
}

// Make functions available to HTML buttons
window.scrollToSection = scrollToSection;
window.calculateCompatibility = calculateCompatibility;
window.saveSurvey = saveSurvey;
window.saveFinal = saveFinal;
window.saveRide = saveRide;
window.saveWedding = saveWedding;
