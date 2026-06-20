let current = 0;
let userStars = 5; 
let playerInventory = []; 
let wrongAnswersCount = 0; 
let gameStarted = false; 
let isPaused = false; 

// Biến toàn cục kiểm soát hình nền liên tục
let lastValidBackground = "";
// Biến ghi nhớ chương hiện tại để không bị lặp intro chương liên tục
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

// Tự động căn chỉnh lại CSS cho background để hiển thị full màn hình, không bị lỗi đen nền
if (background) {
    background.style.backgroundSize = "cover";
    background.style.backgroundPosition = "center";
    background.style.backgroundRepeat = "no-repeat";
}

if (nextBtn) {
    nextBtn.textContent = "🎮 BẮT ĐẦU GAME";
    nextBtn.style.background = "#FF4C29";
    nextBtn.style.color = "white";
}

// Giao diện hiển thị số sao ⭐
const starDisplay = document.createElement("div");
starDisplay.style = "position:absolute; top:20px; left:20px; color:#FFD369; font-size:24px; font-weight:bold; z-index:100; text-shadow: 2px 2px black;";
starDisplay.innerHTML = "⭐ ".repeat(userStars);
document.body.appendChild(starDisplay);

function updateStars() {
    starDisplay.innerHTML = "⭐ ".repeat(userStars);
}

// TẠO DIỆN MẠO BOX POPUP ĐỘC LẬP CHÍNH GIỮA MÀN HÌNH (Intro Chương & Hiện Vật Phẩm)
const globalPopup = document.createElement("div");
globalPopup.id = "globalPopup";
globalPopup.style = `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    max-width: 600px;
    background: rgba(0, 0, 0, 0.85);
    border: 3px solid #FFD369;
    border-radius: 12px;
    padding: 30px;
    color: white;
    text-align: center;
    z-index: 200;
    display: none;
    box-shadow: 0px 0px 25px rgba(255, 211, 105, 0.5);
    font-family: sans-serif;
`;
document.getElementById("game").appendChild(globalPopup);

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

    // 1. Kiểm tra và chặn kích hoạt Mini-game đoán Boss
    if (scene.triggerDuanBoss) { openDuanBossPanel(); return; }
    if (scene.triggerDuanBoss3) { openDuanBoss3Panel(); return; }
    if (scene.triggerDuanBoss4) { openDuanBoss4Panel(); return; }
    if (scene.triggerDuanBoss5) { openDuanBoss5Panel(); return; }
    if (scene.triggerDuanBoss6) { openDuanBoss6Panel(); return; }

    // 2.SỬA LỖI MẤT NỀN ĐEN: Ép kiểm tra và giữ chặt nền cũ
    if (scene.background && scene.background.trim() !== "") {
        lastValidBackground = `url('${scene.background}')`;
        background.style.backgroundImage = lastValidBackground;
    } else if (lastValidBackground !== "") {
        background.style.backgroundImage = lastValidBackground;
    }

    // 3.XỬ LÝ BOX INTRO ĐẦU CHƯƠNG CHÍNH GIỮA MÀN HÌNH
    // Kiểm tra xem cảnh này có đánh dấu chương mới không (Ví dụ: scene.chapter = "Chương 1: Bình minh Ai Cập")
    if (scene.chapter && scene.chapter !== currentChapterTracked) {
        currentChapterTracked = scene.chapter; // Khóa chương lại tránh lặp lại

        // Ẩn tạm thời khung thoại cốt truyện phía dưới
        document.getElementById("dialogue-box").style.opacity = "0"; 
        nextBtn.style.display = "none"; 

        // Hiển thị Box giữa màn hình dạng trong suốt nghệ thuật
        globalPopup.style.display = "block";
        globalPopup.style.background = "rgba(0, 0, 0, 0.85)";
        globalPopup.style.border = "2px solid #FFD369";
        globalPopup.innerHTML = `
            <h1 style="color: #FFD369; font-size: 28px; margin-bottom: 20px; text-transform: uppercase; letter-spacing: 2px;">🎬 BẮT ĐẦU CHƯƠNG MỚI</h1>
            <p style="font-size: 20px; font-weight: bold; line-height: 1.6; color: #FFFFFF; margin-bottom: 25px;">${scene.chapter}</p>
            <button id="closeIntroBtn" style="padding: 12px 35px; font-size: 16px; background: #FF4C29; color: white; border: none; font-weight: bold; cursor: pointer; border-radius: 6px; box-shadow: 0 4px 10px rgba(0,0,0,0.3);">Tiếp tục truyện ➔</button>
        `;

        document.getElementById("closeIntroBtn").addEventListener("click", () => {
            globalPopup.style.display = "none"; // Tắt box intro
            document.getElementById("dialogue-box").style.opacity = "1"; // Hiện lại khung thoại cốt truyện
            nextBtn.style.display = "block"; 
            
            // Chạy tiếp nội dung thoại của cảnh đó
            renderThoaiTruyen(scene);
        });
        return; // Dừng hàm lại, chờ người chơi bấm Tiếp tục ở Box Intro
    }

    // Nếu không có intro chương, chạy thẳng hiển thị thoại truyện bình thường
    renderThoaiTruyen(scene);
}

// Hàm phụ trợ đổ dữ liệu văn bản truyện
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
        
        bgm.play().catch(e => console.log("Kích hoạt âm thanh"));
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


// ========================================================
//  CÁC HÀM XỬ LÝ MINI-GAME SUY LUẬN ĐOÁN BOSS ĐỘC LẬP
// ========================================================

// Hàm hiển thị Popup chúc mừng nhận vật phẩm dạng hộp thoại riêng, tránh lỗi CSS đè ảnh
function showVatPhamSuccessPopup(tenVatPham, duongDanAnh, callback) {
    globalPopup.style.display = "block";
    globalPopup.style.background = "rgba(10, 25, 47, 0.95)";
    globalPopup.style.border = "3px solid #4E9F3D";
    globalPopup.innerHTML = `
        <h2 style="color: #4E9F3D; margin-bottom: 10px;">🎉 SUY LUẬN CHÍNH XÁC!</h2>
        <p style="font-size: 16px;">Bạn đã xuất sắc tìm ra manh mối và nhận được vật phẩm:</p>
        <div style="margin: 20px 0;">
            <img src="${duongDanAnh}" alt="${tenVatPham}" style="width: 140px; height: 140px; object-fit: contain; border: 2px solid #FFD369; border-radius: 10px; background: rgba(255,255,255,0.1); padding: 5px;">
        </div>
        <p style="color: #FFD369; font-weight: bold; font-size: 18px;">🎁 [Manh mối: ${tenVatPham}]</p>
        <p style="font-size: 12px; color: #aaa; margin-top: 15px;">Hệ thống tự động chuyển cảnh sau vài giây...</p>
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
            // Gọi popup hiển thị ảnh độc lập cực chuẩn
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
