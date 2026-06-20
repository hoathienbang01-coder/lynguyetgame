let current = 0;
let userStars = 5; // Người chơi khởi đầu với 5 sao
let playerInventory = []; // Kho vật phẩm thu thập được
let wrongAnswersCount = 0; // Đếm số lần đoán sai (tối đa 3 lần chơi lại)

// Khai báo nhạc nền (BGM)
const bgm = new Audio("assets/bgm.mp3"); 
bgm.loop = true; 
let currentVoice = null;

const speaker = document.getElementById("speaker");
const text = document.getElementById("text");
const character = document.getElementById("character");
const background = document.getElementById("background");
const nextBtn = document.getElementById("nextBtn");

// Tạo giao diện hiển thị số sao lên góc màn hình
const starDisplay = document.createElement("div");
starDisplay.style = "position:absolute; top:20px; left:20px; color:#FFD369; font-size:24px; font-weight:bold; z-index:100; text-shadow: 2px 2px black;";
starDisplay.innerHTML = "⭐ ".repeat(userStars);
document.body.appendChild(starDisplay);

function updateStars() {
    starDisplay.innerHTML = "⭐ ".repeat(userStars);
}

// --- HÀM SHOWSCENE KIỂM TRA ĐIỀU KIỆN CHUYỂN CẢNH CHO CẢ 5 CHƯƠNG ---
function showScene() {
    let scene = story[current];

    // 1. Chốt chặn Mini-game Chương 2
    if (scene.triggerDuanBoss) {
        openDuanBossPanel();
        return;
    }

    // 2. Chốt chặn Mini-game Chương 3
    if (scene.triggerDuanBoss3) {
        openDuanBoss3Panel();
        return;
    }

    // 3. Chốt chặn Mini-game Chương 4
    if (scene.triggerDuanBoss4) {
        openDuanBoss4Panel();
        return;
    }

    // 4. Chốt chặn Mini-game Chương 5
    if (scene.triggerDuanBoss5) {
        openDuanBoss5Panel();
        return;
    }

    // --- HIỂN THỊ CHỮ THOẠI VÀ TÊN NHÂN VẬT ---
    speaker.textContent = scene.speaker;
    text.textContent = scene.text;

    // --- TỰ ĐỘNG ĐIỀU CHỈNH ÂM LƯỢNG NHẠC NỀN THEO THOẠI ---
    if (scene.speaker && scene.speaker !== "") {
        bgm.volume = 0.2; // Có nhân vật thoại -> Nhạc nhỏ (20%) để nghe rõ lồng tiếng
    } else {
        bgm.volume = 0.4; // Lời dẫn truyện -> Nhạc to lên (40%) tạo không khí
    }

    // --- XỬ LÝ PHÁT GIỌNG LỒNG TIẾNG (VOICE) CỦA HAI ---
    if (currentVoice) currentVoice.pause();
    currentVoice = new Audio(`assets/voice_${current}.mp3`);
    currentVoice.volume = 0.9;
    currentVoice.play().catch(e => console.log("Chờ người chơi bấm tương tác để phát voice"));

    // --- XỬ LÝ ĐỔI ẢNH NỀN ---
    if (scene.background && scene.background !== "") {
        background.style.backgroundImage = `url('${scene.background}')`;
    }

    // --- XỬ LÝ ẨN/HIỆN ẢNH NHÂN VẬT ---
    if (scene.character && scene.character !== "") {
        character.src = scene.character;
        character.style.display = "block";
    } else {
        character.style.display = "none";
    }
}

// LẮNG NGHE SỰ KIỆN BẤM NÚT TIẾP TỤC
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

// KÍCH HOẠT CẢNH ĐẦU TIÊN KHI VÀO GAME
showScene();


// ========================================================
//   CÁC HÀM XỬ LÝ MINI-GAME SUY LUẬN ĐOÁN BOSS CHI TIẾT
// ========================================================

// HÀM SUY LUẬN CHƯƠNG 2 (Hoàng tử Sahkar)
function openDuanBossPanel() {
    nextBtn.style.display = "none";
    text.innerHTML = `
        <p style="color: #FF4C29; font-weight: bold; font-size: 24px; margin-bottom: 15px;">[LƯỢT SUY LUẬN 1] Ai là người hạ độc Pharaoh?</p>
        <p style="font-size: 16px; color: #ccc; margin-bottom: 15px;">Hãy nhập TÊN hoặc VAI TRÒ/CHỨC VỊ của kẻ tình nghi vào ô dưới đây:</p>
        <input type="text" id="bossInput" placeholder="Ví dụ: Hoàng tử Sahkar..." style="width: 70%; padding: 10px; font-size: 18px; border-radius: 4px; border: none; margin-bottom: 15px; color: black;"><br>
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
            resultDiv.innerHTML = `
                <div style="margin: 15px 0; text-align: center;">
                    <img src="assets/vatpham_1.jpg" alt="Lọ pha lê tím" style="width: 120px; height: auto; border: 2px solid #FFD369; border-radius: 8px; box-shadow: 0 0 10px #FFD369;">
                </div>
                🎉 CHÍNH XÁC! Bạn giữ nguyên ${userStars} ⭐ và nhận được 🎁 [Manh mối số 1: Lọ pha lê tím nạm vàng]. Hệ thống đang chuẩn bị chuyển sang Chương 3...`;
            setTimeout(() => { nextBtn.style.display = "block"; text.textContent = "Bạn đã vượt qua Lượt suy luận xuất sắc! Hãy ấn Tiếp tục để bước vào Chương 3."; }, 5000);
        } else {
            userStars--; wrongAnswersCount++; updateStars(); resultDiv.style.color = "#D82148";
            if (wrongAnswersCount >= 3) {
                resultDiv.innerHTML = `❌ Đoán sai rồi! Trừ 1 ⭐. Vì bạn đã đoán sai ${wrongAnswersCount} lần nên bạn phải CHƠI LẠI TRÒ CHƠI TỪ ĐẦU!`;
                setTimeout(() => { location.reload(); }, 5000);
            } else {
                resultDiv.innerHTML = `❌ Đoán sai rồi! Bạn bị trừ 1 ⭐ (Còn ${userStars} ⭐) và không nhận được vật phẩm nào. Hệ thống tự động chuyển tiếp...`;
                setTimeout(() => { nextBtn.style.display = "block"; text.textContent = "Hệ thống tự động bỏ qua lượt suy luận. Hãy chờ đón Chương 3 tiếp theo."; }, 5000);
            }
        }
    });
}

// HÀM SUY LUẬN CHƯƠNG 3 (Cả hai người Japhah & Katisah)
function openDuanBoss3Panel() {
    nextBtn.style.display = "none";
    text.innerHTML = `
        <p style="color: #FF4C29; font-weight: bold; font-size: 24px; margin-bottom: 15px;">[LƯỢT SUY LUẬN 2] Ai là người bị thế lực hắc ám lợi dụng?</p>
        <p style="font-size: 16px; color: #ccc; margin-bottom: 15px;">Nhập câu trả lời của bạn (Tên nhân vật hoặc nhận định cụ thể):</p>
        <input type="text" id="boss3Input" placeholder="Ví dụ: Katisah, Japhah, Cả hai..." style="width: 70%; padding: 10px; font-size: 18px; border-radius: 4px; border: none; margin-bottom: 15px; color: black;"><br>
        <button id="submitBoss3Btn" style="padding: 10px 30px; font-size: 18px; background: #FFD369; color: black; border: none; font-weight: bold; cursor: pointer; border-radius: 4px;">Xác nhận suy luận</button>
        <div id="result3Message" style="margin-top: 15px; font-weight: bold; font-size: 18px; line-height: 1.5;"></div>
    `;

    document.getElementById("submitBoss3Btn").addEventListener("click", () => {
        let answer = document.getElementById("boss3Input").value.trim().toLowerCase();
        let resultDiv = document.getElementById("result3Message");
        let correctKeywords = ["cả hai", "ca hai", "cả 2", "ca 2", "cả hai người", "ca hai nguoi"];
        let isCorrect = correctKeywords.some(keyword => answer === keyword || answer.includes(keyword));

        if (isCorrect) {
            if (!playerInventory.includes("Dây chuyền Mặt Trăng")) playerInventory.push("Dây chuyền Mặt Trăng");
            resultDiv.style.color = "#4E9F3D";
            resultDiv.innerHTML = `
                <div style="margin: 15px 0; text-align: center;">
                    <img src="assets/vatpham_2.jpg" alt="Dây chuyền Mặt Trăng" style="width: 120px; height: auto; border: 2px solid #FFD369; border-radius: 8px; box-shadow: 0 0 10px #FFD369;">
                </div>
                🎉 XUẤT SẮC! Đáp án chính xác là CẢ HAI. Katisah bị chấp niệm dẫn dắt, Japhah bị hận thù thao túng.<br>
                🎁 Bạn nhận được [Manh mối số 2: Dây chuyền Mặt Trăng]. Năng lượng linh hồn yếu ớt vẫn còn sót lại...`;
            setTimeout(() => { nextBtn.style.display = "block"; text.textContent = "Bạn đã hoàn thành xuất sắc Chương 3! Hãy sẵn sàng bước tiếp hành trình."; }, 8000);
        } else {
            userStars--; wrongAnswersCount++; updateStars(); resultDiv.style.color = "#D82148";
            if (wrongAnswersCount >= 3) {
                resultDiv.innerHTML = `❌ Bạn đã đoán sai! Trừ 1 ⭐. Số lần sai đã đạt ${wrongAnswersCount}/3. BẠN PHẢI CHƠI LẠI TỪ ĐẦU!`;
                setTimeout(() => { location.reload(); }, 5000);
            } else {
                resultDiv.innerHTML = `❌ Đoán chưa chính xác! Bạn bị trừ 1 ⭐ (Còn ${userStars} ⭐).<br>📖 Nhật ký điều tra ghi lại: "Sự thật đã bị chôn vùi cùng những người đã khuất."`;
                setTimeout(() => { nextBtn.style.display = "block"; text.textContent = "Hệ thống tự động chuyển cảnh sang chương tiếp theo."; }, 7000);
            }
        }
    });
}

// HÀM SUY LUẬN CHƯƠNG 4 (Chưa đủ dữ kiện)
function openDuanBoss4Panel() {
    nextBtn.style.display = "none";
    text.innerHTML = `
        <p style="color: #FF4C29; font-weight: bold; font-size: 24px; margin-bottom: 15px;">[LƯỢT SUY LUẬN 3] Ai là người đáng nghi nhất phía sau những lời đồn về hồ Selena?</p>
        <p style="font-size: 16px; color: #ccc; margin-bottom: 15px;">Hãy suy luận cẩn thận dựa trên các bằng chứng hiện tại và nhập câu trả lời:</p>
        <input type="text" id="boss4Input" placeholder="Nhập nhận định của bạn..." style="width: 70%; padding: 10px; font-size: 18px; border-radius: 4px; border: none; margin-bottom: 15px; color: black;"><br>
        <button id="submitBoss4Btn" style="padding: 10px 30px; font-size: 18px; background: #FFD369; color: black; border: none; font-weight: bold; cursor: pointer; border-radius: 4px;">Xác nhận suy luận</button>
        <div id="result4Message" style="margin-top: 15px; font-weight: bold; font-size: 18px; line-height: 1.5;"></div>
    `;

    document.getElementById("submitBoss4Btn").addEventListener("click", () => {
        let answer = document.getElementById("boss4Input").value.trim().toLowerCase();
        let resultDiv = document.getElementById("result4Message");
        let correctKeywords = ["chưa đủ dữ kiện", "chua du du kien", "chưa đủ bằng chứng", "chua du bang chung", "chưa đủ", "chua du"];
        let isCorrect = correctKeywords.some(keyword => answer === keyword || answer.includes(keyword));

        if (isCorrect) {
            if (!playerInventory.includes("Nhẫn đá mặt trăng")) playerInventory.push("Nhẫn đá mặt trăng");
            resultDiv.style.color = "#4E9F3D";
            resultDiv.innerHTML = `
                <div style="margin: 15px 0; text-align: center;">
                    <img src="assets/vatpham_3.jpg" alt="Nhẫn đá mặt trăng" style="width: 120px; height: auto; border: 2px solid #FFD369; border-radius: 8px; box-shadow: 0 0 10px #FFD369;">
                </div>
                🎉 QUÁ TỈNH TÁO! Đáp án chính xác là CHƯA ĐỦ DỮ KIỆN. Bạn đã không bị đánh lừa bởi những tin đồn vô căn cứ.<br>
                🎁 Bạn nhận được [Manh mối số 3: Nhẫn đá mặt trăng của Hoàng hậu]. Hệ thống đang chuẩn bị mở ra Chương 5...`;
            setTimeout(() => { nextBtn.style.display = "block"; text.textContent = "Bạn đã vượt qua Lượt suy luận xuất sắc! Hãy ấn Tiếp tục để bước vào Chương 5."; }, 8000);
        } else {
            userStars--; wrongAnswersCount++; updateStars(); resultDiv.style.color = "#D82148";
            if (wrongAnswersCount >= 3) {
                resultDiv.innerHTML = `❌ Bạn đã đoán sai do vội vàng kết án! Trừ 1 ⭐. Số lần sai đã đạt ${wrongAnswersCount}/3. BẠN PHẢI CHƠI LẠI TỪ ĐẦU!`;
                setTimeout(() => { location.reload(); }, 5000);
            } else {
                resultDiv.innerHTML = `❌ Đoán sai rồi! Bạn bị trừ 1 ⭐ (Còn ${userStars} ⭐) vì đã vội tin vào tin đồn.<br>📖 Bạn đã bỏ lỡ manh mối quan trọng từ Hoàng tộc.`;
                setTimeout(() => { nextBtn.style.display = "block"; text.textContent = "Hệ thống tự động bỏ qua lượt suy luận. Chuẩn bị bước vào Chương 5."; }, 7000);
            }
        }
    });
}

// HÀM SUY LUẬN CHƯƠNG 5 (Nữ tu trưởng Lussyh & Nút Chọn Boss Sớm)
function openDuanBoss5Panel() {
    nextBtn.style.display = "none";
    text.innerHTML = `
        <p style="color: #FF4C29; font-weight: bold; font-size: 24px; margin-bottom: 15px;">[LƯỢT SUY LUẬN 4] Ai là người đứng sau vụ bắt cóc công chúa Salynya?</p>
        <div style="margin-bottom: 15px;">
            <input type="radio" name="boss5" value="lussyh" id="r1"> <label for="r1" style="font-size:18px;">Nữ tu trưởng Lussyh</label><br><br>
            <input type="radio" name="boss5" value="lussahna" id="r2"> <label for="r2" style="font-size:18px;">Nữ tu Lussahna</label><br><br>
            <input type="radio" name="boss5" value="sylany" id="r3"> <label for="r3" style="font-size:18px;">Hoàng hậu Sylany</label><br><br>
            <input type="radio" name="boss5" value="gonius" id="r4"> <label for="r4" style="font-size:18px;">Tư tế Gonius</label>
        </div>
        <button id="submitBoss5Btn" style="padding: 10px 30px; font-size: 18px; background: #FFD369; color: black; border: none; font-weight: bold; cursor: pointer; border-radius: 4px;">Xác nhận suy luận</button>
        <div id="result5Message" style="margin-top: 15px; font-weight: bold; font-size: 18px; line-height: 1.5;"></div>
    `;

    document.getElementById("submitBoss5Btn").addEventListener("click", () => {
        let selected = document.querySelector('input[name="boss5"]:checked');
        if (!selected) { alert("Vui lòng chọn một đáp án!"); return; }
        
        let answer = selected.value;
        let resultDiv = document.getElementById("result5Message");

        if (answer === "lussyh") {
            if (!playerInventory.includes("Lời chúc phúc của Lussahna")) playerInventory.push("Lời chúc phúc của Lussahna");
            resultDiv.style.color = "#4E9F3D";
            resultDiv.innerHTML = `
                <div style="margin: 15px 0; text-align: center;">
                    <img src="assets/vatpham_4.jpg" alt="Lời chúc phúc" style="width: 120px; height: auto; border: 2px solid #FFD369; border-radius: 8px; box-shadow: 0 0 10px #FFD369;">
                </div>
                🎉 CHÍNH XÁC! Nữ tu trưởng Lussyh chính là người ra lệnh bắt cóc công chúa do chấp niệm ghen hận tích tụ từ quá khứ.<br>
                🎁 Bạn nhận được [Manh mối: Lời chúc phúc cuối cùng của Lussahna].<br><br>
                <button id="earlyGuessBtn" style="padding: 8px 15px; background: #FF4C29; color: white; border: none; font-weight: bold; cursor: pointer; border-radius: 4px; margin-top: 10px;">🚨 MỞ SUY LUẬN SỚM BOSS CHÍNH (RỦI RO CAO)</button>
                <button id="skipEarlyBtn" style="padding: 8px 15px; background: #4E9F3D; color: white; border: none; font-weight: bold; cursor: pointer; border-radius: 4px; margin-top: 10px; margin-left: 10px;">Tiếp tục Chương 6</button>
            `;

            document.getElementById("earlyGuessBtn").addEventListener("click", () => openEarlyBossCheatPanel());
            document.getElementById("skipEarlyBtn").addEventListener("click", () => { nextBtn.style.display = "block"; text.textContent = "Bạn chọn đi tiếp an toàn. Ấn Tiếp tục để chuẩn bị bước vào Chương 6."; });
        } else {
            userStars--; wrongAnswersCount++; updateStars(); resultDiv.style.color = "#D82148";
            if (wrongAnswersCount >= 3) {
                resultDiv.innerHTML = `❌ Đoán sai rồi! Trừ 1 ⭐. Số lần sai đã đạt ${wrongAnswersCount}/3. BẠN PHẢI CHƠI LẠI TỪ ĐẦU!`;
                setTimeout(() => { location.reload(); }, 5000);
            } else {
                resultDiv.innerHTML = `❌ Sai rồi! Đoán Gonius lúc này chưa đúng vì ông ta chưa trực tiếp ra tay bắt cóc. Bạn bị trừ 1 ⭐ (Còn ${userStars} ⭐).`;
                setTimeout(() => { nextBtn.style.display = "block"; text.textContent = "Chuẩn bị bước vào Chương 6."; }, 6000);
            }
        }
    });
}

// PANEL ĐOÁN BOSS SỚM (CHỌN SAI LÀ GAME OVER)
function openEarlyBossCheatPanel() {
    text.innerHTML = `
        <p style="color: #D82148; font-weight: bold; font-size: 24px; margin-bottom: 15px;">🚨 LƯỢT CHỌN THỨ 6: CHỈ ĐỊNH BOSS CHÍNH TRÊN TOÀN CỐT TRUYỆN</p>
        <p style="font-size: 16px; color: #ff9f1a; margin-bottom: 15px;">CẢNH BÁO: Đây là nút chết. Chọn đúng, bạn sẽ mở khóa nhánh thưởng cực đại ở cuối game. Chọn sai, trò chơi lập tức GAME OVER và bạn phải chơi lại từ đầu!</p>
        <input type="text" id="earlyBossInput" placeholder="Nhập tên chính xác của Kẻ Chủ Mưu Cuối Cùng..." style="width: 70%; padding: 10px; font-size: 18px; border-radius: 4px; border: none; margin-bottom: 15px; color: black;"><br>
        <button id="confirmEarlyBossBtn" style="padding: 10px 30px; font-size: 18px; background: #D82148; color: white; border: none; font-weight: bold; cursor: pointer; border-radius: 4px;">XÁC NHẬN CHỈ ĐỊNH</button>
        <div id="earlyResultMessage" style="margin-top: 15px; font-weight: bold; font-size: 18px; line-height: 1.5;"></div>
    `;

    document.getElementById("confirmEarlyBossBtn").addEventListener("click", () => {
        let answer = document.getElementById("earlyBossInput").value.trim().toLowerCase();
        let resultDiv = document.getElementById("earlyResultMessage");
        let correctBossKeywords = ["gonius", "tư tế gonius", "tu te gonius", "tute gonius", "tư tế"];
        let isCorrect = correctBossKeywords.some(keyword => answer === keyword || answer.includes(keyword));

        if (isCorrect) {
            resultDiv.style.color = "#4E9F3D";
            resultDiv.innerHTML = `🔮 THẦN KỲ! Bạn đã nhìn thấu Tư tế Gonius ngay từ Chương 5! Nhánh thưởng tối đa điểm cho Chương 6 và Chương 7 đã ĐƯỢC MỞ KHÓA! Hãy ấn nút Tiếp tục để chứng kiến hồi kết.`;
            setTimeout(() => { nextBtn.style.display = "block"; text.textContent = "Bánh xe định mệnh đang vận hành. Hãy bấm Tiếp tục để qua Chương 6."; }, 7000);
        } else {
            resultDiv.style.color = "#D82148";
            resultDiv.innerHTML = `💀 GAME OVER! Bạn đã chọn sai Boss chính hoặc kích hoạt nút chết quá sớm. Toàn bộ tiến trình suy luận bị hủy bỏ. Trò chơi đang tải lại từ đầu...`;
            setTimeout(() => { location.reload(); }, 6000);
        }
    });
}
