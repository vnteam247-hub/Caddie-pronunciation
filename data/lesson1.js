// Đảm bảo mảng masterQuizData luôn được khởi tạo an toàn
if (typeof window.masterQuizData === 'undefined') {
    window.masterQuizData = [];
}

// NẠP TÀI NGUYÊN TỔNG HỢP MỞ RỘNG LESSON 1 (160 CÂU HỎI ĐỘC BẢN)
window.masterQuizData.push(
    // =========================================================================
    // SECTION 1.1: BẢNG CHỮ CÁI TIẾNG ANH & ĐÁNH VẦN (ALPHABET & SPELLING) - 40 CÂU
    // =========================================================================
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Bảng chữ cái] Khi Golfer đánh vần 'T-I-T-L-E-I-S-T', chữ cái 'I' phát âm IPA chuẩn là gì?",
        audioText: "Titleist", phonetic: "/ˈtaɪ.təl.ɪst/", translation: "Thương hiệu bóng Titleist",
        options: [{ en: "A. /aɪ/", vi: "/aɪ/" }, { en: "B. /iː/", vi: "/iː/" }, { en: "C. /eɪ/", vi: "/eɪ/" }, { en: "D. /ɛ/", vi: "/ɛ/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Bảng chữ cái] Để không nhầm chữ 'P' với 'B' khi đàm thoại bộ đàm, Caddie dùng chuẩn NATO nào?",
        audioText: "P as in Papa, B as in Bravo.", phonetic: "/piː æz ɪn ˈpɑː.pə, biː æz ɪn ˈbrɑː.voʊ/", translation: "P trong từ Papa, B trong từ Bravo.",
        options: [{ en: "A. Papa", vi: "Papa" }, { en: "B. Peter", vi: "Peter" }, { en: "C. Paul", vi: "Paul" }, { en: "D. Pink", vi: "Pink" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Bảng chữ cái] Chữ cái 'H' (chữ đầu của gậy Hybrid) phát âm IPA chuẩn là gì?",
        audioText: "Hybrid starts with letter H.", phonetic: "/ˈhaɪ.brɪd stɑːrts wɪð ˈlet.ər eɪtʃ/", translation: "Từ Hybrid bắt đầu bằng chữ cái H.",
        options: [{ en: "A. /eɪtʃ/", vi: "/eɪtʃ/" }, { en: "B. /heɪtʃ/", vi: "/heɪtʃ/" }, { en: "C. /eɪdʒ/", vi: "/eɪdʒ/" }, { en: "D. /ætʃ/", vi: "/ætʃ/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Bảng chữ cái] Cặp chữ cái nào dễ gây nhầm lẫn nhất khi đàm thoại qua bộ đàm?",
        audioText: "B as in Bravo, P as in Papa.", phonetic: "/biː æz ɪn ˈbrɑː.voʊ, piː æz ɪn ˈpɑː.pə/", translation: "B trong Bravo, P trong Papa.",
        options: [{ en: "A. B và P", vi: "B và P" }, { en: "B. A và Z", vi: "A và Z" }, { en: "C. K và L", vi: "K và L" }, { en: "D. H và O", vi: "H và O" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Bảng chữ cái] Nghe Golfer đánh vần tên riêng và chọn TÊN ĐÚNG NHẤT:",
        audioText: "Good morning! My name is Arthur.", phonetic: "/ɡʊd ˈmɔːr.nɪŋ! maɪ neɪm ɪz ˈɑːr.θər/", translation: "Chào buổi sáng! Tên tôi là Arthur.",
        options: [{ en: "A. ARTHUR", vi: "Arthur" }, { en: "B. AUTHOR", vi: "Author" }, { en: "C. ARCHER", vi: "Archer" }, { en: "D. MARK", vi: "Mark" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Bảng chữ cái] Nghe Golfer đánh vần tên riêng và chọn TÊN CHÍNH XÁC:",
        audioText: "My name is Harrison.", phonetic: "/maɪ neɪm ɪz ˈhær.ə.sən/", translation: "Tên tôi là Harrison.",
        options: [{ en: "A. HARRISON", vi: "Harrison" }, { en: "B. HARRIS", vi: "Harris" }, { en: "C. HARISON", vi: "Harison" }, { en: "D. HARRYS", vi: "Harrys" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "fill",
        title: "[1.1 Bảng chữ cái] Nghe Caddie tự giới thiệu tên và ĐIỀN TÊN CƠ BẢN:",
        audioText: "Hello Sir, my name is Rose.", displaySentence: "Caddie's name is _______.", translation: "Tên của Caddie là _______.",
        targetWord: "rose", phonetic: "/roʊz/", hint: "💡 Gợi ý: Tên gồm 4 ký tự."
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Bảng chữ cái] Nghe Golfer báo hãng bóng và chọn ĐÁP ÁN:",
        audioText: "I am playing a Callaway ball.", phonetic: "/aɪ æm ˈpleɪ.ɪŋ ə ˈkæl.ə.weɪ bɔːl/", translation: "Tôi đang chơi bóng Callaway.",
        options: [{ en: "A. Callaway", vi: "Bóng hãng Callaway" }, { en: "B. Titleist", vi: "Bóng hãng Titleist" }, { en: "C. Srixon", vi: "Bóng hãng Srixon" }, { en: "D. Honma", vi: "Bóng hãng Honma" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Phát âm] Âm /p/ trong từ 'Par' cần phát âm như thế nào để không bị nhầm với 'Bar'?",
        audioText: "You got a Par on this hole, Sir.", phonetic: "/juː ɡɑːt ə pɑːr ɑːn ðɪs hoʊl, sɜːr/", translation: "Anh đạt điểm Par ở hố này ạ.",
        options: [
            { en: "A. Mím môi bật hơi mạnh vô thanh", vi: "Không rung thanh quản" },
            { en: "B. Đọc rung dây thanh quản", vi: "Giống âm /b/" },
            { en: "C. Đọc thành âm /f/", vi: "Kéo dài" },
            { en: "D. Uốn lưỡi chạm vòm miệng", vi: "Chạm vòm miệng trên" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Phát âm] Khi đưa gậy gạt cho khách, Caddie phát âm từ 'Putter' như thế nào?",
        audioText: "Here is your putter, Sir.", phonetic: "/hɪər ɪz jʊər ˈpʌt.ər, sɜːr/", translation: "Đây là gậy gạt của anh ạ.",
        options: [
            { en: "A. Bật hơi mạnh vô thanh ở âm /p/ đầu từ", vi: "Tránh nhầm với Butter" },
            { en: "B. Đọc rung dây thanh quản", vi: "Đọc thành Butter" },
            { en: "C. Đọc thành âm /f/ nhẹ", vi: "Đọc thành Futter" },
            { en: "D. Bỏ qua âm đầu", vi: "Đọc là utter" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Bảng chữ cái] Chữ '0' trong mã số booking thường được người nước ngoài đọc gọn là gì?",
        audioText: "Booking number G 8 0.", phonetic: "/ˈbʊk.ɪŋ ˈnʌm.bər dʒiː eɪt oʊ/", translation: "Mã đặt sân G-8-0.",
        options: [{ en: "A. Oh /oʊ/", vi: "Đọc là Oh" }, { en: "B. Zero", vi: "Zero" }, { en: "C. Null", vi: "Null" }, { en: "D. Nil", vi: "Nil" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Phát âm] Từ 'Course' trong 'golf course' phát âm nguyên âm nào?",
        audioText: "Welcome to our golf course.", phonetic: "/ˈwel.kəm tə aʊər ɡɑːlf kɔːrs/", translation: "Chào mừng tới sân gôn của chúng em.",
        options: [{ en: "A. /ɔːr/ dài", vi: "Nguyên âm /ɔːr/" }, { en: "B. /ɑːr/", vi: "Nguyên âm /ɑːr/" }, { en: "C. /ʊər/", vi: "Nguyên âm /ʊər/" }, { en: "D. /ɒ/ ngắn", vi: "Nguyên âm /ɒ/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Phát âm] Cụm từ 'Tee box' phát âm IPA chuẩn là gì?",
        audioText: "Welcome to Tee box hole 1.", phonetic: "/ˈwel.kəm tə tiː bɑːks hoʊl wʌn/", translation: "Chào mừng tới khu phát bóng hố 1.",
        options: [{ en: "A. /tiː bɑːks/", vi: "/tiː bɑːks/" }, { en: "B. /teɪ bɑːks/", vi: "/teɪ bɑːks/" }, { en: "C. /tɪ bɒks/", vi: "/tɪ bɒks/" }, { en: "D. /tiː bɔːks/", vi: "/tiː bɔːks/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Phát âm] Từ 'Wedge' (gậy kỹ thuật) có âm cuối là phụ âm gì?",
        audioText: "60 degree wedge.", phonetic: "/ˈsɪk.sti dɪˈɡriː wedʒ/", translation: "Gậy kĩ thuật góc 60 độ.",
        options: [{ en: "A. /dʒ/", vi: "Phụ âm /dʒ/" }, { en: "B. /ʒ/", vi: "Phụ âm /ʒ/" }, { en: "C. /tʃ/", vi: "Phụ âm /tʃ/" }, { en: "D. /ɡ/", vi: "Phụ âm /ɡ/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Phát âm] Từ 'Hybrid' (gậy lai) có âm tiết thứ nhất chứa nguyên âm đôi nào?",
        audioText: "Here is your Hybrid club.", phonetic: "/hɪər ɪz jʊər ˈhaɪ.brɪd klʌb/", translation: "Đây là gậy Hybrid của anh.",
        options: [{ en: "A. /aɪ/", vi: "Nguyên âm đôi /aɪ/" }, { en: "B. /eɪ/", vi: "Nguyên âm đôi /eɪ/" }, { en: "C. /oʊ/", vi: "Nguyên âm đôi /oʊ/" }, { en: "D. /aʊ/", vi: "Nguyên âm đôi /aʊ/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Bảng chữ cái] Nghe Golfer đánh vần tên thương hiệu gôn và chọn ĐÁP ÁN:",
        audioText: "My ball brand is Srixon.", phonetic: "/maɪ bɔːl brænd ɪz ˈsrɪk.sən/", translation: "Hãng bóng của tôi là Srixon.",
        options: [{ en: "A. Srixon", vi: "Bóng hãng Srixon" }, { en: "B. Titleist", vi: "Bóng hãng Titleist" }, { en: "C. Callaway", vi: "Bóng hãng Callaway" }, { en: "D. TaylorMade", vi: "Bóng hãng TaylorMade" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "fill",
        title: "[1.1 Đánh vần] Nghe Golfer đánh vần tên riêng và ĐIỀN TÊN VÀO Ô TRỐNG:",
        audioText: "My name is Mike.", displaySentence: "Golfer's name is _______.", translation: "Tên của Golfer là _______.",
        targetWord: "mike", phonetic: "/maɪk/", hint: "💡 Gợi ý: Tên đơn giản gồm 4 ký tự."
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Bảng chữ cái] Khi nghe đánh vần 'M - A - R - K', chữ cái 'A' phát âm IPA là gì?",
        audioText: "Mark is spelled M A R K.", phonetic: "/mɑːrk ɪz speld em eɪ ɑːr keɪ/", translation: "Mark đánh vần là M-A-R-K.",
        options: [{ en: "A. /eɪ/", vi: "Phát âm /eɪ/" }, { en: "B. /ɑːr/", vi: "Phát âm /ɑːr/" }, { en: "C. /æ/", vi: "Phát âm /æ/" }, { en: "D. /e/", vi: "Phát âm /e/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "fill",
        title: "[1.1 Đánh vần] Nghe Golfer đánh vần tên mã gậy gạt và ĐIỀN TỪ CƠ BẢN:",
        audioText: "My putter model is P I N G.", displaySentence: "Putter brand is _______.", translation: "Hãng gậy gạt là _______.",
        targetWord: "ping", phonetic: "/pɪŋ/", hint: "💡 Gợi ý: Tên gồm 4 ký tự."
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Bảng chữ cái] Chữ cái 'Z' theo giọng Anh-Mỹ thường phát âm IPA là gì?",
        audioText: "Letter Z in American English.", phonetic: "/ˈlet.ər ziː ɪn əˈmer.ə.kən ˈɪŋ.ɡlɪʃ/", translation: "Chữ Z trong tiếng Anh - Mỹ.",
        options: [{ en: "A. /ziː/", vi: "Đọc là Zee (/ziː/)" }, { en: "B. /zed/", vi: "Đọc là Zed (/zed/)" }, { en: "C. /zaɪ/", vi: "Đọc là Zai" }, { en: "D. /zoʊ/", vi: "Đọc là Zo" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Bảng chữ cái] Chữ cái 'W' được đọc như thế nào trong bảng chữ cái?",
        audioText: "Wedge starts with Double U.", phonetic: "/wedʒ stɑːrts wɪð ˈdʌb.əl.juː/", translation: "Gậy Wedge bắt đầu bằng chữ Double U.",
        options: [{ en: "A. Double U /ˈdʌb.əl.juː/", vi: "Double U" }, { en: "B. Triple U", vi: "Triple U" }, { en: "C. Way", vi: "Way" }, { en: "D. Ve", vi: "Ve" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Bảng chữ cái] Chữ 'R' trong tiếng Anh-Mỹ (US) có đặc điểm phát âm gì?",
        audioText: "Letter R in English.", phonetic: "/ˈlet.ər ɑːr ɪn ˈɪŋ.ɡlɪʃ/", translation: "Chữ cái R trong tiếng Anh.",
        options: [{ en: "A. Uốn cong đầu lưỡi về phía sau", vi: "Phát âm uốn lưỡi /ɑːr/" }, { en: "B. Rung đầu lưỡi mạnh", vi: "Giống tiếng Việt" }, { en: "C. Bật môi vô thanh", vi: "Không uốn lưỡi" }, { en: "D. Đọc giống chữ L", vi: "Đọc là L" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Đánh vần] Nghe Golfer đánh vần tên riêng và chọn TÊN ĐÚNG:",
        audioText: "I am David.", phonetic: "/aɪ æm ˈdeɪ.vɪd/", translation: "Tôi là David.",
        options: [{ en: "A. DAVID", vi: "David" }, { en: "B. DAVIS", vi: "Davis" }, { en: "C. DANIEL", vi: "Daniel" }, { en: "D. DAVIN", vi: "Davin" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Bảng chữ cái] Chữ cái 'K' phát âm IPA là gì?",
        audioText: "Letter K sound.", phonetic: "/ˈlet.ər keɪ saʊnd/", translation: "Âm của chữ cái K.",
        options: [{ en: "A. /keɪ/", vi: "Phát âm /keɪ/" }, { en: "B. /kaɪ/", vi: "Phát âm /kaɪ/" }, { en: "C. /kiː/", vi: "Phát âm /kiː/" }, { en: "D. /kɛ/", vi: "Phát âm /kɛ/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Đánh vần] Nghe đánh vần tên thương hiệu và chọn ĐÁP ÁN:",
        audioText: "Honma club.", phonetic: "/ˈhɒn.mə klʌb/", translation: "Gậy hãng Honma.",
        options: [{ en: "A. Honma", vi: "Gậy hãng Honma" }, { en: "B. Mizuno", vi: "Gậy hãng Mizuno" }, { en: "C. Miura", vi: "Gậy hãng Miura" }, { en: "D. Majesty", vi: "Gậy hãng Majesty" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Bảng chữ cái] Chữ 'E' trong bảng chữ cái tiếng Anh phát âm IPA chuẩn là gì?",
        audioText: "Letter E sound.", phonetic: "/ˈlet.ər iː saʊnd/", translation: "Âm của chữ cái E.",
        options: [{ en: "A. /iː/", vi: "Phát âm /iː/" }, { en: "B. /eɪ/", vi: "Phát âm /eɪ/" }, { en: "C. /e/", vi: "Phát âm /e/" }, { en: "D. /aɪ/", vi: "Phát âm /aɪ/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Bảng chữ cái] Chữ 'J' phát âm IPA chuẩn là gì?",
        audioText: "Letter J sound.", phonetic: "/ˈlet.ər dʒeɪ saʊnd/", translation: "Âm của chữ cái J.",
        options: [{ en: "A. /dʒeɪ/", vi: "Phát âm /dʒeɪ/" }, { en: "B. /ʒeɪ/", vi: "Phát âm /ʒeɪ/" }, { en: "C. /dʒaɪ/", vi: "Phát âm /dʒaɪ/" }, { en: "D. /jeɪ/", vi: "Phát âm /jeɪ/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Bảng chữ cái] Chữ 'G' trong tiếng Anh phát âm IPA như thế nào?",
        audioText: "Letter G as in Golf.", phonetic: "/ˈlet.ər dʒiː æz ɪn ɡɑːlf/", translation: "Chữ G trong từ Golf.",
        options: [{ en: "A. /dʒiː/ (kết thúc bằng âm iː dài)", vi: "Đọc là /dʒiː/" }, { en: "B. /dʒeɪ/", vi: "Đọc giống chữ J" }, { en: "C. /ɡiː/", vi: "Đọc là Gi" }, { en: "D. /dʒe/", vi: "Đọc là Ge" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Đánh vần] Nghe Golfer đánh vần tên riêng và chọn ĐÁP ÁN:",
        audioText: "My name is John.", phonetic: "/maɪ neɪm ɪz dʒɑːn/", translation: "Tên tôi là John.",
        options: [{ en: "A. JOHN", vi: "John" }, { en: "B. JACK", vi: "Jack" }, { en: "C. JIM", vi: "Jim" }, { en: "D. JOE", vi: "Joe" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Bảng chữ cái] Chữ 'Y' trong tiếng Anh phát âm IPA chuẩn là gì?",
        audioText: "Letter Y sound.", phonetic: "/ˈlet.ər waɪ saʊnd/", translation: "Âm của chữ cái Y.",
        options: [{ en: "A. /waɪ/", vi: "Phát âm /waɪ/" }, { en: "B. /jaɪ/", vi: "Phát âm /jaɪ/" }, { en: "C. /weɪ/", vi: "Phát âm /weɪ/" }, { en: "D. /yeɪ/", vi: "Phát âm /yeɪ/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Đánh vần] Nghe Golfer đánh vần tên hãng gậy và chọn ĐÁP ÁN:",
        audioText: "My driver is TaylorMade.", phonetic: "/maɪ ˈdraɪ.vər ɪz ˈteɪ.lər.meɪd/", translation: "Gậy Driver của tôi là TaylorMade.",
        options: [{ en: "A. TaylorMade", vi: "Gậy hãng TaylorMade" }, { en: "B. Titleist", vi: "Gậy hãng Titleist" }, { en: "C. Callaway", vi: "Gậy hãng Callaway" }, { en: "D. Ping", vi: "Gậy hãng Ping" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "fill",
        title: "[1.1 Bảng chữ cái] Nghe Caddie đánh vần tên mình và ĐIỀN TÊN VÀO Ô TRỐNG:",
        audioText: "My name is Anna.", displaySentence: "Caddie's name is _______.", translation: "Tên Caddie là _______.",
        targetWord: "anna", phonetic: "/ˈæn.ə/", hint: "💡 Gợi ý: Tên đơn giản gồm 4 ký tự."
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Đánh vần] Nghe Golfer đánh vần tên riêng và chọn ĐÁP ÁN:",
        audioText: "I am Alex.", phonetic: "/aɪ æm ˈæl.ɪks/", translation: "Tôi là Alex.",
        options: [{ en: "A. ALEX", vi: "Alex" }, { en: "B. ALAN", vi: "Alan" }, { en: "C. ADAM", vi: "Adam" }, { en: "D. ALEC", vi: "Alec" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Bảng chữ cái] Chữ cái 'X' phát âm IPA chuẩn là gì?",
        audioText: "Letter X sound.", phonetic: "/ˈlet.ər eks saʊnd/", translation: "Âm của chữ cái X.",
        options: [{ en: "A. /eks/", vi: "Phát âm /eks/" }, { en: "B. /egz/", vi: "Phát âm /egz/" }, { en: "C. /z/", vi: "Phát âm /z/" }, { en: "D. /s/", vi: "Phát âm /s/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Đánh vần] Nghe Golfer đánh vần tên hãng bóng và chọn ĐÁP ÁN:",
        audioText: "I play Volvik ball.", phonetic: "/aɪ pleɪ ˈvɔːl.vɪk bɔːl/", translation: "Tôi chơi bóng hãng Volvik.",
        options: [{ en: "A. Volvik", vi: "Bóng hãng Volvik" }, { en: "B. Vice", vi: "Bóng hãng Vice" }, { en: "C. Wilson", vi: "Bóng hãng Wilson" }, { en: "D. Bridgestone", vi: "Bóng hãng Bridgestone" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "fill",
        title: "[1.1 Bảng chữ cái] Nghe Golfer đánh vần tên riêng và ĐIỀN TÊN:",
        audioText: "Call me Paul.", displaySentence: "Golfer's name is _______.", translation: "Tên Golfer là _______.",
        targetWord: "paul", phonetic: "/pɔːl/", hint: "💡 Gợi ý: Tên gồm 4 ký tự."
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Bảng chữ cái] Chữ cái 'U' trong bảng chữ cái phát âm IPA chuẩn là gì?",
        audioText: "Letter U sound.", phonetic: "/ˈlet.ər juː saʊnd/", translation: "Âm của chữ cái U.",
        options: [{ en: "A. /juː/", vi: "Phát âm /juː/" }, { en: "B. /uː/", vi: "Phát âm /uː/" }, { en: "C. /ʌ/", vi: "Phát âm /ʌ/" }, { en: "D. /aʊ/", vi: "Phát âm /aʊ/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Bảng chữ cái] Chữ cái 'Q' trong bảng chữ cái phát âm IPA chuẩn là gì?",
        audioText: "Letter Q sound.", phonetic: "/ˈlet.ər kjuː saʊnd/", translation: "Âm của chữ cái Q.",
        options: [{ en: "A. /kjuː/", vi: "Phát âm /kjuː/" }, { en: "B. /kuː/", vi: "Phát âm /kuː/" }, { en: "C. /kwɑː/", vi: "Phát âm /kwɑː/" }, { en: "D. /kju/", vi: "Phát âm /kju/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Đánh vần] Nghe Golfer đánh vần tên riêng và chọn ĐÁP ÁN:",
        audioText: "My name is Tom.", phonetic: "/maɪ neɪm ɪz tɑːm/", translation: "Tên tôi là Tom.",
        options: [{ en: "A. TOM", vi: "Tom" }, { en: "B. TIM", vi: "Tim" }, { en: "C. TED", vi: "Ted" }, { en: "D. TODD", vi: "Todd" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "fill",
        title: "[1.1 Bảng chữ cái] Nghe Caddie tự giới thiệu tên và ĐIỀN TÊN:",
        audioText: "I am Mary.", displaySentence: "Caddie's name is _______.", translation: "Tên Caddie là _______.",
        targetWord: "mary", phonetic: "/ˈmer.i/", hint: "💡 Gợi ý: Tên gồm 4 ký tự."
    },

    // =========================================================================
    // SECTION 1.2: GIỚI THIỆU BẢN THÂN & NGHI THỨC CHÀO HỎI (SELF-INTRODUCTION) - 30 CÂU
    // =========================================================================
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Giới thiệu] Lời chào mừng chuyên nghiệp của Caddie tại sân gôn BRG:",
        audioText: "Good morning, Sir! Welcome to BRG Golf Club.", phonetic: "/ɡʊd ˈmɔːr.nɪŋ, sɜːr! ˈwel.kəm tə BRG ɡɑːlf klʌb/", translation: "Chào buổi sáng anh! Chào mừng anh đến với sân gôn BRG.",
        options: [
            { en: "A. Good morning, Sir! Welcome to BRG Golf Club.", vi: "Chào buổi sáng anh! Chào mừng anh đến với sân BRG." },
            { en: "B. Hello Sir! Give me your bag now.", vi: "Chào anh! Đưa túi gậy đây." },
            { en: "C. Hi! Are you ready to play now?", vi: "Chào! Sẵn sàng chơi chưa?" },
            { en: "D. Morning, let's go quickly!", vi: "Chào buổi sáng, đi nhanh lên!" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Giới thiệu] Mẫu câu Caddie giới thiệu số hiệu caddie và vị trí hỗ trợ khách:",
        audioText: "My caddie number is 214. I am your Caddie today, I am here to assist you.", phonetic: "/maɪ ˈkæd.i ˈnʌm.bər ɪz tuː wʌn fɔːr. aɪ æm jʊər ˈkæd.i təˈdeɪ, aɪ æm hɪər tə əˈsɪst juː/", translation: "Số caddie của em là 214. Em là Caddie của anh hôm nay, em ở đây để hỗ trợ anh ạ.",
        options: [
            { en: "A. My caddie number is 214. I am your Caddie today, I am here to assist you.", vi: "Số caddie của em là 214. Em là Caddie của anh hôm nay, em ở đây để hỗ trợ anh ạ." },
            { en: "B. I am caddie 214, carry your bag.", vi: "Tôi là caddie 214, vác túi cho anh." },
            { en: "C. My name is Caddie, number 214.", vi: "Tên tôi là Caddie, số 214." },
            { en: "D. Caddie 214 ready to go.", vi: "Caddie 214 sẵn sàng đi." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Giới thiệu] Mẫu câu hỏi lịch sự xem đây có phải lần đầu Golfer trải nghiệm sân:",
        audioText: "Is this your first time playing at our course, Sir?", phonetic: "/ɪz ðɪs jʊər fɜːrst taɪm ˈpleɪ.ɪŋ æt aʊər kɔːrs, sɜːr/", translation: "Đây có phải lần đầu anh chơi tại sân của chúng em không ạ?",
        options: [
            { en: "A. Is this your first time playing at our course, Sir?", vi: "Đây có phải lần đầu anh chơi tại sân của chúng em không ạ?" },
            { en: "B. Did you play here before or never?", vi: "Anh chơi ở đây bao giờ chưa hay chưa từng?" },
            { en: "C. Have you ever seen this course?", vi: "Anh đã từng thấy sân này chưa?" },
            { en: "D. Why do you come to our course today?", vi: "Tại sao hôm nay anh lại đến sân này?" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Giới thiệu] Khi khách hỏi 'How are you today?', Caddie trả lời lịch sự nhất là gì?",
        audioText: "I am very well, thank you, Sir! How are you today?", phonetic: "/aɪ æm ˈver.i wel, θæŋk juː, sɜːr! haʊ ɑːr juː təˈdeɪ/", translation: "Em rất khỏe, cảm ơn anh! Hôm nay anh thế nào ạ?",
        options: [
            { en: "A. I am very well, thank you, Sir! How are you today?", vi: "Em rất khỏe, cảm ơn anh! Hôm nay anh thế nào ạ?" },
            { en: "B. I am tired because I walk a lot.", vi: "Em mệt vì đi bộ nhiều." },
            { en: "C. Normal, nothing special.", vi: "Bình thường, chẳng có gì đặc biệt." },
            { en: "D. Ready to go home.", vi: "Sẵn sàng về nhà." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Giới thiệu] Mẫu câu chúc Golfer có một vòng chơi tuyệt vời trước khi phát bóng:",
        audioText: "Have a great game today, Sir!", phonetic: "/hæv ə ɡreɪt ɡeɪm təˈdeɪ, sɜːr/", translation: "Chúc anh có một trận đấu tuyệt vời hôm nay ạ!",
        options: [
            { en: "A. Have a great game today, Sir!", vi: "Chúc anh có một trận đấu tuyệt vời hôm nay ạ!" },
            { en: "B. Good luck to you only.", vi: "May mắn chỉ đến với anh thôi." },
            { en: "C. Try not to lose today.", vi: "Cố đừng để thua hôm nay." },
            { en: "D. Play fast please.", vi: "Vui lòng chơi nhanh." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Giới thiệu] Yếu tố phi ngôn ngữ quan trọng nhất khi chào hỏi tạo ấn tượng ban đầu:",
        audioText: "Maintaining eye contact and smiling.", phonetic: "/meɪnˈteɪn.ɪŋ aɪ ˈkɑːn.tækt ænd ˈsmaɪ.lɪŋ/", translation: "Duy trì giao tiếp ánh mắt và nụ cười thân thiện.",
        options: [
            { en: "A. Duy trì giao tiếp bằng mắt và nụ cười thân thiện", vi: "Eye contact & smiling" },
            { en: "B. Đứng quay lưng lại phía khách", vi: "Đứng quay lưng" },
            { en: "C. Nhìn xuống đất đọc kịch bản", vi: "Nhìn xuống đất" },
            { en: "D. Nói quá nhanh không ngắt nghỉ", vi: "Nói quá nhanh" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Giới thiệu] Xưng hô chuẩn mực tôn trọng dành cho khách nam và khách nữ:",
        audioText: "Yes Sir, Thank you Ma'am.", phonetic: "/jes sɜːr, θæŋk juː mæm/", translation: "Vâng thưa Anh / Cảm ơn Chị.",
        options: [{ en: "A. Sir / Ma'am", vi: "Sir (Nam) / Ma'am (Nữ)" }, { en: "B. Mister / Missis", vi: "Mister / Missis" }, { en: "C. Mister / Lady", vi: "Mister / Lady" }, { en: "D. Bro / Sister", vi: "Bro / Sister" }], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Giới thiệu] Mẫu câu Caddie hỏi kinh nghiệm Golfer chơi golf một cách tế nhị:",
        audioText: "How long have you been playing golf, Sir?", phonetic: "/haʊ lɑːŋ hæv juː biːn ˈpleɪ.ɪŋ ɡɑːlf, sɜːr/", translation: "Anh chơi môn golf này được bao lâu rồi ạ?",
        options: [
            { en: "A. How long have you been playing golf, Sir?", vi: "Anh chơi golf được bao lâu rồi ạ?" },
            { en: "B. How old are you, Sir?", vi: "Anh bao nhiêu tuổi rồi?" },
            { en: "C. When do you stop playing golf?", vi: "Khi nào anh ngừng chơi golf?" },
            { en: "D. Are you an old golfer?", vi: "Anh là golfer già phải không?" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Giới thiệu] Khi giới thiệu chức danh bản thân, Caddie phát âm từ 'Caddie' chuẩn IPA là gì?",
        audioText: "I am your Caddie today.", phonetic: "/aɪ æm jʊər ˈkæd.i təˈdeɪ/", translation: "Em là Caddie của anh hôm nay.",
        options: [{ en: "A. /ˈkæd.i/", vi: "/ˈkæd.i/" }, { en: "B. /ˈkɑː.di/", vi: "/ˈkɑː.di/" }, { en: "C. /ˈked.i/", vi: "/ˈked.i/" }, { en: "D. /kædˈdiː/", vi: "/kædˈdiː/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Giới thiệu] Câu hỏi tư vấn của Caddie giúp xác định vị trí phát bóng chuẩn cho khách:",
        audioText: "Which tee box do you play today, Sir?", phonetic: "/wɪtʃ tiː bɑːks duː juː pleɪ təˈdeɪ, sɜːr/", translation: "Hôm nay anh phát bóng ở tee nào ạ?",
        options: [
            { en: "A. Which tee box do you play today, Sir?", vi: "Hôm nay anh phát bóng ở tee nào ạ?" },
            { en: "B. Where is your tee box?", vi: "Tee box của anh ở đâu?" },
            { en: "C. Do you like tee box?", vi: "Anh có thích tee box không?" },
            { en: "D. What color is tee box?", vi: "Tee box màu gì?" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Giới thiệu] Mẫu câu Caddie sẵn sàng lắng nghe chỉ dẫn về thói quen đánh của khách:",
        audioText: "Please let me know if you have any special requirements, Sir.", phonetic: "/pliːz let miː noʊ ɪf juː hæv ˈen.i ˈspeʃ.əl rɪˈkwaɪər.mənts, sɜːr/", translation: "Anh có yêu cầu đặc biệt nào xin cứ dặn em nhé ạ.",
        options: [
            { en: "A. Please let me know if you have any special requirements, Sir.", vi: "Anh có yêu cầu đặc biệt nào xin dặn em nhé ạ." },
            { en: "B. Tell me your demands now.", vi: "Nói nhu cầu của anh ngay." },
            { en: "C. Don't ask me too much.", vi: "Đừng hỏi em nhiều." },
            { en: "D. Do what I say, Sir.", vi: "Làm theo lời em nói đi." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Giới thiệu] Khi khách khen 'Nice to meet you', Caddie đáp lại lịch sự nhất là:",
        audioText: "Nice to meet you too, Sir!", phonetic: "/naɪs tə miːt juː tuː, sɜːr/", translation: "Rất hân hạnh được gặp anh ạ!",
        options: [
            { en: "A. Nice to meet you too, Sir!", vi: "Rất hân hạnh được gặp anh ạ!" },
            { en: "B. Me too, bye.", vi: "Tôi cũng thế, tạm biệt." },
            { en: "C. Yes, I am nice.", vi: "Vâng, em rất tốt." },
            { en: "D. Thank you, I know.", vi: "Cảm ơn, em biết rồi." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Giới thiệu] Mẫu câu chủ động nhận túi gậy từ khách tại khu vực tập trung:",
        audioText: "May I take your golf bag, Sir?", phonetic: "/meɪ aɪ teɪk jʊər ɡɑːlf bæɡ, sɜːr/", translation: "Cho phép em xin túi gậy của anh ạ?",
        options: [
            { en: "A. May I take your golf bag, Sir?", vi: "Cho phép em xin túi gậy của anh ạ?" },
            { en: "B. Give me your bag now.", vi: "Đưa túi đây nhanh." },
            { en: "C. Is this bag yours?", vi: "Túi này của anh à?" },
            { en: "D. Carry bag yourself.", vi: "Tự vác túi đi." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Giới thiệu] Mẫu câu kiểm tra tên khách trên thẻ túi (Bag tag):",
        audioText: "Is this Mr. Arthur's bag, Sir?", phonetic: "/ɪz ðɪs ˈmɪs.tər ˈɑːr.θərz bæɡ, sɜːr/", translation: "Dạ đây có phải túi gậy của anh Arthur không ạ?",
        options: [
            { en: "A. Is this Mr. Arthur's bag, Sir?", vi: "Dạ đây có phải túi gậy của anh Arthur không ạ?" },
            { en: "B. Who is Arthur?", vi: "Arthur là ai?" },
            { en: "C. Where is bag tag?", vi: "Thẻ túi đâu?" },
            { en: "D. Show me your name.", vi: "Cho xem tên đi." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "fill",
        title: "[1.2 Giới thiệu] Nghe Caddie xin phép hỗ trợ và ĐIỀN TỪ:",
        audioText: "I am here to assist you, Sir.", displaySentence: "I am here to _______ you, Sir.", translation: "Em ở đây để _______ anh ạ.",
        targetWord: "assist", phonetic: "/əˈsɪst/", hint: "💡 Gợi ý: Từ gồm 6 ký tự có nghĩa là hỗ trợ/giúp đỡ."
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Giới thiệu] Từ 'Welcome' trong câu chào mừng phát âm trọng âm ở đâu?",
        audioText: "Welcome to our golf club.", phonetic: "/ˈwel.kəm tə aʊər ɡɑːlf klʌb/", translation: "Chào mừng tới sân gôn của chúng em.",
        options: [{ en: "A. Âm tiết 1 (Wel-)", vi: "WEL-come" }, { en: "B. Âm tiết 2 (-come)", vi: "Wel-COME" }, { en: "C. Bằng nhau", vi: "Bằng nhau" }, { en: "D. Không trọng âm", vi: "Không trọng âm" }], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Giới thiệu] Từ 'Assist' (hỗ trợ) có trọng âm rơi vào âm tiết nào?",
        audioText: "I am here to assist you.", phonetic: "/aɪ æm hɪər tə əˈsɪst juː/", translation: "Em ở đây để hỗ trợ anh.",
        options: [{ en: "A. Âm tiết 2 (-sist)", vi: "as-SIST" }, { en: "B. Âm tiết 1 (As-)", vi: "AS-sist" }, { en: "C. Bằng nhau", vi: "Bằng nhau" }, { en: "D. Không trọng âm", vi: "Không trọng âm" }], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Giới thiệu] Kết thúc vòng chơi, Caddie gửi lời chào tạm biệt lịch sự như thế nào?",
        audioText: "Thank you very much, Sir! Hope to see you again!", phonetic: "/θæŋk juː ˈver.i mʌtʃ, sɜːr! hoʊp tə siː juː əˈɡen/", translation: "Cảm ơn anh rất nhiều ạ! Hy vọng sớm gặp lại anh!",
        options: [
            { en: "A. Thank you very much, Sir! Hope to see you again!", vi: "Cảm ơn anh rất nhiều ạ! Hy vọng sớm gặp lại anh!" },
            { en: "B. Bye bye, give me tip.", vi: "Tạm biệt, cho tiền tip đi." },
            { en: "C. Finished, go home now.", vi: "Xong rồi, về nhà đi." },
            { en: "D. Game over, see you later.", vi: "Hết giờ, gặp lại sau." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Giới thiệu] Khi bàn giao túi gậy đã làm sạch hoàn tất cuối buổi chơi, Caddie nói câu nào?",
        audioText: "Here is your golf bag, Sir. All clubs are clean.", phonetic: "/hɪər ɪz jʊər ɡɑːlf bæɡ, sɜːr. ɔːl klʌbz ɑːr kliːn/", translation: "Túi gậy của anh đây ạ. Tất cả gậy đã được lau sạch.",
        options: [
            { en: "A. Here is your golf bag, Sir. All clubs are clean.", vi: "Túi gậy của anh đây ạ. Tất cả gậy đã được lau sạch." },
            { en: "B. Take your bag now.", vi: "Lấy túi đi." },
            { en: "C. Clean bag finished.", vi: "Lau túi xong rồi." },
            { en: "D. Your bag is heavy.", vi: "Túi nặng quá." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Cảm ơn] Khi Golfer khen 'You did a great job today!', Caddie đáp lại thế nào?",
        audioText: "It was my pleasure serving you today, Sir!", phonetic: "/ɪt wʌz maɪ ˈpleʒ.ər ˈsɜːr.vɪŋ juː təˈdeɪ, sɜːr/", translation: "Rất hân hạnh được phục vụ anh hôm nay ạ!",
        options: [
            { en: "A. It was my pleasure serving you today, Sir!", vi: "Rất hân hạnh được phục vụ anh hôm nay ạ!" },
            { en: "B. I know I am very good.", vi: "Em biết em giỏi mà." },
            { en: "C. Give me more tip then.", vi: "Thế thì cho em thêm tiền tip đi." },
            { en: "D. You are welcome, bye.", vi: "Không có gì, tạm biệt." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Giới thiệu] Mẫu câu thể hiện thái độ sẵn sàng hỗ trợ khách suốt buổi chơi:",
        audioText: "I am ready whenever you are, Sir.", phonetic: "/aɪ æm ˈred.i wenˈev.ər juː ɑːr, sɜːr/", translation: "Dạ em đã sẵn sàng bất cứ khi nào anh muốn ạ.",
        options: [
            { en: "A. I am ready whenever you are, Sir.", vi: "Dạ em đã sẵn sàng bất cứ khi nào anh muốn ạ." },
            { en: "B. Hurry up, I am waiting.", vi: "Nhanh lên, em đang chờ." },
            { en: "C. Play now or later?", vi: "Chơi bây giờ hay tý nữa?" },
            { en: "D. Don't waste my time.", vi: "Đừng lãng phí thời gian của em." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Giới thiệu] Khi khách trao cho Caddie thẻ nhận túi (Bag Claim Tag), Caddie nói gì?",
        audioText: "Thank you Sir, I will pick up your bag right away.", phonetic: "/θæŋk juː sɜːr, aɪ wɪl pɪk ʌp jʊər bæɡ raɪt əˈweɪ/", translation: "Cảm ơn anh, em sẽ đi lấy túi gậy cho anh ngay ạ.",
        options: [
            { en: "A. Thank you Sir, I will pick up your bag right away.", vi: "Cảm ơn anh, em sẽ đi lấy túi gậy cho anh ngay ạ." },
            { en: "B. Wait here.", vi: "Đứng đây đợi." },
            { en: "C. Give me tag.", vi: "Đưa thẻ đây." },
            { en: "D. Bag is over there, go get it.", vi: "Túi ở đằng kia, tự lấy đi." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Giới thiệu] Mẫu câu Caddie chủ động hỏi tên khách để tiện xưng hô tôn trọng:",
        audioText: "May I have your name, Sir?", phonetic: "/meɪ aɪ hæv jʊər neɪm, sɜːr/", translation: "Dạ cho phép em được biết tên của anh ạ?",
        options: [
            { en: "A. May I have your name, Sir?", vi: "Cho phép em được biết tên của anh ạ?" },
            { en: "B. What is your name?", vi: "Tên anh là gì?" },
            { en: "C. Who are you?", vi: "Anh là ai?" },
            { en: "D. Tell me name now.", vi: "Nói tên ngay." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Giới thiệu] Mẫu câu chúc khách có trải nghiệm chơi bóng vui vẻ:",
        audioText: "Enjoy your game today, Sir!", phonetic: "/ɪnˈdʒɔɪ jʊər ɡeɪm təˈdeɪ, sɜːr/", translation: "Chúc anh có một trận đánh thật vui vẻ hôm nay ạ!",
        options: [
            { en: "A. Enjoy your game today, Sir!", vi: "Chúc anh có một trận đánh thật vui vẻ hôm nay ạ!" },
            { en: "B. Don't play bad today.", vi: "Hôm nay đừng đánh tệ." },
            { en: "C. Try to win money.", vi: "Cố mà thắng tiền." },
            { en: "D. Game is long today.", vi: "Hôm nay trận dài lắm." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "fill",
        title: "[1.2 Giới thiệu] Nghe Caddie chào mừng khách đến sân gôn BRG và ĐIỀN TỪ:",
        audioText: "Welcome to BRG Golf Club, Sir!", displaySentence: "Welcome to BRG Golf _______, Sir!", translation: "Chào mừng anh đến với Câu lạc bộ _______ BRG!",
        targetWord: "club", phonetic: "/klʌb/", hint: "💡 Gợi ý: Từ gồm 4 ký tự nghĩa là Câu lạc bộ."
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Giới thiệu] Mẫu câu Caddie hỏi khách về thói quen có đi xe điện (Buggy) hay không:",
        audioText: "Do you use a buggy today, Sir?", phonetic: "/duː juː juːz ə ˈbʌɡ.i təˈdeɪ, sɜːr/", translation: "Hôm nay anh có dùng xe điện không ạ?",
        options: [
            { en: "A. Do you use a buggy today, Sir?", vi: "Hôm nay anh có dùng xe điện không ạ?" },
            { en: "B. Why don't you ride buggy?", vi: "Tại sao không đi xe điện?" },
            { en: "C. Walk or die, Sir?", vi: "Đi bộ hay không?" },
            { en: "D. Drive car now.", vi: "Lái xe đi." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Giới thiệu] Lời đáp lại lịch sự khi khách nói 'Thank you for your service':",
        audioText: "You are very welcome, Sir!", phonetic: "/juː ɑːr ˈver.i ˈwel.kəm, sɜːr/", translation: "Dạ không có gì đâu ạ!",
        options: [
            { en: "A. You are very welcome, Sir!", vi: "Dạ không có gì đâu ạ!" },
            { en: "B. Yes, of course.", vi: "Tất nhiên rồi." },
            { en: "C. OK bye.", vi: "Được rồi tạm biệt." },
            { en: "D. Give me tip.", vi: "Đưa tip đây." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Giới thiệu] Mẫu câu Caddie trấn an khi khách đến hơi muộn giờ phát bóng (Tee time):",
        audioText: "Don't worry Sir, we still have enough time for tee off.", phonetic: "/doʊnt ˈwɜːr.i sɜːr, wiː stɪl hæv ɪˈnʌf taɪm fɔːr tiː ɑːf/", translation: "Anh đừng lo ạ, chúng ta vẫn đủ thời gian chuẩn bị phát bóng ạ.",
        options: [
            { en: "A. Don't worry Sir, we still have enough time for tee off.", vi: "Anh đừng lo ạ, chúng ta vẫn đủ thời gian chuẩn bị phát bóng ạ." },
            { en: "B. You are late! Run fast!", vi: "Muộn rồi! Chạy nhanh lên!" },
            { en: "C. Too late, cannot play.", vi: "Quá muộn, không chơi được." },
            { en: "D. Why are you slow?", vi: "Tại sao anh chậm thế?" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Giới thiệu] Lời nhắc nhở tinh tế của Caddie trước khi nhóm khởi hành:",
        audioText: "Are we ready to start, Sir?", phonetic: "/ɑːr wiː ˈred.i tə stɑːrt, sɜːr/", translation: "Dạ chúng ta sẵn sàng bắt đầu chưa ạ?",
        options: [
            { en: "A. Are we ready to start, Sir?", vi: "Dạ chúng ta sẵn sàng bắt đầu chưa ạ?" },
            { en: "B. Start now quickly.", vi: "Bắt đầu ngay nhanh lên." },
            { en: "C. Why do we wait?", vi: "Tại sao lại phải chờ?" },
            { en: "D. Play now!", vi: "Đánh luôn đi!" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "fill",
        title: "[1.2 Giới thiệu] Nghe Caddie chúc khách có ngày thi đấu gặp nhiều may mắn:",
        audioText: "Good luck and have fun, Sir!", displaySentence: "Good _______ and have fun, Sir!", translation: "Chúc anh gặp nhiều _______ mắn và chơi vui vẻ ạ!",
        targetWord: "luck", phonetic: "/lʌk/", hint: "💡 Gợi ý: Từ gồm 4 ký tự nghĩa là sự may mắn."
    },

    // =========================================================================
    // SECTION 1.3: SỐ ĐẾM & KHOẢNG CÁCH (NUMBERS & DISTANCE) - 40 CÂU
    // =========================================================================
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Số đếm] Trọng âm của từ 'Fifteen' (15) cần nhấn ở đâu để Golfer không nghe nhầm thành 'Fifty' (50)?",
        audioText: "It is one hundred and fifteen yards to the green.", phonetic: "/ɪt ɪz wʌn ˈhʌn.drəd ænd ˌfɪfˈtiːn jɑːrdz tə ðə ɡriːn/", translation: "Khoảng cách đến green là 115 yard.",
        options: [
            { en: "A. Nhấn mạnh vào âm tiết thứ hai (-teen)", vi: "Giúp phân biệt với Fifty" },
            { en: "B. Nhấn mạnh vào âm tiết đầu (Fif-)", vi: "Nhấn âm đầu" },
            { en: "C. Đọc lướt cả hai âm tiết", vi: "Giọng trầm" },
            { en: "D. Nhấn âm vào từ 'yards'", vi: "Nhấn đơn vị đo" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Số đếm] Khi báo khoảng cách 150 yards, cách đọc tiếng Anh tự nhiên nhất là gì?",
        audioText: "It is one hundred and fifty yards to the green.", phonetic: "/ɪt ɪz wʌn ˈhʌn.drəd ænd ˈfɪf.ti jɑːrdz tə ðə ɡriːn/", translation: "Khoảng cách đến vùng green là 150 yard.",
        options: [
            { en: "A. One hundred and fifty yards", vi: "150 yard" },
            { en: "B. Fifteen zero yards", vi: "15 0 yard" },
            { en: "C. One five zero yards", vi: "1 5 0 yard" },
            { en: "D. One hundred fifteen yards", vi: "115 yard" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Số đếm] Caddie nghe Golfer nói cần gậy góc 60 độ. Số '60' có trọng âm rơi vào đâu?",
        audioText: "I need a 60 degree wedge.", phonetic: "/aɪ niːd ə ˈsɪk.sti dɪˈɡriː wedʒ/", translation: "Tôi cần gậy kỹ thuật 60 độ.",
        options: [{ en: "A. Âm tiết đầu (Six-)", vi: "Six-ty" }, { en: "B. Âm tiết cuối (-ty)", vi: "Six-TY" }, { en: "C. Cả hai âm bằng nhau", vi: "Bằng nhau" }, { en: "D. Không có trọng âm", vi: "Không trọng âm" }], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Số đếm] Phiên âm IPA chuẩn của số '3' trên sân gôn là gì?",
        audioText: "Three iron, Sir.", phonetic: "/θriː ˈaɪ.ən, sɜːr/", translation: "Gậy sắt số 3 thưa anh.",
        options: [{ en: "A. /θriː/", vi: "/θriː/" }, { en: "B. /triː/", vi: "/triː/" }, { en: "C. /free/", vi: "/free/" }, { en: "D. /driː/", vi: "/driː/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Số đếm] Đâu là phiên âm IPA chuẩn của số '13'?",
        audioText: "Hole number 13.", phonetic: "/hoʊl ˈnʌm.bər ˌθɜːrˈtiːn/", translation: "Hố số 13.",
        options: [{ en: "A. /ˌθɜːrˈtiːn/", vi: "/ˌθɜːrˈtiːn/" }, { en: "B. /ˈθɜːr.ti/", vi: "/ˈθɜːr.ti/" }, { en: "C. /θriː.tiːn/", vi: "/θriː.tiːn/" }, { en: "D. /θɜːr.ten/", vi: "/θɜːr.ten/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Số đếm] Caddie kiểm đếm thấy túi có 14 cây gậy. Số '14' đọc là gì?",
        audioText: "You have fourteen golf clubs, Sir!", phonetic: "/juː hæv ˌfɔːrˈtiːn ɡɑːlf klʌbz, sɜːr/", translation: "Anh có 14 cây gậy gôn thưa anh!",
        options: [{ en: "A. Fourteen /ˌfɔːrˈtiːn/", vi: "14 cây gậy" }, { en: "B. Forty /ˈfɔːr.ti/", vi: "40 cây gậy" }, { en: "C. Four /fɔːr/", vi: "4 cây gậy" }, { en: "D. Fourteenth /ˌfɔːrˈtiːnθ/", vi: "Thứ 14" }], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Số đếm] Từ 'Hundred' trong cụm 'One hundred yards' phát âm IPA chuẩn là gì?",
        audioText: "One hundred yards.", phonetic: "/wʌn ˈhʌn.drəd jɑːrdz/", translation: "Một trăm yard.",
        options: [{ en: "A. /ˈhʌn.drəd/", vi: "/ˈhʌn.drəd/" }, { en: "B. /ˈhʊn.dred/", vi: "/ˈhʊn.dred/" }, { en: "C. /ˈhæn.drɪd/", vi: "/ˈhæn.drɪd/" }, { en: "D. /ˈhɒn.drəd/", vi: "/ˈhɒn.drəd/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Số đếm] Phiên âm chuẩn IPA của số '5' là gì?",
        audioText: "5-iron, Sir.", phonetic: "/faɪv ˈaɪ.ən, sɜːr/", translation: "Gậy sắt số 5 ạ.",
        options: [{ en: "A. /faɪv/", vi: "/faɪv/" }, { en: "B. /fɪf/", vi: "/fɪf/" }, { en: "C. /faɪf/", vi: "/faɪf/" }, { en: "D. /faɪ/", vi: "/faɪ/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Số đếm] Phiên âm chuẩn IPA của số '12' là gì?",
        audioText: "We have twelve buggy cars.", phonetic: "/wiː hæv twelv ˈbʌɡ.i kɑːrz/", translation: "Chúng ta có 12 xe điện.",
        options: [{ en: "A. /twelv/", vi: "/twelv/" }, { en: "B. /twelf/", vi: "/twelf/" }, { en: "C. /twerv/", vi: "/twerv/" }, { en: "D. /twelvθ/", vi: "/twelvθ/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Số đếm] Số '20' trong tiếng Anh chuẩn IPA phát âm là gì?",
        audioText: "Twenty yards to the fringe.", phonetic: "/ˈtwen.ti jɑːrdz tə ðə frɪndʒ/", translation: "Còn 20 yard nữa tới mép green.",
        options: [{ en: "A. /ˈtwen.ti/", vi: "/ˈtwen.ti/" }, { en: "B. /twenˈtiːn/", vi: "/twenˈtiːn/" }, { en: "C. /ˈtwen.ty/", vi: "/ˈtwen.ty/" }, { en: "D. /two.ty/", vi: "/two.ty/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Số đếm] Từ 'Thousand' (hàng ngàn) có phiên âm IPA chuẩn là gì?",
        audioText: "One thousand members.", phonetic: "/wʌn ˈθaʊ.zənd ˈmem.bərz/", translation: "Một ngàn hội viên.",
        options: [{ en: "A. /ˈθaʊ.zənd/", vi: "/ˈθaʊ.zənd/" }, { en: "B. /ˈsaʊ.zənd/", vi: "/ˈsaʊ.zənd/" }, { en: "C. /ˈtoʊ.zənd/", vi: "/ˈtoʊ.zənd/" }, { en: "D. /ˈθoʊ.zænd/", vi: "/ˈθoʊ.zænd/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Số đếm] Số '40' được viết và phát âm IPA chuẩn như thế nào?",
        audioText: "Forty yards to the bunker.", phonetic: "/ˈfɔːr.ti jɑːrdz tə ðə ˈbʌŋ.kər/", translation: "40 yard nữa tới bẫy cát.",
        options: [{ en: "A. Forty /ˈfɔːr.ti/", vi: "Forty (không có chữ u)" }, { en: "B. Fourty /ˈfɔːr.tiːn/", vi: "Fourty" }, { en: "C. Forth /ˈfɔːrθ/", vi: "Forth" }, { en: "D. Four-ty /fɔːrˈti/", vi: "Four-ty" }], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Số đếm] Caddie đọc số hố, số 9 phát âm IPA chuẩn là gì?",
        audioText: "Hole number 9.", phonetic: "/hoʊl ˈnʌm.bər naɪn/", translation: "Hố số 9.",
        options: [{ en: "A. /naɪn/", vi: "/naɪn/" }, { en: "B. /nɪn/", vi: "/nɪn/" }, { en: "C. /neɪn/", vi: "/neɪn/" }, { en: "D. /naɪ/", vi: "/naɪ/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Số đếm] Từ 'Eight' đồng âm với từ nào trong tiếng Anh?",
        audioText: "8-iron, Sir.", phonetic: "/eɪt ˈaɪ.ən, sɜːr/", translation: "Gậy sắt số 8 ạ.",
        options: [{ en: "A. Ate", vi: "Ate (/eɪt/)" }, { en: "B. Eat", vi: "Eat (/iːt/)" }, { en: "C. At", vi: "At (/æt/)" }, { en: "D. Height", vi: "Height (/haɪt/)" }], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Số đếm] Số '7' có phiên âm IPA chuẩn là gì?",
        audioText: "7-iron.", phonetic: "/ˈsev.n ˈaɪ.ən/", translation: "Gậy sắt số 7.",
        options: [{ en: "A. /ˈsev.ən/", vi: "/ˈsev.ən/" }, { en: "B. /ˈseɪ.vən/", vi: "/ˈseɪ.vən/" }, { en: "C. /ˈsev.en/", vi: "/ˈsev.en/" }, { en: "D. /sɪv.ən/", vi: "/sɪv.ən/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Số đếm] Từ 'Four' (Số 4) có phát âm âm cuối chuẩn Anh-Mỹ là gì?",
        audioText: "Par 4 hole.", phonetic: "/pɑːr fɔːr hoʊl/", translation: "Hố Par 4.",
        options: [{ en: "A. /fɔːr/", vi: "/fɔːr/" }, { en: "B. /fɑːr/", vi: "/fɑːr/" }, { en: "C. /fʊər/", vi: "/fʊər/" }, { en: "D. /fəʊr/", vi: "/fəʊr/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Số đếm] Số '6' có âm cuối là gì?",
        audioText: "6-iron.", phonetic: "/sɪks ˈaɪ.ən/", translation: "Gậy sắt số 6.",
        options: [{ en: "A. /ks/", vi: "Cụm phụ âm /ks/" }, { en: "B. /s/", vi: "Âm /s/" }, { en: "C. /z/", vi: "Âm /z/" }, { en: "D. /ʃ/", vi: "Âm /ʃ/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Số đếm] Số '30' phát âm chuẩn IPA như thế nào?",
        audioText: "Thirty yards short.", phonetic: "/ˈθɜːr.ti jɑːrdz ʃɔːrt/", translation: "Thiếu 30 yard.",
        options: [{ en: "A. /ˈθɜːr.ti/", vi: "/ˈθɜːr.ti/" }, { en: "B. /ˌθɜːrˈtiːn/", vi: "/ˌθɜːrˈtiːn/" }, { en: "C. /ˈtriː.ti/", vi: "/ˈtriː.ti/" }, { en: "D. /ˈθɜːr.ten/", vi: "/ˈθɜːr.ten/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Số đếm] Số '50' có trọng âm rơi vào đâu?",
        audioText: "Fifty yards to the pin.", phonetic: "/ˈfɪf.ti jɑːrdz tə ðə pɪn/", translation: "50 yard nữa tới cờ.",
        options: [{ en: "A. Âm tiết đầu (Fif-)", vi: "FIF-ty" }, { en: "B. Âm tiết cuối (-ty)", vi: "Fif-TY" }, { en: "C. Cả hai âm tiết", vi: "Bằng nhau" }, { en: "D. Không có trọng âm", vi: "Không trọng âm" }], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Số đếm] Trong tiếng Anh, từ 'One' (Số 1) phát âm IPA chuẩn là gì?",
        audioText: "Hole 1.", phonetic: "/hoʊl wʌn/", translation: "Hố 1.",
        options: [{ en: "A. /wʌn/", vi: "/wʌn/" }, { en: "B. /oʊn/", vi: "/oʊn/" }, { en: "C. /wɒn/", vi: "/wɒn/" }, { en: "D. /vʌn/", vi: "/vʌn/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Số đếm] Số '2' có nguyên âm kéo dài là gì trong IPA?",
        audioText: "2 shots.", phonetic: "/tuː ʃɑːts/", translation: "2 cú đánh.",
        options: [{ en: "A. /tuː/", vi: "/tuː/" }, { en: "B. /tʊ/", vi: "/tʊ/" }, { en: "C. /toʊ/", vi: "/toʊ/" }, { en: "D. /tʌ/", vi: "/tʌ/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Số đếm] Số '10' có nguyên âm ngắn nào?",
        audioText: "Ten yards.", phonetic: "/ten jɑːrdz/", translation: "10 yard.",
        options: [{ en: "A. /e/", vi: "Nguyên âm ngắn /e/" }, { en: "B. /æ/", vi: "Nguyên âm /æ/" }, { en: "C. /ɪ/", vi: "Nguyên âm /ɪ/" }, { en: "D. /ʌ/", vi: "Nguyên âm /ʌ/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Số đếm] Số '11' có trọng âm đặt ở âm tiết nào?",
        audioText: "11th hole.", phonetic: "/ɪˈlev.ənθ hoʊl/", translation: "Hố số 11.",
        options: [{ en: "A. Âm tiết 2 (-lev-)", vi: "e-LEV-en" }, { en: "B. Âm tiết 1 (E-)", vi: "E-lev-en" }, { en: "C. Âm tiết 3 (-en)", vi: "e-lev-EN" }, { en: "D. Không có trọng âm", vi: "Không trọng âm" }], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Số đếm] Số thứ tự '3rd' (dùng cho hố số 3) phát âm IPA là gì?",
        audioText: "3rd hole.", phonetic: "/θɜːrd hoʊl/", translation: "Hố thứ 3.",
        options: [{ en: "A. /θɜːrd/", vi: "/θɜːrd/" }, { en: "B. /θriːθ/", vi: "/θriːθ/" }, { en: "C. /θɜːrt/", vi: "/θɜːrt/" }, { en: "D. /triːd/", vi: "/triːd/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "fill",
        title: "[1.3 Số đếm] Nghe thông báo khoảng cách và ĐIỀN SỐ DẠNG CƠ BẢN:",
        audioText: "The distance to the green is 150 yards.", displaySentence: "The distance to the green is _______ yards.", translation: "Khoảng cách đến green là _______ yard.",
        targetWord: "150", phonetic: "/wʌn ˈhʌn.drəd ænd ˈfɪf.ti/", hint: "💡 Gợi ý: Nhập số."
    },
    {
        lesson: "1", section: "section1.3", type: "fill",
        title: "[1.3 Số đếm] Nghe khoảng cách ngắn tới cờ và ĐIỀN SỐ CƠ BẢN:",
        audioText: "You have 100 yards left to the pin, Sir.", displaySentence: "You have _______ yards left to the pin.", translation: "Anh còn _______ yard nữa là tới cờ.",
        targetWord: "100", phonetic: "/wʌn ˈhʌn.drəd/", hint: "💡 Gợi ý: Nhập số."
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Số đếm] Đâu là cách phát âm chuẩn IPA của từ 'Iron' (gậy sắt)?",
        audioText: "7-iron, Sir.", phonetic: "/ˈsev.n ˈaɪ.ən, sɜːr/", translation: "Gậy sắt 7 thưa anh.",
        options: [{ en: "A. /ˈaɪ.ən/", vi: "/ˈaɪ.ən/" }, { en: "B. /ˈaɪ.rən/", vi: "/ˈaɪ.rən/" }, { en: "C. /ˈiː.rɒn/", vi: "/ˈiː.rɒn/" }, { en: "D. /ˈaɪ.roʊn/", vi: "/ˈaɪ.roʊn/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Thiết bị] Máy đo khoảng cách bằng laser của Caddie phát âm IPA là gì?",
        audioText: "Let me check with my rangefinder.", phonetic: "/let miː tʃek wɪð maɪ ˈreɪndʒˌfaɪn.dər/", translation: "Để em kiểm tra bằng máy đo khoảng cách.",
        options: [{ en: "A. Rangefinder /ˈreɪndʒˌfaɪn.dər/", vi: "Rangefinder" }, { en: "B. Laser Watch", vi: "Đồng hồ laser" }, { en: "C. Meter", vi: "Thước đo" }, { en: "D. Distance Binocular", vi: "Ống nhòm" }], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Số đếm & Gậy] Khi kiểm gậy thấy thiếu gậy trong túi khách, Caddie báo khách thế nào?",
        audioText: "Excuse me Sir, there are only 13 clubs in your bag. Please check.", phonetic: "/ɪkˈskjuːz miː sɜːr, ðer ɑːr ˈoʊn.li ˌθɜːrˈtiːn klʌbz ɪn jʊər bæɡ. pliːz tʃek/", translation: "Xin lỗi anh, trong túi chỉ có 13 cây gậy thôi ạ. Anh kiểm tra giúp em.",
        options: [
            { en: "A. Excuse me Sir, there are only 13 clubs in your bag. Please check.", vi: "Xin lỗi anh, trong túi chỉ có 13 cây gậy thôi ạ. Anh kiểm tra giúp em." },
            { en: "B. You lost one club already!", vi: "Anh làm mất 1 gậy rồi đấy!" },
            { en: "C. Where is your club? You forgot it.", vi: "Gậy đâu rồi? Anh quên à." },
            { en: "D. Bad bag, only 13 clubs.", vi: "Túi chán thế có 13 gậy." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Khoảng cách] Từ 'Distance' (khoảng cách) có trọng âm rơi vào âm tiết nào?",
        audioText: "Checking the distance.", phonetic: "/ˈtʃek.ɪŋ ðə ˈdɪs.təns/", translation: "Đang kiểm tra khoảng cách.",
        options: [{ en: "A. Âm tiết 1 (Dis-)", vi: "DIS-tance" }, { en: "B. Âm tiết 2 (-tance)", vi: "Dis-TANCE" }, { en: "C. Cả hai âm tiết", vi: "Bằng nhau" }, { en: "D. Không có trọng âm", vi: "Không trọng âm" }], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Khoảng cách] Nghe Caddie báo khoảng cách tới cờ và chọn ĐÁP ÁN:",
        audioText: "It is 180 yards to the pin, Sir.", phonetic: "/ɪt ɪz wʌn ˈhʌn.drəd ænd ˈeɪ.ti jɑːrdz tə ðə pɪn, sɜːr/", translation: "Khoảng cách tới cờ là 180 yard ạ.",
        options: [{ en: "A. 180 yards", vi: "180 yard" }, { en: "B. 108 yards", vi: "108 yard" }, { en: "C. 80 yards", vi: "80 yard" }, { en: "D. 118 yards", vi: "118 yard" }], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "fill",
        title: "[1.3 Số đếm] Nghe Caddie báo số hố gôn và ĐIỀN SỐ CƠ BẢN:",
        audioText: "This is hole number 5, Sir.", displaySentence: "This is hole number _______.", translation: "Đây là hố số _______.",
        targetWord: "5", phonetic: "/faɪv/", hint: "💡 Gợi ý: Nhập số."
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Số đếm] Số '16' phát âm IPA chuẩn là gì?",
        audioText: "Hole 16, Sir.", phonetic: "/hoʊl ˌsɪkˈstiːn, sɜːr/", translation: "Hố 16 thưa anh.",
        options: [{ en: "A. /ˌsɪkˈstiːn/", vi: "/ˌsɪkˈstiːn/" }, { en: "B. /ˈsɪk.sti/", vi: "/ˈsɪk.sti/" }, { en: "C. /sɪks.ten/", vi: "Siksten" }, { en: "D. /sɪks.tiːnθ/", vi: "Sixteenth" }], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Khoảng cách] Caddie báo khoảng cách còn lại, số '70' phát âm chuẩn là gì?",
        audioText: "You have seventy yards left.", phonetic: "/juː hæv ˈsev.ən.ti jɑːrdz left/", translation: "Anh còn 70 yard nữa.",
        options: [{ en: "A. /ˈsev.ən.ti/", vi: "/ˈsev.ən.ti/" }, { en: "B. /ˌsev.ənˈtiːn/", vi: "/ˌsev.ənˈtiːn/" }, { en: "C. /seven.tiːn/", vi: "Seventeen" }, { en: "D. /sev.ti/", vi: "Sevti" }], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "fill",
        title: "[1.3 Số đếm] Nghe Golfer hỏi số gậy par của hố và ĐIỀN SỐ:",
        audioText: "This is a Par 4 hole, Sir.", displaySentence: "This is a Par _______ hole.", translation: "Đây là hố Par _______.",
        targetWord: "4", phonetic: "/fɔːr/", hint: "💡 Gợi ý: Nhập số."
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Khoảng cách] Số '80' có trọng âm đặt ở đâu?",
        audioText: "Eighty yards to the green.", phonetic: "/ˈeɪ.ti jɑːrdz tə ðə ɡriːn/", translation: "80 yard nữa tới green.",
        options: [{ en: "A. Âm tiết 1 (Eigh-)", vi: "EIGH-ty" }, { en: "B. Âm tiết 2 (-ty)", vi: "Eigh-TY" }, { en: "C. Bằng nhau", vi: "Bằng nhau" }, { en: "D. Không có trọng âm", vi: "Không trọng âm" }], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Khoảng cách] Nghe Caddie báo khoảng cách và chọn ĐÁP ÁN:",
        audioText: "It is two hundred yards from the tee, Sir.", phonetic: "/ɪt ɪz tuː ˈhʌn.drəd jɑːrdz frəm ðə tiː, sɜːr/", translation: "Từ tee đến đây là 200 yard thưa anh.",
        options: [{ en: "A. 200 yards", vi: "200 yard" }, { en: "B. 120 yards", vi: "120 yard" }, { en: "C. 20 yards", vi: "20 yard" }, { en: "D. 220 yards", vi: "220 yard" }], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "fill",
        title: "[1.3 Số gậy] Nghe Caddie lấy gậy sắt cho khách và ĐIỀN SỐ GẬY:",
        audioText: "Here is your 8 iron, Sir.", displaySentence: "Here is your _______ iron, Sir.", translation: "Đây là gậy sắt số _______ của anh.",
        targetWord: "8", phonetic: "/eɪt/", hint: "💡 Gợi ý: Nhập số."
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Số đếm] Số '17' có trọng âm chính đặt ở đâu?",
        audioText: "Seventeen yards short.", phonetic: "/ˌsev.ənˈtiːn jɑːrdz ʃɔːrt/", translation: "Thiếu 17 yard.",
        options: [{ en: "A. Âm tiết 3 (-teen)", vi: "Seven-TEEN" }, { en: "B. Âm tiết 1 (Sev-)", vi: "SEVen-teen" }, { en: "C. Âm tiết 2 (-en-)", vi: "sev-EN-teen" }, { en: "D. Không trọng âm", vi: "Không trọng âm" }], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Số đếm] Số '90' phát âm IPA chuẩn là gì?",
        audioText: "Ninety yards to the flag.", phonetic: "/ˈnaɪn.ti jɑːrdz tə ðə flæɡ/", translation: "90 yard nữa tới cờ.",
        options: [{ en: "A. /ˈnaɪn.ti/", vi: "/ˈnaɪn.ti/" }, { en: "B. /ˌnaɪnˈtiːn/", vi: "/ˌnaɪnˈtiːn/" }, { en: "C. /nin.ti/", vi: "Ninti" }, { en: "D. /naɪn.ten/", vi: "Nineten" }], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Khoảng cách] Nghe Caddie báo khoảng cách tới cờ và chọn câu viết đúng:",
        audioText: "It is 125 yards to the pin.", phonetic: "/ɪt ɪz wʌn ˈhʌn.drəd ænd ˈtwen.ti faɪv jɑːrdz tə ðə pɪn/", translation: "Khoảng cách tới cờ là 125 yard.",
        options: [
            { en: "A. One hundred and twenty-five yards", vi: "125 yard" },
            { en: "B. Twelve five yards", vi: "125 yard" },
            { en: "C. One twenty yards", vi: "120 yard" },
            { en: "D. Two hundred yards", vi: "200 yard" }
        ], correct: 0
    },

    // =========================================================================
    // SECTION 1.4: SỞ THÍCH & TRÒ CHUYỆN GIAO LƯU (HOBBIES & SMALL TALK) - 25 CÂU
    // =========================================================================
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Sở thích] Mẫu câu Caddie hỏi thăm mục đích chơi golf để tạo trò chuyện tự nhiên:",
        audioText: "Do you play golf to relax or for business, Sir?", phonetic: "/duː juː pleɪ ɡɑːlf tə rɪˈlæks ɔːr fɔːr ˈbɪz.nɪs, sɜːr/", translation: "Anh chơi golf để thư giãn hay để kết nối công việc ạ?",
        options: [
            { en: "A. Do you play golf to relax or for business, Sir?", vi: "Anh chơi golf để thư giãn hay để kết nối công việc ạ?" },
            { en: "B. Why do you play golf here?", vi: "Tại sao anh chơi golf ở đây?" },
            { en: "C. Is golf your work or fun?", vi: "Golf là công việc hay cuộc vui?" },
            { en: "D. Do you make money from golf?", vi: "Anh có kiếm tiền từ golf không?" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Sở thích] Mẫu câu hỏi lịch sự về môn thể thao yêu thích của Golfer:",
        audioText: "Is golf your favorite sport, Sir?", phonetic: "/ɪz ɡɑːlf jʊər ˈfeɪ.vər.ɪt spɔːrt, sɜːr/", translation: "Golf có phải là môn thể thao yêu thích của anh không ạ?",
        options: [
            { en: "A. Is golf your favorite sport, Sir?", vi: "Golf có phải môn thể thao yêu thích của anh không ạ?" },
            { en: "B. Do you play golf best in the world?", vi: "Anh chơi golf giỏi nhất thế giới phải không?" },
            { en: "C. Why golf is favorite for you?", vi: "Tại sao golf lại được yêu thích?" },
            { en: "D. Is golf the only sport you know?", vi: "Golf là môn duy nhất anh biết à?" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Sở thích] Phiên âm IPA chuẩn của từ 'Travelling' (Du lịch - sở thích phổ biến của Golfer):",
        audioText: "I like travelling in my free time.", phonetic: "/aɪ laɪk ˈtræv.əl.ɪŋ ɪn maɪ friː taɪm/", translation: "Tôi thích đi du lịch vào thời gian rảnh.",
        options: [{ en: "A. /ˈtræv.əl.ɪŋ/", vi: "/ˈtræv.əl.ɪŋ/" }, { en: "B. /ˈtræv.əl/", vi: "/ˈtræv.əl/" }, { en: "C. /traˈvel.ɪŋ/", vi: "/traˈvel.ɪŋ/" }, { en: "D. /ˈtræv.lɪŋ/", vi: "/ˈtræv.lɪŋ/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Sở thích] Mẫu câu Caddie khen thời tiết đẹp để mở đầu câu chuyện giao lưu:",
        audioText: "Beautiful day, isn't it, Sir?", phonetic: "/ˈbjuː.t̬ə.fəl deɪ, ˈɪz.ənt ɪt, sɜːr/", translation: "Thời tiết hôm nay tuyệt vời phải không anh?",
        options: [
            { en: "A. Beautiful day, isn't it, Sir?", vi: "Thời tiết hôm nay tuyệt vời phải không anh?" },
            { en: "B. Weather is terrible today.", vi: "Thời tiết hôm nay tệ quá." },
            { en: "C. Why are you playing today?", vi: "Sao hôm nay anh lại chơi?" },
            { en: "D. Rain is coming soon.", vi: "Trời sắp mưa rồi." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Sở thích] Từ 'Relax' trong câu 'play golf to relax' có trọng âm rơi vào đâu?",
        audioText: "Play golf to relax.", phonetic: "/pleɪ ɡɑːlf tə rɪˈlæks/", translation: "Chơi golf để thư giãn.",
        options: [{ en: "A. Âm tiết thứ 2 (-lax)", vi: "re-LAX" }, { en: "B. Âm tiết thứ 1 (Re-)", vi: "RE-lax" }, { en: "C. Cả hai âm tiết", vi: "Bằng nhau" }, { en: "D. Không có trọng âm", vi: "Không trọng âm" }], correct: 0
    },
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Sở thích] Từ 'Business' trong cụm 'play golf for business' phát âm mấy âm tiết?",
        audioText: "Play golf for business.", phonetic: "/pleɪ ɡɑːlf fɔːr ˈbɪz.nɪs/", translation: "Chơi golf cho công việc.",
        options: [{ en: "A. 2 âm tiết (/ˈbɪz.nɪs/)", vi: "2 âm tiết" }, { en: "B. 3 âm tiết (/ˈbɪ.zɪ.nəs/)", vi: "3 âm tiết" }, { en: "C. 4 âm tiết", vi: "4 âm tiết" }, { en: "D. 1 âm tiết", vi: "1 âm tiết" }], correct: 0
    },
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Sở thích] Golfer nói thích đi du lịch, Caddie đáp lại lịch sự thế nào?",
        audioText: "I like travelling too, Sir! I also like cooking.", phonetic: "/aɪ laɪk ˈtræv.əl.ɪŋ tuː, sɜːr! aɪ ˈɔːl.soʊ laɪk ˈkʊk.ɪŋ/", translation: "Em cũng thích du lịch ạ! Em còn thích nấu ăn nữa.",
        options: [
            { en: "A. I like travelling too, Sir! I also like cooking.", vi: "Em cũng thích du lịch ạ! Em còn thích nấu ăn nữa." },
            { en: "B. I hate travelling, it costs money.", vi: "Em ghét du lịch, tốn tiền." },
            { en: "C. I don't have free time.", vi: "Em không có thời gian rảnh." },
            { en: "D. I only like staying home.", vi: "Em chỉ thích ở nhà." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Sở thích] Cụm từ vựng chỉ môn bơi lội có phiên âm IPA chuẩn là gì?",
        audioText: "Swimming in summer.", phonetic: "/ˈswɪm.ɪŋ ɪn ˈsʌm.ər/", translation: "Bơi lội vào mùa hè.",
        options: [{ en: "A. Swimming /ˈswɪm.ɪŋ/", vi: "Bơi lội" }, { en: "B. Diving", vi: "Lặn" }, { en: "C. Running", vi: "Chạy" }, { en: "D. Walking", vi: "Đi bộ" }], correct: 0
    },
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Sở thích] Cụm từ vựng chỉ việc nghe nhạc có phiên âm IPA chuẩn là gì?",
        audioText: "Listening to music.", phonetic: "/ˈlɪs.ən.ɪŋ tə ˈmjuː.zɪk/", translation: "Lắng nghe âm nhạc.",
        options: [{ en: "A. /ˈmjuː.zɪk/", vi: "/ˈmjuː.zɪk/" }, { en: "B. /ˈmuː.zɪk/", vi: "/ˈmuː.zɪk/" }, { en: "C. /ˈmjuː.sɪk/", vi: "/ˈmjuː.sɪk/" }, { en: "D. /muː.sɪk/", vi: "/muː.sɪk/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Sở thích] Cụm từ 'play golf with family' có nghĩa tiếng Việt là gì?",
        audioText: "I play golf with my family.", phonetic: "/aɪ pleɪ ɡɑːlf wɪð maɪ ˈfæm.əl.i/", translation: "Tôi chơi golf cùng với gia đình.",
        options: [
            { en: "A. Tôi chơi golf cùng với gia đình", vi: "Play with family" },
            { en: "B. Tôi chơi golf một mình", vi: "Play alone" },
            { en: "C. Tôi chơi golf với đồng nghiệp", vi: "Play with coworkers" },
            { en: "D. Tôi chơi golf với Caddie", vi: "Play with caddie" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Sở thích] Từ vựng chỉ sở thích 'Chạy bộ thể dục' có phiên âm IPA chuẩn là gì?",
        audioText: "Jogging in the morning.", phonetic: "/ˈdʒɑː.ɡɪŋ ɪn ðə ˈmɔːr.nɪŋ/", translation: "Chạy bộ vào buổi sáng.",
        options: [{ en: "A. Jogging /ˈdʒɑː.ɡɪŋ/", vi: "Chạy bộ thể dục" }, { en: "B. Running", vi: "Chạy nhanh" }, { en: "C. Walking", vi: "Đi bộ" }, { en: "D. Jog", vi: "Chạy nhẹ" }], correct: 0
    },
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Sở thích] Khi hỏi về sở thích lúc rảnh rỗi của Golfer một cách lịch sự, Caddie dùng câu nào?",
        audioText: "What are your hobbies in your free time, Sir?", phonetic: "/wɑːt ɑːr jʊər ˈhɑː.biz ɪn jʊər friː taɪm, sɜːr/", translation: "Sở thích lúc rảnh rỗi của anh là gì ạ?",
        options: [
            { en: "A. What are your hobbies in your free time, Sir?", vi: "Sở thích lúc rảnh rỗi của anh là gì ạ?" },
            { en: "B. What do you do when you are lazy?", vi: "Anh làm gì khi lười biếng?" },
            { en: "C. Why don't you work at weekend?", vi: "Sao cuối tuần không làm việc?" },
            { en: "D. Tell me your secret hobbies.", vi: "Kể em nghe sở thích bí mật đi." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Sở thích] Cụm từ vựng chỉ việc xem TV có phiên âm IPA chuẩn là gì?",
        audioText: "Watching TV.", phonetic: "/ˈwɑːtʃ.ɪŋ ˌtiːˈviː/", translation: "Xem ti vi.",
        options: [{ en: "A. Watching TV /ˈwɑːtʃ.ɪŋ ˌtiːˈviː/", vi: "Xem TV" }, { en: "B. Looking TV", vi: "Nhìn TV" }, { en: "C. Seeing TV", vi: "Thấy TV" }, { en: "D. Listen TV", vi: "Nghe TV" }], correct: 0
    },
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Sở thích] Từ vựng chỉ việc đi mua sắm có phiên âm IPA chuẩn là gì?",
        audioText: "Shopping on weekends.", phonetic: "/ˈʃɑː.pɪŋ ɑːn ˈwiːk.endz/", translation: "Đi mua sắm vào cuối tuần.",
        options: [{ en: "A. Shopping /ˈʃɑː.pɪŋ/", vi: "Mua sắm" }, { en: "B. Buying", vi: "Mua hàng" }, { en: "C. Selling", vi: "Bán hàng" }, { en: "D. Market", vi: "Chợ" }], correct: 0
    },
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Sở thích] Từ vựng chỉ việc nấu ăn có phiên âm IPA chuẩn là gì?",
        audioText: "Cooking for my family.", phonetic: "/ˈkʊk.ɪŋ fɔːr maɪ ˈfæm.əl.i/", translation: "Nấu ăn cho gia đình.",
        options: [{ en: "A. Cooking /ˈkʊk.ɪŋ/", vi: "Nấu ăn" }, { en: "B. Cooked", vi: "Đã nấu" }, { en: "C. Kitchen", vi: "Nhà bếp" }, { en: "D. Chef", vi: "Đầu bếp" }], correct: 0
    },
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Sở thích] Golfer nói đến sân gôn để giao lưu đối tác, câu nói tiếng Anh là gì?",
        audioText: "I play golf for networking.", phonetic: "/aɪ pleɪ ɡɑːlf fɔːr ˈnet.wɜːrk.ɪŋ/", translation: "Tôi chơi golf để giao lưu kết nối đối tác.",
        options: [
            { en: "A. I play golf for networking.", vi: "Tôi chơi golf để giao lưu kết nối đối tác" },
            { en: "B. I play golf for fitness.", vi: "Tôi chơi golf để tập thể dục" },
            { en: "C. I play golf with friends.", vi: "Tôi chơi golf với bạn bè" },
            { en: "D. I play golf for tournament.", vi: "Tôi chơi golf để thi đấu" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Sở thích] Khi Golfer nói thích chơi tennis bên cạnh golf, Caddie đáp lại thế nào?",
        audioText: "Besides golf, I love playing tennis.", phonetic: "/bɪˈsaɪdz ɡɑːlf, aɪ lʌv ˈpleɪ.ɪŋ ˈten.ɪs/", translation: "Bên cạnh golf, tôi rất thích chơi tennis.",
        options: [
            { en: "A. Oh tennis too? You must be very active, Sir!", vi: "Ồ cả tennis nữa ạ? Anh chắc hẳn rất năng động ạ!" },
            { en: "B. Tennis is boring.", vi: "Tennis chán lắm." },
            { en: "C. Don't play tennis.", vi: "Đừng chơi tennis." },
            { en: "D. I don't know tennis.", vi: "Em không biết tennis." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Sở thích] Cụm từ vựng chỉ việc đọc sách có phiên âm IPA chuẩn là gì?",
        audioText: "Reading books.", phonetic: "/ˈriː.dɪŋ bʊks/", translation: "Đọc sách.",
        options: [{ en: "A. Reading /ˈriː.dɪŋ/", vi: "Đọc sách" }, { en: "B. Writing", vi: "Viết sách" }, { en: "C. Listening", vi: "Lắng nghe" }, { en: "D. Speaking", vi: "Nói chuyện" }], correct: 0
    },
    {
        lesson: "1", section: "section1.4", type: "fill",
        title: "[1.4 Sở thích] Nghe Golfer nói về niềm yêu thích âm nhạc và ĐIỀN TỪ:",
        audioText: "I love listening to music.", displaySentence: "I love listening to _______.", translation: "Tôi rất thích nghe _______.",
        targetWord: "music", phonetic: "/ˈmjuː.zɪk/", hint: "💡 Gợi ý: Từ gồm 5 ký tự chỉ âm nhạc."
    },
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Sở thích] Từ 'Favorite' (yêu thích) có trọng âm đặt ở âm tiết nào?",
        audioText: "Golf is my favorite sport.", phonetic: "/ɡɑːlf ɪz maɪ ˈfeɪ.vər.ɪt spɔːrt/", translation: "Golf là môn thể thao yêu thích của tôi.",
        options: [{ en: "A. Âm tiết 1 (Fa-)", vi: "FA-vo-rite" }, { en: "B. Âm tiết 2 (-vo-)", vi: "fa-VO-rite" }, { en: "C. Âm tiết 3 (-rite)", vi: "fa-vo-RITE" }, { en: "D. Không trọng âm", vi: "Không trọng âm" }], correct: 0
    },
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Phản xạ] Khi Golfer nói đến sân vì công việc ('I am here for business'), Caddie phản hồi thế nào?",
        audioText: "I am here for business.", phonetic: "/aɪ æm hɪər fɔːr ˈbɪz.nɪs/", translation: "Tôi đến đây vì công việc.",
        options: [
            { en: "A. I see! Do you often play golf to network, Sir?", vi: "Em hiểu rồi ạ! Anh có thường chơi golf để kết nối đối tác không ạ?" },
            { en: "B. Business is boring.", vi: "Kinh doanh chán lắm." },
            { en: "C. Don't talk about business here.", vi: "Đừng bàn công việc ở đây." },
            { en: "D. You are very rich.", vi: "Anh giàu quá." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Trò chuyện] Hỏi về trải nghiệm ẩm thực sau trận đấu của Golfer:",
        audioText: "Would you like to try our clubhouse restaurant, Sir?", phonetic: "/wʊd juː laɪk tə traɪ aʊər ˈklʌb.haʊs ˈres.tə.rɑːnt, sɜːr/", translation: "Anh có muốn dùng thử nhà hàng của nhà câu lạc bộ không ạ?",
        options: [
            { en: "A. Would you like to try our clubhouse restaurant, Sir?", vi: "Anh có muốn dùng thử nhà hàng của nhà câu lạc bộ không ạ?" },
            { en: "B. Go home and eat.", vi: "Về nhà mà ăn." },
            { en: "C. Restaurant is closed.", vi: "Nhà hàng đóng cửa." },
            { en: "D. Food is bad here.", vi: "Đồ ăn ở đây dở lắm." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Trò chuyện] Mẫu câu hỏi thăm phương tiện Golfer di chuyển tới sân:",
        audioText: "Did you come here by car today, Sir?", phonetic: "/dɪd juː kʌm hɪər baɪ kɑːr təˈdeɪ, sɜːr/", translation: "Hôm nay anh đến đây bằng ô tô phải không ạ?",
        options: [
            { en: "A. Did you come here by car today, Sir?", vi: "Hôm nay anh đến đây bằng ô tô phải không ạ?" },
            { en: "B. Where is your car?", vi: "Ô tô của anh đâu?" },
            { en: "C. Drive me home, Sir.", vi: "Lái xe đưa em về đi." },
            { en: "D. Car is expensive.", vi: "Ô tô đắt tiền lắm." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Trò chuyện] Mẫu câu Caddie giới thiệu cảnh đẹp tự nhiên của hố gôn:",
        audioText: "This hole has a beautiful view of the lake, Sir.", phonetic: "/ðɪs hoʊl hæz ə ˈbjuː.t̬ə.fəl vjuː əv ðə leɪk, sɜːr/", translation: "Hố này có tầm nhìn ra hồ rất đẹp thưa anh.",
        options: [
            { en: "A. This hole has a beautiful view of the lake, Sir.", vi: "Hố này có tầm nhìn ra hồ rất đẹp thưa anh." },
            { en: "B. Water is dirty.", vi: "Nước bẩn lắm." },
            { en: "C. Don't look at lake.", vi: "Đừng nhìn ra hồ." },
            { en: "D. Hole is dangerous.", vi: "Hố nguy hiểm lắm." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Trò chuyện] Mẫu câu Caddie chúc khách có kỳ nghỉ cuối tuần vui vẻ:",
        audioText: "Have a wonderful weekend with your family, Sir!", phonetic: "/hæv ə ˈwʌn.dər.fəl ˈwiːk.end wɪð jʊər ˈfæm.əl.i, sɜːr/", translation: "Chúc anh có kỳ nghỉ cuối tuần tuyệt vời bên gia đình ạ!",
        options: [
            { en: "A. Have a wonderful weekend with your family, Sir!", vi: "Chúc anh có kỳ nghỉ cuối tuần tuyệt vời bên gia đình ạ!" },
            { en: "B. Don't go home.", vi: "Đừng về nhà." },
            { en: "C. Weekend is boring.", vi: "Cuối tuần chán lắm." },
            { en: "D. Work hard at weekend.", vi: "Làm việc chăm chỉ cuối tuần đi." }
        ], correct: 0
    },

    // =========================================================================
    // SECTION 1.5: THỰC HÀNH & TÌNH HUỐNG TRÊN SÂN (ON-COURSE DRILLS) - 25 CÂU
    // =========================================================================
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Thực chiến] Tình huống trao gậy sắt cho Golfer và xác nhận sự phù hợp:",
        audioText: "Here is your 5-iron, Sir. Is this the club you need?", phonetic: "/hɪər ɪz jʊər faɪv ˈaɪ.ən, sɜːr. ɪz ðɪs ðə klʌb juː niːd/", translation: "Đây là gậy sắt số 5 của anh ạ. Có đúng gậy anh cần không ạ?",
        options: [
            { en: "A. Here is your 5-iron, Sir. Is this the club you need?", vi: "Đây là gậy sắt số 5 của anh ạ. Có đúng gậy anh cần không ạ?" },
            { en: "B. Take this 5-iron now.", vi: "Cầm lấy gậy số 5 này đi." },
            { en: "C. Is 5-iron okay or not?", vi: "Gậy 5 được hay không?" },
            { en: "D. 5-iron here, hit it.", vi: "Gậy 5 đây, đánh đi." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Thực chiến] Tình huống tư vấn hướng đánh và cảnh báo bẫy cát (Bunker):",
        audioText: "Please aim to the left, there is a bunker on the right.", phonetic: "/pliːz eɪm tə ðə left, ðer ɪz ə ˈbʌŋ.kər ɑːn ðə raɪt/", translation: "Anh ngắm sang bên trái giúp em nhé, có bẫy cát ở bên phải ạ.",
        options: [
            { en: "A. Please aim to the left, there is a bunker on the right.", vi: "Anh ngắm sang bên trái giúp em nhé, có bẫy cát ở bên phải ạ." },
            { en: "B. Hit right into the sand bunker.", vi: "Đánh thẳng vào bẫy cát bên phải." },
            { en: "C. Watch out left, right is clean.", vi: "Chú ý bên trái, bên phải sạch." },
            { en: "D. Aim anywhere you want, Sir.", vi: "Ngắm đâu cũng được ạ." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Thực chiến] Tình huống chủ động chăm sóc khách khi thời tiết nắng nóng:",
        audioText: "The sun is strong today. Would you like some cold water?", phonetic: "/ðə sʌn ɪz strɔːŋ təˈdeɪ. wʊd juː laɪk səm koʊld ˈwɔː.tər/", translation: "Hôm nay nắng to quá. Anh có muốn uống nước lạnh không ạ?",
        options: [
            { en: "A. The sun is strong today. Would you like some cold water?", vi: "Hôm nay nắng to quá. Anh có muốn uống nước lạnh không ạ?" },
            { en: "B. Drink water now, it is hot.", vi: "Uống nước đi, nóng lắm." },
            { en: "C. Do you have water in your bag?", vi: "Trong túi có nước không?" },
            { en: "D. You look thirsty, buy water.", vi: "Trông khát đấy, đi mua nước đi." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Thực chiến] Tình huống khen ngợi ngay lập tức sau cú đánh đẹp của Golfer:",
        audioText: "That is a great shot, Sir!", phonetic: "/ðæt ɪz ə ɡreɪt ʃɑːt, sɜːr/", translation: "Cú đánh tuyệt vời quá anh ơi!",
        options: [
            { en: "A. That is a great shot, Sir!", vi: "Cú đánh tuyệt vời quá anh ơi!" },
            { en: "B. You hit luckily, Sir!", vi: "Anh đánh may mắn thôi ạ!" },
            { en: "C. The ball went fine.", vi: "Bóng đi tạm ổn." },
            { en: "D. Not bad for you.", vi: "Cũng không tệ lắm với anh." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Thực chiến] Mẫu câu hỏi lựa chọn gậy ưu tiên của khách:",
        audioText: "Which club do you prefer, Sir?", phonetic: "/wɪtʃ klʌb duː juː prɪˈfɜːr, sɜːr/", translation: "Anh ưu tiên chọn gậy nào ạ?",
        options: [
            { en: "A. Which club do you prefer, Sir?", vi: "Anh ưu tiên chọn gậy nào ạ?" },
            { en: "B. Whose club is this?", vi: "Gậy này của ai?" },
            { en: "C. Do you like this bag?", vi: "Anh có thích túi này không?" },
            { en: "D. How much is this club?", vi: "Gậy này bao nhiêu tiền?" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Thực chiến] Khi thấy mồ hôi khách ra nhiều, Caddie mời thêm kem chống nắng:",
        audioText: "Do you need more sunscreen, Sir?", phonetic: "/duː juː niːd mɔːr ˈsʌn.skriːn, sɜːr/", translation: "Anh có cần thêm kem chống nắng không ạ?",
        options: [
            { en: "A. Do you need more sunscreen, Sir?", vi: "Anh có cần thêm kem chống nắng không ạ?" },
            { en: "B. Do you buy new hat?", vi: "Anh có mua mũ mới không?" },
            { en: "C. Go under the tree now.", vi: "Vào dưới cây ngay." },
            { en: "D. Sunscreen is expensive.", vi: "Kem chống nắng đắt lắm." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Thực chiến] Mẫu câu Caddie nhắc khách di chuyển bằng xe Buggy lịch sự:",
        audioText: "Please get on the buggy, Sir.", phonetic: "/pliːz ɡet ɑːn ðə ˈbʌɡ.i, sɜːr/", translation: "Mời anh lên xe điện ạ.",
        options: [
            { en: "A. Please get on the buggy, Sir.", vi: "Mời anh lên xe điện ạ." },
            { en: "B. Sit down buggy now.", vi: "Ngồi xuống xe ngay." },
            { en: "C. Jump in car quickly.", vi: "Nhảy vào xe nhanh lên." },
            { en: "D. Drive buggy yourself.", vi: "Tự lái xe đi." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Thực chiến] Khi Golfer đánh bóng vào cỏ rough sâu, Caddie trấn an khách:",
        audioText: "Don't worry, Sir. I will find your ball.", phonetic: "/doʊnt ˈwɜːr.i, sɜːr. aɪ wɪl faɪnd jʊər bɔːl/", translation: "Anh đừng lo lắng ạ. Em sẽ tìm bóng giúp anh.",
        options: [
            { en: "A. Don't worry, Sir. I will find your ball.", vi: "Anh đừng lo lắng ạ. Em sẽ tìm bóng giúp anh." },
            { en: "B. Ball is lost, buy new ball.", vi: "Thôi mất bóng rồi, mua bóng mới đi." },
            { en: "C. Find it yourself.", vi: "Tự tìm đi." },
            { en: "D. You hit very bad.", vi: "Anh đánh tệ quá." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "fill",
        title: "[1.5 Thực chiến] Nghe Caddie hỏi khách dùng khăn lạnh và ĐIỀN TỪ:",
        audioText: "Would you like a wet towel, Sir?", displaySentence: "Would you like a wet _______, Sir?", translation: "Anh có cần dùng một chiếc _______ lạnh không ạ?",
        targetWord: "towel", phonetic: "/ˈtaʊ.əl/", hint: "💡 Gợi ý: Từ gồm 5 ký tự chỉ chiếc khăn."
    },
    {
        lesson: "1", section: "section1.5", type: "fill",
        title: "[1.5 Thực chiến] Nghe Caddie chúc khách may mắn trước cú đánh và ĐIỀN TỪ:",
        audioText: "Good luck with your shot, Sir!", displaySentence: "Good _______ with your shot, Sir!", translation: "Chúc anh _______ mắn với cú đánh ạ!",
        targetWord: "luck", phonetic: "/lʌk/", hint: "💡 Gợi ý: Từ gồm 4 ký tự chỉ sự may mắn."
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Thực chiến] Cảnh báo nhanh Golfer chú ý bẫy cát trước cú đánh, Caddie dùng câu ngắn nào?",
        audioText: "Watch out for the bunker, Sir.", phonetic: "/wɑːtʃ aʊt fɔːr ðə ˈbʌŋ.kər, sɜːr/", translation: "Anh chú ý bẫy cát nhé ạ.",
        options: [
            { en: "A. Watch out for the bunker, Sir.", vi: "Anh chú ý bẫy cát nhé ạ." },
            { en: "B. Look at the sand, Sir.", vi: "Nhìn vào cát đi." },
            { en: "C. Bunker is coming to you.", vi: "Bẫy cát đang đến kìa." },
            { en: "D. Danger sand here.", vi: "Cát nguy hiểm ở đây." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Thực chiến] Khi Golfer ghi được điểm Birdie xuất sắc, Caddie chúc mừng hào hứng:",
        audioText: "Congratulations on your birdie, Sir!", phonetic: "/kənˌɡrætʃ.əˈleɪ.ʃənz ɑːn jʊər ˈbɜːr.di, sɜːr/", translation: "Chúc mừng anh đã đạt điểm Birdie ạ!",
        options: [
            { en: "A. Congratulations on your birdie, Sir!", vi: "Chúc mừng anh đã đạt điểm Birdie ạ!" },
            { en: "B. Birdie is easy.", vi: "Birdie dễ mà." },
            { en: "C. Lucky shot only.", vi: "Đánh may thôi." },
            { en: "D. You can do better next time.", vi: "Lần sau anh làm tốt hơn." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Thực chiến] Khi nhắc Golfer cẩn thận bẫy nước phía sau green, Caddie nói câu nào?",
        audioText: "Please be careful, there is water behind the green, Sir.", phonetic: "/pliːz biː ˈker.fəl, ðer ɪz ˈwɔː.tər bɪˈhaɪnd ðə ɡriːn, sɜːr/", translation: "Anh cẩn thận giúp em, có nước ở phía sau green ạ.",
        options: [
            { en: "A. Please be careful, there is water behind the green, Sir.", vi: "Anh cẩn thận giúp em, có nước phía sau green ạ." },
            { en: "B. Hit straight into the water.", vi: "Đánh thẳng xuống nước đi." },
            { en: "C. Water is clean and safe.", vi: "Nước sạch và an toàn." },
            { en: "D. Don't worry about water.", vi: "Đừng lo về nước." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Thực chiến] Sau khi lau sạch bóng trên Green, Caddie trả lại bóng cho Golfer và nói:",
        audioText: "Your ball is clean now, Sir. Good luck with your putt!", phonetic: "/jʊər bɔːl ɪz kliːn naʊ, sɜːr. ɡʊd lʌk wɪð jʊər pʌt/", translation: "Bóng của anh đã lau sạch rồi ạ. Chúc anh gạt bóng may mắn ạ!",
        options: [
            { en: "A. Your ball is clean now, Sir. Good luck with your putt!", vi: "Bóng đã được lau sạch. Chúc anh gạt bóng may mắn ạ!" },
            { en: "B. Take your dirty ball.", vi: "Cầm lấy bóng bẩn này." },
            { en: "C. Clean ball yourself next time.", vi: "Lần sau tự lau bóng." },
            { en: "D. Ball is too old.", vi: "Bóng cũ quá." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Thực chiến] Hướng dẫn Golfer ngắm đánh thẳng phía trước, Caddie nói câu nào?",
        audioText: "Please hit straight ahead, Sir.", phonetic: "/pliːz hɪt streɪt əˈhed, sɜːr/", translation: "Anh đánh thẳng phía trước giúp em nhé ạ.",
        options: [
            { en: "A. Please hit straight ahead, Sir.", vi: "Anh đánh thẳng phía trước giúp em nhé ạ." },
            { en: "B. Aim left side only.", vi: "Ngắm bên trái thôi." },
            { en: "C. Aim right side only.", vi: "Ngắm bên phải thôi." },
            { en: "D. Hit backward, Sir.", vi: "Đánh ngược về sau." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Thực chiến] Khi thấy dông bão/sấm sét tiến gần, Caddie mời Golfer về nhà câu lạc bộ cho an toàn:",
        audioText: "The storm is coming near. Let's go back to the clubhouse, Sir.", phonetic: "/ðə stɔːrm ɪz ˈkʌm.ɪŋ nɪər. lets ɡoʊ bæk tə ðə ˈklʌb.haʊs, sɜːr/", translation: "Cơn bão đang đến gần rồi ạ. Chúng ta nên quay về nhà câu lạc bộ thưa anh.",
        options: [
            { en: "A. The storm is coming near. Let's go back to the clubhouse, Sir.", vi: "Bão đang đến gần. Chúng ta về nhà câu lạc bộ thôi ạ." },
            { en: "B. Keep playing in the rain.", vi: "Cứ tiếp tục chơi trong mưa." },
            { en: "C. Sit under the tall tree.", vi: "Ngồi dưới cây to." },
            { en: "D. Lightning is not dangerous.", vi: "Sấm sét không nguy hiểm." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Thực chiến] Khuyên Golfer bình tĩnh tập trung trước cú gạt bóng quan trọng:",
        audioText: "Take your time, Sir.", phonetic: "/teɪk jʊər taɪm, sɜːr/", translation: "Anh cứ từ tốn bình tĩnh thôi ạ.",
        options: [
            { en: "A. Take your time, Sir.", vi: "Anh cứ từ tốn bình tĩnh thôi ạ." },
            { en: "B. Hit quickly and go.", vi: "Đánh nhanh lên rồi đi." },
            { en: "C. Hurry up, we are slow.", vi: "Nhanh lên, chúng ta chậm rồi." },
            { en: "D. Don't think too much.", vi: "Đừng suy nghĩ." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Thực chiến] Khi Golfer bị mệt do đi bộ nhiều, Caddie đề nghị hỗ trợ:",
        audioText: "Would you like to sit and rest for a moment, Sir?", phonetic: "/wʊd juː laɪk tə sɪt ænd rest fɔːr ə ˈmoʊ.mənt, sɜːr/", translation: "Anh có muốn ngồi nghỉ ngơi một chút không ạ?",
        options: [
            { en: "A. Would you like to sit and rest for a moment, Sir?", vi: "Anh có muốn ngồi nghỉ ngơi một chút không ạ?" },
            { en: "B. Keep running, Sir.", vi: "Tiếp tục chạy đi anh." },
            { en: "C. You are too weak.", vi: "Anh yếu quá." },
            { en: "D. Walk faster, Sir.", vi: "Đi nhanh lên anh." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Thực chiến] Mẫu câu chủ động đề nghị mang ô che nắng/mưa cho Golfer:",
        audioText: "Would you like an umbrella, Sir?", phonetic: "/wʊd juː laɪk æn ʌmˈbrel.ə, sɜːr/", translation: "Anh có muốn dùng ô che không ạ?",
        options: [
            { en: "A. Would you like an umbrella, Sir?", vi: "Anh có muốn dùng ô che không ạ?" },
            { en: "B. Take umbrella yourself.", vi: "Tự lấy ô đi." },
            { en: "C. Do you buy an umbrella?", vi: "Anh có mua ô không?" },
            { en: "D. Umbrella is heavy.", vi: "Ô nặng lắm." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Thực chiến] Khi khách đánh hỏng một cú đánh, Caddie động viên bằng câu nào?",
        audioText: "Don't worry, Sir! We can recover on the next shot.", phonetic: "/doʊnt ˈwɜːr.i, sɜːr! wiː kæn rɪˈkʌv.ər ɑːn ðə nekst ʃɑːt/", translation: "Anh đừng lo lắng ạ! Cú đánh sau chúng ta sẽ gỡ lại được ạ.",
        options: [
            { en: "A. Don't worry, Sir! We can recover on the next shot.", vi: "Anh đừng lo lắng ạ! Cú đánh sau chúng ta sẽ gỡ lại được ạ." },
            { en: "B. That was a terrible shot!", vi: "Cú đánh tệ quá!" },
            { en: "C. You lost this game.", vi: "Anh thua trận này rồi." },
            { en: "D. Why did you hit like that?", vi: "Sao anh lại đánh như thế?" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "fill",
        title: "[1.5 Thực chiến] Nghe Caddie hỏi khách dùng nước lạnh và ĐIỀN TỪ:",
        audioText: "Would you like some cold water, Sir?", displaySentence: "Would you like some cold _______, Sir?", translation: "Anh có muốn dùng chút _______ lạnh không ạ?",
        targetWord: "water", phonetic: "/ˈwɔː.tər/", hint: "💡 Gợi ý: Từ gồm 5 ký tự chỉ nước."
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Thực chiến] Khi sửa vết bóng cào (Pitch mark) trên Green giúp khách, Caddie nói gì?",
        audioText: "I will repair the pitch mark for you, Sir.", phonetic: "/aɪ wɪl rɪˈper ðə pɪtʃ mɑːrk fɔːr juː, sɜːr/", translation: "Em sẽ sửa vết bóng trên green giúp anh ạ.",
        options: [
            { en: "A. I will repair the pitch mark for you, Sir.", vi: "Em sẽ sửa vết bóng trên green giúp anh ạ." },
            { en: "B. Pitch mark is your fault.", vi: "Vết bóng là lỗi của anh." },
            { en: "C. Repair green yourself.", vi: "Tự sửa green đi." },
            { en: "D. Green is broken.", vi: "Green hỏng rồi." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Thực chiến] Khi cào hố cát (Rake bunker) sau khi khách đánh bóng ra khỏi bẫy cát:",
        audioText: "Let me rake the bunker for you, Sir.", phonetic: "/let miː reɪk ðə ˈbʌŋ.kər fɔːr juː, sɜːr/", translation: "Để em cào bẫy cát giúp anh ạ.",
        options: [
            { en: "A. Let me rake the bunker for you, Sir.", vi: "Để em cào bẫy cát giúp anh ạ." },
            { en: "B. You rake bunker now.", vi: "Anh cào bẫy cát đi." },
            { en: "C. Don't touch sand.", vi: "Đừng chạm vào cát." },
            { en: "D. Sand is messy.", vi: "Cát bừa bộn quá." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Thực chiến] Tình huống nhắc khách chú ý cờ gạt bóng (Pin / Flagstick) trên Green:",
        audioText: "Would you like me to attend the pin, Sir?", phonetic: "/wʊd juː laɪk miː tə əˈtend ðə pɪn, sɜːr/", translation: "Anh có muốn em giữ cờ/rút cờ giúp anh không ạ?",
        options: [
            { en: "A. Would you like me to attend the pin, Sir?", vi: "Anh có muốn em giữ/rút cờ giúp anh không ạ?" },
            { en: "B. Pull pin out now.", vi: "Rút cờ ra ngay." },
            { en: "C. Leave pin alone.", vi: "Cứ để cờ yên." },
            { en: "D. Where is flag?", vi: "Cờ đâu rồi?" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Thực chiến] Lời khuyên Caddie hướng dẫn vị trí đứng an toàn khi khách khác phát bóng:",
        audioText: "Please stand behind the safety line, Sir.", phonetic: "/pliːz stænd bɪˈhaɪnd ðə ˈseɪf.ti laɪn, sɜːr/", translation: "Anh vui lòng đứng sau vạch an toàn giúp em ạ.",
        options: [
            { en: "A. Please stand behind the safety line, Sir.", vi: "Anh vui lòng đứng sau vạch an toàn giúp em ạ." },
            { en: "B. Stand in front of golfer.", vi: "Đứng trước mặt golfer." },
            { en: "C. Run across tee box.", vi: "Chạy qua khu phát bóng." },
            { en: "D. Don't worry about safety.", vi: "Đừng lo về an toàn." }
        ], correct: 0
    }
);

// =========================================================================
// BỔ SUNG CÂU HỎI MỞ RỘNG MỚI (5 CÂU SECTION 1.4 & 5 CÂU SECTION 1.5)
// =========================================================================
window.masterQuizData.push(
    // -------------------------------------------------------------------------
    // BỔ SUNG SECTION 1.4: SỜ THÍCH & TRÒ CHUYỆN GIAO LƯU (5 CÂU MỚI)
    // -------------------------------------------------------------------------
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Trò chuyện] Mẫu câu Caddie hỏi thăm Golfer có hay đi du lịch chơi golf không:",
        audioText: "Do you often travel for golf tournaments, Sir?", 
        phonetic: "/duː juː ˈɑːf.ən ˈtræv.əl fɔːr ɡɑːlf ˈtʊr.nə.mənts, sɜːr/", 
        translation: "Anh có thường xuyên đi du lịch kết hợp thi đấu golf không ạ?",
        options: [
            { en: "A. Do you often travel for golf tournaments, Sir?", vi: "Anh có thường đi du lịch đấu golf không ạ?" },
            { en: "B. Why do you travel so much?", vi: "Tại sao anh đi du lịch nhiều thế?" },
            { en: "C. Is tournament expensive?", vi: "Giải đấu có đắt không?" },
            { en: "D. Do you play golf at home only?", vi: "Anh chỉ chơi golf ở nhà à?" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Trò chuyện] Mẫu câu hỏi thăm cảm nhận của Golfer về không khí thời tiết trên sân:",
        audioText: "How do you feel about the weather today, Sir?", 
        phonetic: "/haʊ duː juː fiːl əˈbaʊt ðə ˈweð.ər təˈdeɪ, sɜːr/", 
        translation: "Anh cảm thấy thời tiết hôm nay thế nào ạ?",
        options: [
            { en: "A. How do you feel about the weather today, Sir?", vi: "Anh cảm thấy thời tiết hôm nay thế nào ạ?" },
            { en: "B. Weather is bad today.", vi: "Thời tiết hôm nay tệ." },
            { en: "C. Why is it hot today?", vi: "Tại sao hôm nay lại nóng?" },
            { en: "D. Rain is coming, go home.", vi: "Mưa đến rồi, về đi." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Trò chuyện] Mẫu câu Caddie hỏi về địa điểm ăn uống ưa thích của khách sau giờ chơi:",
        audioText: "Where do you usually have lunch after playing, Sir?", 
        phonetic: "/wer duː juː ˈjuː.ʒu.ə.li hæv lʌntʃ ˈæf.tər ˈpleɪ.ɪŋ, sɜːr/", 
        translation: "Anh thường dùng bữa trưa ở đâu sau khi chơi xong ạ?",
        options: [
            { en: "A. Where do you usually have lunch after playing, Sir?", vi: "Anh thường ăn trưa ở đâu sau khi chơi xong ạ?" },
            { en: "B. Eat lunch now, Sir.", vi: "Ăn trưa ngay đi anh." },
            { en: "C. Do you buy lunch for me?", vi: "Anh có mua cơm trưa cho em không?" },
            { en: "D. Don't eat lunch here.", vi: "Đừng ăn trưa ở đây." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.4", type: "fill",
        title: "[1.4 Sở thích] Nghe Golfer nói về môn thể thao yêu thích ngoài golf và ĐIỀN TỪ:",
        audioText: "I like playing tennis with my friends.", 
        displaySentence: "I like playing _______ with my friends.", 
        translation: "Tôi thích chơi _______ cùng với bạn bè.",
        targetWord: "tennis", phonetic: "/ˈten.ɪs/", hint: "💡 Gợi ý: Từ gồm 6 ký tự chỉ môn quần vợt."
    },
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Trò chuyện] Mẫu câu Caddie khen ngợi kỹ năng đánh bóng bền bỉ của khách:",
        audioText: "You have a very consistent swing, Sir!", 
        phonetic: "/juː hæv ə ˈver.i kənˈsɪs.tənt swɪŋ, sɜːr/", 
        translation: "Anh có cú swing rất ổn định và đều tay ạ!",
        options: [
            { en: "A. You have a very consistent swing, Sir!", vi: "Anh có cú swing rất ổn định ạ!" },
            { en: "B. Your swing is lucky.", vi: "Cú swing của anh may mắn thôi." },
            { en: "C. Hit hard now.", vi: "Đánh mạnh lên." },
            { en: "D. Swing again please.", vi: "Thử swing lại đi." }
        ], correct: 0
    },

    // -------------------------------------------------------------------------
    // BỔ SUNG SECTION 1.5: THỰC HÀNH & TÌNH HUỐNG TRÊN SÂN (5 CÂU MỚI)
    // -------------------------------------------------------------------------
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Thực chiến] Tình huống Caddie nhắc khách cẩn thận vùng cỏ rậm (Rough) trước mặt:",
        audioText: "Watch out for the thick rough on the left, Sir.", 
        phonetic: "/wɑːtʃ aʊt fɔːr ðə θɪk rʌf ɑːn ðə left, sɜːr/", 
        translation: "Anh chú ý khu vực cỏ rậm bên trái nhé ạ.",
        options: [
            { en: "A. Watch out for the thick rough on the left, Sir.", vi: "Anh chú ý khu vực cỏ rậm bên trái nhé ạ." },
            { en: "B. Hit into the rough, Sir.", vi: "Đánh vào khu cỏ rậm đi anh." },
            { en: "C. Rough is easy to play.", vi: "Cỏ rậm dễ đánh lắm." },
            { en: "D. Don't worry about rough.", vi: "Đừng lo về cỏ rậm." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Thực chiến] Khi chủ động đề nghị lau vết bẩn trên mặt gậy cho Golfer:",
        audioText: "Shall I clean your club face, Sir?", 
        phonetic: "/ʃæl aɪ kliːn jʊər klʌb feɪs, sɜːr/", 
        translation: "Em lau mặt gậy giúp anh nhé ạ?",
        options: [
            { en: "A. Shall I clean your club face, Sir?", vi: "Em lau mặt gậy giúp anh nhé ạ?" },
            { en: "B. Clean club yourself.", vi: "Tự lau gậy đi." },
            { en: "C. Club is dirty, buy new club.", vi: "Gậy bẩn rồi, mua gậy mới đi." },
            { en: "D. Don't touch the club.", vi: "Đừng chạm vào gậy." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Thực chiến] Tình huống báo cho khách bóng đã lên Green an toàn:",
        audioText: "Great shot Sir, your ball is on the green!", 
        phonetic: "/ɡreɪt ʃɑːt sɜːr, jʊər bɔːl ɪz ɑːn ðə ɡriːn/", 
        translation: "Cú đánh tuyệt vời thưa anh, bóng đã lên green rồi ạ!",
        options: [
            { en: "A. Great shot Sir, your ball is on the green!", vi: "Cú đánh tuyệt vời, bóng đã lên green rồi ạ!" },
            { en: "B. Ball is lost, Sir.", vi: "Bóng bị mất rồi anh." },
            { en: "C. Ball went into the water.", vi: "Bóng rơi xuống nước rồi." },
            { en: "D. Short of the green, Sir.", vi: "Thiếu lực chưa lên green ạ." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "fill",
        title: "[1.5 Thực chiến] Nghe Caddie hỏi khách về khoảng cách đến hố và ĐIỀN TỪ:",
        audioText: "It is ninety yards to the flag, Sir.", 
        displaySentence: "It is _______ yards to the flag, Sir.", 
        translation: "Khoảng cách tới cờ là _______ yard ạ.",
        targetWord: "90", phonetic: "/ˈnaɪn.ti/", hint: "💡 Gợi ý: Nhập số (90)."
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Thực chiến] Mẫu câu Caddie thông báo đường gạt bóng (Line) hơi đổ sang phải trên Green:",
        audioText: "The line breaks slightly to the right, Sir.", 
        phonetic: "/ðə laɪn breɪks ˈslaɪt.li tə ðə raɪt, sɜːr/", 
        translation: "Đường gạt này hơi ngả/đổ sang bên phải một chút ạ.",
        options: [
            { en: "A. The line breaks slightly to the right, Sir.", vi: "Đường gạt này hơi đổ sang phải một chút ạ." },
            { en: "B. Aim left to miss right.", vi: "Ngắm trái để trượt phải." },
            { en: "C. Hit as hard as you can.", vi: "Gạt mạnh nhất có thể." },
            { en: "D. Green is straight only.", vi: "Green này đánh thẳng thôi." }
        ], correct: 0
    }
);
