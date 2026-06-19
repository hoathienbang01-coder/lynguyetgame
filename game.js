let current = 0;

const speaker = document.getElementById("speaker");
const text = document.getElementById("text");
const character = document.getElementById("character");
const background = document.getElementById("background");
const nextBtn = document.getElementById("nextBtn");

function showScene(){

    let scene = story[current];

    speaker.textContent = scene.speaker;
    text.textContent = scene.text;

    background.style.backgroundImage =
        `url(${scene.background})`;

    if(scene.character){

        character.src = scene.character;
        character.style.display = "block";

    }else{

        character.style.display = "none";

    }

}

nextBtn.addEventListener("click",()=>{

    current++;

    if(current >= story.length){

        current = story.length - 1;

        text.textContent =
        "Hết bản demo Chương 1.";

        return;
    }

    showScene();

});

showScene();