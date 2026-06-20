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
            
            // CHÈN THÊM ẢNH VẬT PHẨM VÀO ĐÂY:
            resultDiv.innerHTML = `
                <div style="margin: 15px 0; text-align: center;">
                    <img src="assets/vatpham_1.jpg" alt="Lọ pha lê tím" style="width: 120px; height: auto; border: 2px solid #FFD369; border-radius: 8px; box-shadow: 0 0 10px #FFD369;">
                </div>
                🎉 CHÍNH XÁC! Bạn giữ nguyên ${userStars} ⭐ và nhận được 🎁 [Manh mối số 1: Lọ pha lê tím nạm vàng]. Hệ thống đang chuẩn bị chuyển sang Chương 3...
            `;
            
            setTimeout(() => {
                nextBtn.style.display = "block";
                text.textContent = "Bạn đã vượt qua Lượt suy luận xuất sắc! Hãy ấn Tiếp tục để bước vào Chương 3.";
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

// --- BẮT ĐẦU SỬA TỪ ĐOẠN NÚT CLICK "TIẾP TỤC" ---
nextBtn.addEventListener("click", () => {
    if (bgm.paused) {
        bgm.play().catch(e => console.log("Trình duyệt chặn phát tự động"));
    }

    current++;

    if (current >= story.length) {
        current = story.length - 1;
        if (currentVoice) currentVoice.pause();
        speaker.textContent = ""; 
        text.textContent = "Cảm ơn bạn đã trải nghiệm bản Demo!";
        return;
    }

    showScene();
});

// --- HÀM SHOWSCENE DUY NHẤT VÀ CHUẨN LOGIC CHO CẢ 3 CHƯƠNG ---
function showScene() {
    let scene = story[current];

    // 1. KIỂM TRA ĐOẠN PHẢI ĐOÁN BOSS CHƯƠNG 2
    if (scene.triggerDuanBoss) {
        openDuanBossPanel();
        return;
    }

    // 2. KIỂM TRA ĐOẠN PHẢI ĐOÁN BOSS CHƯƠNG 3
    if (scene.triggerDuanBoss3) {
        openDuanBoss3Panel();
        return;
    }

    // 3. HIỂN THỊ CHỮ THOẠI VÀ TÊN NHÂN VẬT
    speaker.textContent = scene.speaker;
    text.textContent = scene.text;

    // 4. TỰ ĐỘNG ĐIỀU CHỈNH ÂM LƯỢNG NHẠC NỀN
    if (scene.speaker && scene.speaker !== "") {
        bgm.volume = 0.2; // Có thoại thì nhạc nhỏ
    } else {
        bgm.volume = 0.4; // Lời dẫn thì nhạc to hơn
    }

    // 5. XỬ LÝ PHÁT GIỌNG LỒNG TIẾNG (VOICE)
    if (currentVoice) currentVoice.pause();
    currentVoice = new Audio(`assets/voice_${current}.mp3`);
    currentVoice.volume = 0.9;
    currentVoice.play().catch(e => console.log("Chờ người chơi tương tác để phát voice"));

    // 6. XỬ LÝ ĐỔI ẢNH NỀN (BACKGROUND)
    if (scene.background && scene.background !== "") {
        background.style.backgroundImage = `url('${scene.background}')`;
    }

    // 7. XỬ LÝ ẨN/HIỆN ẢNH NHÂN VẬT
    if (scene.character && scene.character !== "") {
        character.src = scene.character;
        character.style.display = "block";
    } else {
        character.style.display = "none";
    }
}

// KÍCH HOẠT CẢNH ĐẦU TIÊN KHI VÀO GAME
showScene();
// --- HÀM SHOWSCENE KIỂM TRA ĐIỀU KIỆN CHUYỂN CẢNH ---
function showScene() {
    let scene = story[current];

    // Chốt chặn Chương 2
    if (scene.triggerDuanBoss) {
        openDuanBossPanel();
        return;
    }

    // Chốt chặn Chương 3
    if (scene.triggerDuanBoss3) {
        openDuanBoss3Panel();
        return;
    }

    // 🔥 Chốt chặn Chương 4 (Nằm gọn bên trong showScene)
    if (scene.triggerDuanBoss4) {
        openDuanBoss4Panel();
        return;
    }

    // --- Logic hiển thị hình ảnh, chữ thoại, âm thanh giữ nguyên ở đây ---
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
    currentVoice.play().catch(e => console.log("Chờ người chơi tương tác"));

    if (scene.background && scene.background !== "") {
        background.style.backgroundImage = `url('${scene.background}')`;
    }

    if (scene.character && scene.character !== "") {
        character.src = scene.character;
        character.style.display = "block";
    } else {
        character.style.display = "none";
    }
}

// KÍCH HOẠT CẢNH ĐẦU TIÊN KHI VÀO GAME
showScene();


// ========================================================
//   CÁC HÀM XỬ LÝ MINI-GAME SUY LUẬN (NẰM DƯỚI SHOWSCENE)
// ========================================================

// Hàm suy luận Chương 2 (Sahkar)
function openDuanBossPanel() {
    // ... code Chương 2 của hai ...
}

// Hàm suy luận Chương 3 (Cả hai)
function openDuanBoss3Panel() {
    // ... code Chương 3 tụi mình vừa làm ...
}

// Hàm suy luận Chương 4 (Chưa đủ dữ kiện - Dán ở dưới cùng file)
function openDuanBoss4Panel() {
    nextBtn.style.display = "none"; 
    
    text.innerHTML = `
        <p style="color: #FF4C29; font-weight: bold; font-size: 24px; margin-bottom: 15px;">[LƯỢT SUY LUẬN 3] Ai là người đáng nghi nhất phía sau những lời đồn về hồ Selena?</p>
        <p style="font-size: 16px; color: #ccc; margin-bottom: 15px;">Hãy suy luận cẩn thận dựa trên các bằng chứng hiện tại và nhập câu trả lời của bạn:</p>
        <input type="text" id="boss4Input" placeholder="Nhập tên nhân vật hoặc nhận định của bạn..." style="width: 70%; padding: 10px; font-size: 18px; border-radius: 4px; border: none; margin-bottom: 15px; color: black;"><br>
        <button id="submitBoss4Btn" style="padding: 10px 30px; font-size: 18px; background: #FFD369; color: black; border: none; font-weight: bold; cursor: pointer; border-radius: 4px;">Xác nhận suy luận</button>
        <div id="result4Message" style="margin-top: 15px; font-weight: bold; font-size: 18px; line-height: 1.5;"></div>
    `;

    document.getElementById("submitBoss4Btn").addEventListener("click", () => {
        let answer = document.getElementById("boss4Input").value.trim().toLowerCase();
        let resultDiv = document.getElementById("result4Message");

        let correctKeywords = ["chưa đủ dữ kiện", "chua du du kien", "chưa đủ bằng chứng", "chua du bang chung", "chưa đủ", "chua du"];
        let isCorrect = correctKeywords.some(keyword => answer === keyword || answer.includes(keyword));

        if (isCorrect) {
            if (!playerInventory.includes("Nhẫn đá mặt trăng")) {
                playerInventory.push("Nhẫn đá mặt trăng");
            }
            resultDiv.style.color = "#4E9F3D";
            resultDiv.innerHTML = `
                <div style="margin: 15px 0; text-align: center;">
                    <img src="assets/vatpham_3.jpg" alt="Nhẫn đá mặt trăng" style="width: 120px; height: auto; border: 2px solid #FFD369; border-radius: 8px; box-shadow: 0 0 10px #FFD369;">
                </div>
                🎉 QUÁ TỈNH TÁO! Đáp án chính xác là CHƯA ĐỦ DỮ KIỆN. Bạn đã không bị đánh lừa bởi những tin đồn hướng về Hoàng hậu hay mẹ con Lussyh. Sự cẩn trọng này đã cứu bạn!<br>
                🎁 Bạn nhận được [Manh mối số 3: Nhẫn đá mặt trăng của Hoàng hậu]. Hệ thống đang chuẩn bị mở ra Chương 5...
            `;
            
            setTimeout(() => {
                nextBtn.style.display = "block";
                text.textContent = "Bạn đã vượt qua Lượt suy luận xuất sắc! Hãy ấn Tiếp tục để bước vào Chương 5.";
            }, 8000);

        } else {
            userStars--;
            wrongAnswersCount++;
            updateStars();
            resultDiv.style.color = "#D82148";

            if (wrongAnswersCount >= 3) {
                resultDiv.innerHTML = `❌ Bạn đã đoán sai do vội vàng kết án! Trừ 1 ⭐. Số lần sai đã đạt ${wrongAnswersCount}/3. BẠN PHẢI CHƠI LẠI TRÒ CHƠI TỪ ĐẦU!`;
                setTimeout(() => { location.reload(); }, 5000);
            } else {
                resultDiv.innerHTML = `
                    ❌ Đoán sai rồi! Bạn bị trừ 1 ⭐ (Còn ${userStars} ⭐) vì đã vội tin vào những suy đoán vô căn cứ.<br>
                    📖 Bạn đã bỏ lỡ manh mối quan trọng từ Hoàng tộc. Hệ thống tự động chuyển qua màn tiếp theo...
                `;
                setTimeout(() => {
                    nextBtn.style.display = "block";
                    text.textContent = "Hệ thống tự động bỏ qua lượt suy luận. Chuẩn bị bước vào Chương 5.";
                }, 7000);
            }
        }
    });
}
