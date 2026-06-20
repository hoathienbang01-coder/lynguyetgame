let current = 0;

// Khai báo nhạc nền (BGM)
const bgm = new Audio("assets/bgm.mp3"); 
bgm.loop = true; 

// Khai báo biến giữ giọng lồng tiếng (Voice) hiện tại
let currentVoice = null;

const speaker = document.getElementById("speaker");
const text = document.getElementById("text");
const character = document.getElementById("character");
const background = document.getElementById("background");
const nextBtn = document.getElementById("nextBtn");

function showScene(){
    let scene = story[current];

    speaker.textContent = scene.speaker;
    text.textContent = scene.text;

    // 1. TỰ ĐỘNG ĐIỀU CHỈNH ÂM LƯỢNG NHẠC NỀN THEO THOẠI
    if (scene.speaker && scene.speaker !== "") {
        // Nếu CÓ nhân vật thoại -> Giảm nhạc nền xuống nhỏ (20%) để nghe rõ giọng lồng tiếng
        bgm.volume = 0.2; 
    } else {
        // Nếu là lời dẫn cốt truyện -> Nhạc nền to lên một chút (40%) để tạo không khí
        bgm.volume = 0.4; 
    }

    // 2. XỬ LÝ PHÁT GIỌNG LỒNG TIẾNG CỦA HAI
    // Nếu đang có câu giọng đọc cũ đang chạy thì tắt đi để phát câu mới
    if (currentVoice) {
        currentVoice.pause();
    }

    // Tự động tìm file giọng đọc tương ứng với số thứ tự của cảnh (ví dụ: voice_0.mp3, voice_1.mp3...)
    currentVoice = new Audio(`assets/voice_${current}.mp3`);
    currentVoice.volume = 0.9; // Giọng đọc lồng tiếng luôn để mức to rõ ràng (90%)
    
    // Phát giọng đọc (Bọc trong catch để tránh trình duyệt báo lỗi khi chưa tương tác)
    currentVoice.play().catch(error => console.log("Chờ người chơi bấm tiếp tục để phát giọng đọc"));

    // 3. Giữ nguyên logic hiển thị nền và nhân vật cũ
    if (scene.background && scene.background !== "") {
        background.style.backgroundImage = `url('${scene.background}')`;
    }

    if(scene.character){
        character.src = scene.character;
        character.style.display = "block";
    }else{
        character.style.display = "none";
    }
}

nextBtn.addEventListener("click",()=>{
    // Kích hoạt nhạc nền ở lần bấm đầu tiên
    if (bgm.paused) {
        bgm.play().catch(error => console.log("Trình duyệt chặn phát tự động:", error));
    }

    current++;

    if(current >= story.length){
        current = story.length - 1;
        if (currentVoice) currentVoice.pause(); // Hết demo thì tắt giọng đọc
        speaker.textContent = ""; 
        text.textContent = "Hết bản demo Chương 1.";
        return;
    }

    showScene();
});

// Chỉ kích hoạt cảnh đầu tiên khi người chơi nhấn nút tương tác đầu game để đảm bảo âm thanh hoạt động tốt
showScene();
