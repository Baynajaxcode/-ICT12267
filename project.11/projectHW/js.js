// ================== 1. ข้อมูลสินค้า (อัปเดตรูปภาพให้สวยงาม) ==================
const allProducts = [
    { 
        id: 1, 
        name: "หุ่นยนต์ดูดฝุ่น รุ่น RV-X15N (สีขาว)", 
        price: 6990, 
        category: "เครื่องใช้ไฟฟ้า", 
        images: [
            "finalPJimg/1-1.webp",
            "finalPJimg/1-2.webp",
            "finalPJimg/1-3.webp"
        ],
        description: "มีระบบกรองฝุ่น 3 ชั้น (3 Stage Filtration System) ช่วยลดการฟุ้งกระจายของฝุ่น ความจุถังเก็บฝุ่น 0.4 ลิตร ถอดล้างได้ง่าย ตัวเครื่องขนาดกะทัดรัด (34.20 x 7.85 x 34.20 ซม.) เข้าถึงพื้นที่แคบได้ดี" 
    },
    { 
        id: 2, 
        name: "ถังขยะกลมเหล็กพ่น 10 ลิตร KASSA HOME รุ่น PDQ 978618-002 สีดำ", 
        price: 298,
        category: "อุปกรณ์ภายในบ้าน", 
        images: [
            "finalPJimg/3-1.webp",
            "finalPJimg/3-2.webp",
            "finalPJimg/3-3.webp"
        ],
        description: "ถังขยะกลม ดีไซน์สวยคลาสสิก เหมาะสำหรับใส่ขยะทั่วไป จะวางใช้งานในห้องนอน ห้องน้ำ ห้องครัว หรือห้องนั่งเล่นก็ลงตัว ขนาดกะทัดรัด ไม่เกะกะทางเดิน ผลิตจากเหล็กพ่นสีเกรดคุณภาพ เนื้อหนา แข็งแรง ทนทาน" 
    },
    { 
        id: 3, 
        name: "ถังขยะเซนเซอร์ 13 ลิตร พร้อมขาตั้งสเตนเลส Danin KASSA HOME รุ่น JAH9710 สีเงิน", 
        price: 1180, 
        category: "อุปกรณ์ภายในบ้าน", 
        images: [
            "finalPJimg/4-1.webp",
            "finalPJimg/4-2.webp",
            "finalPJimg/4-3.webp"
        ],
        description: "หลีกเลี่ยงการสัมผัสกับฝาถังขยะโดยตรง ด้วยถังขยะทรงเหลี่ยมพร้อมขาตั้ง และฟังก์ชันเซนเซอร์อัตโนมัติจาก KASSA HOME ผลิตจากสเตนเลสสตีล เกรด 430 และพลาสติก PP/ABS คุณภาพดี แข็งแรง ทนทานต่อการกัดกร่อน ใช้งานง่าย เพียงใช้มือหรือเท้าสัมผัสปากถัง ออกแบบมาเพื่อช่วยลดการสัมผัสกับสิ่งสกปรกหรือเชื้อโรค เพื่อสุขอนามัยที่ดีของคุณ" 
    },
    { 
        id: 4, 
        name: "ถังแยกเศษอาหารพร้อมตะแกรงกรอง 12 ล. KEYWAY รุ่น D-12 สีเทา", 
        price: 178, 
        category: "อุปกรณ์ภายในบ้าน", 
        images: [
            "finalPJimg/5-1.webp",
            "finalPJimg/5-2.webp",
            "finalPJimg/5-3.webp"
        ],
        description: "ถังกรองรักโลก ใช้แยกเศษอาหารและน้ำออกจากกันเพื่อนำไปจัดการได้ง่ายขึ้น ถังผลิตจากพลาสติกคุณภาพดี ทนทาน มีตะแกรงกรองพร้อมฝาปิดป้องกันกลิ่นหรือสัตว์ขุ้ยเขี่ย สะดวกในการล้าง ไม่เลอะมือ เพื่อการจัดการเศษอาหารที่ดีและสะดวกขึ้น" 
    },
    { 
        id: 5, 
        name: "OTOP ไม้กวาดบ้านศรนารายณ์ สีขาว - น้ำตาล", 
        price: 168, 
        category: "อุปกรณ์ทำความสะอาด", 
        images: [
            "finalPJimg/6-1.webp",
            "finalPJimg/6-2.webp",
            "finalPJimg/6-3.webp"
        ],
        description: "ผลิตจากวัสดุเกรดคุณภาพ ใช้งานทนทาน กวาดพื้นได้อย่างสะดวก เศษผงฝุ่นและสิ่งสกปรกไม่มีเหลือบนพื้น" 
    },
    { 
        id: 6, 
        name: "ที่โกยขยะพลาสติก KASSA HOME ขนาด 30 x 30 x 75 ซม. สีฟ้า", 
        price: 48, 
        category: "อุปกรณ์ทำความสะอาด", 
        images: [
            "finalPJimg/7-1.webp",
            "finalPJimg/7-2.webp",
            "finalPJimg/7-3.webp"
        ],
        description: "ที่โกยขยะหน้ากว้างพิเศษ ผลิตจากพลาสติก PP เกรดคุณภาพ ดีไซน์ด้ามจับขนาดใหญ่ สะดวกในการใช้งานยิ่งขึ้น สามารถเก็บฝุ่นละอองได้ดี ไม่ทำให้ฝุ่นฟุ้งกระจาย เศษผงและฝุ่นไม่ติดที่โกยผง ใช้งานได้ทั้งภายในและภายนอกอาคาร แข็งแรง ทนทาน ใช้งานได้นาน" 
    },
    { 
        id: 7, 
        name: "ชุดไม้กวาดด้ามสั้นพร้อมที่โกยผง KLEANER รุ่น C130013B สีน้ำเงิน", 
        price: 38, 
        category: "อุปกรณ์ทำความสะอาด", 
        images: [
            "finalPJimg/8-1.webp",
            "finalPJimg/8-2.webp",
            "finalPJimg/8-3.webp"
        ],
        description: "ชุดไม้กวาดด้ามสั้นพร้อมที่โกยผงคุณภาพจาก KLEANER รุ่น C130013B มาพร้อมขนแปรง PET คุณภาพดีที่ละเอียดและแนบสนิทกับพื้น ช่วยให้คุณกวาดได้สะอาดหมดจดทุกซอกมุม ไม่ว่าจะบนโต๊ะอาหารหรือตามชั้นเฟอร์นิเจอร์ก็ใช้งานได้สบาย มาพร้อมหูคล้องจัดเก็บง่าย ประหยัดพื้นที่ " 
    },
    { 
        id: 8, 
        name: "ถุงขยะแบบม้วนก้นกลมเชือกผูก เกรด A KASSA HOME รุ่น 5708 ขนาด 24 x 28 นิ้ว (แพ็ก 25 ชิ้น) สีดำ", 
        price: 43, 
        category: "อุปกรณ์ภายในบ้าน", 
        images: [
            "finalPJimg/9-1.webp",
            "finalPJimg/9-2.webp",
            "finalPJimg/9-3.webp"
        ],
        description: "จัดเก็บเศษขยะและสิ่งปฏิกูลภายในบ้านได้ด้วยถุงขยะจาก KASSA HOME สะดวก รวดเร็ว ใช้งานง่าย เพียงดึงถุงออกจากแพ็กก็พร้อมใช้งานทันที เนื้อเหนียวหนาแน่น ผลิตจากวัสดุที่สามารถนำกลับมารีไซเคิลได้ ใส่ขยะได้อย่างจุใจ และรั่วซึมได้ยาก ให้คุณมั่นใจได้ในทุกการใช้งาน" 
    },
    { 
        id: 9, 
        name: "ชุดถังปั่น ไลท์เวทสปิน FARCENT รุ่น WW-6101 สีเขียวพาสเทล", 
        price: 529, 
        category: "อุปกรณ์ทำความสะอาด", 
        images: [
            "finalPJimg/11-1.webp",
            "finalPJimg/11-2.webp",
            "finalPJimg/11-3.webp"
        ],
        description: "ทำความสะอาดพื้นได้ง่ายและไม่ต้องใช้มือบิดผ้าถูพื้นอีกต่อไปด้วยชุดถังปั่นไลท์เวทสปิน เพียงปั่นผ้าม็อบ ผ้าก็หมาดน้ำพร้อมถูพื้น น้ำหนักเบา เคลื่อนย้ายง่าย สีสวยน่าใช้งาน" 
    },
    { 
        id: 10, 
        name: "ไม้ม็อบถูพื้นแบบฟองน้ำ PVA ด้ามจับอะลูมิเนียม KLEANER รุ่น GSA005 สีน้ำเงิน", 
        price: 198, 
        category: "อุปกรณ์ทำความสะอาด", 
        images: [
            "finalPJimg/14-1.webp",
            "finalPJimg/14-2.webp",
            "finalPJimg/14-3.webp"
        ],
        description: "ไม้ม็อบจาก KLEANER รุ่น GSA005 มาพร้อมด้ามจับถนัดมือ ออกแบบให้คุณสามารถปรับความยาวได้ตามการใช้งาน หัวม็อบฟองน้ำ PVA เก็บฝุ่นและดูดซับน้ำได้ดีเยี่ยม ถอดซักทำความสะอาดง่าย พร้อมให้คุณทำความสะอาดบ้านได้อย่างง่ายดาย และมีประสิทธิภาพกว่าที่เคย" 
    },
    { 
        id: 11, 
        name: "ยางรีดน้ำกระจกชนิดยางคู่ BE MAN รุ่น A0120001 สีขาว - เทา", 
        price: 108, 
        category: "อุปกรณ์ทำความสะอาด", 
        images: [
            "finalPJimg/15-1.webp",
            "finalPJimg/15-2.webp",
            "finalPJimg/15-3.webp"
        ],
        description: "อุปกรณ์เช็ดทำความสะอาดกระจก ไม่ว่าจะเป็นกระจกรถยนต์ กระจกหน้าต่าง หรือกระจกประตูบ้าน ช่วยรีดน้ำ คราบแมลง หรือ ฝุ่นละอองต่างๆ ให้กระจกใสสะอาดได้อย่างหมดจด ช่วยประหยัดเวลา ไม่เปลืองแรง เพิ่มความสะดวกสบายในการทำความสะอาด" 
    },
    { 
        id: 12, 
        name: "น้ำยาเช็ดกระจก WAXY ขนาด 580 มล. สีฟ้า", 
        price: 58, 
        category: "ผลิตภัณฑ์ทำความสะอาด", 
        images: [
            "finalPJimg/17-1.webp",
            "finalPJimg/17-2.webp",
            "finalPJimg/17-3.webp"
        ],
        description: "น้ำยาสูตรเข้มข้นขจัดคราบสกปรกบนผิวกระจกทุกชนิด รวมทั้งเคาน์เตอร์ โต๊ะ พื้นผิววัสดุต่างๆ ได้ง่าย กลิ่นหอม ไม่ทิ้งคราบและไม่หยดเลอะเทอะเวลาใช้งาน" 
    },
    { 
        id: 13, 
        name: "น้ำยาถูพื้น แกลลอน MR.MUSCLE กลิ่นลาเวนเดอร์ ขนาด 5000 มล. สีม่วง", 
        price: 238, 
        category: "ผลิตภัณฑ์ทำความสะอาด", 
        images: [
            "finalPJimg/19-1.webp",
            "finalPJimg/19-2.webp",
            "finalPJimg/19-3.webp"
        ],
        description: "น้ำยาทำความสะอาดพื้น Mr.Muscle ช่วยขจัดคราบสกปรก กลิ่นไม่พึงประสงค์ และฆ่าเชื้อแบคทีเรีย พร้อมให้กลิ่นหอม สะอาด สดชื่น สามารถทำความสะอาดพื้นได้หลายรูปแบบในขวดเดียว" 
    },
    { 
        id: 14, 
        name: "ฟองน้ำใยขัดเนื้อละเอียด KASSA HOME รุ่น Nito (แพ็ก 3 ชิ้น) สีขาว - เทา", 
        price: 38, 
        category: "อุปกรณ์ทำความสะอาด", 
        images: [
            "finalPJimg/20-1.webp",
            "finalPJimg/20-2.webp",
            "finalPJimg/20-3.webp"
        ],
        description: "ให้เรื่องการทำความสะอาดภาชนะเครื่องครัว จาน ชาม หรือแก้วกาแฟใบโปรดของคุณเป็นเรื่องง่ายดายยิ่งขึ้นด้วยฟองน้ำใยขัดเนื้อละเอียดจากแบรนด์ KASSA HOME รุ่น Nito สามารถใช้งานได้ทั้งด้านที่เป็นใยขัดและด้านที่เป็นฟองน้ำ ช่วยขจัดคราบอาหารได้อย่างสะอาดหมดจดโดยไม่ทิ้งรอยขีดข่วนที่ผิววัสดุ ให้คุณจัดการจานกองโตได้อย่างรวดเร็วมากยิ่งขึ้น" 
    },
    { 
        id: 15, 
        name: "ฟองน้ำล้างจานทรงรี KLEANER รุ่น GSF005 สีเทา", 
        price: 28, 
        category: "อุปกรณ์ทำความสะอาด", 
        images: [
            "finalPJimg/21-1.webp",
            "finalPJimg/21-2.webp",
            "finalPJimg/21-3.webp"
        ],
        description: "รอยเปื้อน คราบน้ำมัน คราบสกปรกบนจานใบโปรดและสารพัดเครื่องครัว จัดการได้ง่าย ๆ ด้วยฟองน้ำล้างจาน KLEANER ด้วยการออกแบบให้คุณใช้งานได้ 2 ด้าน ตอบโจทย์การทำความสะอาดดีเยี่ยม ด้านใยขัดทนทาน ขัดถูคราบสกปรกได้เกลี้ยงเกลา ด้านที่เป็นผ้าไมโครไฟเบอร์ผิวนุ่ม ไม่ทิ้งริ้วรอย เหมาะกับภาชนะที่ต้องการการดูแลเป็นพิเศษ ทั้งยังดีไซน์ให้ใช้งานง่าย จับถนัดมือ จะบิด บีบ หรือพับก็ยังคงรูปทรงได้ดี ล้างทำความสะอาดง่าย พร้อมใช้งานอยู่เสมอ" 
    },
    { 
        id: 16, 
        name: "เครื่องดูดฝุ่น-ดูดน้ำ KARCHER รุ่น NT 30/1 Me Classic CN ขนาด 30 ลิตร สีเทา", 
        price: 7080, 
        category: "เครื่องใช้ไฟฟ้า", 
        images: [
            "finalPJimg/23-1.webp",
            "finalPJimg/23-2.webp",
            "finalPJimg/23-3.webp"
        ],
        description: "เครื่องดูดฝุ่น-ดูดน้ำที่ใช้งานง่ายและแข็งแรงทนทาน กำลังแรง 1,500 วัตต์ มีถังขนาดความจุ 30 ลิตร และสามารถขจัดเศษสิ่งสกปรกได้ทุกชนิด มีระบบ Easy Service Concept ช่วยให้ค่าใช้จ่ายในการใช้งานและการบำรุงรักษาต่ำ" 
    },
    { 
        id: 17, 
        name: "หุ่นยนต์ดูดฝุ่นอัจฉริยะ XIAOM รุ่น 2 Pro Mi XMI-BHR5055EU สีขาว", 
        price: 10999, 
        category: "เครื่องใช้ไฟฟ้า", 
        images: [
            "finalPJimg/24-1.webp",
            "finalPJimg/24-2.webp",
            "finalPJimg/24-3.webp"
        ],
        description: "หุ่นยนต์ดูดฝุ่นอัจฉริยะ XIAOMI 2 Pro ล้ำสมัยทุกฟังก์ชันการใช้งาน ตอบโจทย์งานบ้านที่สมบูรณ์แบบ กับเทคโนโลยีระบบนำทางเลเซอร์ LDS สามารถสร้างแผนผังได้หลายชั้น แบตเตอรี่ 5,200 mAh ทำความสะอาดพื้นที่มากกว่า 150 ตร.ม. ใช้งานง่าย สั่งงานง่ายผ่านแอปพลิเคชัน" 
    },
    { 
        id: 18, 
        name: "น้ำยาถูพื้น แกลลอน KINGS STELLA รุ่น กลิ่นบับเบิ้ลกัม ขนาด 5,200 มล. สีชมพู", 
        price: 198, 
        category: "ผลิตภัณฑ์ทำความสะอาด", 
        images: [
            "finalPJimg/18-1.webp",
            "finalPJimg/18-2.webp",
            "finalPJimg/18-3.webp"
        ],
        description: "ขจัดคราบสกปรก คราบมัน คราบฝังแน่น คราบปัสสาวะอุจจาระสัตว์เลี้ยง รวมถึงขจัดกลิ่นไม่พึงประสงค์ได้อย่างมีประสิทธิภาพ เหมาะสำหรับพื้นผิวหลายชนิด กลิ่นหอมสดชื่น ให้พื้นบ้านคุณสะอาดและมีหอมไปพร้อมๆ กัน" 
    },
    { 
        id: 19, 
        name: "ชุดถังปั่นดูโอวอช 10 ลิตร ชุดไม้ถูพื้นพร้อมผ้าไมโครไฟเบอร์ 1 ชิ้น SCOTCH BRITE รุ่น T5 สีเขียว", 
        price: 1390, 
        category: "อุปกรณ์ทำความสะอาด", 
        images: [
            "finalPJimg/12-1.webp",
            "finalPJimg/12-2.webp",
            "finalPJimg/12-3.webp"
        ],
        description: "อุปกรณ์ทำความสะอาดบ้านยุคใหม่ที่มีฟังก์ชั่นตอบโจทย์การใช้งานเบาแรง ทั้งการซัก และปั่นแห้ง ผ้าม็อบผลิตจากไมโครไฟเบอร์ชนิดพิเศษ สามารถดักจับฝุ่น และสิ่งสกปรกได้อย่างมีประสิทธิภาพ ซักและปั่นแห้ง ได้ในถังเดียว" 
    },
    { 
        id: 20, 
        name: "ถุงขยะก้นกลมมีเชือกรัดปากถุง แบบม้วน เกรดรีไซเคิล KASSA HOME ขนาด 30 x 40 นิ้ว (แพ็ก 30 ใบ) สีดำ", 
        price: 88, 
        category: "อุปกรณ์ภายในบ้าน", 
        images: [
            "finalPJimg/10-1.webp",
            "finalPJimg/10-2.webp",
            "finalPJimg/10-3.webp"
        ],
        description: "แยกขยะได้ง่าย ๆ สะอาด และรักษ์โลก ด้วยถุงขยะก้นกลม แบบม้วน KASSA HOME ผลิตจากพลาสติก เกรดรีไซเคิล กลิ่นไม่เหม็น ไม่ฉีกหรือขาดง่าย รองรับน้ำหนักได้ดี มาพร้อมเชือกรัดปากถุง ป้องกันกลิ่นเหม็นลอยคลุ้ง และป้องกันสัตว์คุ้ยเขี่ยขยะ สะดวกสบายต่อเจ้าหน้าที่เข้ามาเก็บขยะ" 
    },
];

const bestSellers = [
    { 
        id: 15, 
        name: "ฟองน้ำล้างจานทรงรี KLEANER รุ่น GSF005 สีเทา", 
        price: 28, 
        category: "อุปกรณ์ทำความสะอาด", 
        images: [
            "finalPJimg/21-1.webp",
            "finalPJimg/21-2.webp",
            "finalPJimg/21-3.webp"
        ],
        description: "รอยเปื้อน คราบน้ำมัน คราบสกปรกบนจานใบโปรดและสารพัดเครื่องครัว จัดการได้ง่าย ๆ ด้วยฟองน้ำล้างจาน KLEANER ด้วยการออกแบบให้คุณใช้งานได้ 2 ด้าน ตอบโจทย์การทำความสะอาดดีเยี่ยม ด้านใยขัดทนทาน ขัดถูคราบสกปรกได้เกลี้ยงเกลา ด้านที่เป็นผ้าไมโครไฟเบอร์ผิวนุ่ม ไม่ทิ้งริ้วรอย เหมาะกับภาชนะที่ต้องการการดูแลเป็นพิเศษ ทั้งยังดีไซน์ให้ใช้งานง่าย จับถนัดมือ จะบิด บีบ หรือพับก็ยังคงรูปทรงได้ดี ล้างทำความสะอาดง่าย พร้อมใช้งานอยู่เสมอ" 
    },
    { 
        id: 1, 
        name: "หุ่นยนต์ดูดฝุ่น รุ่น RV-X15N (สีขาว)", 
        price: 6990, 
        category: "เครื่องใช้ไฟฟ้า", 
        images: [
            "finalPJimg/1-1.webp",
            "finalPJimg/1-2.webp",
            "finalPJimg/1-3.webp"
        ],
        description: "มีระบบกรองฝุ่น 3 ชั้น (3 Stage Filtration System) ช่วยลดการฟุ้งกระจายของฝุ่น ความจุถังเก็บฝุ่น 0.4 ลิตร ถอดล้างได้ง่าย ตัวเครื่องขนาดกะทัดรัด (34.20 x 7.85 x 34.20 ซม.) เข้าถึงพื้นที่แคบได้ดี" 
    },
    { 
        id: 3, 
        name: "ถังขยะเซนเซอร์ 13 ลิตร พร้อมขาตั้งสเตนเลส Danin KASSA HOME รุ่น JAH9710 สีเงิน", 
        price: 1180, 
        category: "เครื่องใช้ไฟฟ้า", 
        images: [
            "finalPJimg/4-1.webp",
            "finalPJimg/4-2.webp",
            "finalPJimg/4-3.webp"
        ],
        description: "หลีกเลี่ยงการสัมผัสกับฝาถังขยะโดยตรง ด้วยถังขยะทรงเหลี่ยมพร้อมขาตั้ง และฟังก์ชันเซนเซอร์อัตโนมัติจาก KASSA HOME ผลิตจากสเตนเลสสตีล เกรด 430 และพลาสติก PP/ABS คุณภาพดี แข็งแรง ทนทานต่อการกัดกร่อน ใช้งานง่าย เพียงใช้มือหรือเท้าสัมผัสปากถัง ออกแบบมาเพื่อช่วยลดการสัมผัสกับสิ่งสกปรกหรือเชื้อโรค เพื่อสุขอนามัยที่ดีของคุณ" 
    },
    { 
        id: 11, 
        name: "ยางรีดน้ำกระจกชนิดยางคู่ BE MAN รุ่น A0120001 สีขาว - เทา", 
        price: 108, 
        category: "อุปกรณ์ทำความสะอาด", 
        images: [
            "finalPJimg/15-1.webp",
            "finalPJimg/15-2.webp",
            "finalPJimg/15-3.webp"
        ],
        description: "อุปกรณ์เช็ดทำความสะอาดกระจก ไม่ว่าจะเป็นกระจกรถยนต์ กระจกหน้าต่าง หรือกระจกประตูบ้าน ช่วยรีดน้ำ คราบแมลง หรือ ฝุ่นละอองต่างๆ ให้กระจกใสสะอาดได้อย่างหมดจด ช่วยประหยัดเวลา ไม่เปลืองแรง เพิ่มความสะดวกสบายในการทำความสะอาด" 
    }
]; 

const promotions = [
    { id: 21, name: "Pack 4: ผ้าไมโครไฟเบอร์ทำความสะอาดอเนกประสงค์ ACCO", price: 139, originalPrice: 189, category: "อุปกรณ์ทำความสะอาด", images: ["finalPJimg/25-1.jpg","finalPJimg/25-2.jpg"], description: "อุปกรณ์เช็ดทำความสะอาดกระจก ไม่ว่าจะเป็นกระจกรถยนต์ กระจกหน้าต่าง หรือกระจกประตูบ้าน ช่วยรีดน้ำ คราบแมลง หรือ ฝุ่นละอองต่างๆ ให้กระจกใสสะอาดได้อย่างหมดจด ช่วยประหยัดเวลา ไม่เปลืองแรง เพิ่มความสะดวกสบายในการทำความสะอาด" },
    { id: 22, name: "เครื่องดูดฝุ่นมือถือ ELECTROLUX รุ่น ZB6218STM กำลัง 18 โวลต์ สีสเปซทีลเมทัลลิก", price: 3090, originalPrice: 3990, category: "เครื่องใช้ไฟฟ้า", images: ["finalPJimg/26-1.webp","finalPJimg/26-2.webp"], description: "ให้การทำความสะอาดเป็นเรื่องง่ายสะดวกสบายยิ่งขึ้น ด้วยเครื่องดูดฝุ่นมือถือ ELECTROLUX ประสิทธิภาพสูง ใช้งานได้ยาวนานด้วยแบตเตอรี่ TurboPower หัวดูดซอกซอน เข้าถึงได้ทุกซอกมุม ดูดได้อย่างแม่นยำด้วยระบบดูดแบบไซโคลน ช่วยให้คุณเบาแรงในการทำความสะอาด ใช้ดูดเศษสิ่งสกปรกในลิ้นชักหรือบนเบาะรถยนต์ได้อย่างหมดจด" },
    { id: 23, name: "น้ำยาฆ่าเชื้อโรคเอนกประสงค์ ไฮยีนมัลติ-ยูส DETTOL ขนาด 750 มล. สีเหลือง", price: 409, originalPrice: 479, category: "ผลิตภัณฑ์ทำความสะอาด", images: ["finalPJimg/27-1.webp","finalPJimg/27-2.webp"], description: "ผู้ช่วยมือฉกาจในการฆ่าเชื้อโรค เชื้อราได้เกือบ 100% ให้พื้นบ้าน พื้นห้องน้ำ รวมถึงอุปกรณ์ในห้องน้ำสะอาด ปราศจากเชื้อโรค และยังสามารถใช้ซักผ้าได้ เพื่อสุขภาพที่ดีของคุณและทุกคนในครอบครัว" },
    { id: 24, name: "เครื่องดูดฝุ่นโรบอต SAMSUNG รุ่น VR30T85513W/ST กำลัง 5 วัตต์ สีขาว", price: 14994, originalPrice: 21099, category: "เครื่องใช้ไฟฟ้า", images: ["finalPJimg/28-1.webp","finalPJimg/28-2.webp"], description: "โรบอตทำความสะอาด Jet Bot มีแท่นชาร์จแบตพร้อมทิ้งฝุ่นอัตโนมัติ ดักจับฝุ่นได้ 99.999% High - Efficiency Brush พร้อมที่บดและตัดเส้นผมลดการพันกันของผมหรือขนสัตว์ เลือกพื้นที่การทำความสะอาดได้ ควบคุมการทำงานผ่านแอปพลิเคชัน ให้คุณเพลิดเพลินไปกับการทำความสะอาดที่ทรงพลังมากกว่าเดิม" }
];

// ================== 2. ระบบจัดการสถานะ (State) ==================
let cart = [];
let currentImgIndex = 0;
let currentProductId = null;

// ================== 3. ระบบเรนเดอร์หน้าเว็บ (แถวละ 4 รูป) ==================
function renderItems(data, containerId, isHot = false) {
    const container = document.getElementById(containerId);
    if (!container) return;
    // col-lg-3 คือการกำหนดให้จอใหญ่โชว์ 4 คอลัมน์ (12/3 = 4)
    container.innerHTML = data.map(item => `
        <div class="col-6 col-md-4 col-lg-3 d-flex align-items-stretch mb-4">
            <div class="card product-card shadow-sm p-3 text-center w-100 border-0" onclick="showProductDetail(${item.id})" style="cursor: pointer; position: relative;">
                ${isHot ? '<span class="best-seller-badge" style="position:absolute; top:10px; right:10px; background:red; color:white; padding:2px 8px; border-radius:10px; font-size:10px; z-index:2;"><i class="fas fa-crown"></i> HOT</span>' : ''}
                <div class="img-wrapper mb-3" style="aspect-ratio: 1/1; height: auto; overflow: hidden; display: flex; align-items: center; justify-content: center; background: #f8f9fa; border-radius: 12px;">
                    <img src="${item.images[0]}" class="card-img-top" style="object-fit: contain; width: 100%; height: 100%; padding: 10px;">
                </div>
                <h6 class="fw-bold mb-1 text-dark text-truncate px-2">${item.name}</h6>
                <p class="text-primary fw-bold mb-0">฿${item.price.toLocaleString()}</p>
            </div>
        </div>
    `).join('');
}

function renderPromotions() {
    const container = document.getElementById('promotion-container');
    if (!container) return;
    container.innerHTML = promotions.map(item => `
        <div class="col-6 col-md-4 col-lg-3 d-flex align-items-stretch mb-4">
            <div class="card product-card p-3 shadow-sm text-center w-100 border-0" onclick="showProductDetail(${item.id})" style="cursor:pointer">
                <div class="img-wrapper mb-2" style="height:140px; overflow:hidden;">
                    <img src="${item.images[0]}" class="img-fluid rounded-3 w-100 h-100" style="object-fit:cover;">
                </div>
                <h6 class="fw-bold mb-1 text-truncate x-small">${item.name}</h6>
                <div class="d-flex justify-content-center gap-2 align-items-center">
                    <span class="text-primary fw-bold">฿${item.price.toLocaleString()}</span>
                    <small class="text-muted text-decoration-line-through" style="font-size:10px">฿${item.originalPrice.toLocaleString()}</small>
                </div>
            </div>
        </div>
    `).join('');
}

// ================== 4. ระบบรายละเอียดสินค้า (พร้อมปุ่มเลื่อนรูป) ==================
function showProductDetail(productId) {
    const allAvailable = [...allProducts, ...bestSellers, ...promotions];
    const item = allAvailable.find(p => p.id === productId);
    if (item) {
        currentProductId = productId;
        currentImgIndex = 0; 
        updateDetailContent(item);
        const myModal = new bootstrap.Modal(document.getElementById('productDetailModal'));
        myModal.show();
    }
}

// แก้ไขส่วนนี้ในไฟล์ js.js
function updateDetailContent(item) {
    const detailContainer = document.getElementById('product-detail-content');
    if (!detailContainer) return;

    const dots = item.images.map((_, index) => `
        <span class="dot ${index === currentImgIndex ? 'active' : ''}" 
              onclick="event.stopPropagation(); jumpToImage(${index})"
              style="height: 8px; width: 8px; background-color: ${index === currentImgIndex ? '#0d6efd' : '#bbb'}; border-radius: 50%; display: inline-block; margin: 0 4px; cursor: pointer;">
        </span>
    `).join('');

    detailContainer.innerHTML = `
        <div class="row g-0">
            <div class="col-md-6 position-relative p-4 bg-light d-flex flex-column align-items-center justify-content-center" style="min-height: 350px;">
                <button class="btn btn-light shadow-sm rounded-circle position-absolute start-0 ms-2" onclick="changeImage(-1)" style="z-index:10; width:40px; height:40px;">
                    <i class="fas fa-chevron-left"></i>
                </button>
                
                <img src="${item.images[currentImgIndex]}" id="main-detail-img" class="img-fluid rounded shadow-sm" style="max-height: 300px; object-fit: contain;">
                
                <button class="btn btn-light shadow-sm rounded-circle position-absolute end-0 me-2" onclick="changeImage(1)" style="z-index:10; width:40px; height:40px;">
                    <i class="fas fa-chevron-right"></i>
                </button>

                <div class="mt-3 text-center">${dots}</div>
            </div>

            <div class="col-md-6 p-4 pt-5 text-start">
                <button type="button" class="btn-close position-absolute top-0 end-0 m-3" data-bs-dismiss="modal"></button>
                <nav class="small mb-2 text-muted">สินค้า / ${item.category || 'ทั่วไป'}</nav>
                <h3 class="fw-bold mb-1">${item.name}</h3>
                <p class="fs-4 fw-bold text-primary mb-3">฿${item.price.toLocaleString()}</p>
                <div class="mb-4">
                    <label class="small fw-bold text-muted mb-2 d-block">รายละเอียดสินค้า</label>
                    <p class="text-secondary small mb-0">${item.description || 'ไม่มีข้อมูลรายละเอียด'}</p>
                </div>
                
                <div class="mb-4">
                    <label class="small fw-bold text-muted mb-2 d-block">จำนวน</label>
                    <div class="input-group mb-3" style="width: 130px;">
                        <button class="btn btn-outline-secondary rounded-start-pill" type="button" onclick="this.parentNode.querySelector('input').stepDown()">-</button>
                        <input type="number" id="buy-quantity" class="form-control text-center" value="1" min="1">
                        <button class="btn btn-outline-secondary rounded-end-pill" type="button" onclick="this.parentNode.querySelector('input').stepUp()">+</button>
                    </div>
                </div>

                <div class="d-grid gap-2 mt-4">
                    <button class="btn btn-primary btn-lg rounded-pill fw-bold py-3 shadow-sm" onclick="addToCartWithQty(${item.id})">
                        <i class="fas fa-cart-plus me-2"></i>เพิ่มลงตะกร้า
                    </button>
                </div>
            </div>
        </div>
    `;
}

function changeImage(step) {
    const allAvailable = [...allProducts, ...bestSellers, ...promotions];
    const item = allAvailable.find(p => p.id === currentProductId);
    if (!item) return;

    currentImgIndex = (currentImgIndex + step + item.images.length) % item.images.length;
    updateDetailContent(item);
}

function jumpToImage(index) {
    currentImgIndex = index;
    const allAvailable = [...allProducts, ...bestSellers, ...promotions];
    const item = allAvailable.find(p => p.id === currentProductId);
    updateDetailContent(item);
}

function addToCartWithQty(productId) {
    const qtyInput = document.getElementById('buy-quantity');
    const quantity = parseInt(qtyInput.value) || 1; // ดึงค่าจาก Input
    
    const allAvailable = [...allProducts, ...bestSellers, ...promotions];
    const item = allAvailable.find(p => p.id === productId);
    
    if (item) {
        const targetItem = cart.find(cartItem => cartItem.id === productId);
        
        if (targetItem) {
            targetItem.quantity += quantity; // เพิ่มจำนวนตามที่ระบุ
        } else {
            cart.push({ ...item, quantity: quantity }); // เพิ่มสินค้าใหม่พร้อมจำนวนที่ระบุ
        }
        
        updateCartCount();
        updateCartUI();
        
        // ปิด Modal
        const modalElement = document.getElementById('productDetailModal');
        const modalInstance = bootstrap.Modal.getInstance(modalElement);
        if (modalInstance) modalInstance.hide();
        
        alert(`เพิ่ม "${item.name}" จำนวน ${quantity} ชิ้น ลงตะกร้าแล้ว!`);
    }
}

// ================== 5. ระบบตะกร้า & จ่ายเงิน (คงเดิม) ==================
function addToCart(productId) {
    const allAvailable = [...allProducts, ...bestSellers, ...promotions];
    const item = allAvailable.find(p => p.id === productId);
    
    if (item) {
        // ตรวจสอบว่ามีสินค้านี้ในตะกร้าหรือยัง
        const targetItem = cart.find(cartItem => cartItem.id === productId);
        
        if (targetItem) {
            // ถ้ามีแล้ว ให้เพิ่มจำนวน (quantity)
            targetItem.quantity += 1;
        } else {
            // ถ้ายังไม่มี ให้เพิ่มสินค้าเข้าไปพร้อมกำหนด quantity เริ่มต้นที่ 1
            cart.push({ ...item, quantity: 1 });
        }
        
        updateCartCount();
        updateCartUI();
        
        // ปิด Modal รายละเอียดสินค้า
        const modalElement = document.getElementById('productDetailModal');
        const modalInstance = bootstrap.Modal.getInstance(modalElement);
        if (modalInstance) modalInstance.hide();
        
        alert(`เพิ่ม "${item.name}" ลงตะกร้าแล้ว!`);
    }
}

function updateCartCount() {
    const el = document.getElementById("cart-count");
    if (el) {
        // รวมจำนวน quantity ของสินค้าทุกชิ้นในตะกร้า
        const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
        el.innerText = totalQty;
    }
}

function updateCartUI() {
    const cartList = document.getElementById('cart-items-list');
    const totalPriceEl = document.getElementById('cart-total-price');
    if (!cartList || !totalPriceEl) return;

    if (cart.length === 0) {
        cartList.innerHTML = '<p class="text-center py-4">ไม่มีสินค้าในตะกร้า</p>';
        totalPriceEl.innerText = '฿0';
    } else {
        let total = 0;
        cartList.innerHTML = cart.map((item, index) => {
            const itemTotal = item.price * item.quantity; // ราคารวมของชิ้นนี้
            total += itemTotal;
            
            return `
                <div class="d-flex align-items-center mb-3 pb-3 border-bottom text-start">
                    <img src="${item.images[0]}" width="50" height="50" class="rounded me-3" style="object-fit:cover">
                    <div class="flex-grow-1">
                        <div class="fw-bold small text-truncate" style="max-width:150px">${item.name}</div>
                        <div class="text-muted small">จำนวน: ${item.quantity} ชิ้น</div>
                        <div class="text-primary small">฿${itemTotal.toLocaleString()}</div>
                    </div>
                    <button class="btn btn-sm text-danger" onclick="removeFromCart(${index})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>`;
        }).join('');
        totalPriceEl.innerText = '฿' + total.toLocaleString();
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
    updateCartCount();
}

function showCart() {
    updateCartUI();
    new bootstrap.Modal(document.getElementById('cartModal')).show();
}

function openPaymentModal() {
    if (cart.length === 0) return alert("ไม่มีสินค้าในตะกร้า");
    const totalStr = document.getElementById("cart-total-price").innerText;
    document.querySelector("#paymentModal .btn-primary").innerText = "ยืนยันการสั่งซื้อ (" + totalStr + ")";
    new bootstrap.Modal(document.getElementById('paymentModal')).show();
}

function confirmPayment() {
    alert("สั่งซื้อสำเร็จ!");
    cart = [];
    updateCartUI();
    updateCartCount();
    bootstrap.Modal.getInstance(document.getElementById('paymentModal')).hide();
    bootstrap.Modal.getInstance(document.getElementById('cartModal')).hide();
}

// ================== 6. เริ่มต้นระบบ ==================
document.addEventListener('DOMContentLoaded', () => {
    renderItems(bestSellers, 'best-seller-container', true);
    renderItems(allProducts, 'all-products-container');
    renderPromotions();
    updateCartCount();
});
// ================== 8. ระบบค้นหา (Search System) ==================

// ฟังก์ชันสำหรับค้นหาและเรนเดอร์ใหม่
function searchProducts() {
    const searchInput = document.getElementById('searchInput'); // ให้ตรงกับ ID ใน HTML
    if (!searchInput) return;

    const searchTerm = searchInput.value.toLowerCase();
    const allAvailable = [...allProducts, ...bestSellers, ...promotions];

    // กรองสินค้าที่ชื่อตรงกับคำค้นหา (ตัดตัวซ้ำออกด้วย Set)
    const filteredResults = allAvailable.filter((item, index, self) => 
        item.name.toLowerCase().includes(searchTerm) &&
        index === self.findIndex((t) => t.id === item.id)
    );

    const productsContainer = document.getElementById('all-products-container');
    if (!productsContainer) return;

    if (filteredResults.length > 0) {
        // เรนเดอร์ผลลัพธ์ (ฟังก์ชัน renderItems จะจัดแถวละ 4 ตาม col-lg-3 ที่มีอยู่แล้ว)
        renderItems(filteredResults, 'all-products-container');
    } else {
        productsContainer.innerHTML = `
            <div class="col-12 text-center py-5">
                <div class="mb-3">
                    <i class="fa-solid fa-magnifying-glass fa-3x text-light"></i>
                </div>
                <h5 class="text-muted">ไม่พบสินค้าที่ตรงกับ "${searchInput.value}"</h5>
                <button class="btn btn-primary rounded-pill mt-3" onclick="resetSearch()">แสดงสินค้าทั้งหมด</button>
            </div>`;
    }
}

function filterByCategory(categoryName) {
    const productsContainer = document.getElementById('all-products-container');
    const sectionTitle = document.querySelector('.section-title'); // หัวข้อ "สินค้าทั้งหมด"
    
    if (!productsContainer) return;

    // กรองสินค้าตามหมวดหมู่ (category)
    const filteredResults = allProducts.filter(item => item.category === categoryName);

    if (filteredResults.length > 0) {
        // เรนเดอร์สินค้าที่กรองได้
        renderItems(filteredResults, 'all-products-container');
        
        // อัปเดตหัวข้อให้ผู้ใช้รู้ว่ากำลังดูหมวดหมู่ไหน
        if (sectionTitle) sectionTitle.innerText = `หมวดหมู่: ${categoryName}`;

    } else {
        productsContainer.innerHTML = `
            <div class="col-12 text-center py-5">
                <h5 class="text-muted">ไม่พบสินค้าในหมวดหมู่ "${categoryName}"</h5>
                <button class="btn btn-primary rounded-pill mt-3" onclick="resetSearch()">แสดงสินค้าทั้งหมด</button>
            </div>`;
    }

    // เลื่อนหน้าจอไปที่ส่วนแสดงสินค้า
    document.getElementById('product-recommend-section').scrollIntoView({ behavior: 'smooth' });
}

// แก้ไขฟังก์ชัน resetSearch เพิ่มเติมเพื่อให้หัวข้อกลับมาเป็นเหมือนเดิม
function resetSearch() {
    const searchInput = document.getElementById('searchInput');
    const sectionTitle = document.querySelector('.section-title');
    const btn = document.getElementById('view-more-btn');

    if (searchInput) searchInput.value = '';
    if (sectionTitle) sectionTitle.innerText = 'สินค้าทั้งหมด';
    
    // คืนค่าปุ่มให้กลับไปใช้ toggleProducts
    if (btn) {
        btn.innerHTML = 'ดูสินค้าเพิ่มเติม <i class="fa-solid fa-chevron-down ms-2"></i>';
        btn.onclick = toggleProducts;
    }

    // แสดงแค่ 4 ชิ้นแรกตามค่าเริ่มต้น
    const initialProducts = allProducts.slice(0, 4);
    renderItems(initialProducts, 'all-products-container');
}

// ฟังก์ชันล้างการค้นหา
function resetSearch() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.value = '';
    renderItems(allProducts, 'all-products-container');
}

// --- ฟังก์ชันสำหรับ สลับการแสดงผล (ดูเพิ่มเติม / ยุบสินค้า) ---
function toggleProducts() {
    const btn = document.getElementById('view-more-btn');
    const container = document.getElementById('all-products-container');
    
    // ตรวจสอบว่าปัจจุบันแสดงกี่ชิ้น (ถ้าแสดง 4 ชิ้น คือสถานะปกติ)
    const isExpanded = container.children.length > 4;

    if (isExpanded) {
        // --- กรณีต้องการ "ยุบสินค้า" ---
        const initialProducts = allProducts.slice(0, 4);
        renderItems(initialProducts, 'all-products-container');
        
        // เปลี่ยนข้อความปุ่มและไอคอน
        btn.innerHTML = 'ดูสินค้าเพิ่มเติม <i class="fa-solid fa-chevron-down ms-2"></i>';
        
        // เลื่อนหน้าจอกลับขึ้นไปที่หัวข้อสินค้าเพื่อความสะดวก
        document.getElementById('product-recommend-section').scrollIntoView({ behavior: 'smooth' });
    } else {
        // --- กรณีต้องการ "ดูเพิ่มเติม" ---
        renderItems(allProducts, 'all-products-container');
        
        // เปลี่ยนข้อความปุ่มเป็นย้อนกลับ/ยุบ
        btn.innerHTML = 'ย้อนกลับ (ยุบสินค้า) <i class="fa-solid fa-chevron-up ms-2"></i>';
    }
}

// --- รวม Event Listeners ทั้งหมดไว้ที่เดียว ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. เรนเดอร์สินค้าเริ่มต้น (โชว์แค่ 4 ชิ้นแรก หรือ 1 แถว)
    const topFourBestSellers = bestSellers.slice(0, 4); 
    renderItems(topFourBestSellers, 'best-seller-container', true);
    const initialProducts = allProducts.slice(0, 4);
    renderItems(initialProducts, 'all-products-container');
    renderPromotions();
    updateCartCount();

    // 2. ระบบค้นหา (Search System)
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', searchProducts);
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchProducts();
                document.getElementById('product-recommend-section').scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});