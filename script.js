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
