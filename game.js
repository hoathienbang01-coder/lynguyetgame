let current = 0;
let userStars = 5; // Người chơi khởi đầu với 5 sao
let playerInventory = []; // Kho vật phẩm thu thập được
let wrongAnswersCount = 0; // Đếm số lần đoán sai (tối đa 3 lần chơi lại)

const bgm = new Audio("assets/bgm.mp3"); 
bgm.loop = true; 
let currentVoice = null;

const speaker = document.getElementById("speaker");
const text = document.getElementById("text");
const character = document.getElementById("character");
const background = document.getElementById("background");
const nextBtn = document.getElementById("nextBtn");
const textbox = document.getElementById("textbox");

// Tạo giao diện hiển thị số sao lên góc màn hình
const starDisplay = document.createElement("div");
starDisplay.style = "position:absolute; top:20px; left:20px; color:#FFD369; font-size:24px; font-weight:bold; z-index:100; text-shadow: 2px 2px black;";
starDisplay.innerHTML = "⭐ ".repeat(userStars);
document.body.appendChild(starDisplay);

function updateStars() {
    starDisplay.innerHTML = "⭐ ".repeat(userStars);
}

function showScene(){
    let scene = story[current];

    // NẾU GẶP ĐOẠN PHẢI ĐOÁN BOSS
    if (scene.triggerDuanBoss) {
        openDuanBossPanel();
        return;
    }

    speaker.textContent = scene.speaker;
    text.textContent = scene.text;

    if (scene.speaker && scene.speaker !== "") {
        bgm.volume = 0.2; 
    } else {
        bgm.volume = 0.4; 
    }

    if (currentVoice) currentVoice.pause();
    currentVoice = new Audio(`assets/voice_${current}.mp3`);
    currentVoice.volume = 0.9;
    currentVoice.play().catch(e => console.log("Chờ bấm tương tác"));

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

// HÀM MỞ GIAO DIỆN ĐOÁN BOSS
function openDuanBossPanel() {
    nextBtn.style.display = "none"; // Ẩn tạm nút Tiếp tục đi
    
    text.innerHTML = `
        <p style="color: #FF4C29; font-weight: bold; font-size: 24px; margin-bottom: 15px;">[LƯỢT SUY LUẬN 1] Ai là người hạ độc Pharaoh?</p>
        <p style="font-size: 16px; color: #ccc; margin-bottom: 15px;">Hãy nhập TÊN hoặc VAI TRÒ/CHỨC VỊ của kẻ tình nghi vào ô dưới đây để kiểm tra mức độ chú tâm cốt truyện của bạn:</p>
        <input type="text" id="bossInput" placeholder="Ví dụ: Hoàng tử Sahkar hoặc Hoang tu Sahkar..." style="width: 70%; padding: 10px; font-size: 18px; border-radius: 4px; border: none; margin-bottom: 15px; color: black;"><br>
        <button id="submitBossBtn" style="padding: 10px 30px; font-size: 18px; background: #FFD369; color: black; border: none; font-weight: bold; cursor: pointer; border-radius: 4px;">Xác nhận suy luận</button>
        <div id="resultMessage" style="margin-top: 15px; font-weight: bold; font-size: 18px;"></div>
    `;

    document.getElementById("submitBossBtn").addEventListener("click", () => {
        let answer = document.getElementById("bossInput").value.trim().toLowerCase();
        let resultDiv = document.getElementById("resultMessage");

        // Bộ từ khóa kiểm tra đáp án đúng (Bảo đảm gõ không dấu, viết hoa viết thường, chức vụ đều ăn)
        let correctKeywords = ["sahkar", "hoàng tử", "hoang tu", "hoang tu sahkar", "hoàng tử sahkar"];

        let isCorrect = correctKeywords.some(keyword => answer.includes(keyword));

        if (isCorrect) {
            // ĐOÁN ĐÚNG: Giữ nguyên sao, nhận vật phẩm, qua chương tiếp theo
            if (!playerInventory.includes("Lọ pha lê tím nạm vàng")) {
                playerInventory.push("Lọ pha lê tím nạm vàng");
            }
            resultDiv.style.color = "#4E9F3D";
            resultDiv.innerHTML = `🎉 CHÍNH XÁC! Bạn giữ nguyên ${userStars} ⭐ và nhận được 🎁 [Manh mối số 1: Lọ pha lê tím nạm vàng]. Hệ thống đang chuẩn bị chuyển sang Chương 3...`;
            
            setTimeout(() => {
                nextBtn.style.display = "block";
                // Chuyển sang chương kế tiếp (Ở đây tạm thời kết thúc demo chương 2)
                text.textContent = "Bạn đã vượt qua Lượt suy luận xuất sắc! Hãy chờ đón Chương 3 sắp tới nhé.";
            }, 5000);

        } else {
            // ĐOÁN SAI: Trừ 1 sao, không được nhận vật phẩm, vẫn được qua chương tiếp theo
            userStars--;
            wrongAnswersCount++;
            updateStars();
            resultDiv.style.color = "#D82148";

            if (wrongAnswersCount >= 3) {
                resultDiv.innerHTML = `❌ Đoán sai rồi! Bạn bị trừ 1 ⭐. Vì bạn đã đoán sai ${wrongAnswersCount} lần nên bạn phải CHƠI LẠI TRÒ CHƠI TỪ ĐẦU!`;
                setTimeout(() => {
                    location.reload(); // Tải lại trang bắt đầu lại từ đầu
                }, 5000);
            } else {
                resultDiv.innerHTML = `❌ Đoán sai rồi! Bạn bị trừ 1 ⭐ (Còn ${userStars} ⭐) và không nhận được vật phẩm nào. Hệ thống tự động cho bạn qua màn tiếp theo...`;
                setTimeout(() => {
                    nextBtn.style.display = "block";
                    text.textContent = "Hệ thống tự động bỏ qua lượt suy luận. Hãy chờ đón Chương 3 tiếp theo.";
                }, 5000);
            }
        }
    });
}

nextBtn.addEventListener("click",()=>{
    if (bgm.paused) {
        bgm.play().catch(e => console.log("Trình duyệt chặn phát tự động"));
    }

    current++;

    if(current >= story.length){
        current = story.length - 1;
        if (currentVoice) currentVoice.pause();
        speaker.textContent = ""; 
        text.textContent = "Cảm ơn bạn đã trải nghiệm bản Demo!";
        return;
    }

    showScene();
});

showScene();
