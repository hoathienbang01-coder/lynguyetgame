let current = 0;
let userStars = 5; 
let playerInventory = []; 
let wrongAnswersCount = 0; 
let gameStarted = false; 
let isPaused = false; // Biến kiểm tra trạng thái tạm dừng

// Khai báo nhạc nền
const bgm = new Audio("assets/bgm.mp3"); 
bgm.loop = true; 
let currentVoice = null;

const speaker = document.getElementById("speaker");
const text = document.getElementById("text");
const character = document.getElementById("character");
const background = document.getElementById("background");
const nextBtn = document.getElementById("nextBtn");
const pauseBtn = document.getElementById("pauseBtn"); // Nút tạm dừng mới

// Giao diện ban đầu cho nút mở màn
if (nextBtn) {
    nextBtn.textContent = "🎮 BẮT ĐẦU GAME";
    nextBtn.style.background = "#FF4C29";
    nextBtn.style.color = "white";
}

// Tạo giao diện hiển thị số sao lên góc màn hình
const starDisplay = document.createElement("div");
starDisplay.style = "position:absolute; top:20px; left:20px; color:#FFD369; font-size:24px; font-weight:bold; z-index:100; text-shadow: 2px 2px black;";
starDisplay.innerHTML = "⭐ ".repeat(userStars);
document.body.appendChild(starDisplay);

function updateStars() {
    starDisplay.innerHTML = "⭐ ".repeat(userStars);
}

// --- LOGIC NÚT TẠM DỪNG GAME ---
if (pauseBtn) {
    pauseBtn.addEventListener("click", () => {
        if (!gameStarted) return; // Chưa bắt đầu game thì không cho dừng
        
        if (!isPaused) {
            // Thực hiện Tạm dừng
            isPaused = true;
            pauseBtn.textContent = "▶️ TIẾP TỤC CHƠI";
            pauseBtn.style.background = "#4E9F3D";
            nextBtn.style.pointerEvents = "none"; // Khóa không cho bấm Tiếp tục truyện
            nextBtn.style.opacity = "0.5";
            bgm.pause(); // Tắt nhạc nền
            if (currentVoice) currentVoice.pause(); // Tắt voice nhân vật
        } else {
            // Thực hiện Chơi tiếp
            isPaused = false;
            pauseBtn.textContent = "⏸️ TẠM DỪNG";
            pauseBtn.style.background = "#FF4C29";
            nextBtn.style.pointerEvents = "auto"; // Mở khóa nút đi tiếp
            nextBtn.style.opacity = "1";
            bgm.play().catch(e => console.log("Lỗi phát nhạc")); // Bật lại nhạc
            if (currentVoice) currentVoice.play().catch(e => console.log("Lỗi phát voice"));
        }
    });
}

// --- HÀM SHOWSCENE HIỂN THỊ LOGIC ---
function showScene() {
    let scene = story[current];

    // Chốt chặn kích hoạt panel câu hỏi
    if (scene.triggerDuanBoss) { openDuanBossPanel(); return; }
    if (scene.triggerDuanBoss3) { openDuanBoss3Panel(); return; }
    if (scene.triggerDuanBoss4) { openDuanBoss4Panel(); return; }
    if (scene.triggerDuanBoss5) { openDuanBoss5Panel(); return; }
    if (scene.triggerDuanBoss6) { openDuanBoss6Panel(); return; }

    // Hiển thị nội dung chữ
    speaker.textContent = scene.speaker || "";
    text.textContent = scene.text || "";

    // Tự động chỉnh âm lượng nhạc nền
    if (scene.speaker && scene.speaker !== "") {
        bgm.volume = 0.2; 
    } else {
        bgm.volume = 0.4; 
    }

    // Xử lý giọng lồng tiếng (Voice)
    if (currentVoice) currentVoice.pause();
    currentVoice = new Audio(`assets/voice_${current}.mp3`);
    currentVoice.volume = 0.9;
    currentVoice.play().catch(e => console.log("Chờ tương tác phát voice"));

    // SỬA LỖI MẤT BACKGROUND: Nếu cảnh này có nền mới thì đổi, nếu trống "" thì giữ nguyên nền cũ chứ không xóa
    if (scene.background && scene.background !== "") {
        background.style.backgroundImage = `url('${scene.background}')`;
    }

    // Ẩn/hiện nhân vật
    if (scene.character && scene.character !== "") {
        character.src = scene.character;
        character.style.display = "block";
    } else {
        character.style.display = "none";
    }
}

// LẮNG NGHE SỰ KIỆN BẤM NÚT ĐI TIẾP
nextBtn.addEventListener("click", () => {
    if (isPaused) return; // Đang tạm dừng thì không cho chạy tiếp

    if (!gameStarted) {
        gameStarted = true;
        nextBtn.textContent = "Tiếp tục ➔";
        nextBtn.style.background = "#FFD369";
        nextBtn.style.color = "black";
        
        bgm.play().catch(e => console.log("Trình duyệt chặn phát tự động"));
        showScene();
        return;
    }

    current++;

    if (current >= story.length) {
        current = story.length - 1;
        if (currentVoice) currentVoice.pause();
        speaker.textContent = ""; 
        text.textContent = "Cảm ơn bạn đã trải nghiệm trọn vẹn bản Demo cốt truyện!";
        return;
    }

    showScene();
});

// Thiết lập trạng thái màn hình chờ ban đầu lúc chưa ấn Start
speaker.textContent = "Hệ thống";
text.textContent = "Chào mừng bạn đến với trò chơi cốt truyện tương tác Ai Cập Cổ Đại. Hãy nhấn nút phía dưới để kích hoạt hành trình bí ẩn!";


// ========================================================
//   CÁC HÀM XỬ LÝ MINI-GAME SUY LUẬN ĐOÁN BOSS
// ========================================================

function openDuanBossPanel() {
    nextBtn.style.display = "none";
    // ĐÃ ĐỔI PLACEHOLDER THEO Ý HAI: Không còn lộ tên Sahkar nữa!
    text.innerHTML = `
        <p style="color: #FF4C29; font-weight: bold; font-size: 24px; margin-bottom: 15px;">[LƯỢT SUY LUẬN 1] Ai là người hạ độc Pharaoh?</p>
        <input type="text" id="bossInput" placeholder="Viết cái tên hoặc thân phận bạn nghi ngờ..." style="width: 70%; padding: 10px; font-size: 18px; border-radius: 4px; border: none; margin-bottom: 15px; color: black;"><br>
        <button id="submitBossBtn" style="padding: 10px 30px; font-size: 18px; background: #FFD369; color: black; border: none; font-weight: bold; cursor: pointer; border-radius: 4px;">Xác nhận suy luận</button>
        <div id="resultMessage" style="margin-top: 15px; font-weight: bold; font-size: 18px;"></div>
    `;

    document.getElementById("submitBossBtn").addEventListener("click", () => {
        let answer = document.getElementById("bossInput").value.trim().toLowerCase();
        let resultDiv = document.getElementById("resultMessage");
        let correctKeywords = ["sahkar", "hoàng tử", "hoang tu", "hoang tu sahkar", "hoàng tử sahkar"];
        let isCorrect = correctKeywords.some(keyword => answer.includes(keyword));

        if (isCorrect) {
            if (!playerInventory.includes("Lọ pha lê tím nạm vàng")) playerInventory.push("Lọ pha lê tím nạm vàng");
            resultDiv.style.color = "#4E9F3D";
            resultDiv.innerHTML = `🎉 CHÍNH XÁC! Bạn nhận được 🎁 [Manh mối: Lọ pha lê tím nạm vàng]. Chuẩn bị bước vào Chương 3...`;
            setTimeout(() => { nextBtn.style.display = "block"; current++; showScene(); }, 4000);
        } else {
            userStars--; wrongAnswersCount++; updateStars(); resultDiv.style.color = "#D82148";
            if (wrongAnswersCount >= 3) { resultDiv.innerHTML = `❌ Sai rồi! Bạn phải CHƠI LẠI TỪ ĐẦU!`; setTimeout(() => { location.reload(); }, 4000); } 
            else { resultDiv.innerHTML = `❌ Sai rồi! Trừ 1 ⭐. Tự động chuyển tiếp sau vài giây...`; setTimeout(() => { nextBtn.style.display = "block"; current++; showScene(); }, 4000); }
        }
    });
}

function openDuanBoss3Panel() {
    nextBtn.style.display = "none";
    text.innerHTML = `
        <p style="color: #FF4C29; font-weight: bold; font-size: 24px; margin-bottom: 15px;">[LƯỢT SUY LUẬN 2] Ai là người bị thế lực hắc ám lợi dụng?</p>
        <input type="text" id="boss3Input" placeholder="Viết cái tên hoặc thân phận bạn nghi ngờ..." style="width: 70%; padding: 10px; font-size: 18px; border-radius: 4px; border: none; margin-bottom: 15px; color: black;"><br>
        <button id="submitBoss3Btn" style="padding: 10px 30px; font-size: 18px; background: #FFD369; color: black; border: none; font-weight: bold; cursor: pointer; border-radius: 4px;">Xác nhận suy luận</button>
        <div id="result3Message" style="margin-top: 15px; font-weight: bold; font-size: 18px;"></div>
    `;
    document.getElementById("submitBoss3Btn").addEventListener("click", () => {
        let answer = document.getElementById("boss3Input").value.trim().toLowerCase();
        let resultDiv = document.getElementById("result3Message");
        let correctKeywords = ["cả hai", "ca hai", "cả 2", "ca 2", "cả hai người"];
        let isCorrect = correctKeywords.some(keyword => answer.includes(keyword));

        if (isCorrect) {
            if (!playerInventory.includes("Dây chuyền Mặt Trăng")) playerInventory.push("Dây chuyền Mặt Trăng");
            resultDiv.style.color = "#4E9F3D";
            resultDiv.innerHTML = `🎉 XUẤT SẮC! Đáp án chính xác là CẢ HAI. Nhận được [Manh mối: Dây chuyền Mặt Trăng].`;
            setTimeout(() => { nextBtn.style.display = "block"; current++; showScene(); }, 4000);
        } else {
            userStars--; wrongAnswersCount++; updateStars(); resultDiv.style.color = "#D82148";
            if (wrongAnswersCount >= 3) { resultDiv.innerHTML = `❌ Game Over! Chơi lại từ đầu.`; setTimeout(() => { location.reload(); }, 4000); } 
            else { resultDiv.innerHTML = `❌ Chưa chính xác! Hệ thống tự động chuyển cảnh...`; setTimeout(() => { nextBtn.style.display = "block"; current++; showScene(); }, 4000); }
        }
    });
}

function openDuanBoss4Panel() {
    nextBtn.style.display = "none";
    text.innerHTML = `
        <p style="color: #FF4C29; font-weight: bold; font-size: 24px; margin-bottom: 15px;">[LƯỢT SUY LUẬN 3] Ai là người đáng nghi nhất phía sau những lời đồn về hồ Selena?</p>
        <input type="text" id="boss4Input" placeholder="Viết cái tên hoặc thân phận bạn nghi ngờ..." style="width: 70%; padding: 10px; font-size: 18px; border-radius: 4px; border: none; margin-bottom: 15px; color: black;"><br>
        <button id="submitBoss4Btn" style="padding: 10px 30px; font-size: 18px; background: #FFD369; color: black; border: none; font-weight: bold; cursor: pointer; border-radius: 4px;">Xác nhận suy luận</button>
        <div id="result4Message" style="margin-top: 15px; font-weight: bold; font-size: 18px;"></div>
    `;
    document.getElementById("submitBoss4Btn").addEventListener("click", () => {
        let answer = document.getElementById("boss4Input").value.trim().toLowerCase();
        let resultDiv = document.getElementById("result4Message");
        let correctKeywords = ["chưa đủ dữ kiện", "chua du du kien", "chưa đủ bằng chứng", "chưa đủ", "chua du"];
        let isCorrect = correctKeywords.some(keyword => answer.includes(keyword));

        if (isCorrect) {
            if (!playerInventory.includes("Nhẫn đá mặt trăng")) playerInventory.push("Nhẫn đá mặt trăng");
            resultDiv.style.color = "#4E9F3D";
            resultDiv.innerHTML = `🎉 QUÁ TỈNH TÁO! Đáp án chính xác là CHƯA ĐỦ DỮ KIỆN. Nhận được [Manh mối: Nhẫn đá mặt trăng].`;
            setTimeout(() => { nextBtn.style.display = "block"; current++; showScene(); }, 4000);
        } else {
            userStars--; wrongAnswersCount++; updateStars(); resultDiv.style.color = "#D82148";
            if (wrongAnswersCount >= 3) { setTimeout(() => { location.reload(); }, 4000); } 
            else { setTimeout(() => { nextBtn.style.display = "block"; current++; showScene(); }, 4000); }
        }
    });
}

function openDuanBoss5Panel() {
    nextBtn.style.display = "none";
    text.innerHTML = `
        <p style="color: #FF4C29; font-weight: bold; font-size: 24px; margin-bottom: 15px;">[LƯỢT SUY LUẬN 4] Ai là người đứng sau vụ bắt cóc công chúa Salynya?</p>
        <div style="margin-bottom: 15px;">
            <input type="radio" name="boss5" value="lussyh" id="r1"> <label for="r1" style="font-size:18px; color:white;">Nữ tu trưởng Lussyh</label><br><br>
            <input type="radio" name="boss5" value="lussahna" id="r2"> <label for="r2" style="font-size:18px; color:white;">Nữ tu Lussahna</label><br><br>
            <input type="radio" name="boss5" value="sylany" id="r3"> <label for="r3" style="font-size:18px; color:white;">Hoàng hậu Sylany</label><br><br>
            <input type="radio" name="boss5" value="gonius" id="r4"> <label for="r4" style="font-size:18px; color:white;">Tư tế Gonius</label>
        </div>
        <button id="submitBoss5Btn" style="padding: 10px 30px; font-size: 18px; background: #FFD369; color: black; border: none; font-weight: bold; cursor: pointer; border-radius: 4px;">Xác nhận</button>
        <div id="result5Message" style="margin-top: 15px; font-weight: bold; font-size: 18px;"></div>
    `;
    document.getElementById("submitBoss5Btn").addEventListener("click", () => {
        let selected = document.querySelector('input[name="boss5"]:checked');
        if (!selected) return;
        let resultDiv = document.getElementById("result5Message");

        if (selected.value === "lussyh") {
            if (!playerInventory.includes("Lời chúc phúc của Lussahna")) playerInventory.push("Lời chúc phúc của Lussahna");
            resultDiv.style.color = "#4E9F3D";
            resultDiv.innerHTML = `🎉 CHÍNH XÁC! Nhận được [Manh mối: Lời chúc phúc cuối cùng của Lussahna].`;
            setTimeout(() => { nextBtn.style.display = "block"; current++; showScene(); }, 4000);
        } else {
            userStars--; wrongAnswersCount++; updateStars(); resultDiv.style.color = "#D82148";
            setTimeout(() => { nextBtn.style.display = "block"; current++; showScene(); }, 4000);
        }
    });
}

function openDuanBoss6Panel() {
    nextBtn.style.display = "none";
    text.innerHTML = `
        <p style="color: #FF4C29; font-weight: bold; font-size: 24px; margin-bottom: 15px;">[LƯỢT SUY LUẬN 5] Cái tên "Rojefh" xuất hiện trong bức thư là ai?</p>
        <input type="text" id="boss6Input" placeholder="Viết cái tên hoặc thân phận bạn nghi ngờ..." style="width: 70%; padding: 10px; font-size: 18px; border-radius: 4px; border: none; margin-bottom: 15px; color: black;"><br>
        <button id="submitBoss6Btn" style="padding: 10px 30px; font-size: 18px; background: #FFD369; color: black; border: none; font-weight: bold; cursor: pointer; border-radius: 4px;">Xác nhận</button>
        <div id="result6Message" style="margin-top: 15px; font-weight: bold; font-size: 18px;"></div>
    `;
    document.getElementById("submitBoss6Btn").addEventListener("click", () => {
        let answer = document.getElementById("boss6Input").value.trim().toLowerCase();
        let resultDiv = document.getElementById("result6Message");
        let correctKeywords = ["ông ngoại", "ong ngoai", "cha hoàng hậu", "cha hoang hau"];
        let isCorrect = correctKeywords.some(keyword => answer.includes(keyword));

        if (isCorrect) {
            if (!playerInventory.includes("Bản kế hoạch Rojefh")) playerInventory.push("Bản kế hoạch Rojefh");
            resultDiv.style.color = "#4E9F3D";
            resultDiv.innerHTML = `🎉 CHÍNH XÁC! Thân phận thật sự là Ông ngoại của công chúa Salynya. Chuẩn bị sang Chương 7!`;
            setTimeout(() => { nextBtn.style.display = "block"; current++; showScene(); }, 4000);
        } else {
            userStars--; wrongAnswersCount++; updateStars(); resultDiv.style.color = "#D82148";
            setTimeout(() => { nextBtn.style.display = "block"; current++; showScene(); }, 4000);
        }
    });
}
