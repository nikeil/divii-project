function scrollToSection(id){
    document
    .getElementById(id)
    .scrollIntoView({
        behavior: "smooth"
    });
}

async function saveToFirebase(collectionName, data){

    try{

        const {
            collection,
            addDoc
        } = await import(
            "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js"
        );

        await addDoc(
            collection(window.db, collectionName),
            data
        );

        console.log("Saved:", collectionName, data);

    }catch(error){

        console.error("Firebase Error:", error);

    }
}

function calculateCompatibility(){

    const score =
    Math.floor(Math.random() * 15) + 85;

    document
    .getElementById("score")
    .innerText = score + "%";

    saveToFirebase(
        "compatibilityScores",
        {
            score: score,
            timestamp: new Date().toISOString()
        }
    );
}

async function saveSurvey(){

    const data = {

        impression:
        document.getElementById("impression").value,

        nikType:
        document.getElementById("nikType").value,

        rideDestination:
        document.getElementById("rideDestination").value,

        diagnosis:
        document.getElementById("diagnosis").value,

        timestamp:
        new Date().toISOString()
    };

    await saveToFirebase(
        "surveys",
        data
    );

    document
    .querySelector(".compatibility")
    .scrollIntoView({
        behavior: "smooth"
    });
}

async function saveFinal(answer){

    await saveToFirebase(
        "dateResponses",
        {
            answer: answer,
            timestamp: new Date().toISOString()
        }
    );

    document
    .querySelector(".rides")
    .scrollIntoView({
        behavior: "smooth"
    });
}

async function saveRide(destination){

    await saveToFirebase(
        "rideResponses",
        {
            destination: destination,
            timestamp: new Date().toISOString()
        }
    );

    document
    .querySelector(".wedding")
    .scrollIntoView({
        behavior: "smooth"
    });
}

async function saveWedding(answer){

    await saveToFirebase(
        "weddingResponses",
        {
            answer: answer,
            timestamp: new Date().toISOString()
        }
    );

    document
    .querySelector(".ending")
    .scrollIntoView({
        behavior: "smooth"
    });
}

window.scrollToSection = scrollToSection;
window.calculateCompatibility = calculateCompatibility;
window.saveSurvey = saveSurvey;
window.saveFinal = saveFinal;
window.saveRide = saveRide;
window.saveWedding = saveWedding;
