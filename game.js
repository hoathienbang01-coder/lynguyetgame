let current = 0;
let userStars = 5; 
let playerInventory = []; 
let wrongAnswersCount = 0; 
let gameStarted = false; 
let isPaused = false; 

// Biến toàn cục để giữ hình nền không bao giờ bị đen
let lastValidBackground = "";
let currentChapterTracked = null; 

// Khai báo nhạc nền
const bgm = new Audio("assets/bgm.mp3"); 
bgm.loop = true; 
let currentVoice = null;

const speaker = document.getElementById("speaker");
const text = document.getElementById("text");
const character = document.getElementById("character");
const background = document.getElementById("background");
const nextBtn = document.getElementById("nextBtn");
const pauseBtn = document.getElementById("pauseBtn");

// ÉP CẤU TRÚC HÌNH NỀN KHÔNG BỊ ĐEN (Dùng thuộc tính bao phủ tuyệt đối)
if (background) {
    background.style.position = "absolute";
    background.style.top = "0";
    background.style.left = "0";
    background.style.width = "100%";
    background.style.height = "100%";
    background.style.backgroundSize = "cover";
    background.style.backgroundPosition = "center";
    background.style.backgroundRepeat = "no-repeat";
    background.style.zIndex = "1"; // Nền nằm dưới cùng
}

// Đảm bảo khung dialogue nằm trên nền
const dialogueBox = document.getElementById("dialogue-box");
if (dialogueBox) {
    dialogueBox.style.zIndex = "10"; 
}

if (nextBtn) {
    nextBtn.textContent = "🎮 BẮT ĐẦU GAME";
    nextBtn.style.background = "#FF4C29";
    nextBtn.style.color = "white";
}

const starDisplay = document.createElement("div");
starDisplay.style = "position:absolute; top:20px; left:20px; color:#FFD369; font-size:24px; font-weight:bold; z-index:100; text-shadow: 2px 2px black;";
starDisplay.innerHTML = "⭐ ".repeat(userStars);
document.body.appendChild(starDisplay);

function updateStars() {
    starDisplay.innerHTML = "⭐ ".repeat(userStars);
}

// TẠO BOX INTRO / VẬT PHẨM ĐỘC LẬP ÉP RA CHÍNH GIỮA MÀN HÌNH TUYỆT ĐỐI
const globalPopup = document.createElement("div");
globalPopup.id = "globalPopup";
globalPopup.style.position = "fixed"; // Sử dụng fixed để cố định giữa màn hình thiết bị
globalPopup.style.top = "50%";
globalPopup.style.left = "50%";
globalPopup.style.transform = "translate(-50%, -50%)";
globalPopup.style.width = "85%";
globalPopup.style.maxWidth = "600px";
globalPopup.style.background = "rgba(0, 0, 0, 0.9)"; // Box nền trong suốt nghệ thuật
globalPopup.style.border = "3px solid #FFD369";
globalPopup.style.borderRadius = "12px";
globalPopup.style.padding = "40px 30px";
globalPopup.style.color = "white";
globalPopup.style.textAlign = "center";
globalPopup.style.zIndex = "9999"; // Siêu cao để đè lên mọi thứ khác
globalPopup.style.display = "none";
globalPopup.style.boxShadow = "0px 0px 30px rgba(255, 211, 105, 0.6)";
globalPopup.style.boxSizing = "border-box";
document.body.appendChild(globalPopup); // Gắn hẳn vào body để không bị dính CSS của div cha

// --- LOGIC NÚT TẠM DỪNG GAME ---
if (pauseBtn) {
    pauseBtn.addEventListener("click", () => {
        if (!gameStarted) return; 
        
        if (!isPaused) {
            isPaused = true;
            pauseBtn.textContent = "▶️ TIẾP TỤC CHƠI";
            pauseBtn.style.background = "#4E9F3D";
            nextBtn.style.pointerEvents = "none"; 
            nextBtn.style.opacity = "0.5";
            bgm.pause(); 
            if (currentVoice) currentVoice.pause(); 
        } else {
            isPaused = false;
            pauseBtn.textContent = "⏸️ TẠM DỪNG";
            pauseBtn.style.background = "#FF4C29";
            nextBtn.style.pointerEvents = "auto"; 
            nextBtn.style.opacity = "1";
            bgm.play().catch(e => console.log("Lỗi nhạc")); 
            if (currentVoice) currentVoice.play().catch(e => console.log("Lỗi voice"));
        }
    });
}

// --- HÀM SHOWSCENE HIỂN THỊ LOGIC CHÍNH ---
function showScene() {
    let scene = story[current];

    if (scene.triggerDuanBoss) { openDuanBossPanel(); return; }
    if (scene.triggerDuanBoss3) { openDuanBoss3Panel(); return; }
    if (scene.triggerDuanBoss4) { openDuanBoss4Panel(); return; }
    if (scene.triggerDuanBoss5) { openDuanBoss5Panel(); return; }
    if (scene.triggerDuanBoss6) { openDuanBoss6Panel(); return; }

    // SỬA LỖI MẤT NỀN ĐEN: Ép gán ảnh nền bằng CSS mạnh
    if (scene.background && scene.background.trim() !== "") {
        lastValidBackground = `url('${scene.background}')`;
        background.style.backgroundImage = lastValidBackground;
    } else if (lastValidBackground !== "") {
        background.style.backgroundImage = lastValidBackground;
    }

    // SỬA LỖI CHỮ TIÊU ĐỀ CHƯƠNG KHÔNG RA GIỮA MÀN HÌNH
    if (scene.chapter && scene.chapter !== currentChapterTracked) {
        currentChapterTracked = scene.chapter; 

        if (dialogueBox) dialogueBox.style.opacity = "0"; 
        nextBtn.style.display = "none"; 

        globalPopup.style.display = "block";
        globalPopup.innerHTML = `
            <h1 style="color: #FFD369; font-size: 26px; margin: 0 0 20px 0; text-transform: uppercase; letter-spacing: 2px;">🎬 CHÀO MỪNG ĐẾN VỚI CHƯƠNG MỚI</h1>
            <p style="font-size: 22px; font-weight: bold; line-height: 1.6; color: #FFFFFF; margin: 0 0 30px 0;">${scene.chapter}</p>
            <button id="closeIntroBtn" style="padding: 12px 40px; font-size: 16px; background: #FF4C29; color: white; border: none; font-weight: bold; cursor: pointer; border-radius: 6px; box-shadow: 0 4px 10px rgba(0,0,0,0.3);">Tiếp tục chơi ➔</button>
        `;

        document.getElementById("closeIntroBtn").addEventListener("click", () => {
            globalPopup.style.display = "none"; 
            if (dialogueBox) dialogueBox.style.opacity = "1"; 
            nextBtn.style.display = "block"; 
            renderThoaiTruyen(scene);
        });
        return; 
    }

    renderThoaiTruyen(scene);
}

function renderThoaiTruyen(scene) {
    speaker.textContent = scene.speaker || "";
    text.textContent = scene.text || "";

    if (scene.speaker && scene.speaker !== "") {
        bgm.volume = 0.2; 
    } else {
        bgm.volume = 0.4; 
    }

    if (currentVoice) currentVoice.pause();
    currentVoice = new Audio(`assets/voice_${current}.mp3`);
    currentVoice.volume = 0.9;
    currentVoice.play().catch(e => console.log("Chờ tương tác phát voice"));

    if (scene.character && scene.character !== "") {
        character.src = scene.character;
        character.style.display = "block";
        character.style.zIndex = "5";
    } else {
        character.style.display = "none";
    }
}

nextBtn.addEventListener("click", () => {
    if (isPaused) return; 

    if (!gameStarted) {
        gameStarted = true;
        nextBtn.textContent = "Tiếp tục ➔";
        nextBtn.style.background = "#FFD369";
        nextBtn.style.color = "black";
        
        bgm.play().catch(e => console.log("Kích hoạt nhạc"));
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

speaker.textContent = "Hệ thống";
text.textContent = "Chào mừng bạn đến với trò chơi cốt truyện tương tác Ai Cập Cổ Đại. Hãy nhấn nút phía dưới để kích hoạt hành trình bí ẩn!";

// Hàm hiển thị Popup chúc mừng nhận vật phẩm độc lập chính giữa màn hình
function showVatPhamSuccessPopup(tenVatPham, duongDanAnh, callback) {
    globalPopup.style.display = "block";
    globalPopup.style.border = "3px solid #4E9F3D";
    globalPopup.innerHTML = `
        <h2 style="color: #4E9F3D; margin: 0 0 10px 0;">🎉 SUY LUẬN CHÍNH XÁC!</h2>
        <p style="font-size: 16px; margin: 0 0 15px 0;">Bạn đã xuất sắc tìm ra manh mối và nhận được vật phẩm:</p>
        <div style="margin: 20px 0;">
            <img src="${duongDanAnh}" alt="${tenVatPham}" style="width: 150px; height: 150px; object-fit: contain; border: 2px solid #FFD369; border-radius: 10px; background: rgba(255,255,255,0.15); padding: 5px;">
        </div>
        <p style="color: #FFD369; font-weight: bold; font-size: 18px; margin: 0;">🎁 [Manh mối: ${tenVatPham}]</p>
        <p style="font-size: 13px; color: #aaa; margin: 15px 0 0 0;">Hệ thống tự động chuyển cảnh sau vài giây...</p>
    `;
    setTimeout(() => {
        globalPopup.style.display = "none";
        callback();
    }, 5000);
}

function openDuanBossPanel() {
    nextBtn.style.display = "none";
    text.innerHTML = `
        <p style="color: #FF4C29; font-weight: bold; font-size: 22px; margin-bottom: 15px;">[LƯỢT SUY LUẬN 1] Ai là người hạ độc Pharaoh?</p>
        <input type="text" id="bossInput" placeholder="Viết cái tên hoặc thân phận bạn nghi ngờ..." style="width: 85%; padding: 12px; font-size: 16px; border-radius: 4px; border: none; margin-bottom: 15px; color: black;"><br>
        <button id="submitBossBtn" style="padding: 10px 30px; font-size: 16px; background: #FFD369; color: black; border: none; font-weight: bold; cursor: pointer; border-radius: 4px;">Xác nhận suy luận</button>
        <div id="resultMessage" style="margin-top: 15px; font-weight: bold; font-size: 16px;"></div>
    `;

    document.getElementById("submitBossBtn").addEventListener("click", () => {
        let answer = document.getElementById("bossInput").value.trim().toLowerCase();
        let resultDiv = document.getElementById("resultMessage");
        let correctKeywords = ["sahkar", "hoàng tử", "hoang tu", "hoang tu sahkar", "hoàng tử sahkar"];
        let isCorrect = correctKeywords.some(keyword => answer.includes(keyword));

        if (isCorrect) {
            if (!playerInventory.includes("Lọ pha lê tím nạm vàng")) playerInventory.push("Lọ pha lê tím nạm vàng");
            showVatPhamSuccessPopup("Lọ pha lê tím nạm vàng", "assets/vatpham_1.jpg", () => {
                nextBtn.style.display = "block"; current++; showScene();
            });
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
        <p style="color: #FF4C29; font-weight: bold; font-size: 22px; margin-bottom: 15px;">[LƯỢT SUY LUẬN 2] Ai là người bị thế lực hắc ám lợi dụng?</p>
        <input type="text" id="boss3Input" placeholder="Viết cái tên hoặc thân phận bạn nghi ngờ..." style="width: 85%; padding: 12px; font-size: 16px; border-radius: 4px; border: none; margin-bottom: 15px; color: black;"><br>
        <button id="submitBoss3Btn" style="padding: 10px 30px; font-size: 16px; background: #FFD369; color: black; border: none; font-weight: bold; cursor: pointer; border-radius: 4px;">Xác nhận suy luận</button>
        <div id="result3Message" style="margin-top: 15px; font-weight: bold; font-size: 16px;"></div>
    `;
    document.getElementById("submitBoss3Btn").addEventListener("click", () => {
        let answer = document.getElementById("boss3Input").value.trim().toLowerCase();
        let resultDiv = document.getElementById("result3Message");
        let correctKeywords = ["cả hai", "ca hai", "cả 2", "ca 2", "cả hai người"];
        let isCorrect = correctKeywords.some(keyword => answer.includes(keyword));

        if (isCorrect) {
            if (!playerInventory.includes("Dây chuyền Mặt Trăng")) playerInventory.push("Dây chuyền Mặt Trăng");
            showVatPhamSuccessPopup("Dây chuyền Mặt Trăng", "assets/vatpham_2.jpg", () => {
                nextBtn.style.display = "block"; current++; showScene();
            });
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
        <p style="color: #FF4C29; font-weight: bold; font-size: 22px; margin-bottom: 15px;">[LƯỢT SUY LUẬN 3] Ai là người đáng nghi nhất phía sau những lời đồn về hồ Selena?</p>
        <input type="text" id="boss4Input" placeholder="Viết cái tên hoặc thân phận bạn nghi ngờ..." style="width: 85%; padding: 12px; font-size: 16px; border-radius: 4px; border: none; margin-bottom: 15px; color: black;"><br>
        <button id="submitBoss4Btn" style="padding: 10px 30px; font-size: 16px; background: #FFD369; color: black; border: none; font-weight: bold; cursor: pointer; border-radius: 4px;">Xác nhận suy luận</button>
        <div id="result4Message" style="margin-top: 15px; font-weight: bold; font-size: 16px;"></div>
    `;
    document.getElementById("submitBoss4Btn").addEventListener("click", () => {
        let answer = document.getElementById("boss4Input").value.trim().toLowerCase();
        let resultDiv = document.getElementById("result4Message");
        let correctKeywords = ["chưa đủ dữ kiện", "chua du du kien", "chưa đủ bằng chứng", "chưa đủ", "chua du"];
        let isCorrect = correctKeywords.some(keyword => answer.includes(keyword));

        if (isCorrect) {
            if (!playerInventory.includes("Nhẫn đá mặt trăng")) playerInventory.push("Nhẫn đá mặt trăng");
            showVatPhamSuccessPopup("Nhẫn đá mặt trăng", "assets/vatpham_3.jpg", () => {
                nextBtn.style.display = "block"; current++; showScene();
            });
        } else {
            userStars--; wrongAnswersCount++; updateStars(); resultDiv.style.color = "#D82148";
            setTimeout(() => { nextBtn.style.display = "block"; current++; showScene(); }, 4000);
        }
    });
}

function openDuanBoss5Panel() {
    nextBtn.style.display = "none";
    text.innerHTML = `
        <p style="color: #FF4C29; font-weight: bold; font-size: 22px; margin-bottom: 15px;">[LƯỢT SUY LUẬN 4] Ai là người đứng sau vụ bắt cóc công chúa Salynya?</p>
        <div style="margin-bottom: 15px; text-align: left; padding-left: 15%;">
            <input type="radio" name="boss5" value="lussyh" id="r1"> <label for="r1" style="font-size:16px; color:white;">Nữ tu trưởng Lussyh</label><br><br>
            <input type="radio" name="boss5" value="lussahna" id="r2"> <label for="r2" style="font-size:16px; color:white;">Nữ tu Lussahna</label><br><br>
            <input type="radio" name="boss5" value="sylany" id="r3"> <label for="r3" style="font-size:16px; color:white;">Hoàng hậu Sylany</label><br><br>
            <input type="radio" name="boss5" value="gonius" id="r4"> <label for="r4" style="font-size:16px; color:white;">Tư tế Gonius</label>
        </div>
        <button id="submitBoss5Btn" style="padding: 10px 30px; font-size: 16px; background: #FFD369; color: black; border: none; font-weight: bold; cursor: pointer; border-radius: 4px;">Xác nhận</button>
        <div id="result5Message" style="margin-top: 15px; font-weight: bold; font-size: 16px;"></div>
    `;
    document.getElementById("submitBoss5Btn").addEventListener("click", () => {
        let selected = document.querySelector('input[name="boss5"]:checked');
        if (!selected) return;
        let resultDiv = document.getElementById("result5Message");

        if (selected.value === "lussyh") {
            if (!playerInventory.includes("Lời chúc phúc của Lussahna")) playerInventory.push("Lời chúc phúc của Lussahna");
            showVatPhamSuccessPopup("Lời chúc phúc cuối cùng của Lussahna", "assets/vatpham_4.jpg", () => {
                nextBtn.style.display = "block"; current++; showScene();
            });
        } else {
            userStars--; wrongAnswersCount++; updateStars(); resultDiv.style.color = "#D82148";
            setTimeout(() => { nextBtn.style.display = "block"; current++; showScene(); }, 4000);
        }
    });
}

function openDuanBoss6Panel() {
    nextBtn.style.display = "none";
    text.innerHTML = `
        <p style="color: #FF4C29; font-weight: bold; font-size: 22px; margin-bottom: 15px;">[LƯỢT SUY LUẬN 5] Cái tên "Rojefh" xuất hiện trong bức thư là ai?</p>
        <input type="text" id="boss6Input" placeholder="Viết cái tên hoặc thân phận bạn nghi ngờ..." style="width: 85%; padding: 12px; font-size: 16px; border-radius: 4px; border: none; margin-bottom: 15px; color: black;"><br>
        <button id="submitBoss6Btn" style="padding: 10px 30px; font-size: 16px; background: #FFD369; color: black; border: none; font-weight: bold; cursor: pointer; border-radius: 4px;">Xác nhận</button>
        <div id="result6Message" style="margin-top: 15px; font-weight: bold; font-size: 16px;"></div>
    `;
    document.getElementById("submitBoss6Btn").addEventListener("click", () => {
        let answer = document.getElementById("boss6Input").value.trim().toLowerCase();
        let resultDiv = document.getElementById("result6Message");
        let correctKeywords = ["ông ngoại", "ong ngoai", "cha hoàng hậu", "cha hoang hau"];
        let isCorrect = correctKeywords.some(keyword => answer.includes(keyword));

        if (isCorrect) {
            if (!playerInventory.includes("Bản kế hoạch Rojefh")) playerInventory.push("Bản kế hoạch Rojefh");
            showVatPhamSuccessPopup("Bản kế hoạch Rojefh", "assets/vatpham_5.jpg", () => {
                nextBtn.style.display = "block"; current++; showScene();
            });
        } else {
            userStars--; wrongAnswersCount++; updateStars(); resultDiv.style.color = "#D82148";
            setTimeout(() => { nextBtn.style.display = "block"; current++; showScene(); }, 4000);
        }
    });
}
