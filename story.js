const story = [
    // --- ĐOẠN 1: TOÀN CẢNH HOÀNG HÔN KINH THÀNH VÀ SỰ DÈ CHỪNG ---
    {
        speaker: "",
        text: "Chương 1: Lữ khách đến từ phương xa\n\nMặt trời phương Tây đang dần chìm xuống phía sau những đụn cát vàng bất tận. Ánh chiều tà nhuộm cả chân trời thành một màu hổ phách rực rỡ, trải dài trên những mái vòm bằng đá trắng của kinh thành Ai Cập cổ đại. Từ xa nhìn lại, vương quốc tựa như một viên ngọc vàng được các vị thần cẩn thận đặt giữa biển cát vô tận, vừa hùng vĩ vừa cổ kính, mang trong mình vẻ đẹp khiến bất cứ lữ khách nào cũng phải ngẩn ngơ khi lần đầu đặt chân đến. Con đường dẫn vào kinh thành đông đúc hơn thường lệ. Những người buôn bán đang tranh thủ dọn hàng trước khi trời tối. Tiếng trẻ nhỏ nô đùa hòa lẫn với tiếng lạc đà kéo hàng và những lời chào hỏi quen thuộc vang lên khắp nơi. Thế nhưng khi đoàn thương buôn từ phương Tây xuất hiện ở cuối con đường lớn, bầu không khí nhộn nhịp ấy dường như lặng đi trong thoáng chốc. Người dân hai bên đường không hề tỏ ra thù địch, họ chỉ lặng lẽ quan sát, những ánh mắt hiếu kỳ xen lẫn dè chừng âm thầm hướng về phía đoàn người ngoại quốc đang tiến vào thành. Vài đứa trẻ định chạy lại gần xem những cỗ xe chở đầy hàng hóa kỳ lạ, nhưng rất nhanh đã bị cha mẹ kéo về phía sau. Một vài người phụ nữ khẽ ghé sát tai nhau thì thầm điều gì đó rồi nhanh chóng quay đi. Đối với vùng đất được dòng sông Nile nuôi dưỡng qua hàng ngàn năm lịch sử này, người ngoại lai luôn là một sự tồn tại đặc biệt, họ mang theo những câu chuyện từ những vùng đất chưa từng được biết đến, mang theo những nền văn minh xa lạ, mang theo cả những điều khiến con người vừa tò mò vừa bất an.",
        background: "assets/background/toanvuongquoc.jpg", // Hiện nền mở đầu
        character: "" // Lớp dẫn truyện, chưa hiện nhân vật
    },

    // --- ĐOẠN 2: GIỚI THIỆU GIA ĐÌNH CÔNG TƯỚC VÀ NỘI TÂM LEARIAN ---
    {
        speaker: "",
        text: "Giữa đoàn thương buôn ấy, một thiếu niên đang chậm rãi cưỡi ngựa đi bên cạnh cỗ xe lớn nhất...",
        background: "", 
        character: "assets/characters/learian.jpg" // Hiện Learian trước
    },
    {
        speaker: "",
        text: "Ở phía trước đoàn người, Công tước Rohan đang cùng các quan chức tại cảng trao đổi những thủ tục cần thiết. Người đàn ông khoảng bốn mươi tuổi sở hữu vóc dáng cao lớn, bờ vai rộng cùng phong thái điềm tĩnh của một quý tộc từng trải. Mái tóc vàng được buộc gọn sau lưng, đôi mắt xanh lục sắc bén nhưng không hề khiến người khác cảm thấy áp lực. Chỉ cần đứng đó, ông đã toát ra khí chất của một người quen với việc dẫn dắt và bảo vệ những người phía sau mình.",
        background: "",
        character: "assets/characters/bolearian.jpg" 
    },
    {
        speaker: "",
        text: "Đứng bên cạnh ông là phu nhân Lianetta. Khác với vẻ cứng cỏi của chồng, người phụ nữ ấy mang đến cảm giác dịu dàng như làn gió mùa xuân...",
        background: "",
        character: "assets/characters/melearian.jpg" // Chuyển sang hiện ảnh mẹ
    },
    {
        speaker: "",
        text: "Nam tước Dos thì khác, chàng trai trẻ tuổi nhất trong số những người quản lý đoàn buôn sở hữu thân hình cao gầy...",
        background: "",
        character: "" // Nam tước Dos chưa có hình nên tạm ẩn
    },
    {
        speaker: "",
        text: "Nhưng người thu hút nhiều ánh nhìn nhất lại là Learian, chàng đứng phía sau đoàn người, một tay đặt lên hành lý, đôi mắt màu xanh sâu thẳm lặng lẽ nhìn ngắm thành phố trước mặt...",
        background: "",
        character: "assets/characters/learian.jpg" // Hiện lại Learian để vào mạch nội tâm
    },
    // --- ĐOẠN 3: RA BẾN SÔNG VÀ ĐỐI THOẠI VỚI MẸ ---
    {
        speaker: "",
        text: "Khi đoàn thương buôn ổn định tại cảng, Learian tách ra khỏi đám người, đi dọc theo bến sông Nile, nơi ánh nắng cuối ngày đang nhuộm mặt nước thành một dải vàng óng ánh. Tiếng người dần xa, chỉ còn gió và dòng nước chảy lặng lẽ. Ở phía sau, một giọng nói dịu dàng vang lên, người phụ nữ ấy không hề tỏ ra lo lắng hay nghi ngờ, chỉ nhẹ nhàng đặt tay lên vai chàng.",
        background: "",
        character: "" // Tạm ẩn nhân vật để người chơi đọc diễn biến
    },
    {
        speaker: "Lianetta",
        text: "“Người dân nơi đây chỉ chưa quen với chúng ta mà thôi.”",
        background: "",
        character: "assets/characters/melearian.jpg" // Mẹ hiện lên nói
    },
    {
        speaker: "Learian",
        text: "“Nếu là mẹ, chắc chỉ cần một ngày là đã làm quen được với cả thành phố rồi.”",
        background: "",
        character: "assets/characters/learian.jpg" // Đổi sang Learian đáp
    },
    {
        speaker: "Lianetta",
        text: "“Không phải một ngày. Ta nghĩ nửa ngày là đủ.”",
        background: "",
        character: "assets/characters/melearian.jpg" // Đổi lại mẹ mỉm cười
    },
    {
        speaker: "",
        text: "Hai mẹ con bật cười. Cảm giác ấm áp lan tỏa xua tan đi sự tách biệt lúc nãy.",
        background: "",
        character: ""
    },
    {
        speaker: "Lianetta",
        text: "“Đừng quá bận tâm. Con không sinh ra để thuộc về ánh nhìn của tất cả mọi người. Con chỉ cần đi đúng con đường mình muốn là đủ.”",
        background: "",
        character: "assets/characters/melearian.jpg"
    },
    {
        speaker: "",
        text: "Learian im lặng. Câu nói ấy không lớn, nhưng lại rơi xuống lòng chàng như một lớp nước ấm.",
        background: "",
        character: "assets/characters/learian.jpg"
    },
    {
        speaker: "Lianetta",
        text: "“Nhưng nếu con vẫn cảm thấy cô độc… Thì hãy nhớ, thế giới này không chỉ có những người đang nhìn con bằng ánh mắt xa lạ. Vẫn sẽ có người nhìn con bằng ánh mắt như mẹ đang nhìn con lúc này.”",
        background: "",
        character: "assets/characters/melearian.jpg"
    },

    // --- ĐOẠN 4: ĐI VÀO KHU CHỢ VÀ GẶP SALYNYA ---
    {
        speaker: "",
        text: "Learian không trả lời ngay. Chỉ khẽ gật đầu. Sau đó chàng chào mẹ và mọi người để tiến về trung tâm vương đô mà thăm thú nơi đây. Trên đường đi cậu gặp rất nhiều điều thú vị, cảnh sắc, không khí và con người nơi đây đều thật xa lạ với cậu khi lần đầu đặt chân đến đây, đều là những điều cậu chưa từng thấy bao giờ. Nơi đây còn đẹp hơn so với trên sách miêu tả.\n\n“Này, nhìn đôi mắt của cậu ta kìa.” “Thật giống màu biển…” “Người phương Tây đều như vậy sao?” Những lời thì thầm không dứt. Learian đã quen, nhưng quen không làm nó nhẹ đi. Chỉ là chàng học cách im lặng. Cho đến khi chàng rời khỏi đoàn người, đi một mình giữa khu chợ, để mặc tiếng ồn phía sau dần tan vào gió.",
        background: "",
        character: ""
    },
    {
        speaker: "???",
        text: "“Viên đá trên dây chuyền của ngươi thật đẹp.”",
        background: "",
        character: "assets/characters/salynya.jpg" // Salynya xuất hiện bất ngờ
    },
    {
        speaker: "",
        text: "Learian khựng lại. Quay đầu. Trước mặt chàng là một thiếu nữ. Bộ váy trắng giản dị điểm những hoa văn vàng nhạt, không cầu kỳ như các tiểu thư quý tộc. Mái tóc vàng óng dài chạm lưng, phản chiếu ánh chiều tà như sợi tơ ánh sáng. Nhưng điều khiến người ta không thể rời mắt chính là đôi mắt nàng. Màu xanh biếc trong trẻo như thảo nguyên sau mưa, như mặt hồ phản chiếu trời xanh, trong đó thấp thoáng ánh vàng kim dịu nhẹ khiến ánh nhìn ấy vừa ôn hòa vừa sống động. Nàng nhìn thẳng vào chàng. Không tránh né. Không dò xét. Không định kiến.",
        background: "",
        character: "assets/characters/salynya.jpg"
    },
    {
        speaker: "Learian",
        text: "“Ta cũng đang nghĩ điều tương tự về chiếc vòng cổ của cô.”",
        background: "",
        character: "assets/characters/learian.jpg"
    },
    {
        speaker: "Salynya",
        text: "“Viên đá này sao? Dù màu sắc khác nhau, nhưng ta vẫn thấy nó giống đôi mắt của ngươi.”",
        background: "",
        character: "assets/characters/salynya.jpg"
    },
    {
        speaker: "Learian",
        text: "“Đây là lần đầu tiên có người nói với ta điều đó.”",
        background: "",
        character: "assets/characters/learian.jpg"
    },
    {
        speaker: "Salynya",
        text: "“Vậy sao? Ta nghĩ ai cũng có thể nhận ra mà. Ngươi đến từ đâu?”",
        background: "",
        character: "assets/characters/salynya.jpg"
    },
    {
        speaker: "Learian",
        text: "“Phương Tây.”",
        background: "",
        character: "assets/characters/learian.jpg"
    },
    {
        speaker: "Salynya",
        text: "“Xa không?”",
        background: "",
        character: "assets/characters/salynya.jpg"
    },
    {
        speaker: "Learian",
        text: "“Rất xa.”",
        background: "",
        character: "assets/characters/learian.jpg"
    },
    {
        speaker: "Salynya",
        text: "“Xa hơn sa mạc phía Nam?”",
        background: "",
        character: "assets/characters/salynya.jpg"
    },
    {
        speaker: "Learian",
        text: "“Xa hơn.”",
        background: "",
        character: "assets/characters/learian.jpg"
    },
    {
        speaker: "Salynya",
        text: "“Xa hơn biển Đỏ?”",
        background: "",
        character: "assets/characters/salynya.jpg"
    },
    {
        speaker: "Learian",
        text: "“Xa hơn.”",
        background: "",
        character: "assets/characters/learian.jpg"
    },
    {
        speaker: "Salynya",
        text: "“Vậy thế giới ngoài kia lớn đến mức nào?”",
        background: "",
        character: "assets/characters/salynya.jpg"
    },

    // --- ĐOẠN 5: BƯỚC NGOẶT ĐỘT NGỘT - SỰ XUẤT HIỆN CỦA VŨ BẠCH ---
    {
        speaker: "",
        text: "Learian khựng lại. Không phải vì câu hỏi. Mà vì ánh nhìn ấy. Lần đầu tiên có người nhìn chàng không phải như kẻ ngoại lai. Không phải như thương nhân. Không phải như công cụ. Mà như một cánh cửa dẫn đến điều chưa biết. Và trong khoảnh khắc ấy, một phần linh hồn sâu trong chàng khẽ lay động.\n\nVũ Bạch. Hắn đứng giữa biển người nhưng mọi âm thanh đều biến mất. Hắn chỉ nhìn nàng. Như đã nhìn qua vô số thế giới. Như đã tìm kiếm nàng qua vô số kiếp sống. Như đã đánh mất nàng một lần nữa. Nàng đang ở đây. Nhưng không nhớ gì cả. Hắn muốn bước tới. Nhưng không thể. Hắn chỉ có thể mượn thân xác Learian, tiến lên một bước. Rồi ôm nàng. Ngắn ngủi. Như một lời chào của người xa lạ.",
        background: "",
        character: "" // Tạm ẩn để diễn tả hành động ôm nghẹn ngào
    },
    {
        speaker: "Salynya",
        text: "“Thương nhân phương Tây đều chào như vậy sao?”",
        background: "",
        character: "assets/characters/salynya.jpg" // Salynya khẽ chớp mắt ngơ ngác
    },
    {
        speaker: "Learian",
        text: "“Xin lỗi.”",
        background: "",
        character: "assets/characters/learian.jpg"
    },
    {
        speaker: "Salynya",
        text: "“Không sao. Ta thấy thú vị.”",
        background: "",
        character: "assets/characters/salynya.jpg"
    },
    {
        speaker: "",
        text: "Learian quay đi, giấu ánh mắt. Bàn tay run nhẹ. Và giọt nước nơi khóe mắt chàng rơi xuống, lặng lẽ biến mất giữa tiếng gió hoàng hôn. Nhưng nàng không thấy. Và cũng không ai biết rằng khoảnh khắc ấy, có người đã đi qua vô số thế giới chỉ để được gặp lại nàng một lần nữa.",
        background: "",
        character: "assets/characters/learian.jpg" // Kết thúc chương với hình bóng Learian đượm buồn
    }
    // ================= CHƯƠNG 2 =================
    {
        speaker: "",
        text: "CHƯƠNG 2: Bóng đêm của đứa con Ai Cập\n\nNhững ngày sau cuộc gặp gỡ đầu tiên, Learian dần trở thành vị khách quen thuộc trong hoàng cung. Ban đầu, sự xuất hiện của hắn chỉ gói gọn trong những cuộc trò chuyện ngắn tại thư viện hoàng gia cùng Công chúa Salynya, nơi ánh sáng xuyên qua những khung cửa đá cao đổ xuống từng trang sách cổ, tạo thành những vệt sáng dài trầm mặc như thời gian bị kéo giãn. Nhưng theo thời gian, những cuộc gặp ấy không còn dừng lại ở vài lời trao đổi đơn thuần nữa. Chúng dần kéo dài thành những buổi đi dạo dưới hàng cột đá trắng của hoàng cung, nơi gió sa mạc thổi qua mang theo hơi nóng khô và mùi cát xa xăm...",
        background: "assets/background/hoangcung.jpg", // Đổi sang cảnh nền hoàng cung nếu có
        character: ""
    },
    {
        speaker: "",
        text: "Người trong cung điện ban đầu còn dè chừng sự hiện diện của Learian... Nhưng dần dần, sự dè chừng ấy không còn mang hình dạng cảnh giác rõ rệt nữa, mà chuyển thành sự quen thuộc thầm lặng. Hắn chỉ xuất hiện bên cạnh công chúa, như một phần không chính thức nhưng lại ổn định đến kỳ lạ trong nhịp sống của hoàng cung.",
        background: "",
        character: "assets/characters/learian.jpg"
    },
    {
        speaker: "",
        text: "Salynya là người ít nói hơn trong những cuộc trò chuyện ấy, nhưng lại luôn là người kéo câu chuyện đi xa hơn bằng những câu hỏi không có điểm dừng... Mỗi khi Learian nhắc đến biển, đến những vùng đất xa xôi, ánh mắt nàng lại có một thoáng thay đổi rất nhỏ, như thể trong sâu thẳm, có thứ gì đó đang bị đánh thức khỏi sự im lặng lâu dài.",
        background: "",
        character: "assets/characters/salynya.jpg"
    },
    {
        speaker: "",
        text: "Sự thay đổi ấy không thoát khỏi ánh mắt của Pharaoh Aljudius. Ông là một vị vua mang khí chất của sa mạc và mặt trời, làn da màu đồng sẫm mang dấu vết của quyền lực và thời gian, ánh mắt vàng kim sắc bén như thể có thể xuyên qua mọi lời nói dối. Nhưng phía sau tất cả quyền uy ấy không chỉ là một người trị vì, mà còn là một người cha luôn đặt con gái mình ở vị trí an toàn nhất...",
        background: "",
        character: "assets/characters/pharaoh.jpg" // Đặt sẵn để sau này hai up ảnh vua
    },
    {
        speaker: "",
        text: "Hoàng hậu Sylany đứng bên cạnh Pharaoh như một sự đối lập hoàn toàn. Bà không mang khí chất áp đảo, mà là sự dịu dàng mang tính ổn định. Mái tóc vàng của bà rơi xuống vai như ánh sáng buổi sớm, đôi mắt xanh biếc như dòng nước chảy qua sa mạc khô cằn.",
        background: "",
        character: "assets/characters/hoanghau.jpg"
    },
    {
        speaker: "",
        text: "Ở phía sau ngai vàng, Tể tướng Kadius luôn đứng trong vị trí quen thuộc của mình. Khuôn mặt ông mang những đường nét khắc nghiệt của thời gian và trách nhiệm, ánh mắt luôn quan sát nhiều hơn là phản ứng... Đối lập hoàn toàn với ông là Tư tế Gonius - người đứng gần nhất với thần điện, luôn xuất hiện đúng lúc, luôn nói đúng điều cần nói. Không ai nghi ngờ ông.",
        background: "",
        character: "assets/characters/tuthe.jpg"
    },
    {
        speaker: "",
        text: "Cho đến đêm thứ mười lăm kể từ khi đoàn thương nhân đặt chân đến Ai Cập. Một nữ hầu trong cung điện biến mất. Không tiếng động. Không dấu vết. Không một lời kêu cứu. Ban đầu, sự việc được xem như một trường hợp cá biệt... Nhưng rồi người thứ hai biến mất. Người thứ ba. Người thứ tư. Tất cả đều là nữ. Tất cả đều trẻ. Tất cả biến mất trong đêm.",
        background: "",
        character: ""
    },
    {
        speaker: "",
        text: "Salynya là người đầu tiên không chấp nhận sự im lặng đó. Nàng bắt đầu thu thập danh sách, tự mình đối chiếu thời gian, địa điểm, thói quen sinh hoạt... Càng đi sâu, nàng càng nhận ra một điểm bất thường rõ rệt: tất cả nạn nhân đều là nữ và đều nằm trong một khoảng tuổi gần như giống nhau. Không phải sự ngẫu nhiên. Mà là một dạng lựa chọn có quy tắc.",
        background: "",
        character: "assets/characters/salynya.jpg"
    },
    {
        speaker: "Salynya",
        text: "“Có thứ gì đó đang chọn họ.”",
        background: "",
        character: "assets/characters/salynya.jpg"
    },
    {
        speaker: "",
        text: "Learian nhìn những bản ghi chép trải trước mặt, ánh mắt chậm lại một nhịp. Hắn không nói ngay. Nhưng trong hắn, một cảm giác cũ kỹ hơn bắt đầu xuất hiện, giống như khi một ký ức bị chạm vào đúng điểm đã từng bị phong ấn.",
        background: "",
        character: "assets/characters/learian.jpg"
    },
    {
        speaker: "",
        text: "But trước khi cuộc điều tra có thể tiến xa hơn, một biến cố khác xảy ra mạnh hơn, trực diện hơn: Rượu của Pharaoh bị đầu độc! Sự việc chỉ bị ngăn lại trong khoảnh khắc cuối cùng khi Salynya nhận ra sự thay đổi rất nhỏ trong phản xạ ánh sáng trên chiếc ly bạc. Ngay lập tức, toàn bộ khu vực bị phong tỏa.",
        background: "",
        character: ""
    },
    {
        speaker: "",
        text: "Tể tướng Kadius trực tiếp chỉ huy toàn bộ quá trình điều tra. Nhưng càng điều tra, kết quả càng trở nên trống rỗng. Không tìm thấy chất độc rõ ràng. Không xác định được cách thức. Người phụ trách ly rượu cũng biến mất ngay trong đêm đó. Không có hung thủ. Chỉ có một khoảng trống được tạo ra có chủ ý.",
        background: "",
        character: ""
    },
    {
        speaker: "",
        text: "Đêm hôm ấy, Learian đứng cùng Salynya trên ban công cao nhất của hoàng cung. Thành phố phía dưới trải dài trong ánh đèn vàng mờ, nhịp sống vẫn tiếp tục nhưng mang một cảm giác nặng nề khó gọi tên. Xa hơn, hồ Selena nằm yên trong bóng tối, phản chiếu ánh trăng như một tấm gương không bao giờ gợn.",
        background: "",
        character: ""
    },
    {
        speaker: "Salynya",
        text: "“Ngài nghĩ đây là ai?”",
        background: "",
        character: "assets/characters/salynya.jpg"
    },
    {
        speaker: "Learian",
        text: "“Ta không biết. Nhưng đây không phải thứ chỉ có một người làm.”",
        background: "",
        character: "assets/characters/learian.jpg"
    },
    {
        speaker: "Salynya",
        text: "“Nếu có ai đó đang làm tổn thương vương quốc này… Ta sẽ tìm ra.”",
        background: "",
        character: "assets/characters/salynya.jpg"
    },
    {
        speaker: "",
        text: "Ở phía xa đại điện, dưới ánh đuốc vàng, Tư tế Gonius đứng lặng nhìn thành phố. Khuôn mặt ông bình thản như mọi ngày, ánh mắt phản chiếu ánh sáng như thể đang nhìn thấy một trật tự sâu hơn toàn bộ những gì đang diễn ra. Và ở nơi sâu nhất dưới hồ Selena, một thứ gì đó khẽ phản ứng lại ánh trăng...",
        background: "",
        character: "assets/characters/tute.jpg"
    },
    
    // Đánh dấu đây là kết thúc Chương 2 để kích hoạt Mini-game
    {
        triggerDuanBoss: true 
    }
// ================= CHƯƠNG 3 =================
    {
        speaker: "",
        text: "CHƯƠNG 3: LỜI THÌ THẦM BÊN HỒ SELENA\n\nSau vụ đầu độc bất thành nhằm vào Pharaoh, bầu không khí trong hoàng cung không còn giữ được vẻ yên ổn như trước. Mọi thứ vẫn vận hành theo đúng quỹ đạo của nó... Nhưng phía sau lớp vỏ bình thường ấy, một cảm giác bất an không tên đã bắt đầu len lỏi, như một vết nứt rất nhỏ trong nền đá cổ, chưa vỡ ra nhưng đã đủ để khiến người ta không thể làm ngơ. Những vụ mất tích vẫn chưa dừng lại. Người đầu tiên biến mất là một tỳ nữ trong cung. Người thứ hai là một cô gái làm việc tại khu chợ phía Nam. Người thứ ba là một nữ tu tập sự trong đền thờ. Không ai tìm được tung tích của họ. Không nhân chứng, không thi thể, không dấu vết.",
        background: "assets/background/hoangcung.jpg",
        character: ""
    },
    {
        speaker: "",
        text: "Càng nhiều người biến mất, cảm giác bất an càng lan rộng trong hoàng cung. Nó ăn mòn từng lớp niềm tin một cách chậm rãi... Salynya là người đầu tiên không chấp nhận sự im lặng đó. Nàng bắt đầu tự mình thu thập toàn bộ danh sách những người mất tích. Nàng đích thân gặp gỡ gia đình các nạn nhân, lắng nghe những câu chuyện lặp lại trong đau đớn và hoang mang. Không có điểm chung rõ ràng nào ngoài việc tất cả đều là nữ và đều trong độ tuổi tương đối gần nhau.",
        background: "",
        character: "assets/characters/salynya.jpg"
    },
    {
        speaker: "Salynya",
        text: "“Không phải ngẫu nhiên.”",
        background: "",
        character: "assets/characters/salynya.jpg"
    },
    {
        speaker: "",
        text: "Learian đứng bên cạnh, ánh mắt dừng lại trên những trang giấy ghi chép. Hắn không ngắt lời. Có những điều không cần nói ra vẫn có thể cảm nhận được. Đây không phải một chuỗi sự kiện rời rạc. Đây là một cấu trúc. Một sự lựa chọn có chủ đích đang vận hành trong bóng tối mà họ chưa nhìn thấy hình dạng thật sự.",
        background: "",
        character: "assets/characters/learian.jpg"
    },
    {
        speaker: "",
        text: "Nhưng khi cuộc điều tra còn chưa kịp đi xa hơn, một biến cố khác đã xảy ra: Rượu của Pharaoh bị đầu độc! Khoảnh khắc đó chỉ bị ngăn lại trong gang tấc khi Salynya phát hiện sự thay đổi rất nhỏ trong phản xạ ánh sáng trên chiếc ly bạc. Ngay lập tức, toàn bộ khu vực bị phong tỏa. Tể tướng Kadius trực tiếp đứng ra chỉ huy toàn bộ quá trình điều tra.\n\nThế nhưng càng điều tra, sự thật càng trở nên trống rỗng. Người phụ trách ly rượu, một nữ hầu trong cung, cũng biến mất ngay trong đêm đó. Mọi thứ bị cắt đứt một cách sạch sẽ. Không có hung thủ. Không có động cơ. Chỉ có sự biến mất của bằng chứng.",
        background: "",
        character: ""
    },
    {
        speaker: "",
        text: "Đêm hôm ấy, Learian đứng cùng Salynya trên ban công cao nhất của hoàng cung. Thành phố phía dưới vẫn sáng đèn, nhưng tất cả đều mang một cảm giác xa xăm. Xa hơn nữa, hồ Selena nằm im lặng giữa sa mạc, phản chiếu ánh trăng như một tấm gương cổ xưa không bao giờ gợn sóng.",
        background: "",
        character: ""
    },
    {
        speaker: "Salynya",
        text: "“Ngài nghĩ ai là người đứng sau chuyện này?”",
        background: "",
        character: "assets/characters/salynya.jpg"
    },
    {
        speaker: "",
        text: "Learian không trả lời ngay. Hắn nhìn về phía thành phố rất lâu. Có một cảm giác kỳ lạ đang dần hình thành trong hắn, một cảm giác quen thuộc rất mơ hồ, như thể hắn đã từng chứng kiến một dạng trật tự tương tự ở nơi nào đó, vào một thời điểm không thuộc về hiện tại.",
        background: "",
        character: "assets/characters/learian.jpg"
    },
    {
        speaker: "Learian",
        text: "“Ta không biết. Nhưng chắc chắn không chỉ có một người.”",
        background: "",
        character: "assets/characters/learian.jpg"
    },
    {
        speaker: "Salynya",
        text: "“Nếu có ai đó đang làm hại vương quốc này… Ta sẽ tìm ra hắn.”",
        background: "",
        character: "assets/characters/salynya.jpg"
    },
    {
        speaker: "",
        text: "Ở phía xa, trong hành lang đá dẫn ra khu vườn hoàng cung, một bóng người đứng lặng dưới ánh đuốc. Gonius không nói gì, khuôn mặt ông bình thản, gần như không có cảm xúc, nhưng ánh mắt lại mang một chiều sâu khó hiểu... Ông không nhìn thế giới như một nơi hỗn loạn, mà như một tiến trình đang đi đúng hướng của nó, dù cái giá phải trả là gì đi nữa.",
        background: "",
        character: "assets/characters/tute.jpg"
    },
    {
        speaker: "",
        text: "Những ngày tiếp theo, số người mất tích không những không giảm mà còn tăng lên. Tin đồn về hồ Selena bắt đầu lan rộng trong dân chúng: Người ta nói rằng dưới hồ có một nữ thần mặt trăng đang ngủ yên, những thiếu nữ biến mất là vì được nữ thần chọn lựa. Ai đến gần mặt hồ trong đêm trăng tròn sẽ nghe thấy tiếng thì thầm gọi tên mình.",
        background: "",
        character: ""
    },
    {
        speaker: "",
        text: "Một đêm, Salynya và Learian cải trang rời khỏi hoàng cung, đến hồ Selena. Dưới ánh trăng, mặt hồ hiện ra như một tấm gương khổng lồ trải giữa sa mạc, tĩnh lặng đến mức phi lý. Rất nhiều thiếu nữ đang đứng quanh hồ. Có người thả hoa xuống nước, có người nhắm mắt cầu nguyện, viết điều ước lên dải lụa trắng rồi thả theo gió. Không gian tràn ngập một thứ niềm tin mỏng manh nhưng mạnh mẽ.",
        background: "assets/background/hoselena.jpg", // Cảnh nền hồ Selena nếu có
        character: ""
    },
    {
        speaker: "Learian",
        text: "“Mọi người thật sự tin điều này sao?”",
        background: "",
        character: "assets/characters/learian.jpg"
    },
    {
        speaker: "Salynya",
        text: "“Có lẽ. Hoặc họ chỉ muốn tin.”",
        background: "",
        character: "assets/characters/salynya.jpg"
    },
    {
        speaker: "",
        text: "Ngay lúc ấy, một cơn gió lạnh bất ngờ thổi qua mặt hồ. Mặt nước khẽ rung động. Trong khoảnh khắc rất ngắn, Learian cảm nhận được một thứ gì đó từ sâu dưới đáy hồ. Không phải âm thanh, mà là một loại tồn tại mơ hồ, như một nhịp đập không thuộc về thế giới này. Nó xuất hiện rồi biến mất ngay lập tức.",
        background: "",
        character: "assets/characters/learian.jpg"
    },
    {
        speaker: "Salynya",
        text: "“Ngươi sao vậy?”",
        background: "",
        character: "assets/characters/salynya.jpg"
    },
    {
        speaker: "Learian",
        text: "“Không có gì.”",
        background: "",
        character: "assets/characters/learian.jpg"
    },
    {
        speaker: "",
        text: "Những ngày sau đó, các vụ mất tích tiếp tục xảy ra với tốc độ ngày càng nhanh. Giữa lúc ấy, Japhah xuất hiện trong nhóm điều tra. Ông là quản gia hoàng cung, người phụ trách phần lớn công việc nội vụ. Trong mắt người khác, Japhah là người điềm tĩnh, cẩn trọng, luôn hoàn thành công việc một cách chính xác. Không ai xem ông là bất thường, nhưng Learian thì có. Vì ánh mắt của ông đôi khi dừng lại trên một người quá lâu: Katisah. Một lần. Rồi hai lần. Rồi nhiều lần hơn.",
        background: "assets/background/hoangcung.jpg",
        character: ""
    },
    {
        speaker: "",
        text: "Mọi thứ tiếp tục cho đến một đêm cuối tháng. Tiếng báo động vang lên trong hoàng cung: “Phát hiện thi thể!”.\n\nKhi đoàn người đến hiện trường, thi thể đầu tiên là Japhah, nằm dưới chân một vách đá gần hồ Selena. Không có dấu hiệu giao tranh. Nhưng chỉ một lát sau, một thi thể thứ hai được phát hiện cách đó không xa: Katisah. Bà nằm đó, đôi mắt mở to như thể đã nhìn thấy điều gì đó vượt ngoài khả năng hiểu của con người trước khi chết. Hai cái chết trong cùng một đêm, hai con người không có mối liên hệ rõ ràng nhưng lại xuất hiện cùng một điểm kết thúc.",
        background: "assets/background/hoselena.jpg",
        character: ""
    },
    {
        speaker: "",
        text: "Trong lúc hỗn loạn, Salynya phát hiện một vật nhỏ nằm dưới lớp cát gần thi thể. Một sợi dây chuyền bạc có mặt hình mặt trăng khuyết. Không có dấu hiệu nhận diện, chỉ có sự tồn tại của nó ở nơi không nên tồn tại. Salynya siết nhẹ sợi dây trong tay. Phía xa, hồ Selena vẫn tĩnh lặng như mọi khi. Nhưng lần này, sự tĩnh lặng ấy giống như một sự chờ đợi...",
        background: "",
        character: "assets/characters/salynya.jpg"
    },
    
    // Đánh dấu kích hoạt lượt suy luận đoán Boss phụ Chương 3
    {
        triggerDuanBoss3: true
    }
// ================= CHƯƠNG 4 =================
    {
        speaker: "",
        text: "CHƯƠNG 4: NHỮNG ĐÓA HOA DƯỚI ÁNH TRĂNG\n\nSau cái chết của Katisah và Japhah, cuộc điều tra rơi vào một khoảng lặng kỳ lạ. Không phải sự kết thúc, mà là một dạng ngưng trệ như thể mọi sợi dây vừa bị kéo căng đến cực hạn rồi đột ngột bị thả lỏng... Duy chỉ còn lại sợi dây chuyền mặt trăng nằm trong tay Salynya, lạnh và im lặng, như một dấu vết bị bỏ quên giữa dòng sự kiện đang dần trở nên rối loạn. Không ai xác nhận được nó thuộc về ai. Nhưng điều khiến Salynya không thể buông bỏ không phải là cái chết đã xảy ra, mà là những vụ mất tích vẫn tiếp tục. Không có dấu hiệu dừng lại.",
        background: "assets/background/hoangcung.jpg",
        character: ""
    },
    {
        speaker: "",
        text: "Những ngày sau đó, Salynya gần như không còn thời gian để nghỉ ngơi. Nàng liên tục có mặt tại thư viện hoàng gia, lật lại từng bản ghi chép. Learian vẫn đi cùng nàng như một thói quen không ai nhắc đến. Sự hiện diện của hắn chỉ đơn giản là một dạng cân bằng, giúp nàng không bị cuốn quá sâu vào những vòng xoáy thông tin đang ngày càng rối rắm. Dần dần, hình ảnh vị thương nhân ngoại quốc đi bên cạnh công chúa trở thành một phần quen thuộc trong cung điện.",
        background: "",
        character: "assets/characters/salynya.jpg"
    },
    {
        speaker: "",
        text: "Tại đền thờ, Lussyh vẫn giữ vai trò nữ tu trưởng với sự chuẩn mực tuyệt đối. Bà xuất hiện đúng lúc, hành lễ đúng quy tắc, và không để lại bất kỳ sơ hở nào. Sự nghiêm túc và tận tụy của bà khiến nhiều người xem bà như một điểm tựa tinh thần trong giai đoạn bất ổn. Ngay cả Salynya cũng dành cho bà sự tôn trọng nhất định. Thế nhưng, có những thứ tồn tại ở những khoảng lặng rất nhỏ, nơi không ai chú ý. Ở nơi đó, ánh nhìn của Lussyh đôi khi dừng lại lâu hơn bình thường mỗi khi nhắc đến những vụ mất tích.",
        background: "assets/background/dentho.jpg", // Cảnh nền đền thờ nếu có
        character: "assets/characters/lussyh.jpg" // Ảnh nữ tu trưởng nếu có
    },
    {
        speaker: "",
        text: "Trong khi đó, Learian bắt đầu nhận ra một điều khác: Tin đồn về hồ Selena đang thay đổi. Người ta bắt đầu nói về hồ Selena như một vùng đất linh thiêng. Họ nói rằng dưới mặt hồ có nữ thần mặt trăng đang ngủ yên, những thiếu nữ biến mất là vì được chọn lựa. Họ nói rằng ai mang hoa sen trắng đến hồ và cầu nguyện sẽ nhận được điều mình mong muốn. Không ai biết những lời đồn ấy bắt đầu từ đâu, và điều đáng sợ nhất là: không ai cố gắng phản bác chúng đủ mạnh để dập tắt.",
        background: "assets/background/hoselena.jpg",
        character: ""
    },
    {
        speaker: "",
        text: "Một buổi chiều, trong lúc đang đi qua khu chợ phía Đông, Salynya gặp Lussahna. Nàng xuất hiện giữa ánh nắng vàng rơi xuống những gian hàng đá, ôm trong tay một giỏ hoa sen trắng. Nụ cười của nàng vẫn giống như lần đầu tiên gặp gỡ, trong trẻo và không mang theo bất kỳ lớp phòng vệ nào.",
        background: "assets/background/khucho.jpg", // Cảnh nền khu chợ nếu có
        character: "assets/characters/lussahna.jpg" // Ảnh nữ tu trẻ nếu có
    },
    {
        speaker: "Lussahna",
        text: "“Điện hạ.”",
        background: "",
        character: "assets/characters/lussahna.jpg"
    },
    {
        speaker: "Salynya",
        text: "“Lussahna.”",
        background: "",
        character: "assets/characters/salynya.jpg"
    },
    {
        speaker: "",
        text: "Learian đứng phía sau, ánh mắt dừng lại trên cô gái trẻ một nhịp rất ngắn. Có một cảm giác rất khó gọi tên. Không phải nghi ngờ, chỉ là một sự đối lập quá rõ ràng giữa ánh sáng và những gì đang dần diễn ra trong bóng tối.",
        background: "",
        character: "assets/characters/learian.jpg"
    },
    {
        speaker: "Lussahna",
        text: "“Thần sẽ cầu nguyện cho điện hạ mỗi ngày. Hy vọng nữ thần mặt trăng sẽ bảo hộ người.”",
        background: "",
        character: "assets/characters/lussahna.jpg"
    },
    {
        speaker: "",
        text: "Từ hôm đó, Lussahna bắt đầu xuất hiện nhiều hơn bên cạnh Salynya. Khi thì mang sách đến thư viện, khi thì hỗ trợ ghi chép trong các buổi điều tra. Sự hiện diện của nàng giống như một điểm sáng nhỏ trong bầu không khí nặng nề. Trong một buổi chiều, khi Salynya và Learian đang trao đổi dữ liệu, Lussahna đứng từ xa quan sát một lúc rất lâu, rồi khẽ mỉm cười và quay đi. Ánh chiều rơi xuống bóng lưng ấy kéo dài hơn bình thường một chút.",
        background: "assets/background/hoangcung.jpg",
        character: ""
    },
    {
        speaker: "",
        text: "Tại đền thờ, ánh mắt của Nữ tu trưởng Lussyh đôi khi vẫn dừng lại rất lâu về phía hồ Selena. Những ngày tiếp theo, số người mất tích tiếp tục tăng lên. Tin đồn không còn là lời thì thầm nữa, mà đã trở thành một phần trong đời sống tinh thần của dân chúng. Ranh giới giữa niềm tin và sự thật càng trở nên mờ đi.",
        background: "assets/background/dentho.jpg",
        character: "assets/characters/lussyh.jpg"
    },
    {
        speaker: "",
        text: "Một buổi tối, Salynya đứng một mình bên hồ nước trong hoa viên hoàng cung. Learian đến sau đó không lâu.",
        background: "assets/background/hoavien.jpg",
        character: ""
    },
    {
        speaker: "Salynya",
        text: "“Ta đang nghĩ… nếu tất cả những gì người dân tin là sai… Thì ta nên làm gì để kéo họ trở lại?”",
        background: "",
        character: "assets/characters/salynya.jpg"
    },
    {
        speaker: "Learian",
        text: "“Có những thứ không thể kéo lại bằng lý trí. Chỉ có thể chờ nó tự vỡ ra.”",
        background: "",
        character: "assets/characters/learian.jpg"
    },
    {
        speaker: "",
        text: "Salynya không trả lời, chỉ nhìn mặt nước rất lâu. Xa xa, ánh trăng rơi xuống hồ Selena. Và trong khoảnh khắc đó, mặt hồ dường như phản chiếu thứ gì đó không thuộc về thế giới hiện tại. Một nhịp rất nhỏ. Rất sâu. Nhưng đủ để khiến mọi thứ bắt đầu lệch khỏi quỹ đạo ban đầu...",
        background: "assets/background/hoselena.jpg",
        character: ""
    },
    
    // Đánh dấu kích hoạt lượt suy luận đoán Boss phụ Chương 4
    {
        triggerDuanBoss4: true
    }
// ================= CHƯƠNG 5 =================
    {
        speaker: "",
        text: "CHƯƠNG 5: LỜI CHÚC PHÚC CUỐI CÙNG\n\nNhững ngày đầu mùa hạ tràn qua Ai Cập bằng thứ hơi nóng khô rát của sa mạc... Vương quốc lại đang bước vào một trạng thái bất ổn không ai gọi tên được, khi số người mất tích tăng lên theo cách không còn giống một chuỗi sự kiện rời rạc mà giống như từng mắt xích của một cơ chế đang dần khép lại. Hồ Selena vẫn lặng, nhưng chính sự bình lặng đó lại khiến nó trở nên đáng ngờ hơn, như thể mọi thứ bên dưới đang chờ một thời điểm thích hợp để trồi lên cùng lúc.",
        background: "assets/background/toanvuongquoc.jpg",
        character: ""
    },
    {
        speaker: "",
        text: "Đúng lúc ấy, đoàn thương nhân từ phương Tây cập bến. Cánh cổng thành mở ra trong tiếng kim loại và bụi đá... Công thức Rohan bước đi với dáng vẻ của một người đã quen đứng giữa quyền lực, phu nhân Lianetta đi bên cạnh ông như một điểm cân bằng mềm mại, còn Learian theo sau, ánh mắt bình thản nhưng không thuộc về nhịp sống nơi đây.",
        background: "assets/background/haicang.jpg",
        character: ""
    },
    {
        speaker: "",
        text: "Giữa những ánh nhìn ấy, Lussahna xuất hiện. Nàng bước ra từ đền thờ với sách trong tay. Cuộc gặp gỡ giữa nàng và Learian xảy ra ở khu chợ phía Nam, khi nàng vô tình bị cuốn vào một tình huống hỗn loạn với vài kẻ buôn người, và Learian xuất hiện đúng lúc, như một sự lệch nhịp nhỏ của số phận.",
        background: "assets/background/khucho.jpg",
        character: "assets/characters/lussahna.jpg"
    },
    {
        speaker: "Learian",
        text: "“Không sao chứ?”",
        background: "",
        character: "assets/characters/learian.jpg"
    },
    {
        speaker: "Lussahna",
        text: "“Ta… không sao.”",
        background: "",
        character: "assets/characters/lussahna.jpg"
    },
    {
        speaker: "",
        text: "Những ngày sau, Lussahna bắt đầu tìm đến Learian nhiều hơn để hỏi về biển, về những vùng đất không có trong kinh văn... Càng nghe, nàng càng nhận ra thế giới rộng lớn và khác biệt hoàn toàn với cấu trúc niềm tin nàng từng sống. Ranh giới mới được tạo ra, một cảm xúc chưa từng được gọi tên xuất hiện. Dưới bóng cây cọ bên hồ trong cung điện, Lussahna đứng lâu hơn thường lệ.",
        background: "assets/background/hoavien.jpg",
        character: ""
    },
    {
        speaker: "Lussahna",
        text: "“Ta nghĩ… ta thích ngài.”",
        background: "",
        character: "assets/characters/lussahna.jpg"
    },
    {
        speaker: "",
        text: "Learian im lặng. Không phải vì bất ngờ, mà vì hắn hiểu rõ ý nghĩa của khoảnh khắc này hơn bất kỳ ai. Sau cùng, hắn chỉ nói một câu rất ngắn.",
        background: "",
        character: "assets/characters/learian.jpg"
    },
    {
        speaker: "Learian",
        text: "“Xin lỗi. Trong lòng ta đã có người rồi.”",
        background: "",
        character: "assets/characters/learian.jpg"
    },
    {
        speaker: "",
        text: "Không gian không vỡ ra, nhưng có thứ gì đó trong Lussahna dừng lại. Nàng không sụp đổ, chỉ đứng yên rất lâu rồi mỉm cười tổn thương.",
        background: "",
        character: "assets/characters/lussahna.jpg"
    },
    {
        speaker: "Lussahna",
        text: "“Người đó… thật may mắn.”",
        background: "",
        character: "assets/characters/lussahna.jpg"
    },
    {
        speaker: "",
        text: "Ở một nơi khác trong thành phố, Nữ tu trưởng Lussyh nghe được tất cả bằng một thứ cảm giác sâu thẳm, như thể có một sợi dây vô hình kéo ký ức cũ trỗi dậy. Bà ngồi trước tượng nữ thần, gương mặt dao động dưới ánh nến: một người đã từng yêu, và một người đã từng mất. Sự thật đau đớn lặp lại, và lần này, nó mang gương mặt con gái bà.",
        background: "assets/background/dentho.jpg",
        character: "assets/characters/lussyh.jpg"
    },
    {
        speaker: "",
        text: "Trong bóng tối sâu nhất của đền thờ, Lussyh bước xuống một căn phòng bị phong kín. Tư tế Gonius đã ở đó từ trước, như thể đã biết bà sẽ đến.",
        background: "assets/background/matthat.jpg",
        character: "assets/characters/tute.jpg" // Sửa chuẩn tute theo đúng file của hai
    },
    {
        speaker: "Gonius",
        text: "“Ngươi đã suy nghĩ kỹ chưa?”",
        background: "",
        character: "assets/characters/tute.jpg"
    },
    {
        speaker: "",
        text: "Bàn tay Lussyh siết chặt đến trắng bệch.",
        background: "",
        character: "assets/characters/lussyh.jpg"
    },
    {
        speaker: "Lussyh",
        text: "“Ta muốn công chúa biến mất.”",
        background: "",
        character: "assets/characters/lussyh.jpg"
    },
    {
        speaker: "Gonius",
        text: "“Ta hiểu rồi.”",
        background: "",
        character: "assets/characters/tute.jpg"
    },
    {
        speaker: "",
        text: "Vài ngày sau, Salynya biến mất không dấu vết. Hoàng cung rơi vào hỗn loạn tột độ. Trong khi mọi người tìm kiếm vô vọng, Lussahna phát hiện ra toàn bộ cấu trúc sự thật phía sau: Người đứng sau không phải kẻ ngoại lai, mà là mẹ nàng. Không có tiếng vỡ, chỉ có sự đổ sụp hoàn toàn bên trong. Lussahna chạy trong màn đêm, lao vào khu hầm bí mật dưới đền thờ và đối diện Lussyh.",
        background: "assets/background/matthat.jpg",
        character: ""
    },
    {
        speaker: "Lussahna",
        text: "“Mẹ… Tại sao?”",
        background: "",
        character: "assets/characters/lussahna.jpg"
    },
    
    // Kích hoạt lượt suy luận đoán Boss phụ Chương 5
    {
        triggerDuanBoss5: true
    }
// ================= CHƯƠNG 6 =================
    {
        speaker: "",
        text: "CHƯƠNG 6: LỜI NGUYỀN CỦA NHỮNG KẺ NGOẠI LAI\n\nCái chết của Lussahna không khép lại bi kịch, nó chỉ khiến bi kịch chuyển sang một dạng tồn tại khác, lặng hơn, dai hơn. Trong hoàng cung, Salynya không còn xuất hiện với dáng vẻ điềm tĩnh quen thuộc, nàng tự nhốt mình trong thư phòng giữa những bản điều tra chồng chất như một mê cung không lối thoát. Learian ở bên nàng như một điểm tựa im lặng, cùng nàng ghép lại những mảnh vỡ của một sự thật đang dần trở nên quá lớn.",
        background: "assets/background/hoangcung.jpg",
        character: ""
    },
    {
        speaker: "",
        text: "Rồi tin đồn xuất hiện, ban đầu là lời thì thầm ở chợ, sau đó thành niềm tin: rằng tất cả những vụ mất tích bắt đầu từ khi những kẻ ngoại lai đặt chân đến Ai Cập, và rằng chỉ có trục xuất hoặc hiến tế mới có thể khôi phục lại trật tự. Gia đình công tước Rohan lập tức bị đẩy vào tâm điểm của cơn bão đó. Learian lần đầu tiên cảm nhận rõ ràng ánh mắt từng thân thiện bắt đầu biến thành nghi ngờ, dè chừng, và cuối cùng là phán xét.",
        background: "assets/background/khucho.jpg",
        character: "assets/characters/learian.jpg"
    },
    {
        speaker: "",
        text: "Salynya không chấp nhận sự hình thành của một “sự thật tiện lợi” như vậy. Ngay trong thiết triều, nàng đứng lên từ chối để công lý bị bóp méo bởi đám đông. Nàng nói không thể lấy nỗi sợ làm nền tảng cho quyết định của vương quốc, nhưng lời nàng không đủ để dập tắt cơn sóng dữ. Trước áp lực từ các đại thần, Pharaoh chọn cách cho một tháng điều tra để trì hoãn sự sụp đổ của niềm tin.",
        background: "assets/background/daidien.jpg", // Cảnh đại điện thiết triều
        character: "assets/characters/salynya.jpg"
    },
    {
        speaker: "",
        text: "Đêm đó, Learian đứng một mình trên ban công nơi đoàn thương nhân nghỉ chân. Hắn hiểu Salynya quá kiên định, quá tin vào việc có thể giữ mọi thứ nguyên vẹn, đến mức điều đó trở thành điểm yếu lớn nhất của nàng. Nam tước Dos xuất hiện trong im lặng từ phía sau, khẽ hỏi Learian đang nghĩ gì, nhưng đáp lại chỉ là sự thừa nhận lạnh lẽo về một tương lai bất định.",
        background: "assets/background/haicang.jpg",
        character: "assets/characters/learian.jpg"
    },
    {
        speaker: "",
        text: "Những ngày sau đó, cuộc điều tra đi sâu hơn vào tầng tối của sự thật. Mọi dấu vết tin đồn đều dẫn về cùng một nguồn: một người đàn ông bí ẩn liên tục gieo rắc câu chuyện về lời nguyền ngoại lai rồi biến mất. Khi họ tìm được hắn trong một khu nhà bỏ hoang gần bến cảng, hắn đã chết một cách lặng lẽ đến phi lý.",
        background: "assets/background/nhahoang.jpg", // Cảnh nhà hoang nếu có
        character: ""
    },
    {
        speaker: "",
        text: "Dưới tấm phản gỗ tại hiện trường, Salynya tìm thấy một lá thư cũ không người gửi, không người nhận. Những dòng chữ rời rạc bên trong nhắc đến một cái tên bí ẩn: Rojefh, và một kế hoạch trả thù đã kéo dài nhiều năm trong bóng tối của vương quốc. Cùng lúc đó, ở nơi rất xa bên dưới lòng hồ Selena, mặt nước vốn tĩnh lặng bỗng rung lên những gợn sóng cực nhỏ, báo hiệu thời điểm của nó đang đến gần...",
        background: "assets/background/hoselena.jpg",
        character: "assets/characters/salynya.jpg"
    },
    
    // Kích hoạt lượt suy luận đoán Boss phụ Chương 6
    {
        triggerDuanBoss6: true
    }
