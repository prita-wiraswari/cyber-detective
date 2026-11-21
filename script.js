
/* =====================================================
   CYBER DETECTIVE
   MAIN JAVASCRIPT
   HTML + CSS + VANILLA JAVASCRIPT
===================================================== */

"use strict";

/* =====================================================
   1. CONFIGURATION AND DATA
===================================================== */

const STORAGE_KEY = "cyberDetectiveProgress_v1";

const PATHS = {
    junior: {
        name: "Junior Detective",
        level: "Perlu Bimbingan",
        description: "Kamu akan belajar melalui penjelasan sederhana, contoh konkret, gambar, dan petunjuk yang lebih lengkap.",
        recommendation: "Mulailah dengan memahami konsep dasar. Gunakan petunjuk yang tersedia dan jangan ragu mengulang aktivitas sampai kamu memahami materi."
    },

    investigator: {
        name: "Network Investigator",
        level: "Berkembang",
        description: "Kamu sudah memahami beberapa konsep dasar dan siap mengembangkan kemampuan melalui panduan bertahap dan tantangan menengah.",
        recommendation: "Cobalah menghubungkan konsep dengan contoh sehari-hari. Gunakan petunjuk jika mengalami kesulitan."
    },

    analyst: {
        name: "Cyber Analyst",
        level: "Mahir",
        description: "Kamu menunjukkan pemahaman awal yang baik dan siap menghadapi tantangan analisis serta pemecahan masalah secara mandiri.",
        recommendation: "Terapkan pengetahuanmu pada kasus yang lebih kompleks. Perhatikan alasan dan bukti sebelum menentukan keputusan."
    }
};


/* =====================================================
   2. DIAGNOSTIC QUESTIONS
   3 QUESTIONS TOTAL
===================================================== */

const diagnosticQuestions = [

    {
        category: "Jaringan Komputer",

        question: "Dua komputer dihubungkan agar dapat saling bertukar data. Hubungan tersebut disebut ....",

        options: [
            "Jaringan komputer",
            "Sistem operasi",
            "Pengolah kata",
            "Perangkat penyimpanan"
        ],

        answer: 0,

        explanation: "Jaringan komputer adalah hubungan antara dua atau lebih perangkat yang memungkinkan perangkat tersebut saling berkomunikasi dan bertukar data."
    },

    {
        category: "Keamanan Internet",

        question: "Kamu menerima pesan yang meminta kamu segera memasukkan kata sandi melalui tautan yang disertakan. Apa tindakan paling tepat?",

        options: [
            "Langsung membuka tautan",
            "Meneruskan pesan kepada teman",
            "Menganggap pesan aman karena terlihat resmi",
            "Tidak membuka tautan dan memeriksa melalui kanal resmi"
        ],

        answer: 3,

        explanation: "Pesan yang meminta kata sandi melalui tautan secara mendesak perlu dicurigai. Periksa informasi melalui aplikasi atau situs resmi."
    },

    {
        category: "Keamanan Internet",

        question: "Manakah informasi berikut yang sebaiknya tidak dibagikan kepada orang yang tidak dikenal?",

        options: [
            "Hobi membaca buku",
            "Warna kesukaan",
            "Kata sandi akun",
            "Judul film favorit"
        ],

        answer: 2,

        explanation: "Kata sandi merupakan informasi rahasia yang harus dijaga dan tidak boleh dibagikan kepada orang lain."
    }

];


/* =====================================================
   3. MISSION MATERIALS
===================================================== */

const missions = [

    {
        id: 0,

        title: "Network Identification",

        subtitle: "Mengenali perangkat jaringan komputer dan fungsi dasarnya.",

        icon: "🌐",

        objectives: [
            "Mengenali perangkat jaringan komputer.",
            "Memahami fungsi setiap perangkat.",
            "Mengidentifikasi peran perangkat dalam jaringan."
        ],

        materials: `
            <div class="material-section">
                <h4>1. Apa itu jaringan komputer?</h4>
                <p>
                    Jaringan komputer adalah hubungan antara dua atau lebih
                    perangkat yang memungkinkan perangkat tersebut saling
                    berkomunikasi dan bertukar informasi.
                </p>
            </div>

            <div class="material-section">
                <h4>2. Perangkat jaringan komputer</h4>
                <p>Berikut empat perangkat yang perlu kamu kenali:</p>

                <div class="material-illustration">
                    📡 &nbsp; 🌐 &nbsp; 🔀 &nbsp; 📶
                </div>

                <ul>
                    <li><b>Modem:</b> Menghubungkan jaringan ke layanan internet melalui jaringan penyedia layanan.</li>
                    <li><b>Router:</b> Mengarahkan lalu lintas data antarjaringan.</li>
                    <li><b>Switch:</b> Menghubungkan beberapa perangkat dalam satu jaringan lokal.</li>
                    <li><b>Access Point:</b> Menyediakan akses jaringan nirkabel bagi perangkat.</li>
                </ul>
            </div>

            <div class="material-section">
                <h4>3. Contoh penggunaan</h4>
                <p>
                    Di laboratorium komputer sekolah, beberapa komputer
                    dapat dihubungkan menggunakan switch. Router membantu
                    mengarahkan komunikasi jaringan, sedangkan access point
                    memungkinkan perangkat terhubung secara nirkabel.
                </p>
            </div>

            <div class="material-section">
                <h4>4. Kesimpulan</h4>
                <p>
                    Setiap perangkat jaringan memiliki fungsi yang berbeda.
                    Perangkat tersebut bekerja sama agar komunikasi data
                    dapat berlangsung.
                </p>
            </div>
        `,

        hints: {
            junior: "Perhatikan kata kunci berikut: modem berhubungan dengan layanan internet, router mengarahkan data, switch menghubungkan perangkat dalam LAN, dan access point menyediakan Wi-Fi.",

            investigator: "Perhatikan perbedaan tugas setiap perangkat. Apakah perangkat mengarahkan data, menghubungkan banyak perangkat, atau menyediakan akses nirkabel?",

            analyst: "Analisis kebutuhan jaringan terlebih dahulu. Bedakan fungsi penghubung jaringan, pengarah lalu lintas data, penghubung perangkat lokal, dan penyedia akses nirkabel."
        },

        descriptions: {
            junior: "Cocokkan fungsi perangkat dengan penjelasan yang paling tepat. Gunakan materi dan petunjuk yang tersedia.",

            investigator: "Identifikasi perangkat berdasarkan fungsi pada lingkungan jaringan sekolah.",

            analyst: "Analisis kebutuhan jaringan dan tentukan perangkat yang memiliki peran paling sesuai."
        },

        questions: [

            {
                scenario: "Sebuah sekolah ingin menghubungkan jaringan lokalnya dengan layanan internet dari penyedia layanan.",

                junior: "Perangkat yang berperan menghubungkan jaringan sekolah dengan layanan internet adalah ....",

                investigator: "Pada diagram jaringan sekolah, perangkat manakah yang berfungsi menghubungkan jaringan ke layanan internet?",

                analyst: "Sekolah memiliki jaringan lokal dan ingin memperoleh akses internet melalui penyedia layanan. Perangkat yang diperlukan untuk menghubungkan jaringan tersebut adalah ....",

                options: ["Modem", "Switch", "Keyboard", "Monitor"],

                answer: 0,

                explanation: "Modem berperan menghubungkan jaringan ke layanan internet melalui jaringan penyedia layanan."
            },

            {
                scenario: "Beberapa perangkat di rumah menggunakan jaringan yang sama untuk berkomunikasi dengan jaringan lain.",

                junior: "Perangkat yang bertugas mengarahkan lalu lintas data antarjaringan adalah ....",

                investigator: "Perangkat apa yang menentukan arah lalu lintas data dari satu jaringan ke jaringan lain?",

                analyst: "Sebuah jaringan memiliki beberapa tujuan komunikasi. Perangkat yang bertugas mengarahkan lalu lintas data menuju jaringan yang sesuai adalah ....",

                options: ["Printer", "Router", "Mouse", "Monitor"],

                answer: 1,

                explanation: "Router bertugas mengarahkan lalu lintas data antarjaringan."
            },

            {
                scenario: "Laboratorium sekolah mempunyai beberapa komputer yang perlu dihubungkan dalam satu jaringan lokal menggunakan kabel.",

                junior: "Perangkat yang dapat menghubungkan beberapa komputer dalam satu jaringan lokal adalah ....",

                investigator: "Untuk menghubungkan banyak komputer dalam LAN melalui kabel, perangkat apa yang sesuai?",

                analyst: "Sekolah ingin menghubungkan beberapa komputer dalam satu LAN melalui sambungan kabel. Perangkat yang sesuai untuk kebutuhan tersebut adalah ....",

                options: ["Access Point", "Modem", "Switch", "Speaker"],

                answer: 2,

                explanation: "Switch menghubungkan beberapa perangkat dalam satu jaringan lokal."
            },

            {
                scenario: "Siswa ingin mengakses jaringan sekolah menggunakan laptop melalui Wi-Fi tanpa menyambungkan kabel jaringan.",

                junior: "Perangkat yang menyediakan akses jaringan nirkabel adalah ....",

                investigator: "Perangkat jaringan apa yang memungkinkan laptop terhubung melalui Wi-Fi?",

                analyst: "Sekolah ingin memperluas akses jaringan tanpa kabel untuk laptop siswa. Perangkat yang menyediakan akses nirkabel adalah ....",

                options: ["Switch", "Keyboard", "Modem", "Access Point"],

                answer: 3,

                explanation: "Access Point menyediakan akses jaringan nirkabel bagi perangkat seperti laptop dan ponsel."
            }

        ]
    },


    {
        id: 1,

        title: "Network Connection",

        subtitle: "Memahami koneksi kabel, nirkabel, dan pertukaran data.",

        icon: "📡",

        objectives: [
            "Memahami jaringan kabel dan nirkabel.",
            "Mengenali proses koneksi antarperangkat.",
            "Memahami pertukaran data dalam jaringan."
        ],

        materials: `
            <div class="material-section">
                <h4>1. Jaringan kabel</h4>
                <div class="material-illustration">💻 ━━━━━ 🔀</div>
                <p>
                    Jaringan kabel menggunakan media fisik seperti kabel
                    Ethernet untuk menghubungkan perangkat.
                </p>
                <ul>
                    <li>Menggunakan kabel sebagai media penghubung.</li>
                    <li>Memiliki sambungan fisik antarperangkat.</li>
                    <li>Cocok untuk komputer laboratorium dan perangkat tetap.</li>
                </ul>
            </div>

            <div class="material-section">
                <h4>2. Jaringan nirkabel</h4>
                <div class="material-illustration">📱 ))) 📶 ))) 💻</div>
                <p>
                    Jaringan nirkabel menggunakan gelombang radio untuk
                    menghubungkan perangkat tanpa kabel fisik.
                </p>
                <ul>
                    <li>Tidak membutuhkan kabel jaringan langsung.</li>
                    <li>Dapat memberikan kemudahan mobilitas.</li>
                    <li>Contohnya adalah koneksi Wi-Fi.</li>
                </ul>
            </div>

            <div class="material-section">
                <h4>3. Pertukaran data</h4>
                <p>
                    Ketika perangkat mengirimkan informasi melalui jaringan,
                    data dapat dibagi menjadi bagian-bagian kecil yang disebut
                    paket data. Paket tersebut dikirim melalui jalur jaringan
                    menuju perangkat tujuan.
                </p>
            </div>

            <div class="material-section">
                <h4>4. Urutan komunikasi sederhana</h4>
                <p>
                    Perangkat pengirim → jaringan → perangkat tujuan.
                    Perangkat penerima kemudian menyusun kembali data
                    yang diterima sesuai kebutuhan komunikasi.
                </p>
            </div>
        `,

        hints: {
            junior: "Ingat: kabel Ethernet termasuk koneksi kabel, sedangkan Wi-Fi termasuk koneksi nirkabel. Data berpindah dari perangkat pengirim menuju penerima.",

            investigator: "Bandingkan media penghubung, mobilitas, dan proses perpindahan data. Perhatikan urutan pengirim, jaringan, dan penerima.",

            analyst: "Pertimbangkan karakteristik media transmisi, kondisi lingkungan, dan kebutuhan pengguna ketika menentukan jenis koneksi."
        },

        descriptions: {
            junior: "Kelompokkan contoh koneksi dan pahami cara data berpindah menggunakan bantuan materi.",

            investigator: "Bandingkan karakteristik koneksi dan susun proses pertukaran data secara bertahap.",

            analyst: "Analisis kebutuhan jaringan dan tentukan jenis koneksi serta kemungkinan solusi berdasarkan skenario."
        },

        questions: [

            {
                scenario: "Komputer laboratorium dihubungkan menggunakan kabel Ethernet ke perangkat jaringan.",

                junior: "Jenis koneksi yang digunakan komputer tersebut adalah ....",

                investigator: "Berdasarkan media penghubungnya, koneksi Ethernet termasuk jenis jaringan ....",

                analyst: "Sebuah laboratorium membutuhkan sambungan jaringan melalui media fisik. Jenis koneksi yang sesuai dengan kondisi tersebut adalah ....",

                options: ["Nirkabel", "Kabel", "Satelit pribadi", "Bluetooth saja"],

                answer: 1,

                explanation: "Ethernet menggunakan kabel sebagai media fisik penghubung perangkat."
            },

            {
                scenario: "Seorang siswa menggunakan laptop untuk mengakses jaringan sekolah tanpa menyambungkan kabel Ethernet.",

                junior: "Koneksi yang digunakan siswa tersebut adalah ....",

                investigator: "Teknologi Wi-Fi termasuk kategori koneksi apa?",

                analyst: "Pengguna membutuhkan mobilitas saat mengakses jaringan tanpa sambungan kabel langsung. Jenis koneksi yang sesuai adalah ....",

                options: ["Kabel", "Fiber optik langsung", "Nirkabel", "Koneksi serial"],

                answer: 2,

                explanation: "Wi-Fi menggunakan gelombang radio sehingga termasuk jaringan nirkabel."
            },

            {
                scenario: "Seorang siswa mengirimkan dokumen dari laptop ke komputer lain melalui jaringan.",

                junior: "Dalam komunikasi data, bagian-bagian kecil dari data yang dikirim melalui jaringan disebut ....",

                investigator: "Bagaimana data dapat dibagi ketika dikirim melalui jaringan?",

                analyst: "Ketika dokumen dikirim melalui jaringan, informasi dapat dibagi menjadi bagian-bagian kecil sebelum diteruskan. Bagian tersebut disebut ....",

                options: ["Paket data", "Tampilan layar", "Folder fisik", "Perangkat input"],

                answer: 0,

                explanation: "Paket data merupakan bagian dari data yang dikirimkan melalui jaringan."
            },

            {
                scenario: "Sebuah komputer mengirimkan informasi kepada komputer lain melalui jaringan.",

                junior: "Urutan komunikasi data yang paling sederhana adalah ....",

                investigator: "Susun urutan proses komunikasi antara dua perangkat.",

                analyst: "Dalam sebuah komunikasi jaringan sederhana, perangkat pengirim harus mengirimkan data melalui jaringan menuju perangkat penerima. Urutan yang tepat adalah ....",

                options: [
                    "Penerima → Pengirim → Jaringan",
                    "Jaringan → Penerima → Pengirim",
                    "Penerima → Jaringan → Pengirim",
                    "Pengirim → Jaringan → Penerima"
                ],

                answer: 3,

                explanation: "Data bergerak dari perangkat pengirim melalui jaringan menuju perangkat penerima."
            }

        ]
    },


    {
        id: 2,

        title: "Phishing Investigation",

        subtitle: "Mengenali pesan mencurigakan dan menentukan tindakan yang tepat.",

        icon: "🎣",

        objectives: [
            "Mengenali pesan dan tautan mencurigakan.",
            "Menganalisis ciri-ciri pesan phishing.",
            "Menentukan tindakan yang tepat saat menerima pesan mencurigakan."
        ],

        materials: `
            <div class="material-section">
                <h4>1. Apa itu phishing?</h4>
                <p>
                    Phishing merupakan upaya penipuan digital yang berusaha
                    membuat seseorang memberikan informasi rahasia melalui
                    pesan, situs, atau tautan yang dibuat seolah-olah resmi.
                </p>
            </div>

            <div class="material-section">
                <h4>2. Ciri-ciri pesan mencurigakan</h4>
                <div class="material-illustration">📩 ⚠️ 🔗</div>
                <ul>
                    <li>Meminta kata sandi atau kode verifikasi.</li>
                    <li>Menggunakan kalimat yang mendesak.</li>
                    <li>Memuat tautan yang tidak sesuai dengan situs resmi.</li>
                    <li>Menawarkan hadiah yang tidak jelas.</li>
                    <li>Menggunakan identitas pengirim yang tidak dapat dipastikan.</li>
                </ul>
            </div>

            <div class="material-section">
                <h4>3. Risiko phishing</h4>
                <p>
                    Phishing dapat menyebabkan informasi akun dan data pribadi
                    diketahui oleh pihak yang tidak berwenang.
                </p>
            </div>

            <div class="material-section">
                <h4>4. Tindakan yang tepat</h4>
                <ul>
                    <li>Jangan langsung membuka tautan mencurigakan.</li>
                    <li>Jangan memberikan kata sandi atau kode verifikasi.</li>
                    <li>Periksa informasi melalui kanal resmi.</li>
                    <li>Laporkan pesan mencurigakan kepada pihak yang tepat.</li>
                </ul>
            </div>
        `,

        hints: {
            junior: "Perhatikan tiga tanda utama: permintaan informasi rahasia, pesan yang mendesak, dan tautan yang tidak jelas.",

            investigator: "Tentukan bagian pesan yang mencurigakan. Perhatikan pengirim, isi pesan, tautan, dan permintaan informasi.",

            analyst: "Evaluasi kredibilitas pengirim, tujuan pesan, indikator manipulasi, serta risiko terhadap informasi pribadi."
        },

        descriptions: {
            junior: "Pilih pesan yang aman atau mencurigakan dengan bantuan petunjuk.",

            investigator: "Identifikasi bagian pesan yang mencurigakan dan tentukan alasan berdasarkan indikator yang ditemukan.",

            analyst: "Analisis kasus, identifikasi indikator phishing, dan tentukan respons paling tepat."
        },

        questions: [

            {
                scenario: "Pesan A: 'Akun kamu akan ditutup dalam 10 menit! Masukkan kata sandi melalui tautan berikut agar akun tetap aktif.'",

                junior: "Apa yang sebaiknya kamu lakukan ketika menerima pesan tersebut?",

                investigator: "Identifikasi ciri mencurigakan pada pesan yang meminta kata sandi dengan batas waktu singkat.",

                analyst: "Pesan mengandung tekanan waktu dan meminta informasi rahasia. Tindakan paling tepat untuk mengurangi risiko adalah ....",

                options: [
                    "Langsung memasukkan kata sandi",
                    "Tidak membuka tautan dan memeriksa melalui layanan resmi",
                    "Meneruskan pesan kepada teman",
                    "Membalas dengan mengirimkan kode verifikasi"
                ],

                answer: 1,

                explanation: "Pesan mendesak yang meminta kata sandi melalui tautan patut dicurigai. Gunakan kanal resmi untuk memeriksa informasi."
            },

            {
                scenario: "Pesan B: 'Selamat! Kamu mendapatkan hadiah. Klik tautan ini dan masukkan data akun untuk mengambil hadiah.'",

                junior: "Apakah pesan tersebut perlu dicurigai?",

                investigator: "Bagian apa yang menunjukkan bahwa pesan tersebut berpotensi merupakan phishing?",

                analyst: "Pesan menawarkan hadiah dengan syarat penerima memasukkan informasi akun melalui tautan. Indikator yang paling kuat adalah ....",

                options: [
                    "Pesan dikirim pada pagi hari",
                    "Pesan menggunakan kalimat singkat",
                    "Meminta data akun untuk memperoleh hadiah yang tidak jelas",
                    "Menggunakan tanda baca"
                ],

                answer: 2,

                explanation: "Permintaan data akun sebagai syarat mendapatkan hadiah yang tidak jelas merupakan indikator yang perlu diwaspadai."
            },

            {
                scenario: "Pesan C mengaku berasal dari layanan sekolah, tetapi alamat pengirim dan tautannya berbeda dari informasi resmi sekolah.",

                junior: "Apa tindakan yang paling tepat?",

                investigator: "Mengapa perbedaan alamat pengirim dan tautan perlu diperiksa?",

                analyst: "Identitas pengirim belum dapat dipastikan dan alamat tautan tidak sesuai dengan informasi resmi. Respons yang tepat adalah ....",

                options: [
                    "Memasukkan semua informasi akun",
                    "Meneruskan pesan tanpa pemeriksaan",
                    "Mengikuti semua instruksi pesan",
                    "Menghubungi sekolah melalui kontak resmi"
                ],

                answer: 3,

                explanation: "Informasi dari pengirim yang belum terverifikasi harus diperiksa melalui kontak resmi sekolah."
            },

            {
                scenario: "Pesan D meminta kode verifikasi yang dikirimkan ke ponsel dengan alasan akan membantu memperbaiki akun.",

                junior: "Apakah kode verifikasi boleh diberikan kepada pengirim pesan tersebut?",

                investigator: "Apa risiko memberikan kode verifikasi kepada orang yang tidak dikenal?",

                analyst: "Pihak tidak dikenal meminta kode verifikasi dengan alasan membantu akun. Keputusan yang tepat adalah ....",

                options: [
                    "Tidak memberikan kode dan menghubungi layanan resmi",
                    "Memberikan kode agar masalah cepat selesai",
                    "Membagikan kode ke grup",
                    "Mengirimkan kata sandi sekaligus"
                ],

                answer: 0,

                explanation: "Kode verifikasi bersifat rahasia. Jangan memberikannya kepada pihak lain, termasuk orang yang mengaku sebagai petugas layanan."
            }

        ]
    },


    {
        id: 3,

        title: "Digital Protection",

        subtitle: "Menjaga keamanan akun, data pribadi, dan identitas digital.",

        icon: "🔐",

        objectives: [
            "Memahami perlindungan akun digital.",
            "Mengenali pentingnya menjaga data pribadi.",
            "Memahami cara menjaga keamanan identitas digital."
        ],

        materials: `
            <div class="material-section">
                <h4>1. Data pribadi</h4>
                <p>
                    Data pribadi adalah informasi yang berkaitan dengan
                    seseorang dan perlu dijaga agar tidak disalahgunakan.
                </p>
                <ul>
                    <li>Nama lengkap dan alamat rumah.</li>
                    <li>Nomor telepon pribadi.</li>
                    <li>Kata sandi akun.</li>
                    <li>Kode verifikasi.</li>
                    <li>Informasi identitas dan akun.</li>
                </ul>
            </div>

            <div class="material-section">
                <h4>2. Informasi yang dapat dibagikan</h4>
                <p>
                    Beberapa informasi umum seperti hobi, minat, dan karya
                    dapat dibagikan dengan tetap memperhatikan privasi
                    dan konteks penggunaannya.
                </p>
            </div>

            <div class="material-section">
                <h4>3. Perlindungan akun</h4>
                <div class="material-illustration">🔑 🛡️ 🔐</div>
                <ul>
                    <li>Gunakan kata sandi yang kuat dan unik.</li>
                    <li>Aktifkan verifikasi dua langkah jika tersedia.</li>
                    <li>Jangan membagikan kata sandi.</li>
                    <li>Keluar dari akun pada perangkat umum.</li>
                    <li>Periksa aktivitas akun secara berkala.</li>
                </ul>
            </div>

            <div class="material-section">
                <h4>4. Identitas digital</h4>
                <p>
                    Identitas digital merupakan informasi dan jejak aktivitas
                    seseorang di dunia digital. Setiap pengguna perlu
                    mempertimbangkan informasi yang dibagikan secara daring.
                </p>
            </div>
        `,

        hints: {
            junior: "Informasi rahasia seperti kata sandi, alamat rumah, dan kode verifikasi harus dijaga. Hobi dan minat umum dapat dibagikan dengan bijak.",

            investigator: "Bedakan informasi yang dapat dibagikan dengan informasi yang dapat digunakan untuk mengakses akun atau mengenali identitas pribadi.",

            analyst: "Analisis tingkat kerahasiaan informasi, potensi penyalahgunaan, dan tindakan pencegahan yang dapat diterapkan."
        },

        descriptions: {
            junior: "Kelompokkan informasi pribadi dan informasi umum dengan bantuan contoh.",

            investigator: "Pilih tindakan perlindungan akun dan data pribadi berdasarkan skenario.",

            analyst: "Analisis kasus terkait informasi pribadi dan susun tindakan pencegahan yang tepat."
        },

        questions: [

            {
                scenario: "Seorang siswa ingin membagikan informasi tentang dirinya di media sosial.",

                junior: "Informasi manakah yang harus dijaga kerahasiaannya?",

                investigator: "Tentukan informasi yang memiliki tingkat kerahasiaan tinggi.",

                analyst: "Seorang siswa ingin menjaga identitas digitalnya. Informasi yang paling tidak tepat untuk dibagikan secara publik adalah ....",

                options: [
                    "Hobi menggambar",
                    "Kata sandi akun",
                    "Buku favorit",
                    "Karya seni"
                ],

                answer: 1,

                explanation: "Kata sandi merupakan informasi rahasia yang tidak boleh dibagikan."
            },

            {
                scenario: "Siswa menggunakan satu kata sandi yang sama untuk seluruh akun digitalnya.",

                junior: "Apa saran yang paling baik untuk siswa tersebut?",

                investigator: "Mengapa penggunaan kata sandi yang sama pada semua akun perlu dihindari?",

                analyst: "Jika satu akun mengalami masalah keamanan, penggunaan kata sandi yang sama dapat meningkatkan risiko terhadap akun lainnya. Solusi terbaik adalah ....",

                options: [
                    "Membagikan kata sandi kepada teman",
                    "Menuliskan kata sandi di tempat umum",
                    "Menggunakan kata sandi kuat dan berbeda untuk setiap akun",
                    "Menggunakan nama sendiri untuk semua akun"
                ],

                answer: 2,

                explanation: "Kata sandi yang kuat dan unik membantu mengurangi risiko terhadap akun lain jika salah satu akun mengalami masalah."
            },

            {
                scenario: "Sebuah aplikasi menyediakan fitur verifikasi dua langkah untuk melindungi akun.",

                junior: "Apa manfaat mengaktifkan fitur tersebut?",

                investigator: "Bagaimana verifikasi dua langkah membantu menjaga akun?",

                analyst: "Pengguna ingin menambah perlindungan akun selain menggunakan kata sandi. Fitur yang dapat membantu memberikan lapisan verifikasi tambahan adalah ....",

                options: [
                    "Menghapus nama akun",
                    "Membagikan kata sandi",
                    "Menggunakan kata sandi yang mudah",
                    "Mengaktifkan verifikasi dua langkah"
                ],

                answer: 3,

                explanation: "Verifikasi dua langkah menambahkan tahap pemeriksaan identitas saat seseorang masuk ke akun."
            },

            {
                scenario: "Seorang siswa selesai menggunakan akun pribadinya pada komputer umum di laboratorium.",

                junior: "Apa yang sebaiknya dilakukan sebelum meninggalkan komputer?",

                investigator: "Mengapa pengguna harus keluar dari akun setelah menggunakan komputer umum?",

                analyst: "Komputer laboratorium digunakan secara bergantian oleh banyak siswa. Langkah pencegahan yang tepat setelah menggunakan akun pribadi adalah ....",

                options: [
                    "Keluar dari akun dan memastikan sesi sudah berakhir",
                    "Membiarkan akun tetap terbuka",
                    "Memberikan akses kepada pengguna berikutnya",
                    "Menyimpan kata sandi di komputer umum"
                ],

                answer: 0,

                explanation: "Keluar dari akun setelah menggunakan perangkat umum membantu mencegah akses oleh pengguna berikutnya."
            }

        ]
    }

];


/* =====================================================
   4. FINAL EVALUATION
   8 QUESTIONS - 2 QUESTIONS PER LEARNING AREA
===================================================== */

const finalQuestions = [

    {
        category: "Network Identification",

        scenario: "Laboratorium sekolah memiliki beberapa komputer yang harus dihubungkan ke dalam satu jaringan lokal.",

        question: "Perangkat yang paling sesuai untuk menghubungkan beberapa komputer dalam satu LAN menggunakan kabel adalah ....",

        options: ["Switch", "Speaker", "Keyboard", "Monitor"],

        answer: 0,

        explanation: "Switch digunakan untuk menghubungkan beberapa perangkat dalam jaringan lokal."
    },

    {
        category: "Network Identification",

        scenario: "Sekolah menyediakan jaringan Wi-Fi agar laptop siswa dapat terhubung tanpa kabel langsung.",

        question: "Perangkat yang menyediakan akses jaringan nirkabel tersebut adalah ....",

        options: ["Printer", "Access Point", "Keyboard", "Scanner"],

        answer: 1,

        explanation: "Access Point menyediakan akses jaringan nirkabel bagi perangkat."
    },

    {
        category: "Network Connection",

        scenario: "Sebuah komputer terhubung menggunakan kabel Ethernet dan komputer lain menggunakan Wi-Fi.",

        question: "Perbedaan utama kedua jenis koneksi tersebut adalah ....",

        options: [
            "Keduanya selalu menggunakan kabel",
            "Wi-Fi selalu membutuhkan kabel Ethernet langsung",
            "Ethernet menggunakan media kabel, sedangkan Wi-Fi menggunakan gelombang radio",
            "Keduanya tidak dapat bertukar data"
        ],

        answer: 2,

        explanation: "Ethernet menggunakan media kabel, sedangkan Wi-Fi menggunakan gelombang radio."
    },

    {
        category: "Network Connection",

        scenario: "Seorang siswa mengirimkan dokumen kepada komputer lain melalui jaringan sekolah.",

        question: "Urutan komunikasi data yang benar secara sederhana adalah ....",

        options: [
            "Penerima → Pengirim → Jaringan",
            "Jaringan → Pengirim → Penerima",
            "Penerima → Jaringan → Pengirim",
            "Pengirim → Jaringan → Penerima"
        ],

        answer: 3,

        explanation: "Data dikirim dari perangkat pengirim melalui jaringan menuju perangkat penerima."
    },

    {
        category: "Phishing Investigation",

        scenario: "Pesan digital meminta siswa segera memasukkan kata sandi melalui tautan yang tidak dikenal.",

        question: "Apa tindakan paling tepat?",

        options: [
            "Membuka tautan dan memasukkan kata sandi",
            "Tidak membuka tautan dan memeriksa informasi melalui kanal resmi",
            "Meneruskan pesan kepada semua teman",
            "Membagikan kode verifikasi"
        ],

        answer: 1,

        explanation: "Tautan mencurigakan yang meminta informasi rahasia harus dihindari dan diperiksa melalui kanal resmi."
    },

    {
        category: "Phishing Investigation",

        scenario: "Sebuah pesan menawarkan hadiah yang tidak jelas dan meminta informasi akun sebagai syarat penerimaan.",

        question: "Apa indikator yang perlu diwaspadai?",

        options: [
            "Pesan diterima pada siang hari",
            "Pesan memiliki kalimat pendek",
            "Pesan meminta informasi akun untuk memperoleh hadiah yang tidak jelas",
            "Pesan menggunakan huruf biasa"
        ],

        answer: 2,

        explanation: "Permintaan informasi akun dengan iming-iming hadiah yang tidak jelas merupakan tanda mencurigakan."
    },

    {
        category: "Digital Protection",

        scenario: "Seorang siswa menggunakan beberapa akun digital untuk kegiatan belajar.",

        question: "Cara terbaik melindungi akun-akun tersebut adalah ....",

        options: [
            "Menggunakan kata sandi kuat dan unik serta mengaktifkan verifikasi dua langkah",
            "Menggunakan kata sandi yang sama untuk semua akun",
            "Membagikan kata sandi kepada teman",
            "Menggunakan informasi pribadi sebagai kata sandi"
        ],

        answer: 0,

        explanation: "Kata sandi kuat dan unik serta verifikasi dua langkah membantu meningkatkan keamanan akun."
    },

    {
        category: "Digital Protection",

        scenario: "Seorang siswa ingin membagikan foto kegiatan sekolah di media sosial.",

        question: "Tindakan yang paling tepat untuk menjaga identitas digital adalah ....",

        options: [
            "Menyertakan alamat rumah",
            "Menampilkan kata sandi akun",
            "Membagikan semua informasi pribadi",
            "Memeriksa informasi dalam foto dan menghindari data pribadi yang sensitif"
        ],

        answer: 3,

        explanation: "Pengguna perlu memeriksa informasi yang terlihat dalam unggahan agar data pribadi tidak tersebar."
    }

];


/* =====================================================
   5. APPLICATION STATE
===================================================== */

function createInitialState() {

    return {
        diagnosticDone: false,

        diagnosticAnswers: [null, null, null],

        diagnosticScore: 0,

        recommendedPath: null,

        selectedPath: null,

        missionAnswers: [
            [null, null, null, null],
            [null, null, null, null],
            [null, null, null, null],
            [null, null, null, null]
        ],

        missionChecked: [
            [false, false, false, false],
            [false, false, false, false],
            [false, false, false, false],
            [false, false, false, false]
        ],

        missionResults: [null, null, null, null],

        missionCompleted: [false, false, false, false],

        missionScores: [0, 0, 0, 0],

        missionHintsUsed: [0, 0, 0, 0],

        finalAnswers: Array(8).fill(null),

        finalChecked: Array(8).fill(false),

        finalDone: false,

        finalScore: 0,

        reflection: {
            learned: "",
            difficult: "",
            action: ""
        }
    };

}


function loadState() {

    const initial = createInitialState();

    try {

        const saved = localStorage.getItem(STORAGE_KEY);

        if (!saved) return initial;

        const parsed = JSON.parse(saved);

        if (!parsed || typeof parsed !== "object") {
            return initial;
        }

        return {
            ...initial,
            ...parsed
        };

    } catch (error) {

        console.error("Gagal membaca progres:", error);

        return initial;

    }

}


let state = loadState();

let currentPage = "welcome";

let currentDiagnosticIndex = 0;

let currentMissionIndex = 0;

let currentMissionQuestion = 0;

let currentFinalIndex = 0;


/* =====================================================
   6. BASIC UTILITIES
===================================================== */

function saveState() {

    try {

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(state)
        );

    } catch (error) {

        console.error("Gagal menyimpan progres:", error);

        showToast("Penyimpanan browser tidak tersedia.");

    }

}


function getElement(id) {

    return document.getElementById(id);

}


function escapeHTML(value) {

    return String(value).replace(/[&<>"']/g, character => {

        const entities = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        };

        return entities[character];

    });

}


function showToast(message) {

    const container = getElement("toastContainer");

    const toast = document.createElement("div");

    toast.className = "toast";

    toast.textContent = message;

    container.appendChild(toast);

    setTimeout(() => {

        toast.remove();

    }, 3000);

}


function getSelectedPath() {

    return state.selectedPath || state.recommendedPath || "junior";

}


function getTotalMissionScore() {

    return state.missionScores.reduce(
        (total, score) => total + score,
        0
    );

}


function getCompletedMissionCount() {

    return state.missionCompleted.filter(Boolean).length;

}


function getOverallProgress() {

    return Math.round(
        getCompletedMissionCount() / 4 * 100
    );

}


/* =====================================================
   7. NAVIGATION
===================================================== */

function showPage(pageId) {

    const page = getElement(pageId);

    if (!page) {

        showToast("Halaman tidak ditemukan.");

        return;

    }

    document.querySelectorAll(".page").forEach(item => {

        item.classList.remove("active");

    });

    page.classList.add("active");

    currentPage = pageId;

    document.querySelectorAll(".nav-item[data-page]").forEach(item => {

        item.classList.toggle(
            "active",
            item.dataset.page === pageId
        );

    });

    getElement("sidebar").classList.remove("open");

    updateDashboard();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    saveState();

}


function toggleMobileMenu() {

    getElement("sidebar").classList.toggle("open");

}


function updateDashboard() {

    const completed = getCompletedMissionCount();

    const percentage = getOverallProgress();

    getElement("hubCompleted").textContent =
        `${completed} / 4`;

    getElement("hubScore").textContent =
        getTotalMissionScore();

    getElement("hubPath").textContent =
        state.selectedPath
            ? PATHS[state.selectedPath].name
            : "Belum dipilih";

    getElement("overallProgressText").textContent =
        percentage + "%";

    getElement("overallProgress").style.width =
        percentage + "%";

    const path = state.selectedPath
        ? PATHS[state.selectedPath].name
        : "Belum memilih jalur";

    getElement("sidebarLevel").textContent = path;

    missions.forEach((mission, index) => {

        const card = getElement("missionCard" + index);

        const status = getElement("status" + index);

        if (state.missionCompleted[index]) {

            card.classList.add("completed");

            status.textContent = "✓ SELESAI";

        } else {

            card.classList.remove("completed");

            status.textContent = "BELUM SELESAI";

        }

    });

}


/* =====================================================
   8. DIAGNOSTIC SYSTEM
===================================================== */

function startDiagnostic() {

    currentDiagnosticIndex = 0;

    if (state.diagnosticDone) {

        const restart = confirm(
            "Tes diagnostik sudah pernah dikerjakan. Apakah kamu ingin mengulang tes dan memperbarui rekomendasi jalur?"
        );

        if (!restart) return;

        state = {
            ...state,
            diagnosticDone: false,
            diagnosticAnswers: [null, null, null],
            diagnosticScore: 0,
            recommendedPath: null,
            selectedPath: null
        };

        saveState();

    }

    renderDiagnostic();

    showPage("diagnostic");

}


function openDiagnostic() {

    if (state.diagnosticDone) {

        showPage("result");

    } else {

        showPage("instructions");

        showToast("Silakan mulai tes diagnostik dari halaman petunjuk.");

    }

}


function renderDiagnostic() {

    const question = diagnosticQuestions[currentDiagnosticIndex];

    const answer = state.diagnosticAnswers[currentDiagnosticIndex];

    const checked = answer !== null;

    getElement("diagnosticCounter").textContent =
        `PERTANYAAN ${String(currentDiagnosticIndex + 1).padStart(2, "0")} / 03`;

    getElement("diagnosticNumber").textContent =
        `QUESTION ${String(currentDiagnosticIndex + 1).padStart(2, "0")} • ${question.category.toUpperCase()}`;

    getElement("diagnosticQuestion").textContent =
        question.question;

    const percentage = Math.round(
        ((currentDiagnosticIndex + 1) / 3) * 100
    );

    getElement("diagnosticProgress").style.width =
        percentage + "%";

    getElement("diagnosticProgressText").textContent =
        percentage + "%";

    const options = getElement("diagnosticOptions");

    options.innerHTML = "";

    question.options.forEach((option, index) => {

        const button = document.createElement("button");

        button.className = "answer-option";

        button.disabled = checked;

        if (answer === index) {
            button.classList.add("selected");
        }

        button.innerHTML = `
            <span class="option-letter">${String.fromCharCode(65 + index)}</span>
            <span>${escapeHTML(option)}</span>
        `;

        button.addEventListener("click", () => {

            state.diagnosticAnswers[currentDiagnosticIndex] = index;

            saveState();

            renderDiagnostic();

        });

        options.appendChild(button);

    });

    const feedback = getElement("diagnosticFeedback");

    feedback.hidden = !checked;

    if (checked) {

        feedback.className = "feedback-box";

        if (answer === question.answer) {

            feedback.classList.add("success");

            feedback.textContent = "✓ Jawaban berhasil dipilih.";

        } else {

            feedback.classList.add("error");

            feedback.textContent = "Jawaban sudah dipilih. Kamu dapat melanjutkan tes.";

        }

    }

    getElement("diagnosticBack").disabled =
        currentDiagnosticIndex === 0;

    getElement("diagnosticNext").disabled =
        !checked;

    getElement("diagnosticNext").textContent =
        currentDiagnosticIndex === 2
            ? "Lihat Hasil →"
            : "Selanjutnya →";

}


function previousDiagnostic() {

    if (currentDiagnosticIndex > 0) {

        currentDiagnosticIndex--;

        renderDiagnostic();

    }

}


function nextDiagnostic() {

    if (state.diagnosticAnswers[currentDiagnosticIndex] === null) {

        showToast("Pilih jawaban terlebih dahulu.");

        return;

    }

    if (currentDiagnosticIndex < 2) {

        currentDiagnosticIndex++;

        renderDiagnostic();

    } else {

        calculateDiagnostic();

    }

}


function calculateDiagnostic() {

    let score = 0;

    diagnosticQuestions.forEach((question, index) => {

        if (
            state.diagnosticAnswers[index] === question.answer
        ) {

            score++;

        }

    });

    let recommendation;

    if (score <= 1) {

        recommendation = "junior";

    } else if (score === 2) {

        recommendation = "investigator";

    } else {

        recommendation = "analyst";

    }

    state.diagnosticScore = score;

    state.recommendedPath = recommendation;

    state.selectedPath = recommendation;

    state.diagnosticDone = true;

    saveState();

    renderResult();

    showPage("result");

}


function renderResult() {

    if (!state.diagnosticDone) {

        showPage("instructions");

        return;

    }

    const path = PATHS[state.recommendedPath];

    getElement("resultScore").textContent =
        state.diagnosticScore;

    getElement("resultPath").textContent =
        path.name;

    getElement("resultDescription").textContent =
        path.description;

    getElement("resultRecommendation").textContent =
        path.recommendation;

    document.querySelectorAll(".path-card").forEach(card => {

        card.classList.toggle(
            "selected",
            card.dataset.path === state.selectedPath
        );

    });

}


function selectPath(pathId) {

    if (!PATHS[pathId]) return;

    state.selectedPath = pathId;

    saveState();

    renderResult();

    updateDashboard();

    showToast(
        "Jalur belajar berubah menjadi " + PATHS[pathId].name
    );

}


/* =====================================================
   9. MISSION SYSTEM
===================================================== */

function openMission(index) {

    if (!state.diagnosticDone) {

        showToast("Kerjakan tes diagnostik terlebih dahulu.");

        showPage("instructions");

        return;

    }

    if (!missions[index]) return;

    if (state.missionCompleted[index]) {

        const repeat = confirm(
            "Misi ini sudah selesai. Apakah kamu ingin mengulang aktivitas dari awal?"
        );

        if (repeat) {

            resetSingleMission(index);

        } else {

            showPage("hub");

            return;

        }

    }

    currentMissionIndex = index;

    currentMissionQuestion = 0;

    renderMission();

    showPage("mission");

}


function resetSingleMission(index) {

    state.missionAnswers[index] = [null, null, null, null];

    state.missionChecked[index] = [false, false, false, false];

    state.missionCompleted[index] = false;

    state.missionScores[index] = 0;

    state.missionHintsUsed[index] = 0;

    state.missionResults[index] = null;

    saveState();

    updateDashboard();

}


function renderMission() {

    const mission = missions[currentMissionIndex];

    const pathId = getSelectedPath();

    const path = PATHS[pathId];

    const question = mission.questions[currentMissionQuestion];

    const answer = state.missionAnswers[currentMissionIndex][currentMissionQuestion];

    const checked = state.missionChecked[currentMissionIndex][currentMissionQuestion];

    getElement("missionEyebrow").textContent =
        "MISSION " + String(currentMissionIndex + 1).padStart(2, "0");

    getElement("missionIcon").textContent =
        mission.icon;

    getElement("missionTitle").textContent =
        mission.title;

    getElement("missionSubtitle").textContent =
        mission.subtitle;

    getElement("missionPathName").textContent =
        path.name;

    getElement("missionMaterial").innerHTML =
        mission.materials;

    getElement("missionHintText").textContent =
        mission.hints[pathId];

    getElement("missionHint").hidden =
        pathId !== "junior";

    getElement("taskDescription").textContent =
        mission.descriptions[pathId];

    getElement("missionQuestionCount").textContent =
        `${String(currentMissionQuestion + 1).padStart(2, "0")} / 04`;

    getElement("missionQuestionNumber").textContent =
        `CHALLENGE ${String(currentMissionQuestion + 1).padStart(2, "0")}`;

    getElement("missionQuestion").textContent =
        question[pathId];

    const progress = Math.round(
        ((currentMissionQuestion + 1) / 4) * 100
    );

    getElement("missionProgress").style.width =
        progress + "%";

    const scenario = getElement("missionScenario");

    scenario.hidden = !question.scenario;

    scenario.textContent = question.scenario;

    const options = getElement("missionOptions");

    options.innerHTML = "";

    question.options.forEach((option, index) => {

        const button = document.createElement("button");

        button.className = "answer-option";

        button.disabled = checked;

        if (answer === index) {

            button.classList.add("selected");

        }

        if (checked && index === question.answer) {

            button.classList.add("correct");

        }

        if (checked && answer === index && answer !== question.answer) {

            button.classList.add("wrong");

        }

        button.innerHTML = `
            <span class="option-letter">${String.fromCharCode(65 + index)}</span>
            <span>${escapeHTML(option)}</span>
        `;

        button.addEventListener("click", () => {

            state.missionAnswers[currentMissionIndex][currentMissionQuestion] = index;

            saveState();

            renderMission();

        });

        options.appendChild(button);

    });

    const feedback = getElement("missionFeedback");

    feedback.hidden = !checked;

    if (checked) {

        const correct = answer === question.answer;

        feedback.className = "feedback-box " +
            (correct ? "success" : "error");

        feedback.textContent =
            (correct ? "✓ Jawaban benar. " : "✗ Jawaban belum tepat. ") +
            question.explanation;

    }

    
getElement("missionPrevious").disabled =
    currentMissionQuestion === 0;

// Tombol aktif jika peserta sudah memilih jawaban
getElement("missionNext").disabled =
    answer === null;

// Atur tulisan tombol sesuai tahap pengerjaan
getElement("missionNext").textContent =
    !checked
        ? "Periksa Jawaban →"
        : currentMissionQuestion === 3
            ? "Selesaikan Misi ✓"
            : "Selanjutnya →";
}


function showMissionHint() {

    const mission = missions[currentMissionIndex];

    const path = getSelectedPath();

    const hint = mission.hints[path];

    getElement("missionHint").hidden = false;

    getElement("missionHintText").textContent = hint;

    state.missionHintsUsed[currentMissionIndex]++;

    saveState();

    showToast("Petunjuk berhasil ditampilkan.");

}


function previousMissionQuestion() {

    if (currentMissionQuestion > 0) {

        currentMissionQuestion--;

        renderMission();

    }

}


function nextMissionQuestion() {

    const answers = state.missionAnswers[currentMissionIndex];

    const checked = state.missionChecked[currentMissionIndex];

    if (!checked[currentMissionQuestion]) {

        showToast("Periksa jawaban terlebih dahulu.");

        return;

    }

    if (currentMissionQuestion < 3) {

        currentMissionQuestion++;

        renderMission();

    } else {

        completeMission();

    }

}


function completeMission() {

    const mission = missions[currentMissionIndex];

    const answers = state.missionAnswers[currentMissionIndex];

    let score = 0;

    mission.questions.forEach((question, index) => {

        if (answers[index] === question.answer) {

            score++;

        }

    });

    state.missionScores[currentMissionIndex] = score;

    const passingScore = currentMissionIndex === 0 ? 4 : 3;

    const passed = score >= passingScore;

    state.missionCompleted[currentMissionIndex] = passed;

    state.missionResults[currentMissionIndex] = {
        score,
        passed,
        date: new Date().toISOString()
    };

    saveState();

    updateDashboard();

    if (passed) {

        showToast(
            `Misi selesai! Skor kamu ${score}/4.`
        );

        if (getCompletedMissionCount() === 4) {

            showToast("Seluruh misi berhasil diselesaikan!");

        }

        showPage("hub");

    } else {

        const required = passingScore;

        const message =
            `Skor kamu ${score}/4. Misi ini membutuhkan minimal ${required} jawaban benar. Kamu dapat mengulang misi untuk mencoba kembali.`;

        alert(message);

        resetSingleMission(currentMissionIndex);

        showPage("hub");

    }

}


/* =====================================================
   10. FINAL EVALUATION
===================================================== */

function openFinalEvaluation() {

    if (!state.diagnosticDone) {

        showToast("Kerjakan tes diagnostik terlebih dahulu.");

        showPage("instructions");

        return;

    }

    if (getCompletedMissionCount() < 4) {

        getElement("finalWarning").hidden = false;

        getElement("finalAssessment").hidden = true;

        showPage("final");

        return;

    }

    getElement("finalWarning").hidden = true;

    getElement("finalAssessment").hidden = false;

    if (state.finalDone) {

        const repeat = confirm(
            "Evaluasi akhir sudah selesai. Apakah kamu ingin mengulang evaluasi?"
        );

        if (repeat) {

            state.finalAnswers = Array(8).fill(null);

            state.finalChecked = Array(8).fill(false);

            state.finalDone = false;

            state.finalScore = 0;

            saveState();

        } else {

            showPage("completion");

            return;

        }

    }

    currentFinalIndex = 0;

    renderFinalQuestion();

    showPage("final");

}


function renderFinalQuestion() {

    const question = finalQuestions[currentFinalIndex];

    const answer = state.finalAnswers[currentFinalIndex];

    const checked = state.finalChecked[currentFinalIndex];

    getElement("finalCounter").textContent =
        `PERTANYAAN ${String(currentFinalIndex + 1).padStart(2, "0")} / 08`;

    getElement("finalNumber").textContent =
        `CASE ${String(currentFinalIndex + 1).padStart(2, "0")} • ${question.category.toUpperCase()}`;

    getElement("finalQuestion").textContent =
        question.question;

    const progress = Math.round(
        ((currentFinalIndex + 1) / 8) * 100
    );

    getElement("finalProgress").style.width =
        progress + "%";

    getElement("finalProgressText").textContent =
        progress + "%";

    const scenario = getElement("finalScenario");

    scenario.hidden = !question.scenario;

    scenario.textContent = question.scenario;

    const options = getElement("finalOptions");

    options.innerHTML = "";

    question.options.forEach((option, index) => {

        const button = document.createElement("button");

        button.className = "answer-option";

        button.disabled = checked;

        if (answer === index) {

            button.classList.add("selected");

        }

        if (checked && index === question.answer) {

            button.classList.add("correct");

        }

        if (checked && answer === index && answer !== question.answer) {

            button.classList.add("wrong");

        }

        button.innerHTML = `
            <span class="option-letter">${String.fromCharCode(65 + index)}</span>
            <span>${escapeHTML(option)}</span>
        `;

        button.addEventListener("click", () => {

            state.finalAnswers[currentFinalIndex] = index;

            saveState();

            renderFinalQuestion();

        });

        options.appendChild(button);

    });

    const feedback = getElement("finalFeedback");

    feedback.hidden = !checked;

    if (checked) {

        const correct = answer === question.answer;

        feedback.className =
            "feedback-box " + (correct ? "success" : "error");

        feedback.textContent =
            (correct ? "✓ Benar. " : "✗ Belum tepat. ") +
            question.explanation;

    }

    getElement("finalPrevious").disabled =
        currentFinalIndex === 0;


    getElement("finalNext").disabled =
    answer === null;

    getElement("finalNext").textContent =
    !checked
        ? "Periksa Jawaban →"
        : currentFinalIndex === 7
            ? "Selesaikan Evaluasi ✓"
            : "Selanjutnya →";
}


function previousFinalQuestion() {

    if (currentFinalIndex > 0) {

        currentFinalIndex--;

        renderFinalQuestion();

    }

}


function nextFinalQuestion() {

    if (!state.finalChecked[currentFinalIndex]) {

        showToast("Periksa jawaban terlebih dahulu.");

        return;

    }

    if (currentFinalIndex < 7) {

        currentFinalIndex++;

        renderFinalQuestion();

    } else {

        completeFinalEvaluation();

    }

}


function completeFinalEvaluation() {

    let score = 0;

    finalQuestions.forEach((question, index) => {

        if (state.finalAnswers[index] === question.answer) {

            score++;

        }

    });

    state.finalScore = score;

    state.finalDone = true;

    saveState();

    renderCompletion();

    showPage("completion");

    showToast("Evaluasi akhir berhasil diselesaikan!");

}


/* =====================================================
   11. COMPLETION AND REFLECTION
===================================================== */

function renderCompletion() {

    getElement("completionScore").textContent =
        `${state.finalScore} / 8`;

    getElement("completionMission").textContent =
        `${getCompletedMissionCount()} / 4`;

    let feedback;

    if (state.finalScore >= 7) {

        feedback =
            "Sangat baik! Kamu menunjukkan pemahaman yang baik tentang perangkat jaringan, koneksi, phishing, dan perlindungan digital.";

    } else if (state.finalScore >= 5) {

        feedback =
            "Bagus! Kamu sudah memahami sebagian besar materi. Pelajari kembali bagian yang masih kurang agar pemahamanmu semakin kuat.";

    } else {

        feedback =
            "Kamu telah menyelesaikan seluruh rangkaian pembelajaran. Gunakan kesempatan untuk mengulang materi dan memahami kembali setiap konsep.";

    }

    getElement("completionFeedback").textContent =
        feedback;

    getElement("reflectionLearned").value =
        state.reflection.learned || "";

    getElement("reflectionDifficult").value =
        state.reflection.difficult || "";

    getElement("reflectionAction").value =
        state.reflection.action || "";

}


function saveReflection() {

    state.reflection = {

        learned: getElement("reflectionLearned").value.trim(),

        difficult: getElement("reflectionDifficult").value.trim(),

        action: getElement("reflectionAction").value.trim()

    };

    saveState();

    getElement("reflectionMessage").textContent =
        "✓ Refleksi berhasil disimpan pada browser ini.";

    showToast("Refleksi berhasil disimpan.");

}


/* =====================================================
   12. PRINT REPORT
===================================================== */

function printReport() {

    if (!state.finalDone) {

        showToast("Selesaikan evaluasi terlebih dahulu.");

        return;

    }

    const printContent = `
        CYBER DETECTIVE
        LAPORAN HASIL PEMBELAJARAN

        Jalur Belajar:
        ${PATHS[getSelectedPath()].name}

        Hasil Diagnostik:
        ${state.diagnosticScore}/3

        Misi Diselesaikan:
        ${getCompletedMissionCount()}/4

        Skor Setiap Misi:
        ${state.missionScores.join(", ")}

        Hasil Evaluasi Akhir:
        ${state.finalScore}/8

        REFLEKSI PEMBELAJARAN

        Hal yang dipelajari:
        ${state.reflection.learned || "Belum diisi"}

        Bagian yang masih sulit:
        ${state.reflection.difficult || "Belum diisi"}

        Tindakan menjaga keamanan digital:
        ${state.reflection.action || "Belum diisi"}

        Catatan:
        Hasil ini merupakan catatan pembelajaran pada browser.
    `;

    const reportWindow = window.open(
        "",
        "_blank",
        "width=800,height=700"
    );

    if (!reportWindow) {

        showToast("Izinkan pop-up browser untuk mencetak laporan.");

        return;

    }

    const content = escapeHTML(printContent);

    reportWindow.document.write(`
        <!DOCTYPE html>
        <html lang="id">
        <head>
            <meta charset="UTF-8">
            <title>Laporan Cyber Detective</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    max-width: 750px;
                    margin: 40px auto;
                    padding: 20px;
                    color: #172033;
                }

                h1 {
                    color: #075985;
                    text-align: center;
                }

                pre {
                    white-space: pre-wrap;
                    font-family: Arial, sans-serif;
                    line-height: 1.8;
                    font-size: 14px;
                }

                @media print {
                    body { margin: 10px; }
                }
            </style>
        </head>
        <body>
            <h1>CYBER DETECTIVE</h1>
            <pre>${content}</pre>
            <script>
                window.onload = function() {
                    window.print();
                };
            <\/script>
        </body>
        </html>
    `);

    reportWindow.document.close();

}


/* =====================================================
   13. RESET APPLICATION
===================================================== */

function resetProgress() {

    const confirmation = confirm(
        "Apakah kamu yakin ingin menghapus seluruh progres pembelajaran, hasil diagnostik, dan evaluasi?"
    );

    if (!confirmation) return;

    try {

        localStorage.removeItem(STORAGE_KEY);

    } catch (error) {

        console.error("Gagal menghapus progres:", error);

    }

    state = createInitialState();

    currentDiagnosticIndex = 0;

    currentMissionIndex = 0;

    currentMissionQuestion = 0;

    currentFinalIndex = 0;

    showPage("welcome");

    updateDashboard();

    showToast("Progres berhasil diatur ulang.");

}


/* =====================================================
   14. CHECK ANSWER HANDLERS
===================================================== */

/*
   Jawaban diperiksa melalui tombol navigasi.
   Fungsi berikut memastikan setiap pertanyaan
   hanya diperiksa setelah siswa memilih jawaban.
*/

function checkMissionAnswer() {

    const answer =
        state.missionAnswers[currentMissionIndex][currentMissionQuestion];

    if (answer === null) {

        showToast("Pilih jawaban terlebih dahulu.");

        return;

    }

    state.missionChecked[currentMissionIndex][currentMissionQuestion] = true;

    saveState();

    renderMission();

}


function checkFinalAnswer() {

    const answer = state.finalAnswers[currentFinalIndex];

    if (answer === null) {

        showToast("Pilih jawaban terlebih dahulu.");

        return;

    }

    state.finalChecked[currentFinalIndex] = true;

    saveState();

    renderFinalQuestion();

}


/* =====================================================
   15. CONNECT ANSWER CHECKING TO BUTTONS
===================================================== */

/*
   Tombol pada aktivitas misi dan evaluasi
   menggunakan pemeriksaan jawaban sebelum lanjut.
*/

const originalNextMissionQuestion = nextMissionQuestion;

nextMissionQuestion = function() {

    const checked =
        state.missionChecked[currentMissionIndex][currentMissionQuestion];

    if (!checked) {

        checkMissionAnswer();

        return;

    }

    originalNextMissionQuestion();

};


const originalNextFinalQuestion = nextFinalQuestion;

nextFinalQuestion = function() {

    const checked = state.finalChecked[currentFinalIndex];

    if (!checked) {

        checkFinalAnswer();

        return;

    }

    originalNextFinalQuestion();

};


/* =====================================================
   16. INITIALIZATION
===================================================== */

function initializeApp() {

    updateDashboard();

    if (state.diagnosticDone) {

        renderResult();

    }

    if (state.finalDone) {

        renderCompletion();

    }

    console.log(
        "%c CYBER DETECTIVE SYSTEM ONLINE ",
        "background:#0891b2;color:white;padding:8px;font-weight:bold;"
    );

    console.log(
        "Application initialized successfully."
    );

}


/* =====================================================
   17. START APPLICATION
===================================================== */

document.addEventListener("DOMContentLoaded", function() {

    initializeApp();

});
