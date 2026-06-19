let current = 0;

const speaker = document.getElementById("speaker");
const text = document.getElementById("text");
const nextBtn = document.getElementById("nextBtn");

function showScene()
{
    speaker.innerText = story[current].speaker;
    text.innerText = story[current].text;
}

showScene();

nextBtn.addEventListener("click", () =>
{
    current++;

    if(current >= story.length)
    {
        current = story.length - 1;
        return;
    }

    showScene();
});