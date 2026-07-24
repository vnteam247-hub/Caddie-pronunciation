// =========================================================================
// LESSON 1: BASIC COMMUNICATION & FIRST IMPRESSION FOR CADDY
// File: lesson1.js
// =========================================================================

// Đảm bảo mảng masterQuizData luôn được khởi tạo an toàn
if (typeof window.masterQuizData === 'undefined') {
    window.masterQuizData = [];
}

// NẠP TÀI NGUYÊN TỔNG HỢP MỞ RỘNG LESSON 1 (ĐÃ CHUẨN HÓA & LÀM SẠCH)
window.masterQuizData.push(
    // =========================================================================
    // SECTION 1.1: BẢNG CHỮ CÁI TIẾNG ANH & ĐÁNH VẦN (ALPHABET & SPELLING)
    // =========================================================================
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Bảng chữ cái] Khi Golfer đánh vần 'T-I-T-L-E-I-S-T', chữ cái 'I' phát âm IPA chuẩn là gì?",
        audioText: "Titleist", phonetic: "/ˈtaɪ.təl.ɪst/", translation: "Thương hiệu bóng Titleist",
        options: [{ en: "A. /aɪ/", vi: "/aɪ/" }, { en: "B. /iː/", vi: "/iː/" }, { en: "C. /eɪ/", vi: "/eɪ/" }, { en: "D. /ɛ/", vi: "/ɛ/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.1", type: "mcq",
        title: "[1.1 Bảng chữ cái] Để không nhầm chữ 'P' với 'B' khi đàm thoại bộ đàm, Caddy dùng chuẩn NATO nào?",
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
        title: "[1.1 Bảng chữ cái] Nghe Caddy tự giới thiệu tên và ĐIỀN TÊN CƠ BẢN:",
        audioText: "Hello Sir, my name is Rose.", displaySentence: "Caddy's name is _______.", translation: "Tên của Caddy là _______.",
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
        title: "[1.1 Phát âm] Khi đưa gậy gạt cho khách, Caddy phát âm từ 'Putter' như thế nào?",
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
        title: "[1.1 Bảng chữ cái] Nghe Caddy đánh vần tên mình và ĐIỀN TÊN VÀO Ô TRỐNG:",
        audioText: "My name is Anna.", displaySentence: "Caddy's name is _______.", translation: "Tên Caddy là _______.",
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
        title: "[1.1 Bảng chữ cái] Nghe Caddy tự giới thiệu tên và ĐIỀN TÊN:",
        audioText: "I am Mary.", displaySentence: "Caddy's name is _______.", translation: "Tên Caddy là _______.",
        targetWord: "mary", phonetic: "/ˈmer.i/", hint: "💡 Gợi ý: Tên gồm 4 ký tự."
    },

    // =========================================================================
    // SECTION 1.2: GIỚI THIỆU BẢN THÂN & NGHI THỨC CHÀO HỎI (SELF-INTRODUCTION)
    // =========================================================================
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Giới thiệu] Lời chào mừng chuyên nghiệp của Caddy tại sân gôn Golden Sands Golf Resort:",
        audioText: "Good morning, Sir! Welcome to Golden Sands Golf Resort.", phonetic: "/ɡʊd ˈmɔːr.nɪŋ, sɜːr! ˈwel.kəm tə ˈɡoʊl.dən sændz ɡɑːlf rɪˈzɔːrt/", translation: "Chào buổi sáng anh! Chào mừng anh đến với Golden Sands Golf Resort.",
        options: [
            { en: "A. Good morning, Sir! Welcome to Golden Sands Golf Resort.", vi: "Chào buổi sáng anh! Chào mừng anh đến với Golden Sands Golf Resort." },
            { en: "B. Good morning, Sir! Please give me your golf bag.", vi: "Chào buổi sáng anh! Cho em xin túi gậy ạ." },
            { en: "C. Hello Sir! Are you ready to play now?", vi: "Chào anh! Anh sẵn sàng chơi chưa ạ?" },
            { en: "D. Morning Sir, let's go quickly to the tee box.", vi: "Chào buổi sáng, mình ra tee box nhanh thôi ạ." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Giới thiệu] Mẫu câu Caddy giới thiệu số hiệu caddy và vị trí hỗ trợ khách:",
        audioText: "My caddy number is 214. I am your Caddy today, I am here to assist you.", phonetic: "/maɪ ˈkæd.i ˈnʌm.bər ɪz tuː wʌn fɔːr. aɪ æm jʊər ˈkæd.i təˈdeɪ, aɪ æm hɪər tə əˈsɪst juː/", translation: "Số caddy của em là 214. Em là Caddy của anh hôm nay, em ở đây để hỗ trợ anh ạ.",
        options: [
            { en: "A. My caddy number is 214. I am your Caddy today, I am here to assist you.", vi: "Số caddy của em là 214. Em là Caddy của anh hôm nay, em ở đây để hỗ trợ anh ạ." },
            { en: "B. I am caddy 214, I will carry your bag today.", vi: "Em là caddy 214, vác túi cho anh hôm nay ạ." },
            { en: "C. My name is Caddy 214, let's go.", vi: "Tên em là Caddy 214, đi thôi ạ." },
            { en: "D. Caddy 214 ready to support.", vi: "Caddy 214 sẵn sàng hỗ trợ ạ." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Giới thiệu] Mẫu câu hỏi lịch sự xem đây có phải lần đầu Golfer trải nghiệm sân:",
        audioText: "Is this your first time playing at our course, Sir?", phonetic: "/ɪz ðɪs jʊər fɜːrst taɪm ˈpleɪ.ɪŋ æt aʊər kɔːrs, sɜːr/", translation: "Đây có phải lần đầu anh chơi tại sân của chúng em không ạ?",
        options: [
            { en: "A. Is this your first time playing at our course, Sir?", vi: "Đây có phải lần đầu anh chơi tại sân của chúng em không ạ?" },
            { en: "B. Have you played golf before, Sir?", vi: "Anh đã từng chơi golf trước đây chưa ạ?" },
            { en: "C. Do you know this course layout, Sir?", vi: "Anh có biết sơ đồ sân này không ạ?" },
            { en: "D. Did you play at another golf resort before?", vi: "Anh có chơi ở khu nghỉ dưỡng golf khác trước đây chưa ạ?" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Giới thiệu] Khi khách hỏi 'How are you today?', Caddy trả lời lịch sự nhất là gì?",
        audioText: "I am very well, thank you, Sir! How are you today?", phonetic: "/aɪ æm ˈver.i wel, θæŋk juː, sɜːr! haʊ ɑːr juː təˈdeɪ/", translation: "Em rất khỏe, cảm ơn anh! Hôm nay anh thế nào ạ?",
        options: [
            { en: "A. I am very well, thank you, Sir! How are you today?", vi: "Em rất khỏe, cảm ơn anh! Hôm nay anh thế nào ạ?" },
            { en: "B. I am fine, thank you. Let me carry your bag.", vi: "Em khỏe, cảm ơn anh. Để em vác túi cho anh ạ." },
            { en: "C. Not bad today, thank you Sir.", vi: "Hôm nay không tệ lắm, cảm ơn anh ạ." },
            { en: "D. Very good, hope we have a nice game.", vi: "Rất tốt, hy vọng chúng ta có trận đánh hay ạ." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Giới thiệu] Mẫu câu chúc Golfer có một vòng chơi tuyệt vời trước khi phát bóng:",
        audioText: "Have a great game today, Sir!", phonetic: "/hæv ə ɡreɪt ɡeɪm təˈdeɪ, sɜːr/", translation: "Chúc anh có một trận đấu tuyệt vời hôm nay ạ!",
        options: [
            { en: "A. Have a great game today, Sir!", vi: "Chúc anh có một trận đấu tuyệt vời hôm nay ạ!" },
            { en: "B. Good luck to you on every hole, Sir!", vi: "Chúc anh may mắn ở mọi hố đấu ạ!" },
            { en: "C. Hope you score well today, Sir!", vi: "Hy vọng hôm nay anh ghi điểm tốt ạ!" },
            { en: "D. Wish you a nice round of golf, Sir!", vi: "Chúc anh có một vòng golf vui vẻ ạ!" }
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
        options: [{ en: "A. Sir / Ma'am", vi: "Sir (Nam) / Ma'am (Nữ)" }, { en: "B. Mister / Missis", vi: "Mister / Missis" }, { en: "C. Mister / Lady", vi: "Mister / Lady" }, { en: "D. Gentleman / Lady", vi: "Gentleman / Lady" }], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Giới thiệu] Mẫu câu Caddy hỏi kinh nghiệm Golfer chơi golf một cách tế nhị:",
        audioText: "How long have you been playing golf, Sir?", phonetic: "/haʊ lɑːŋ hæv juː biːn ˈpleɪ.ɪŋ ɡɑːlf, sɜːr/", translation: "Anh chơi môn golf này được bao lâu rồi ạ?",
        options: [
            { en: "A. How long have you been playing golf, Sir?", vi: "Anh chơi golf được bao lâu rồi ạ?" },
            { en: "B. How many years do you play golf, Sir?", vi: "Mấy năm anh chơi golf rồi ạ?" },
            { en: "C. Are you an experienced golfer, Sir?", vi: "Anh là golfer nhiều kinh nghiệm phải không ạ?" },
            { en: "D. Did you practice golf for a long time?", vi: "Anh tập golf lâu chưa ạ?" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Giới thiệu] Khi giới thiệu chức danh bản thân, Caddy phát âm từ 'Caddy' chuẩn IPA là gì?",
        audioText: "I am your Caddy today.", phonetic: "/aɪ æm jʊər ˈkæd.i təˈdeɪ/", translation: "Em là Caddy của anh hôm nay.",
        options: [{ en: "A. /ˈkæd.i/", vi: "/ˈkæd.i/" }, { en: "B. /ˈkɑː.di/", vi: "/ˈkɑː.di/" }, { en: "C. /ˈked.i/", vi: "/ˈked.i/" }, { en: "D. /kædˈdiː/", vi: "/kædˈdiː/" }], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Giới thiệu] Câu hỏi tư vấn của Caddy giúp xác định vị trí phát bóng chuẩn cho khách:",
        audioText: "Which tee box do you play today, Sir?", phonetic: "/wɪtʃ tiː bɑːks duː juː pleɪ təˈdeɪ, sɜːr/", translation: "Hôm nay anh phát bóng ở tee nào ạ?",
        options: [
            { en: "A. Which tee box do you play today, Sir?", vi: "Hôm nay anh phát bóng ở tee nào ạ?" },
            { en: "B. What color tee box do you prefer, Sir?", vi: "Anh thích phát bóng ở tee màu gì ạ?" },
            { en: "C. Where would you like to tee off, Sir?", vi: "Anh muốn phát bóng ở đâu ạ?" },
            { en: "D. Are we playing from the blue tee, Sir?", vi: "Chúng ta phát bóng từ tee xanh phải không ạ?" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Giới thiệu] Mẫu câu Caddy sẵn sàng lắng nghe chỉ dẫn về thói quen đánh của khách:",
        audioText: "Please let me know if you have any special requirements, Sir.", phonetic: "/pliːz let miː noʊ ɪf juː hæv ˈen.i ˈspeʃ.əl rɪˈkwaɪər.mənts, sɜːr/", translation: "Anh có yêu cầu đặc biệt nào xin cứ dặn em nhé ạ.",
        options: [
            { en: "A. Please let me know if you have any special requirements, Sir.", vi: "Anh có yêu cầu đặc biệt nào xin dặn em nhé ạ." },
            { en: "B. Please tell me your playing habits, Sir.", vi: "Vui lòng cho em biết thói quen chơi của anh ạ." },
            { en: "C. Do you have any preferences for clubs, Sir?", vi: "Anh có ưu tiên gậy nào không ạ?" },
            { en: "D. Feel free to instruct me on the course, Sir.", vi: "Xin cứ tự nhiên chỉ dẫn em trên sân ạ." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Giới thiệu] Khi khách khen 'Nice to meet you', Caddy đáp lại lịch sự nhất là:",
        audioText: "Nice to meet you too, Sir!", phonetic: "/naɪs tə miːt juː tuː, sɜːr/", translation: "Rất hân hạnh được gặp anh ạ!",
        options: [
            { en: "A. Nice to meet you too, Sir!", vi: "Rất hân hạnh được gặp anh ạ!" },
            { en: "B. Pleasure to meet you as well, Sir!", vi: "Vinh hạnh được gặp anh ạ!" },
            { en: "C. Glad to meet you today, Sir!", vi: "Vui mừng được gặp anh hôm nay ạ!" },
            { en: "D. Thank you, nice meeting you, Sir!", vi: "Cảm ơn, rất vui được gặp anh ạ!" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Giới thiệu] Mẫu câu chủ động nhận túi gậy từ khách tại khu vực tập trung:",
        audioText: "May I take your golf bag, Sir?", phonetic: "/meɪ aɪ teɪk jʊər ɡɑːlf bæɡ, sɜːr/", translation: "Cho phép em xin túi gậy của anh ạ?",
        options: [
            { en: "A. May I take your golf bag, Sir?", vi: "Cho phép em xin túi gậy của anh ạ?" },
            { en: "B. Let me carry your golf bag for you, Sir.", vi: "Để em xách túi gậy cho anh nhé ạ." },
            { en: "C. Can I assist you with your golf bag, Sir?", vi: "Em hỗ trợ túi gậy cho anh được không ạ?" },
            { en: "D. Shall I load your bag onto the buggy, Sir?", vi: "Em xếp túi của anh lên xe điện nhé ạ?" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Giới thiệu] Mẫu câu kiểm tra tên khách trên thẻ túi (Bag tag):",
        audioText: "Is this Mr. Arthur's bag, Sir?", phonetic: "/ɪz ðɪs ˈmɪs.tər ˈɑːr.θərz bæɡ, sɜːr/", translation: "Dạ đây có phải túi gậy của anh Arthur không ạ?",
        options: [
            { en: "A. Is this Mr. Arthur's bag, Sir?", vi: "Dạ đây có phải túi gậy của anh Arthur không ạ?" },
            { en: "B. May I check the name on this bag tag, Sir?", vi: "Em xin phép kiểm tra tên trên thẻ túi nhé ạ?" },
            { en: "C. Does this bag belong to Mr. Arthur, Sir?", vi: "Túi này thuộc về ông Arthur phải không ạ?" },
            { en: "D. Is this your golf bag, Mr. Arthur?", vi: "Đây là túi gậy của anh phải không, anh Arthur?" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "fill",
        title: "[1.2 Giới thiệu] Nghe Caddy xin phép hỗ trợ và ĐIỀN TỪ:",
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
        title: "[1.2 Giới thiệu] Kết thúc vòng chơi, Caddy gửi lời chào tạm biệt lịch sự như thế nào?",
        audioText: "Thank you very much, Sir! Hope to see you again!", phonetic: "/θæŋk juː ˈver.i mʌtʃ, sɜːr! hoʊp tə siː juː əˈɡen/", translation: "Cảm ơn anh rất nhiều ạ! Hy vọng sớm gặp lại anh!",
        options: [
            { en: "A. Thank you very much, Sir! Hope to see you again!", vi: "Cảm ơn anh rất nhiều ạ! Hy vọng sớm gặp lại anh!" },
            { en: "B. Thank you for playing today, Sir! Have a safe trip home.", vi: "Cảm ơn anh đã chơi hôm nay! Chúc anh thượng lộ bình an ạ." },
            { en: "C. Thank you Sir, hope you enjoyed your time with us.", vi: "Cảm ơn anh, hy vọng anh tận hưởng thời gian ở sân ạ." },
            { en: "D. Goodbye Sir, see you next time!", vi: "Tạm biệt anh, hẹn gặp lại lần sau ạ!" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Giới thiệu] Khi bàn giao túi gậy đã làm sạch hoàn tất cuối buổi chơi, Caddy nói câu nào?",
        audioText: "Here is your golf bag, Sir. All clubs are clean.", phonetic: "/hɪər ɪz jʊər ɡɑːlf bæɡ, sɜːr. ɔːl klʌbz ɑːr kliːn/", translation: "Túi gậy của anh đây ạ. Tất cả gậy đã được lau sạch.",
        options: [
            { en: "A. Here is your golf bag, Sir. All clubs are clean.", vi: "Túi gậy của anh đây ạ. Tất cả gậy đã được lau sạch." },
            { en: "B. I have cleaned all your clubs, Sir. Please check your bag.", vi: "Em đã lau sạch gậy rồi ạ. Anh kiểm tra lại túi nhé." },
            { en: "C. Your golf bag is ready, Sir. All equipment is accounted for.", vi: "Túi gậy đã sẵn sàng ạ. Đủ mọi đồ dùng rồi ạ." },
            { en: "D. Here are your clubs, Sir. Everything is wiped down.", vi: "Gậy của anh đây ạ. Mọi thứ đã được lau khô." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Cảm ơn] Khi Golfer khen 'You did a great job today!', Caddy đáp lại thế nào?",
        audioText: "It was my pleasure serving you today, Sir!", phonetic: "/ɪt wʌz maɪ ˈpleʒ.ər ˈsɜːr.vɪŋ juː təˈdeɪ, sɜːr/", translation: "Rất hân hạnh được phục vụ anh hôm nay ạ!",
        options: [
            { en: "A. It was my pleasure serving you today, Sir!", vi: "Rất hân hạnh được phục vụ anh hôm nay ạ!" },
            { en: "B. Thank you so much for your kind words, Sir!", vi: "Cảm ơn lời khen của anh rất nhiều ạ!" },
            { en: "C. I'm very glad to hear that, Sir!", vi: "Em rất vui khi nghe điều đó ạ!" },
            { en: "D. Thank you Sir, I tried my best today!", vi: "Cảm ơn anh, em đã cố gắng hết sức hôm nay ạ!" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Giới thiệu] Mẫu câu thể hiện thái độ sẵn sàng hỗ trợ khách suốt buổi chơi:",
        audioText: "I am ready whenever you are, Sir.", phonetic: "/aɪ æm ˈred.i wenˈev.ər juː ɑːr, sɜːr/", translation: "Dạ em đã sẵn sàng bất cứ khi nào anh muốn ạ.",
        options: [
            { en: "A. I am ready whenever you are, Sir.", vi: "Dạ em đã sẵn sàng bất cứ khi nào anh muốn ạ." },
            { en: "B. Whenever you are set, we can start, Sir.", vi: "Khi nào anh chuẩn bị xong, mình bắt đầu ạ." },
            { en: "C. Just let me know when you want to proceed, Sir.", vi: "Cứ báo em khi nào anh muốn tiếp tục nhé ạ." },
            { en: "D. I'm fully prepared for our round today, Sir.", vi: "Em đã chuẩn bị hoàn toàn cho trận đấu hôm nay ạ." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Giới thiệu] Khi khách trao cho Caddy thẻ nhận túi (Bag Claim Tag), Caddy nói gì?",
        audioText: "Thank you Sir, I will pick up your bag right away.", phonetic: "/θæŋk juː sɜːr, aɪ wɪl pɪk ʌp jʊər bæɡ raɪt əˈweɪ/", translation: "Cảm ơn anh, em sẽ đi lấy túi gậy cho anh ngay ạ.",
        options: [
            { en: "A. Thank you Sir, I will pick up your bag right away.", vi: "Cảm ơn anh, em sẽ đi lấy túi gậy cho anh ngay ạ." },
            { en: "B. Thank you Sir, please wait a moment while I fetch your bag.", vi: "Cảm ơn anh, xin chờ chút em đi lấy túi ạ." },
            { en: "C. I got your tag, Sir. I'll get your equipment now.", vi: "Em nhận thẻ rồi ạ. Em đi lấy gậy ngay đây ạ." },
            { en: "D. Thank you Sir, I will retrieve your bag from storage.", vi: "Cảm ơn anh, em sẽ lấy túi ra từ kho ạ." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Giới thiệu] Mẫu câu Caddy chủ động hỏi tên khách để tiện xưng hô tôn trọng:",
        audioText: "May I have your name, Sir?", phonetic: "/meɪ aɪ hæv jʊər neɪm, sɜːr/", translation: "Dạ cho phép em được biết tên của anh ạ?",
        options: [
            { en: "A. May I have your name, Sir?", vi: "Cho phép em được biết tên của anh ạ?" },
            { en: "B. Could you tell me your name, Sir?", vi: "Anh có thể cho em biết tên anh được không ạ?" },
            { en: "C. How should I address you today, Sir?", vi: "Em nên xưng hô với anh thế nào hôm nay ạ?" },
            { en: "D. May I ask who I am caddying for today, Sir?", vi: "Cho em hỏi hôm nay em làm caddy cho ai ạ?" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Giới thiệu] Mẫu câu chúc khách có trải nghiệm chơi bóng vui vẻ:",
        audioText: "Enjoy your game today, Sir!", phonetic: "/ɪnˈdʒɔɪ jʊər ɡeɪm təˈdeɪ, sɜːr/", translation: "Chúc anh có một trận đánh thật vui vẻ hôm nay ạ!",
        options: [
            { en: "A. Enjoy your game today, Sir!", vi: "Chúc anh có một trận đánh thật vui vẻ hôm nay ạ!" },
            { en: "B. Wish you a wonderful time on the course, Sir!", vi: "Chúc anh có thời gian tuyệt vời trên sân ạ!" },
            { en: "C. Hope you have a fun round of golf today, Sir!", vi: "Hy vọng anh có vòng chơi golf vui vẻ ạ!" },
            { en: "D. Have fun and play well today, Sir!", vi: "Chúc anh chơi vui và đánh tốt hôm nay ạ!" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "fill",
        title: "[1.2 Giới thiệu] Nghe Caddy chào mừng khách đến sân gôn Golden Sands và ĐIỀN TỪ:",
        audioText: "Welcome to Golden Sands Golf Club, Sir!", displaySentence: "Welcome to Golden Sands Golf _______, Sir!", translation: "Chào mừng anh đến với Câu lạc bộ _______ Golden Sands Golf!",
        targetWord: "club", phonetic: "/klʌb/", hint: "💡 Gợi ý: Từ gồm 4 ký tự nghĩa là Câu lạc bộ."
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Giới thiệu] Mẫu câu Caddy hỏi khách về thói quen có đi xe điện (Buggy) hay không:",
        audioText: "Do you use a buggy today, Sir?", phonetic: "/duː juː juːz ə ˈbʌɡ.i təˈdeɪ, sɜːr/", translation: "Hôm nay anh có dùng xe điện không ạ?",
        options: [
            { en: "A. Do you use a buggy today, Sir?", vi: "Hôm nay anh có dùng xe điện không ạ?" },
            { en: "B. Will you be riding a golf cart today, Sir?", vi: "Hôm nay anh sẽ đi xe điện chứ ạ?" },
            { en: "C. Would you prefer walking or using a buggy, Sir?", vi: "Anh thích đi bộ hay đi xe điện hơn ạ?" },
            { en: "D. Are we taking a cart for this round, Sir?", vi: "Vòng này chúng ta có lấy xe điện không ạ?" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Giới thiệu] Lời đáp lại lịch sự khi khách nói 'Thank you for your service':",
        audioText: "You are very welcome, Sir!", phonetic: "/juː ɑːr ˈver.i ˈwel.kəm, sɜːr/", translation: "Dạ không có gì đâu ạ!",
        options: [
            { en: "A. You are very welcome, Sir!", vi: "Dạ không có gì đâu ạ!" },
            { en: "B. My pleasure, Sir!", vi: "Vinh hạnh của em ạ!" },
            { en: "C. Happy to help you, Sir!", vi: "Rất vui được hỗ trợ anh ạ!" },
            { en: "D. Don't mention it, Sir!", vi: "Không có gì đâu ạ!" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Giới thiệu] Mẫu câu Caddy trấn an khi khách đến hơi muộn giờ phát bóng (Tee time):",
        audioText: "Don't worry Sir, we still have enough time for tee off.", phonetic: "/doʊnt ˈwɜːr.i sɜːr, wiː stɪl hæv ɪˈnʌf taɪm fɔːr tiː ɑːf/", translation: "Anh đừng lo ạ, chúng ta vẫn đủ thời gian chuẩn bị phát bóng ạ.",
        options: [
            { en: "A. Don't worry Sir, we still have enough time for tee off.", vi: "Anh đừng lo ạ, chúng ta vẫn đủ thời gian chuẩn bị phát bóng ạ." },
            { en: "B. Take it easy Sir, we can still make our tee time.", vi: "Anh cứ bình tĩnh ạ, mình vẫn kịp giờ phát bóng ạ." },
            { en: "C. No problem Sir, everything is ready for you to tee off.", vi: "Không sao đâu ạ, mọi thứ đã sẵn sàng để anh phát bóng ạ." },
            { en: "D. Relax Sir, we have plenty of time before start.", vi: "Anh thư giãn đi ạ, còn nhiều thời gian trước khi khởi hành ạ." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "mcq",
        title: "[1.2 Giới thiệu] Lời nhắc nhở tinh tế của Caddy trước khi nhóm khởi hành:",
        audioText: "Are we ready to start, Sir?", phonetic: "/ɑːr wiː ˈred.i tə stɑːrt, sɜːr/", translation: "Dạ chúng ta sẵn sàng bắt đầu chưa ạ?",
        options: [
            { en: "A. Are we ready to start, Sir?", vi: "Dạ chúng ta sẵn sàng bắt đầu chưa ạ?" },
            { en: "B. Shall we head to the first tee, Sir?", vi: "Chúng ta ra đường tee số 1 nhé ạ?" },
            { en: "C. Is everyone ready to tee off, Sir?", vi: "Mọi người đã sẵn sàng phát bóng chưa ạ?" },
            { en: "D. Would you like to proceed to hole 1 now, Sir?", vi: "Anh có muốn di chuyển ra hố 1 bây giờ chưa ạ?" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.2", type: "fill",
        title: "[1.2 Giới thiệu] Nghe Caddy chúc khách có ngày thi đấu gặp nhiều may mắn:",
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
        title: "[1.3 Số đếm] Caddy nghe Golfer nói cần gậy góc 60 độ. Số '60' có trọng âm rơi vào đâu?",
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
        title: "[1.3 Số đếm] Caddy kiểm đếm thấy túi có 14 cây gậy. Số '14' đọc là gì?",
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
        title: "[1.3 Số đếm] Caddy đọc số hố, số 9 phát âm IPA chuẩn là gì?",
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
        title: "[1.3 Thiết bị] Máy đo khoảng cách bằng laser của Caddy phát âm IPA là gì?",
        audioText: "Let me check with my rangefinder.", phonetic: "/let miː tʃek wɪð maɪ ˈreɪndʒˌfaɪn.dər/", translation: "Để em kiểm tra bằng máy đo khoảng cách.",
        options: [{ en: "A. Rangefinder /ˈreɪndʒˌfaɪn.dər/", vi: "Rangefinder" }, { en: "B. Laser Watch", vi: "Đồng hồ laser" }, { en: "C. Meter", vi: "Thước đo" }, { en: "D. Distance Binocular", vi: "Ống nhòm" }], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "mcq",
        title: "[1.3 Số đếm & Gậy] Khi kiểm gậy thấy thiếu gậy trong túi khách, Caddy báo khách thế nào?",
        audioText: "Excuse me Sir, there are only 13 clubs in your bag. Please check.", phonetic: "/ɪkˈskjuːz miː sɜːr, ðer ɑːr ˈoʊn.li ˌθɜːrˈtiːn klʌbz ɪn jʊər bæɡ. pliːz tʃek/", translation: "Xin lỗi anh, trong túi chỉ có 13 cây gậy thôi ạ. Anh kiểm tra giúp em.",
        options: [
            { en: "A. Excuse me Sir, there are only 13 clubs in your bag. Please check.", vi: "Xin lỗi anh, trong túi chỉ có 13 cây gậy thôi ạ. Anh kiểm tra giúp em." },
            { en: "B. You lost one club already, Sir!", vi: "Anh bị mất 1 cây gậy rồi đấy ạ!" },
            { en: "C. Where is your missing club, Sir?", vi: "Cây gậy bị thiếu của anh ở đâu ạ?" },
            { en: "D. Your bag only has 13 clubs today, Sir.", vi: "Túi của anh hôm nay chỉ có 13 gậy thôi ạ." }
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
        title: "[1.3 Khoảng cách] Nghe Caddy báo khoảng cách tới cờ và chọn ĐÁP ÁN:",
        audioText: "It is 180 yards to the pin, Sir.", phonetic: "/ɪt ɪz wʌn ˈhʌn.drəd ænd ˈeɪ.ti jɑːrdz tə ðə pɪn, sɜːr/", translation: "Khoảng cách tới cờ là 180 yard ạ.",
        options: [{ en: "A. 180 yards", vi: "180 yard" }, { en: "B. 108 yards", vi: "108 yard" }, { en: "C. 80 yards", vi: "80 yard" }, { en: "D. 118 yards", vi: "118 yard" }], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "fill",
        title: "[1.3 Số đếm] Nghe Caddy báo số hố gôn và ĐIỀN SỐ CƠ BẢN:",
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
        title: "[1.3 Khoảng cách] Caddy báo khoảng cách còn lại, số '70' phát âm chuẩn là gì?",
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
        title: "[1.3 Khoảng cách] Nghe Caddy báo khoảng cách và chọn ĐÁP ÁN:",
        audioText: "It is two hundred yards from the tee, Sir.", phonetic: "/ɪt ɪz tuː ˈhʌn.drəd jɑːrdz frəm ðə tiː, sɜːr/", translation: "Từ tee đến đây là 200 yard thưa anh.",
        options: [{ en: "A. 200 yards", vi: "200 yard" }, { en: "B. 120 yards", vi: "120 yard" }, { en: "C. 20 yards", vi: "20 yard" }, { en: "D. 220 yards", vi: "220 yard" }], correct: 0
    },
    {
        lesson: "1", section: "section1.3", type: "fill",
        title: "[1.3 Số gậy] Nghe Caddy lấy gậy sắt cho khách và ĐIỀN SỐ GẬY:",
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
        title: "[1.3 Khoảng cách] Nghe Caddy báo khoảng cách tới cờ và chọn câu viết đúng:",
        audioText: "It is 125 yards to the pin.", phonetic: "/ɪt ɪz wʌn ˈhʌn.drəd ænd ˈtwen.ti faɪv jɑːrdz tə ðə pɪn/", translation: "Khoảng cách tới cờ là 125 yard.",
        options: [
            { en: "A. One hundred and twenty-five yards", vi: "125 yard" },
            { en: "B. Twelve five yards", vi: "125 yard" },
            { en: "C. One twenty yards", vi: "120 yard" },
            { en: "D. Two hundred yards", vi: "200 yard" }
        ], correct: 0
    },

    // =========================================================================
    // SECTION 1.4: SỞ THÍCH & TRÒ CHUYỆN GIAO LƯU (HOBBIES & SMALL TALK) - 30 CÂU
    // =========================================================================
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Sở thích] Mẫu câu Caddy hỏi thăm mục đích chơi golf để tạo trò chuyện tự nhiên:",
        audioText: "Do you play golf to relax or for business, Sir?", phonetic: "/duː juː pleɪ ɡɑːlf tə rɪˈlæks ɔːr fɔːr ˈbɪz.nɪs, sɜːr/", translation: "Anh chơi golf để thư giãn hay để kết nối công việc ạ?",
        options: [
            { en: "A. Do you play golf to relax or for business, Sir?", vi: "Anh chơi golf để thư giãn hay để kết nối công việc ạ?" },
            { en: "B. Is golf purely your hobby or for business networking, Sir?", vi: "Golf là sở thích thuần túy hay kết nối công việc vậy ạ?" },
            { en: "C. Do you play golf mainly on weekends, Sir?", vi: "Anh chủ yếu chơi golf vào cuối tuần phải không ạ?" },
            { en: "D. Do you play golf for exercise or fun, Sir?", vi: "Anh chơi golf để rèn luyện sức khỏe hay giải trí ạ?" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Sở thích] Mẫu câu hỏi lịch sự về môn thể thao yêu thích của Golfer:",
        audioText: "Is golf your favorite sport, Sir?", phonetic: "/ɪz ɡɑːlf jʊər ˈfeɪ.vər.ɪt spɔːrt, sɜːr/", translation: "Golf có phải là môn thể thao yêu thích của anh không ạ?",
        options: [
            { en: "A. Is golf your favorite sport, Sir?", vi: "Golf có phải môn thể thao yêu thích của anh không ạ?" },
            { en: "B. What sport do you like beside golf, Sir?", vi: "Môn nào anh thích ngoài golf ạ?" },
            { en: "C. Do you play other sports well, Sir?", vi: "Anh có chơi môn khác giỏi không ạ?" },
            { en: "D. Is golf the main sport you practice, Sir?", vi: "Golf là môn thể thao chính anh luyện tập phải không ạ?" }
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
        title: "[1.4 Sở thích] Mẫu câu Caddy khen thời tiết đẹp để mở đầu câu chuyện giao lưu:",
        audioText: "Beautiful day, isn't it, Sir?", phonetic: "/ˈbjuː.t̬ə.fəl deɪ, ˈɪz.ənt ɪt, sɜːr/", translation: "Thời tiết hôm nay tuyệt vời phải không anh?",
        options: [
            { en: "A. Beautiful day, isn't it, Sir?", vi: "Thời tiết hôm nay tuyệt vời phải không anh?" },
            { en: "B. It's a very pleasant day on the course, Sir.", vi: "Hôm nay là một ngày rất dễ chịu trên sân ạ." },
            { en: "C. The weather is great for playing golf today, Sir.", vi: "Thời tiết hôm nay rất tuyệt để chơi golf ạ." },
            { en: "D. Perfect golfing weather today, Sir.", vi: "Thời tiết chơi golf hôm nay hoàn hảo ạ." }
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
        title: "[1.4 Sở thích] Golfer nói thích đi du lịch, Caddy đáp lại lịch sự thế nào?",
        audioText: "I like travelling too, Sir! I also like cooking.", phonetic: "/aɪ laɪk ˈtræv.əl.ɪŋ tuː, sɜːr! aɪ ˈɔːl.soʊ laɪk ˈkʊk.ɪŋ/", translation: "Em cũng thích du lịch ạ! Em còn thích nấu ăn nữa.",
        options: [
            { en: "A. I like travelling too, Sir! I also like cooking.", vi: "Em cũng thích du lịch ạ! Em còn thích nấu ăn nữa." },
            { en: "B. Travelling is wonderful, Sir! Do you travel often?", vi: "Du lịch tuyệt vời lắm ạ! Anh có đi thường xuyên không ạ?" },
            { en: "C. That sounds lovely, Sir! Vietnam has many nice places.", vi: "Nghe tuyệt quá ạ! Việt Nam có nhiều điểm đến đẹp lắm ạ." },
            { en: "D. Travelling is a great way to unwind, Sir.", vi: "Du lịch là cách tuyệt vời để thư giãn thưa anh." }
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
            { en: "D. Tôi chơi golf với Caddy", vi: "Play with caddy" }
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
        title: "[1.4 Sở thích] Khi hỏi về sở thích lúc rảnh rỗi của Golfer một cách lịch sự, Caddy dùng câu nào?",
        audioText: "What are your hobbies in your free time, Sir?", phonetic: "/wɑːt ɑːr jʊər ˈhɑː.biz ɪn jʊər friː taɪm, sɜːr/", translation: "Sở thích lúc rảnh rỗi của anh là gì ạ?",
        options: [
            { en: "A. What are your hobbies in your free time, Sir?", vi: "Sở thích lúc rảnh rỗi của anh là gì ạ?" },
            { en: "B. How do you usually enjoy your weekends, Sir?", vi: "Anh thường tận hưởng cuối tuần như thế nào ạ?" },
            { en: "C. Do you have any favorite activities outside golf, Sir?", vi: "Anh có hoạt động yêu thích nào ngoài golf không ạ?" },
            { en: "D. What do you like doing when you're not playing golf, Sir?", vi: "Anh thích làm gì khi không chơi golf ạ?" }
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
        title: "[1.4 Sở thích] Khi Golfer nói thích chơi tennis bên cạnh golf, Caddy đáp lại thế nào?",
        audioText: "Besides golf, I love playing tennis.", phonetic: "/bɪˈsaɪdz ɡɑːlf, aɪ lʌv ˈpleɪ.ɪŋ ˈten.ɪs/", translation: "Bên cạnh golf, tôi rất thích chơi tennis.",
        options: [
            { en: "A. Oh tennis too? You must be very active, Sir!", vi: "Ồ cả tennis nữa ạ? Anh chắc hẳn rất năng động ạ!" },
            { en: "B. Tennis is a great sport as well, Sir!", vi: "Tennis cũng là một môn thể thao tuyệt vời ạ!" },
            { en: "C. That's awesome, Sir! Tennis keeps you in good shape.", vi: "Rất tuyệt ạ! Tennis giúp giữ vóc dáng rất tốt ạ." },
            { en: "D. Playing tennis is very good for endurance, Sir.", vi: "Chơi tennis rất tốt cho thể lực thưa anh." }
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
        title: "[1.4 Phản xạ] Khi Golfer nói đến sân vì công việc ('I am here for business'), Caddy phản hồi thế nào?",
        audioText: "I am here for business.", phonetic: "/aɪ æm hɪər fɔːr ˈbɪz.nɪs/", translation: "Tôi đến đây vì công việc.",
        options: [
            { en: "A. I see! Do you often play golf to network, Sir?", vi: "Em hiểu rồi ạ! Anh có thường chơi golf để kết nối đối tác không ạ?" },
            { en: "B. That's great Sir, golf is wonderful for building relationships.", vi: "Tuyệt quá ạ, golf là môn rất tốt để xây dựng mối quan hệ ạ." },
            { en: "C. Hope your business outing goes smoothly today, Sir.", vi: "Hy vọng buổi giao lưu công việc hôm nay diễn ra thuận lợi ạ." },
            { en: "D. Wishing you a successful round with your partners, Sir.", vi: "Chúc anh có vòng đấu thành công cùng các đối tác ạ." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Trò chuyện] Hỏi về trải nghiệm ẩm thực sau trận đấu của Golfer:",
        audioText: "Would you like to try our clubhouse restaurant, Sir?", phonetic: "/wʊd juː laɪk tə traɪ aʊər ˈklʌb.haʊs ˈres.tə.rɑːnt, sɜːr/", translation: "Anh có muốn dùng thử nhà hàng của nhà câu lạc bộ không ạ?",
        options: [
            { en: "A. Would you like to try our clubhouse restaurant, Sir?", vi: "Anh có muốn dùng thử nhà hàng của nhà câu lạc bộ không ạ?" },
            { en: "B. Do you plan to have a meal at our restaurant, Sir?", vi: "Anh có kế hoạch dùng bữa tại nhà hàng của chúng em không ạ?" },
            { en: "C. Can I recommend our clubhouse special dishes, Sir?", vi: "Em có thể gợi ý các món đặc sản nhà câu lạc bộ không ạ?" },
            { en: "D. Would you like me to book a table for your post-round meal, Sir?", vi: "Anh có muốn em đặt bàn ăn sau trận chơi không ạ?" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Trò chuyện] Mẫu câu hỏi thăm phương tiện Golfer di chuyển tới sân:",
        audioText: "Did you come here by car today, Sir?", phonetic: "/dɪd juː kʌm hɪər baɪ kɑːr təˈdeɪ, sɜːr/", translation: "Hôm nay anh đến đây bằng ô tô phải không ạ?",
        options: [
            { en: "A. Did you come here by car today, Sir?", vi: "Hôm nay anh đến đây bằng ô tô phải không ạ?" },
            { en: "B. Was your drive to the golf course smooth today, Sir?", vi: "Chuyến di chuyển đến sân hôm nay của anh thuận lợi chứ ạ?" },
            { en: "C. Did you travel far to get here today, Sir?", vi: "Hôm nay anh có đi xa để tới đây không ạ?" },
            { en: "D. Did you take the highway to reach our resort, Sir?", vi: "Anh có đi đường cao tốc để đến khu nghỉ dưỡng không ạ?" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Trò chuyện] Mẫu câu Caddy giới thiệu cảnh đẹp tự nhiên của hố gôn:",
        audioText: "This hole has a beautiful view of the lake, Sir.", phonetic: "/ðɪs hoʊl hæz ə ˈbjuː.t̬ə.fəl vjuː əv ðə leɪk, sɜːr/", translation: "Hố này có tầm nhìn ra hồ rất đẹp thưa anh.",
        options: [
            { en: "A. This hole has a beautiful view of the lake, Sir.", vi: "Hố này có tầm nhìn ra hồ rất đẹp thưa anh." },
            { en: "B. You can enjoy a scenic landscape on this hole, Sir.", vi: "Anh có thể thưởng ngoạn phong cảnh rất đẹp ở hố này ạ." },
            { en: "C. This is one of our most picturesque holes, Sir.", vi: "Đây là một trong những hố có cảnh quan đẹp nhất sân ạ." },
            { en: "D. Notice the lovely lake view right ahead, Sir.", vi: "Anh chú ý góc nhìn ra hồ thơ mộng ngay phía trước ạ." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Trò chuyện] Mẫu câu Caddy chúc khách có kỳ nghỉ cuối tuần vui vẻ:",
        audioText: "Have a wonderful weekend with your family, Sir!", phonetic: "/hæv ə ˈwʌn.dər.fəl ˈwiːk.end wɪð jʊər ˈfæm.əl.i, sɜːr/", translation: "Chúc anh có kỳ nghỉ cuối tuần tuyệt vời bên gia đình ạ!",
        options: [
            { en: "A. Have a wonderful weekend with your family, Sir!", vi: "Chúc anh có kỳ nghỉ cuối tuần tuyệt vời bên gia đình ạ!" },
            { en: "B. Wish you a relaxing weekend, Sir!", vi: "Chúc anh có ngày cuối tuần thư giãn ạ!" },
            { en: "C. Hope you enjoy the rest of your weekend, Sir!", vi: "Hy vọng anh tận hưởng trọn vẹn phần còn lại của cuối tuần ạ!" },
            { en: "D. Have a peaceful weekend, Sir!", vi: "Chúc anh một cuối tuần an lành ạ!" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Trò chuyện] Mẫu câu Caddy hỏi thăm Golfer có hay đi du lịch chơi golf không:",
        audioText: "Do you often travel for golf tournaments, Sir?", 
        phonetic: "/duː juː ˈɑːf.ən ˈtræv.əl fɔːr ɡɑːlf ˈtʊr.nə.mənts, sɜːr/", 
        translation: "Anh có thường xuyên đi du lịch kết hợp thi đấu golf không ạ?",
        options: [
            { en: "A. Do you often travel for golf tournaments, Sir?", vi: "Anh có thường đi du lịch đấu golf không ạ?" },
            { en: "B. Do you enjoy playing golf in different cities, Sir?", vi: "Anh có thích chơi golf ở các thành phố khác nhau không ạ?" },
            { en: "C. Have you joined many golf trips this year, Sir?", vi: "Anh đã tham gia nhiều chuyến du đấu golf năm nay chưa ạ?" },
            { en: "D. Do you usually play golf near your home, Sir?", vi: "Anh có thường chơi golf gần nhà không ạ?" }
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
            { en: "B. Isn't it a pleasant day for golf today, Sir?", vi: "Hôm nay thời tiết dễ chịu để chơi golf đúng không ạ?" },
            { en: "C. Do you prefer cool or warm weather for golf, Sir?", vi: "Anh thích thời tiết mát mẻ hay ấm áp khi chơi golf hơn ạ?" },
            { en: "D. Is the wind making it challenging today, Sir?", vi: "Gió hôm nay có gây khó khăn cho anh không ạ?" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.4", type: "mcq",
        title: "[1.4 Trò chuyện] Mẫu câu Caddy hỏi về địa điểm ăn uống ưa thích của khách sau giờ chơi:",
        audioText: "Where do you usually have lunch after playing, Sir?", 
        phonetic: "/wer duː juː ˈjuː.ʒu.ə.li hæv lʌntʃ ˈæf.tər ˈpleɪ.ɪŋ, sɜːr/", 
        translation: "Anh thường dùng bữa trưa ở đâu sau khi chơi xong ạ?",
        options: [
            { en: "A. Where do you usually have lunch after playing, Sir?", vi: "Anh thường ăn trưa ở đâu sau khi chơi xong ạ?" },
            { en: "B. Will you be having lunch at our clubhouse restaurant, Sir?", vi: "Anh sẽ dùng bữa trưa tại nhà hàng nhà câu lạc bộ chứ ạ?" },
            { en: "C. Would you like me to reserve a table for lunch, Sir?", vi: "Anh có muốn em đặt bàn ăn trưa giúp anh không ạ?" },
            { en: "D. Do you plan to dine with your flight after the round, Sir?", vi: "Anh có kế hoạch dùng bữa cùng nhóm sau vòng chơi không ạ?" }
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
        title: "[1.4 Trò chuyện] Mẫu câu Caddy khen ngợi kỹ năng đánh bóng bền bỉ của khách:",
        audioText: "You have a very consistent swing, Sir!", 
        phonetic: "/juː hæv ə ˈver.i kənˈsɪs.tənt swɪŋ, sɜːr/", 
        translation: "Anh có cú swing rất ổn định và đều tay ạ!",
        options: [
            { en: "A. You have a very consistent swing, Sir!", vi: "Anh có cú swing rất ổn định ạ!" },
            { en: "B. Your swing tempo is very smooth today, Sir!", vi: "Nhịp swing của anh hôm nay rất mượt mà ạ!" },
            { en: "C. You hit the ball so cleanly every time, Sir!", vi: "Anh tiếp bóng lần nào cũng rất ngọt ạ!" },
            { en: "D. Great ball striking ability, Sir!", vi: "Khả năng chạm bóng tuyệt vời quá anh ạ!" }
        ], correct: 0
    },

    // =========================================================================
    // SECTION 1.5: THỰC HÀNH & TÌNH HUỐNG TRÊN SÂN (ON-COURSE DRILLS) - 30 CÂU
    // =========================================================================
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Thực chiến] Tình huống trao gậy sắt cho Golfer và xác nhận sự phù hợp:",
        audioText: "Here is your 5-iron, Sir. Is this the club you need?", phonetic: "/hɪər ɪz jʊər faɪv ˈaɪ.ən, sɜːr. ɪz ðɪs ðə klʌb juː niːd/", translation: "Đây là gậy sắt số 5 của anh ạ. Có đúng gậy anh cần không ạ?",
        options: [
            { en: "A. Here is your 5-iron, Sir. Is this the club you need?", vi: "Đây là gậy sắt số 5 của anh ạ. Có đúng gậy anh cần không ạ?" },
            { en: "B. Here is the 5-iron, Sir. Would you like another club instead?", vi: "Gậy 5 đây ạ. Anh có muốn đổi gậy khác không ạ?" },
            { en: "C. I brought your 5-iron, Sir. Please check if it's correct.", vi: "Em mang gậy 5 ra rồi ạ. Anh xem đúng chưa nhé ạ." },
            { en: "D. 5-iron ready, Sir. Let me know if you prefer a hybrid.", vi: "Gậy 5 đã sẵn sàng ạ. Anh muốn dùng gậy hybrid thì báo em nhé ạ." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Thực chiến] Tình huống tư vấn hướng đánh và cảnh báo bẫy cát (Bunker):",
        audioText: "Please aim to the left, there is a bunker on the right.", phonetic: "/pliːz eɪm tə ðə left, ðer ɪz ə ˈbʌŋ.kər ɑːn ðə raɪt/", translation: "Anh ngắm sang bên trái giúp em nhé, có bẫy cát ở bên phải ạ.",
        options: [
            { en: "A. Please aim to the left, there is a bunker on the right.", vi: "Anh ngắm sang bên trái giúp em nhé, có bẫy cát ở bên phải ạ." },
            { en: "B. Watch out for the fairway bunker on the right side, Sir.", vi: "Cẩn thận bẫy cát fairway bên phải thưa anh." },
            { en: "C. I recommend aiming slightly left to avoid the sand, Sir.", vi: "Em khuyên nên ngắm hơi lệch trái để tránh cát ạ." },
            { en: "D. Left side is safer, Sir. There is a deep bunker right.", vi: "Phía bên trái an toàn hơn ạ. Phía phải có bẫy cát sâu ạ." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Thực chiến] Tình huống chủ động chăm sóc khách khi thời tiết nắng nóng:",
        audioText: "The sun is strong today. Would you like some cold water?", phonetic: "/ðə sʌn ɪz strɔːŋ təˈdeɪ. wʊd juː laɪk səm koʊld ˈwɔː.tər/", translation: "Hôm nay nắng to quá. Anh có muốn uống nước lạnh không ạ?",
        options: [
            { en: "A. The sun is strong today. Would you like some cold water?", vi: "Hôm nay nắng to quá. Anh có muốn uống nước lạnh không ạ?" },
            { en: "B. It's quite hot today, Sir. Can I offer you a cold drink?", vi: "Trời hôm nay khá nóng ạ. Em lấy đồ uống lạnh cho anh nhé ạ?" },
            { en: "C. Please stay hydrated, Sir. Would you like some water?", vi: "Anh chú ý uống nước nhé ạ. Anh có dùng thêm nước không ạ?" },
            { en: "D. Shall I fetch some chilled water for you, Sir?", vi: "Em đi lấy chút nước mát cho anh nhé ạ?" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Thực chiến] Tình huống khen ngợi ngay lập tức sau cú đánh đẹp của Golfer:",
        audioText: "That is a great shot, Sir!", phonetic: "/ðæt ɪz ə ɡreɪt ʃɑːt, sɜːr/", translation: "Cú đánh tuyệt vời quá anh ơi!",
        options: [
            { en: "A. That is a great shot, Sir!", vi: "Cú đánh tuyệt vời quá anh ơi!" },
            { en: "B. Beautiful shot, Sir! Perfect trajectory.", vi: "Cú đánh tuyệt đẹp ạ! Đường bóng hoàn hảo." },
            { en: "C. Well struck, Sir! That ball flew so straight.", vi: "Đánh rất ngọt ạ! Bóng đi thật thẳng." },
            { en: "D. Outstanding shot, Sir! Right down the middle.", vi: "Cú đánh xuất sắc ạ! Đúng chính giữa fairway." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Thực chiến] Mẫu câu hỏi lựa chọn gậy ưu tiên của khách:",
        audioText: "Which club do you prefer, Sir?", phonetic: "/wɪtʃ klʌb duː juː prɪˈfɜːr, sɜːr/", translation: "Anh ưu tiên chọn gậy nào ạ?",
        options: [
            { en: "A. Which club do you prefer, Sir?", vi: "Anh ưu tiên chọn gậy nào ạ?" },
            { en: "B. Which option fits your shot best here, Sir?", vi: "Lựa chọn gậy nào phù hợp nhất cho cú đánh này ạ?" },
            { en: "C. Would you like an iron or a hybrid for this distance, Sir?", vi: "Anh muốn dùng gậy sắt hay gậy hybrid cho khoảng cách này ạ?" },
            { en: "D. Which club are you leaning towards, Sir?", vi: "Anh đang thiên về chọn cây gậy nào ạ?" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Thực chiến] Khi thấy mồ hôi khách ra nhiều, Caddy mời thêm kem chống nắng:",
        audioText: "Do you need more sunscreen, Sir?", phonetic: "/duː juː niːd mɔːr ˈsʌn.skriːn, sɜːr/", translation: "Anh có cần thêm kem chống nắng không ạ?",
        options: [
            { en: "A. Do you need more sunscreen, Sir?", vi: "Anh có cần thêm kem chống nắng không ạ?" },
            { en: "B. The UV index is high today, Sir. Would you like some sunscreen?", vi: "Chỉ số UV hôm nay cao ạ. Anh có muốn dùng kem chống nắng không ạ?" },
            { en: "C. Can I offer you some sun protection spray, Sir?", vi: "Em lấy thêm bình xịt chống nắng cho anh nhé ạ?" },
            { en: "D. Would you like to reapply sunscreen before we continue, Sir?", vi: "Anh có muốn thoa thêm kem chống nắng trước khi đi tiếp không ạ?" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Thực chiến] Mẫu câu Caddy nhắc khách di chuyển bằng xe Buggy lịch sự:",
        audioText: "Please get on the buggy, Sir.", phonetic: "/pliːz ɡet ɑːn ðə ˈbʌɡ.i, sɜːr/", translation: "Mời anh lên xe điện ạ.",
        options: [
            { en: "A. Please get on the buggy, Sir.", vi: "Mời anh lên xe điện ạ." },
            { en: "B. Please take a seat on the golf cart, Sir.", vi: "Mời anh ngồi vào xe golf ạ." },
            { en: "C. We can drive to the next ball now, Sir.", vi: "Bây giờ mình có thể lái xe đến vị trí bóng tiếp theo ạ." },
            { en: "D. Ready to ride to your ball, Sir?", vi: "Sẵn sàng di chuyển bằng xe đến vị trí bóng chưa ạ?" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Thực chiến] Khi Golfer đánh bóng vào cỏ rough sâu, Caddy trấn an khách:",
        audioText: "Don't worry, Sir. I will find your ball.", phonetic: "/doʊnt ˈwɜːr.i, sɜːr. aɪ wɪl faɪnd jʊər bɔːl/", translation: "Anh đừng lo lắng ạ. Em sẽ tìm bóng giúp anh.",
        options: [
            { en: "A. Don't worry, Sir. I will find your ball.", vi: "Anh đừng lo lắng ạ. Em sẽ tìm bóng giúp anh." },
            { en: "B. Stay calm Sir, I saw where it landed.", vi: "Anh bình tĩnh nhé ạ, em đã nhìn thấy điểm bóng rơi rồi ạ." },
            { en: "C. I'll search the rough right away, Sir.", vi: "Em sẽ đi tìm ở khu cỏ rough ngay lập tức ạ." },
            { en: "D. We have time to track it down, Sir.", vi: "Chúng ta có thời gian để tìm bóng ạ." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "fill",
        title: "[1.5 Thực chiến] Nghe Caddy hỏi khách dùng khăn lạnh và ĐIỀN TỪ:",
        audioText: "Would you like a wet towel, Sir?", displaySentence: "Would you like a wet _______, Sir?", translation: "Anh có cần dùng một chiếc _______ lạnh không ạ?",
        targetWord: "towel", phonetic: "/ˈtaʊ.əl/", hint: "💡 Gợi ý: Từ gồm 5 ký tự chỉ chiếc khăn."
    },
    {
        lesson: "1", section: "section1.5", type: "fill",
        title: "[1.5 Thực chiến] Nghe Caddy chúc khách may mắn trước cú đánh và ĐIỀN TỪ:",
        audioText: "Good luck with your shot, Sir!", displaySentence: "Good _______ with your shot, Sir!", translation: "Chúc anh _______ mắn với cú đánh ạ!",
        targetWord: "luck", phonetic: "/lʌk/", hint: "💡 Gợi ý: Từ gồm 4 ký tự chỉ sự may mắn."
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Thực chiến] Cảnh báo nhanh Golfer chú ý bẫy cát trước cú đánh, Caddy dùng câu ngắn nào?",
        audioText: "Watch out for the bunker, Sir.", phonetic: "/wɑːtʃ aʊt fɔːr ðə ˈbʌŋ.kər, sɜːr/", translation: "Anh chú ý bẫy cát nhé ạ.",
        options: [
            { en: "A. Watch out for the bunker, Sir.", vi: "Anh chú ý bẫy cát nhé ạ." },
            { en: "B. Mind the sand trap right there, Sir.", vi: "Cẩn thận bẫy cát ngay đó thưa anh." },
            { en: "C. Please be mindful of the bunker ahead, Sir.", vi: "Xin chú ý bẫy cát phía trước ạ." },
            { en: "D. Keep clear of the bunker on this side, Sir.", vi: "Đánh né khu bẫy cát bên này ra nhé ạ." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Thực chiến] Khi Golfer ghi được điểm Birdie xuất sắc, Caddy chúc mừng hào hứng:",
        audioText: "Congratulations on your birdie, Sir!", phonetic: "/kənˌɡrætʃ.əˈleɪ.ʃənz ɑːn jʊər ˈbɜːr.di, sɜːr/", translation: "Chúc mừng anh đã đạt điểm Birdie ạ!",
        options: [
            { en: "A. Congratulations on your birdie, Sir!", vi: "Chúc mừng anh đã đạt điểm Birdie ạ!" },
            { en: "B. Fantastic birdie, Sir! Great putt.", vi: "Birdie tuyệt vời thưa anh! Cú gạt rất hay ạ." },
            { en: "C. Awesome birdie, Sir! You played that hole perfectly.", vi: "Birdie đỉnh quá anh ơi! Anh xử lý hố này hoàn hảo ạ." },
            { en: "D. Great job making birdie on this hole, Sir!", vi: "Chúc mừng anh ghi điểm birdie hố này ạ!" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Thực chiến] Khi nhắc Golfer cẩn thận bẫy nước phía sau green, Caddy nói câu nào?",
        audioText: "Please be careful, there is water behind the green, Sir.", phonetic: "/pliːz biː ˈker.fəl, ðer ɪz ˈwɔː.tər bɪˈhaɪnd ðə ɡriːn, sɜːr/", translation: "Anh cẩn thận giúp em, có nước ở phía sau green ạ.",
        options: [
            { en: "A. Please be careful, there is water behind the green, Sir.", vi: "Anh cẩn thận giúp em, có nước phía sau green ạ." },
            { en: "B. Watch your distance, Sir. Water hazard is past the flag.", vi: "Anh chú ý lực đánh ạ. Bẫy nước nằm sau lá cờ ạ." },
            { en: "C. Don't hit long, Sir. Water is lurking behind the pin.", vi: "Đừng đánh thừa cờ ạ. Nước nằm ở phía sau ạ." },
            { en: "D. The green drops off into water at the back, Sir.", vi: "Mặt green phía sau dốc thẳng xuống nước thưa anh." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Thực chiến] Sau khi lau sạch bóng trên Green, Caddy trả lại bóng cho Golfer và nói:",
        audioText: "Your ball is clean now, Sir. Good luck with your putt!", phonetic: "/jʊər bɔːl ɪz kliːn naʊ, sɜːr. ɡʊd lʌk wɪð jʊər pʌt/", translation: "Bóng của anh đã lau sạch rồi ạ. Chúc anh gạt bóng may mắn ạ!",
        options: [
            { en: "A. Your ball is clean now, Sir. Good luck with your putt!", vi: "Bóng đã được lau sạch. Chúc anh gạt bóng may mắn ạ!" },
            { en: "B. Here is your clean ball, Sir. Line looks good.", vi: "Bóng sạch của anh đây ạ. Đường ngắm trông rất đẹp ạ." },
            { en: "C. Ball is wiped clean, Sir. Hope this putt goes in!", vi: "Bóng đã được lau khô ạ. Hy vọng cú gạt này lọt hố ạ!" },
            { en: "D. All cleaned up for you, Sir. Ready for your putt.", vi: "Đã lau chùi xong cho anh ạ. Sẵn sàng cho cú gạt bóng ạ." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Thực chiến] Hướng dẫn Golfer ngắm đánh thẳng phía trước, Caddy nói câu nào?",
        audioText: "Please hit straight ahead, Sir.", phonetic: "/pliːz hɪt streɪt əˈhed, sɜːr/", translation: "Anh đánh thẳng phía trước giúp em nhé ạ.",
        options: [
            { en: "A. Please hit straight ahead, Sir.", vi: "Anh đánh thẳng phía trước giúp em nhé ạ." },
            { en: "B. Aim straight down the center line, Sir.", vi: "Ngắm thẳng theo đường trung tâm thưa anh." },
            { en: "C. Straight shot is best here, Sir.", vi: "Cú đánh thẳng là tốt nhất ở góc này ạ." },
            { en: "D. Just aim for the target pole straight ahead, Sir.", vi: "Cứ ngắm vào cột mốc thẳng phía trước thưa anh." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Thực chiến] Khi thấy dông bão/sấm sét tiến gần, Caddy mời Golfer về nhà câu lạc bộ cho an toàn:",
        audioText: "The storm is coming near. Let's go back to the clubhouse, Sir.", phonetic: "/ðə stɔːrm ɪz ˈkʌm.ɪŋ nɪər. lets ɡoʊ bæk tə ðə ˈklʌb.haʊs, sɜːr/", translation: "Cơn bão đang đến gần rồi ạ. Chúng ta nên quay về nhà câu lạc bộ thưa anh.",
        options: [
            { en: "A. The storm is coming near. Let's go back to the clubhouse, Sir.", vi: "Bão đang đến gần. Chúng ta về nhà câu lạc bộ thôi ạ." },
            { en: "B. Lightning warning is active, Sir. We need to take shelter.", vi: "Cảnh báo sấm sét đã kích hoạt ạ. Chúng ta cần tìm nơi trú ẩn ạ." },
            { en: "C. For safety, let's head back inside due to the weather, Sir.", vi: "Để an toàn, chúng ta di chuyển vào trong do thời tiết xấu ạ." },
            { en: "D. Bad weather approaching, Sir. Clubhouse is safer now.", vi: "Thời tiết xấu đang tới ạ. Về nhà câu lạc bộ sẽ an toàn hơn ạ." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Thực chiến] Khuyên Golfer bình tĩnh tập trung trước cú gạt bóng quan trọng:",
        audioText: "Take your time, Sir.", phonetic: "/teɪk jʊər taɪm, sɜːr/", translation: "Anh cứ từ tốn bình tĩnh thôi ạ.",
        options: [
            { en: "A. Take your time, Sir.", vi: "Anh cứ từ tốn bình tĩnh thôi ạ." },
            { en: "B. No rush at all, Sir. Focus on your routine.", vi: "Không cần vội đâu ạ. Hãy tập trung vào thói quen chuẩn bị ạ." },
            { en: "C. Take a deep breath and relax before you stroke, Sir.", vi: "Hít thở sâu và thư giãn trước khi thực hiện cú gạt nhé ạ." },
            { en: "D. Feel free to take a couple of practice swings, Sir.", vi: "Cứ thoải mái thực hiện vài cú nháp trước thưa anh." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Thực chiến] Khi Golfer bị mệt do đi bộ nhiều, Caddy đề nghị hỗ trợ:",
        audioText: "Would you like to sit and rest for a moment, Sir?", phonetic: "/wʊd juː laɪk tə sɪt ænd rest fɔːr ə ˈmoʊ.mənt, sɜːr/", translation: "Anh có muốn ngồi nghỉ ngơi một chút không ạ?",
        options: [
            { en: "A. Would you like to sit and rest for a moment, Sir?", vi: "Anh có muốn ngồi nghỉ ngơi một chút không ạ?" },
            { en: "B. We can pause briefly if you need a break, Sir.", vi: "Chúng ta có thể tạm dừng một chút nếu anh cần nghỉ ạ." },
            { en: "C. Please take a seat in the shade for a bit, Sir.", vi: "Mời anh ngồi nghỉ trong bóng râm một chút ạ." },
            { en: "D. Feel free to catch your breath here, Sir.", vi: "Anh cứ lấy lại sức ở đây thoải mái nhé ạ." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Thực chiến] Mẫu câu chủ động đề nghị mang ô che nắng/mưa cho Golfer:",
        audioText: "Would you like an umbrella, Sir?", phonetic: "/wʊd juː laɪk æn ʌmˈbrel.ə, sɜːr/", translation: "Anh có muốn dùng ô che không ạ?",
        options: [
            { en: "A. Would you like an umbrella, Sir?", vi: "Anh có muốn dùng ô che không ạ?" },
            { en: "B. Can I hold the umbrella over you, Sir?", vi: "Em che ô cho anh nhé ạ?" },
            { en: "C. Shall I open the umbrella for shade, Sir?", vi: "Em mở ô che nắng cho anh nhé ạ?" },
            { en: "D. Would you prefer some cover with the umbrella, Sir?", vi: "Anh có muốn che ô cho bớt nắng/mưa không ạ?" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Thực chiến] Khi khách đánh hỏng một cú đánh, Caddy động viên bằng câu nào?",
        audioText: "Don't worry, Sir! We can recover on the next shot.", phonetic: "/doʊnt ˈwɜːr.i, sɜːr! wiː kæn rɪˈkʌv.ər ɑːn ðə nekst ʃɑːt/", translation: "Anh đừng lo lắng ạ! Cú đánh sau chúng ta sẽ gỡ lại được ạ.",
        options: [
            { en: "A. Don't worry, Sir! We can recover on the next shot.", vi: "Anh đừng lo lắng ạ! Cú đánh sau chúng ta sẽ gỡ lại được ạ." },
            { en: "B. Shake it off, Sir! Still plenty of holes left.", vi: "Bỏ qua đi ạ! Chúng ta còn nhiều hố phía trước ạ." },
            { en: "C. Forget that one, Sir. Let's focus on this next swing.", vi: "Quên cú đó đi ạ. Hãy tập trung vào cú đánh tiếp theo ạ." },
            { en: "D. Bad luck Sir, but you can definitely bounce back.", vi: "Kém may mắn chút thôi ạ, anh chắc chắn sẽ gỡ lại được ạ." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "fill",
        title: "[1.5 Thực chiến] Nghe Caddy hỏi khách dùng nước lạnh và ĐIỀN TỪ:",
        audioText: "Would you like some cold water, Sir?", displaySentence: "Would you like some cold _______, Sir?", translation: "Anh có muốn dùng chút _______ lạnh không ạ?",
        targetWord: "water", phonetic: "/ˈwɔː.tər/", hint: "💡 Gợi ý: Từ gồm 5 ký tự chỉ nước."
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Thực chiến] Khi sửa vết bóng cào (Pitch mark) trên Green giúp khách, Caddy nói gì?",
        audioText: "I will repair the pitch mark for you, Sir.", phonetic: "/aɪ wɪl rɪˈper ðə pɪtʃ mɑːrk fɔːr juː, sɜːr/", translation: "Em sẽ sửa vết bóng trên green giúp anh ạ.",
        options: [
            { en: "A. I will repair the pitch mark for you, Sir.", vi: "Em sẽ sửa vết bóng trên green giúp anh ạ." },
            { en: "B. Let me fix this ball mark on the green, Sir.", vi: "Để em sửa vết bóng này trên green ạ." },
            { en: "C. I'm taking care of your pitch mark now, Sir.", vi: "Em đang xử lý vết bóng cho anh rồi ạ." },
            { en: "D. Allow me to mend the green surface here, Sir.", vi: "Cho phép em sửa mặt cỏ green chỗ này ạ." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Thực chiến] Khi cào hố cát (Rake bunker) sau khi khách đánh bóng ra khỏi bẫy cát:",
        audioText: "Let me rake the bunker for you, Sir.", phonetic: "/let miː reɪk ðə ˈbʌŋ.kər fɔːr juː, sɜːr/", translation: "Để em cào bẫy cát giúp anh ạ.",
        options: [
            { en: "A. Let me rake the bunker for you, Sir.", vi: "Để em cào bẫy cát giúp anh ạ." },
            { en: "B. I will smooth out the sand for you, Sir.", vi: "Em sẽ cào phẳng cát cho anh ạ." },
            { en: "C. I'm raking your footprints in the bunker, Sir.", vi: "Em đang cào phẳng vết chân trong bẫy cát ạ." },
            { en: "D. Leave the sand to me, Sir. I'll rake it clean.", vi: "Cứ để bẫy cát cho em ạ. Em sẽ cào sạch sẽ ạ." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Thực chiến] Tình huống nhắc khách chú ý cờ gạt bóng (Pin / Flagstick) trên Green:",
        audioText: "Would you like me to attend the pin, Sir?", phonetic: "/wʊd juː laɪk miː tə əˈtend ðə pɪn, sɜːr/", translation: "Anh có muốn em giữ cờ/rút cờ giúp anh không ạ?",
        options: [
            { en: "A. Would you like me to attend the pin, Sir?", vi: "Anh có muốn em giữ/rút cờ giúp anh không ạ?" },
            { en: "B. Shall I pull the flagstick out for you, Sir?", vi: "Em rút cờ ra cho anh nhé ạ?" },
            { en: "C. Do you want the pin left in or taken out, Sir?", vi: "Anh muốn cắm cờ hay rút cờ ra ạ?" },
            { en: "D. Would you like me to hold the flag, Sir?", vi: "Anh có muốn em giữ lá cờ không ạ?" }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Thực chiến] Lời khuyên Caddy hướng dẫn vị trí đứng an toàn khi khách khác phát bóng:",
        audioText: "Please stand behind the safety line, Sir.", phonetic: "/pliːz stænd bɪˈhaɪnd ðə ˈseɪf.ti laɪn, sɜːr/", translation: "Anh vui lòng đứng sau vạch an toàn giúp em ạ.",
        options: [
            { en: "A. Please stand behind the safety line, Sir.", vi: "Anh vui lòng đứng sau vạch an toàn giúp em ạ." },
            { en: "B. Please step back to stay in a safe position, Sir.", vi: "Vui lòng lùi lại để ở vị trí an toàn thưa anh." },
            { en: "C. Kindly stand clear of the player's swing path, Sir.", vi: "Xin đứng né khỏi tầm vung gậy của người chơi ạ." },
            { en: "D. For safety, please wait behind the tee markers, Sir.", vi: "Vì an toàn, xin chờ phía sau vạch tee thưa anh." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Thực chiến] Tình huống Caddy nhắc khách cẩn thận vùng cỏ rậm (Rough) trước mặt:",
        audioText: "Watch out for the thick rough on the left, Sir.", 
        phonetic: "/wɑːtʃ aʊt fɔːr ðə θɪk rʌf ɑːn ðə left, sɜːr/", 
        translation: "Anh chú ý khu vực cỏ rậm bên trái nhé ạ.",
        options: [
            { en: "A. Watch out for the thick rough on the left, Sir.", vi: "Anh chú ý khu vực cỏ rậm bên trái nhé ạ." },
            { en: "B. Please avoid the heavy rough on the left side, Sir.", vi: "Xin tránh vùng cỏ rất rậm phía bên trái ạ." },
            { en: "C. The rough on the left is quite deep today, Sir.", vi: "Cỏ rough bên trái hôm nay khá sâu thưa anh." },
            { en: "D. Keep it away from the left rough if possible, Sir.", vi: "Đánh tránh khu cỏ rough bên trái ra nhé anh." }
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
            { en: "B. Let me wipe down your club face for you, Sir.", vi: "Để em lau sạch mặt gậy cho anh ạ." },
            { en: "C. Would you like me to clean the grooves on this club, Sir?", vi: "Anh có muốn em vệ sinh rãnh mặt gậy không ạ?" },
            { en: "D. Allow me to sanitize and clean your club, Sir.", vi: "Cho phép em lau chùi gậy sạch sẻ nhé ạ." }
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
            { en: "B. Excellent approach shot, Sir! It landed nicely on the green.", vi: "Cú đánh tiếp cận tuyệt vời ạ! Bóng lên green rất đẹp." },
            { en: "C. You are safely on the green, Sir! Good chance for birdie.", vi: "Bóng lên green an toàn rồi ạ! Cơ hội birdie tốt đấy ạ." },
            { en: "D. Beautiful shot, Sir! The ball stopped right on the green.", vi: "Cú đánh đẹp quá ạ! Bóng dừng ngay trên green rồi ạ." }
        ], correct: 0
    },
    {
        lesson: "1", section: "section1.5", type: "fill",
        title: "[1.5 Thực chiến] Nghe Caddy hỏi khách về khoảng cách đến hố và ĐIỀN TỪ:",
        audioText: "It is ninety yards to the flag, Sir.", 
        displaySentence: "It is _______ yards to the flag, Sir.", 
        translation: "Khoảng cách tới cờ là _______ yard ạ.",
        targetWord: "90", phonetic: "/ˈnaɪn.ti/", hint: "💡 Gợi ý: Nhập số (90)."
    },
    {
        lesson: "1", section: "section1.5", type: "mcq",
        title: "[1.5 Thực chiến] Mẫu câu Caddy thông báo đường gạt bóng (Line) hơi đổ sang phải trên Green:",
        audioText: "The line breaks slightly to the right, Sir.", 
        phonetic: "/ðə laɪn breɪks ˈslaɪt.li tə ðə raɪt, sɜːr/", 
        translation: "Đường gạt này hơi ngả/đổ sang bên phải một chút ạ.",
        options: [
            { en: "A. The line breaks slightly to the right, Sir.", vi: "Đường gạt này hơi đổ sang phải một chút ạ." },
            { en: "B. I see a gentle break from left to right, Sir.", vi: "Em thấy bóng hơi đổ nhẹ từ trái sang phải ạ." },
            { en: "C. Please aim one cup to the left to compensate, Sir.", vi: "Anh ngắm lệch trái 1 miệng hố để bù đường đổ nhé ạ." },
            { en: "D. The putt slopes a little to the right, Sir.", vi: "Cú gạt này hơi dốc về bên phải một chút ạ." }
        ], correct: 0
    }
);
