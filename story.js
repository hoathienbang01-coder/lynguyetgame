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
        character: "assets/characters/tuthe.jpg"
    },
    
    // Đánh dấu đây là kết thúc Chương 2 để kích hoạt Mini-game
    {
        triggerDuanBoss: true 
    }
