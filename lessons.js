window.COURSES = {
  "HTML": {
    "icon": "🟧",
    "level": "Pemula → Mahir",
    "color": "orange",
    "description": "Membangun struktur dan makna halaman web.",
    "lessons": [
      {
        "title": "Apa itu HTML?",
        "concept": "HTML adalah markup language untuk memberi struktur pada konten web.",
        "why": "Browser membutuhkan struktur agar teks, gambar, tautan, formulir, dan bagian lain mempunyai makna.",
        "code": "<!doctype html>\n<html>\n  <body>\n    <h1>Hello World!</h1>\n  </body>\n</html>",
        "steps": [
          "DOCTYPE memberi tahu jenis dokumen.",
          "html adalah akar dokumen.",
          "body berisi konten yang terlihat."
        ],
        "exercise": "Buat halaman dengan h1 berisi nama kamu.",
        "quiz": {
          "q": "Tag yang paling tepat untuk judul utama? ",
          "opts": [
            "<p>",
            "<h1>",
            "<span>",
            "<br>"
          ],
          "answer": 1
        },
        "tip": "Jangan menghafal tag tanpa memahami struktur.",
        "project": "Buat halaman dengan h1 berisi nama kamu."
      },
      {
        "title": "Struktur Dokumen",
        "concept": "Dokumen HTML umumnya mempunyai head dan body.",
        "why": "Metadata, title, stylesheet, dan script berada di head; konten halaman berada di body.",
        "code": "<!doctype html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Belajar</title>\n</head>\n<body>\n  <h1>Belajar Web</h1>\n</body>\n</html>",
        "steps": [
          "Gunakan lang yang sesuai.",
          "Charset UTF-8 membantu karakter internasional.",
          "Title muncul pada tab browser."
        ],
        "exercise": "Tambahkan meta viewport dan title.",
        "quiz": {
          "q": "Bagian mana yang berisi konten utama yang terlihat?",
          "opts": [
            "head",
            "body",
            "meta",
            "title"
          ],
          "answer": 1
        },
        "tip": "Struktur yang rapi mempermudah CSS, JS, SEO, dan accessibility.",
        "project": "Tambahkan meta viewport dan title."
      },
      {
        "title": "Heading & Paragraph",
        "concept": "Heading membentuk hierarki dokumen, sedangkan p menandai paragraf.",
        "why": "Heading bukan sekadar ukuran font; ia membantu struktur dan aksesibilitas.",
        "code": "<h1>Website Saya</h1>\n<h2>Tentang Saya</h2>\n<p>Saya sedang belajar membuat website.</p>",
        "steps": [
          "Gunakan satu h1 sebagai judul utama pada halaman sederhana.",
          "Gunakan h2/h3 untuk subbagian.",
          "Gunakan CSS untuk mengubah ukuran visual."
        ],
        "exercise": "Buat artikel dengan h1, dua h2, dan tiga paragraf.",
        "quiz": {
          "q": "Apa fungsi utama tag p?",
          "opts": [
            "Membuat gambar",
            "Membuat paragraf",
            "Membuat link",
            "Membuat tabel"
          ],
          "answer": 1
        },
        "tip": "Jangan memilih heading berdasarkan ukuran tampilannya.",
        "project": "Buat artikel dengan h1, dua h2, dan tiga paragraf."
      },
      {
        "title": "Link & Navigasi",
        "concept": "Anchor membuat pengguna berpindah halaman atau lokasi.",
        "why": "Navigasi adalah fondasi pengalaman web.",
        "code": "<a href=\"https://example.com\">Buka situs</a>\n<a href=\"#kontak\">Ke Kontak</a>\n<section id=\"kontak\">Kontak</section>",
        "steps": [
          "href menentukan tujuan.",
          "Fragment #id berpindah ke elemen tertentu.",
          "Gunakan teks link yang jelas."
        ],
        "exercise": "Buat menu Home, About, Contact dengan fragment.",
        "quiz": {
          "q": "Atribut tujuan pada anchor adalah?",
          "opts": [
            "src",
            "href",
            "alt",
            "action"
          ],
          "answer": 1
        },
        "tip": "Teks link yang deskriptif lebih baik daripada 'klik di sini'.",
        "project": "Buat menu Home, About, Contact dengan fragment."
      },
      {
        "title": "Gambar & Media",
        "concept": "Elemen media menambahkan informasi visual dan audio.",
        "why": "Gambar perlu alternatif teks agar tetap bermakna ketika tidak dapat dilihat.",
        "code": "<img src=\"foto.jpg\" alt=\"Foto pemandangan\">\n<audio controls src=\"audio.mp3\"></audio>\n<video controls src=\"video.mp4\"></video>",
        "steps": [
          "alt menjelaskan fungsi gambar.",
          "controls menampilkan kontrol media.",
          "Gunakan format media yang sesuai."
        ],
        "exercise": "Tambahkan gambar profil dengan alt yang informatif.",
        "quiz": {
          "q": "Atribut wajib yang penting untuk makna gambar adalah?",
          "opts": [
            "alt",
            "href",
            "action",
            "method"
          ],
          "answer": 0
        },
        "tip": "Jangan mengisi alt dengan kata-kata spam.",
        "project": "Tambahkan gambar profil dengan alt yang informatif."
      },
      {
        "title": "List & Table",
        "concept": "List menyusun kumpulan item; table menyusun data tabular.",
        "why": "Struktur data yang tepat membuat halaman lebih mudah dipahami.",
        "code": "<ul><li>HTML</li><li>CSS</li><li>JavaScript</li></ul>\n<table><tr><th>Bahasa</th><th>Level</th></tr><tr><td>Python</td><td>Dasar</td></tr></table>",
        "steps": [
          "ul untuk daftar tak berurutan.",
          "ol untuk urutan.",
          "table untuk data, bukan layout."
        ],
        "exercise": "Buat tabel jadwal belajar mingguan.",
        "quiz": {
          "q": "Tag header tabel adalah?",
          "opts": [
            "td",
            "th",
            "tr",
            "ul"
          ],
          "answer": 1
        },
        "tip": "Jangan menggunakan tabel untuk mengatur layout website.",
        "project": "Buat tabel jadwal belajar mingguan."
      },
      {
        "title": "Form",
        "concept": "Form mengumpulkan input pengguna.",
        "why": "Form adalah pintu antara pengguna dan aplikasi.",
        "code": "<form>\n  <label for=\"email\">Email</label>\n  <input id=\"email\" name=\"email\" type=\"email\" required>\n  <button type=\"submit\">Kirim</button>\n</form>",
        "steps": [
          "label menghubungkan teks dengan input.",
          "name penting ketika data dikirim.",
          "required menambah validasi browser."
        ],
        "exercise": "Buat form login dengan email dan password.",
        "quiz": {
          "q": "Atribut yang menghubungkan label dengan input adalah?",
          "opts": [
            "for",
            "src",
            "href",
            "class"
          ],
          "answer": 0
        },
        "tip": "Validasi browser bukan pengganti validasi server.",
        "project": "Buat form login dengan email dan password."
      },
      {
        "title": "Semantic HTML",
        "concept": "Elemen semantic menjelaskan peran konten.",
        "why": "header, nav, main, article, section, aside, dan footer membuat struktur lebih bermakna.",
        "code": "<header>...</header>\n<nav>...</nav>\n<main>\n  <article>Materi</article>\n</main>\n<footer>2026</footer>",
        "steps": [
          "Pilih elemen berdasarkan makna.",
          "Hindari div untuk semua hal.",
          "Semantic membantu accessibility dan maintainability."
        ],
        "exercise": "Ubah layout div biasa menjadi semantic HTML.",
        "quiz": {
          "q": "Elemen untuk konten utama halaman adalah?",
          "opts": [
            "main",
            "footer",
            "aside",
            "nav"
          ],
          "answer": 0
        },
        "tip": "Semantic HTML adalah investasi untuk struktur jangka panjang.",
        "project": "Ubah layout div biasa menjadi semantic HTML."
      },
      {
        "title": "Accessibility",
        "concept": "Accessibility membuat website dapat digunakan lebih banyak orang.",
        "why": "Kontras, label, fokus keyboard, alt text, dan struktur heading adalah bagian dari kualitas web.",
        "code": "<button aria-label=\"Buka menu\">☰</button>\n<label for=\"nama\">Nama</label>\n<input id=\"nama\" name=\"nama\">",
        "steps": [
          "Pastikan elemen dapat diakses keyboard.",
          "Gunakan label nyata.",
          "Jangan mengandalkan warna saja untuk informasi."
        ],
        "exercise": "Audit halamanmu: coba navigasi tanpa mouse.",
        "quiz": {
          "q": "Teknologi apa yang sering digunakan pengguna tunanetra untuk membaca web?",
          "opts": [
            "Screen reader",
            "Compiler",
            "Database",
            "Router"
          ],
          "answer": 0
        },
        "tip": "Accessibility sebaiknya dipikirkan sejak awal.",
        "project": "Audit halamanmu: coba navigasi tanpa mouse."
      },
      {
        "title": "HTML5 & Project",
        "concept": "HTML modern menyediakan elemen dan API yang mendukung aplikasi web.",
        "why": "Gabungkan struktur semantic, media, form, dan metadata menjadi halaman nyata.",
        "code": "<main>\n  <article>\n    <h1>Portfolio</h1>\n    <p>Frontend Developer.</p>\n    <a href=\"#project\">Lihat Project</a>\n  </article>\n</main>",
        "steps": [
          "Rencanakan struktur.",
          "Tulis HTML semantic.",
          "Uji keyboard dan mobile.",
          "Validasi struktur."
        ],
        "exercise": "Bangun landing page portfolio satu halaman.",
        "quiz": {
          "q": "Apa prinsip terbaik ketika membuat HTML?",
          "opts": [
            "Semua div",
            "Struktur bermakna",
            "Banyak inline style",
            "Mengabaikan accessibility"
          ],
          "answer": 1
        },
        "tip": "Kode yang baik mudah dibaca manusia, bukan hanya dipahami browser.",
        "project": "Landing page portfolio responsif."
      }
    ]
  },
  "CSS": {
    "icon": "🟦",
    "level": "Pemula → Mahir",
    "description": "Mengubah struktur HTML menjadi interface profesional.",
    "lessons": [
      {
        "title": "Pengenalan CSS",
        "concept": "CSS mengatur presentasi visual elemen HTML.",
        "why": "Pisahkan struktur dari tampilan agar desain mudah dirawat.",
        "code": "body { background:#080b18; color:white; }\nh1 { color:#a78bfa; }",
        "steps": [
          "Selector memilih elemen.",
          "Property menentukan aspek yang diubah.",
          "Value adalah nilainya."
        ],
        "exercise": "Buat background gelap dan teks terang.",
        "quiz": {
          "q": "Sintaks dasar CSS adalah?",
          "opts": [
            "selector { property: value; }",
            "tag = value",
            "property: selector",
            "CSS(value)"
          ],
          "answer": 0
        },
        "tip": "Biasakan membaca CSS dari selector → property → value.",
        "project": "Buat background gelap dan teks terang."
      },
      {
        "title": "Selector",
        "concept": "Selector menentukan elemen mana yang menerima aturan.",
        "why": "Selector adalah cara CSS menemukan target.",
        "code": "p { color:white; }\n.card { padding:20px; }\n#hero { min-height:300px; }",
        "steps": [
          "Element selector.",
          "Class selector dengan titik.",
          "ID selector dengan #."
        ],
        "exercise": "Buat tiga kartu dan beri class card.",
        "quiz": {
          "q": "Selector class diawali?",
          "opts": [
            "#",
            ".",
            "@",
            ": "
          ],
          "answer": 1
        },
        "tip": "Untuk komponen yang dipakai berulang, gunakan class.",
        "project": "Buat tiga kartu dan beri class card."
      },
      {
        "title": "Box Model",
        "concept": "Setiap elemen dapat dipahami sebagai content, padding, border, dan margin.",
        "why": "Memahami box model menghilangkan banyak masalah layout.",
        "code": ".card {\n  width:300px;\n  padding:20px;\n  border:1px solid #334155;\n  margin:16px;\n  box-sizing:border-box;\n}",
        "steps": [
          "Content adalah isi.",
          "Padding ruang di dalam border.",
          "Margin ruang di luar border."
        ],
        "exercise": "Buat kartu dengan padding dan margin berbeda.",
        "quiz": {
          "q": "Ruang di dalam border disebut?",
          "opts": [
            "margin",
            "padding",
            "outline",
            "gap"
          ],
          "answer": 1
        },
        "tip": "Gunakan box-sizing:border-box untuk perilaku ukuran yang lebih mudah diprediksi.",
        "project": "Buat kartu dengan padding dan margin berbeda."
      },
      {
        "title": "Flexbox",
        "concept": "Flexbox mengatur layout satu dimensi.",
        "why": "Sangat cocok untuk navbar, row, column, dan alignment.",
        "code": ".nav { display:flex; align-items:center; justify-content:space-between; gap:16px; }",
        "steps": [
          "display:flex mengaktifkan flex.",
          "justify-content mengatur sumbu utama.",
          "align-items mengatur sumbu silang."
        ],
        "exercise": "Buat navbar dengan logo kiri dan menu kanan.",
        "quiz": {
          "q": "Properti untuk sumbu utama adalah?",
          "opts": [
            "justify-content",
            "align-items",
            "font-size",
            "z-index"
          ],
          "answer": 0
        },
        "tip": "Mulai dari axis sebelum memilih properti.",
        "project": "Buat navbar dengan logo kiri dan menu kanan."
      },
      {
        "title": "Grid",
        "concept": "CSS Grid cocok untuk layout dua dimensi.",
        "why": "Grid memudahkan dashboard dan card layout.",
        "code": ".grid { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; }",
        "steps": [
          "Tentukan kolom.",
          "Gunakan gap.",
          "Tambahkan media query."
        ],
        "exercise": "Buat 6 kartu dalam 3 kolom desktop.",
        "quiz": {
          "q": "Properti untuk menentukan kolom adalah?",
          "opts": [
            "grid-template-columns",
            "flex-direction",
            "align-items",
            "position"
          ],
          "answer": 0
        },
        "tip": "Grid dan Flexbox saling melengkapi.",
        "project": "Buat 6 kartu dalam 3 kolom desktop."
      },
      {
        "title": "Responsive Design",
        "concept": "Responsive design membuat UI menyesuaikan layar.",
        "why": "Satu layout tidak harus dipaksakan ke semua ukuran.",
        "code": "@media (max-width:700px){\n  .grid { grid-template-columns:1fr; }\n}",
        "steps": [
          "Mulai dari layout yang sederhana.",
          "Gunakan breakpoint berdasarkan kebutuhan.",
          "Uji sentuhan dan teks."
        ],
        "exercise": "Buat card grid 3 kolom desktop menjadi 1 kolom mobile.",
        "quiz": {
          "q": "Media query digunakan untuk?",
          "opts": [
            "Mengubah style berdasarkan kondisi",
            "Menyimpan database",
            "Compile CSS",
            "Mengambil API"
          ],
          "answer": 0
        },
        "tip": "Uji di ukuran layar nyata, bukan hanya mengecilkan jendela.",
        "project": "Buat card grid 3 kolom desktop menjadi 1 kolom mobile."
      },
      {
        "title": "Position & Layer",
        "concept": "Position mengontrol letak elemen; z-index mengontrol urutan layer.",
        "why": "Berguna untuk navbar sticky, modal, badge, dan overlay.",
        "code": ".topbar{position:sticky;top:0;z-index:20;}\n.badge{position:absolute;top:8px;right:8px;}",
        "steps": [
          "relative menjadi anchor untuk absolute.",
          "sticky mengikuti scroll sampai batas tertentu.",
          "z-index bekerja pada konteks stacking tertentu."
        ],
        "exercise": "Buat badge di sudut kartu.",
        "quiz": {
          "q": "Position yang menempel saat scroll adalah?",
          "opts": [
            "sticky",
            "static",
            "float",
            "grid"
          ],
          "answer": 0
        },
        "tip": "Jangan memakai absolute untuk semua layout.",
        "project": "Buat badge di sudut kartu."
      },
      {
        "title": "Animation",
        "concept": "Transition dan keyframes membuat UI terasa hidup.",
        "why": "Animasi harus mendukung pengalaman, bukan mengganggu.",
        "code": ".btn{transition:.2s;}\n.btn:hover{transform:translateY(-2px);}\n@keyframes pulse{to{transform:scale(1.05)}}",
        "steps": [
          "Gunakan transition untuk perubahan sederhana.",
          "Gunakan keyframes untuk rangkaian animasi.",
          "Hormati preferensi reduced motion."
        ],
        "exercise": "Buat hover button yang halus.",
        "quiz": {
          "q": "Untuk animasi rangkaian digunakan?",
          "opts": [
            "@keyframes",
            "@database",
            "@media-only",
            "@font"
          ],
          "answer": 0
        },
        "tip": "Animasi yang sedikit sering terasa lebih profesional.",
        "project": "Buat hover button yang halus."
      },
      {
        "title": "Design System",
        "concept": "Design system adalah aturan visual yang konsisten.",
        "why": "Variable CSS membuat warna dan spacing mudah dikelola.",
        "code": ":root{--bg:#050816;--primary:#7c3aed;--radius:14px;}\n.card{background:var(--bg);border-radius:var(--radius);}",
        "steps": [
          "Definisikan token.",
          "Gunakan var() di komponen.",
          "Hindari nilai acak berulang."
        ],
        "exercise": "Buat 5 CSS variables untuk UI-mu.",
        "quiz": {
          "q": "Cara memakai CSS variable?",
          "opts": [
            "var(--nama)",
            "use(--nama)",
            "css(--nama)",
            "get(--nama)"
          ],
          "answer": 0
        },
        "tip": "Design system membuat project besar tetap konsisten.",
        "project": "Buat 5 CSS variables untuk UI-mu."
      },
      {
        "title": "Project UI",
        "concept": "Gabungkan selector, box model, flex, grid, responsive, dan design system.",
        "why": "Project membuat teori menjadi keterampilan.",
        "code": ":root{--primary:#7c3aed}\n.dashboard{display:grid;grid-template-columns:240px 1fr;gap:20px}\n@media(max-width:800px){.dashboard{grid-template-columns:1fr}}",
        "steps": [
          "Rancang layout.",
          "Buat komponen.",
          "Responsive-kan.",
          "Poles accessibility."
        ],
        "exercise": "Buat dashboard belajar dengan sidebar dan card.",
        "quiz": {
          "q": "Apa urutan terbaik?",
          "opts": [
            "Desain → struktur → style → uji",
            "Animasi → warna → selesai",
            "Copy → paste → deploy",
            "Random"
          ],
          "answer": 0
        },
        "tip": "UI hebat lahir dari sistem, bukan sekadar efek.",
        "project": "Dashboard belajar responsive."
      }
    ]
  },
  "JavaScript": {
    "icon": "🟨",
    "level": "Pemula → Mahir",
    "description": "Logika, interaksi, DOM, API, dan aplikasi web.",
    "lessons": [
      {
        "title": "Pengenalan JavaScript",
        "concept": "JavaScript adalah bahasa pemrograman yang dapat menjalankan logika di browser dan banyak lingkungan lain.",
        "why": "Browser memakai JavaScript untuk membuat halaman bereaksi terhadap input.",
        "code": "const nama = \"Pangeran\";\nconsole.log(\"Halo \" + nama);",
        "steps": [
          "Program terdiri dari data dan instruksi.",
          "console.log membantu debugging.",
          "Gunakan const/let sesuai kebutuhan."
        ],
        "exercise": "Buat variable nama dan tampilkan ke console.",
        "quiz": {
          "q": "Keyword untuk variable yang tidak perlu reassignment?",
          "opts": [
            "const",
            "varx",
            "fixed",
            "static"
          ],
          "answer": 0
        },
        "tip": "Pahami data flow sebelum menghafal syntax.",
        "project": "Buat variable nama dan tampilkan ke console."
      },
      {
        "title": "Tipe Data",
        "concept": "JavaScript memiliki string, number, boolean, null, undefined, object, dan lainnya.",
        "why": "Jenis data memengaruhi operasi yang dapat dilakukan.",
        "code": "const nama = \"Ana\";\nconst umur = 20;\nconst aktif = true;",
        "steps": [
          "String untuk teks.",
          "Number untuk angka.",
          "Boolean untuk benar/salah."
        ],
        "exercise": "Buat object profil dengan nama, umur, dan aktif.",
        "quiz": {
          "q": "Nilai true termasuk?",
          "opts": [
            "string",
            "boolean",
            "array",
            "number"
          ],
          "answer": 1
        },
        "tip": "Gunakan typeof untuk inspeksi sederhana.",
        "project": "Buat object profil dengan nama, umur, dan aktif."
      },
      {
        "title": "Condition",
        "concept": "Condition memilih jalur program berdasarkan keadaan.",
        "why": "Inilah cara program mengambil keputusan.",
        "code": "const nilai=82;\nif(nilai>=75){\n  console.log(\"Lulus\");\n}else{\n  console.log(\"Belajar lagi\");\n}",
        "steps": [
          "Evaluasi kondisi.",
          "Jalankan cabang yang sesuai.",
          "Gunakan else jika perlu."
        ],
        "exercise": "Buat pengecekan usia untuk kategori pengguna.",
        "quiz": {
          "q": "Keyword untuk keputusan?",
          "opts": [
            "if",
            "when",
            "check",
            "caseonly"
          ],
          "answer": 0
        },
        "tip": "Condition adalah fondasi logika aplikasi.",
        "project": "Buat pengecekan usia untuk kategori pengguna."
      },
      {
        "title": "Loop",
        "concept": "Loop menjalankan pekerjaan berulang.",
        "why": "Gunakan ketika pola operasi sama dilakukan berkali-kali.",
        "code": "for(let i=1;i<=5;i++){\n  console.log(i);\n}",
        "steps": [
          "Inisialisasi.",
          "Kondisi.",
          "Update."
        ],
        "exercise": "Cetak angka 1 sampai 10.",
        "quiz": {
          "q": "Loop klasik tersebut memakai?",
          "opts": [
            "for",
            "repeat-css",
            "each-html",
            "cycle"
          ],
          "answer": 0
        },
        "tip": "Pastikan kondisi loop akhirnya berhenti.",
        "project": "Cetak angka 1 sampai 10."
      },
      {
        "title": "Function",
        "concept": "Function mengemas perilaku agar dapat dipanggil kembali.",
        "why": "Function membantu modularitas dan pengujian.",
        "code": "function tambah(a,b){\n  return a+b;\n}\nconsole.log(tambah(2,3));",
        "steps": [
          "Parameter menerima input.",
          "return mengembalikan hasil.",
          "Nama function harus jelas."
        ],
        "exercise": "Buat function hitung diskon.",
        "quiz": {
          "q": "Keyword mengembalikan nilai?",
          "opts": [
            "return",
            "send",
            "back",
            "give"
          ],
          "answer": 0
        },
        "tip": "Function kecil dan jelas lebih mudah dirawat.",
        "project": "Buat function hitung diskon."
      },
      {
        "title": "DOM",
        "concept": "DOM adalah representasi dokumen yang dapat dimanipulasi JavaScript.",
        "why": "Inilah jembatan antara kode dan UI.",
        "code": "const title=document.querySelector(\"h1\");\ntitle.textContent=\"Hello JS!\";",
        "steps": [
          "Cari elemen.",
          "Ubah properti.",
          "Render perubahan."
        ],
        "exercise": "Buat tombol yang mengubah teks h1.",
        "quiz": {
          "q": "API untuk mencari selector CSS?",
          "opts": [
            "querySelector",
            "findHTML",
            "getCSS",
            "selectTag"
          ],
          "answer": 0
        },
        "tip": "Jangan memanipulasi DOM berlebihan pada setiap frame.",
        "project": "Buat tombol yang mengubah teks h1."
      },
      {
        "title": "Event",
        "concept": "Event memberi tahu program bahwa sesuatu terjadi.",
        "why": "Klik, input, submit, dan keyboard adalah contoh event.",
        "code": "document.querySelector(\"button\").addEventListener(\"click\",()=>{\n  alert(\"Halo!\");\n});",
        "steps": [
          "Pilih target.",
          "Daftarkan listener.",
          "Jalankan handler."
        ],
        "exercise": "Buat tombol counter +1.",
        "quiz": {
          "q": "Method untuk memasang listener?",
          "opts": [
            "addEventListener",
            "listenNow",
            "onEventCSS",
            "attachHtml"
          ],
          "answer": 0
        },
        "tip": "Pisahkan handler agar logic mudah dites.",
        "project": "Buat tombol counter +1."
      },
      {
        "title": "Async & Fetch",
        "concept": "Operasi network biasanya asynchronous.",
        "why": "Promise dan async/await membantu menunggu hasil tanpa membekukan UI.",
        "code": "async function load(){\n  const res=await fetch(\"https://example.com/data.json\");\n  const data=await res.json();\n  console.log(data);\n}",
        "steps": [
          "await menunggu Promise.",
          "Tangani error dengan try/catch.",
          "Jangan taruh secret API key di frontend."
        ],
        "exercise": "Ambil JSON publik dan tampilkan satu field.",
        "quiz": {
          "q": "fetch digunakan untuk?",
          "opts": [
            "HTTP request",
            "CSS compile",
            "Database local",
            "Audio decode"
          ],
          "answer": 0
        },
        "tip": "Selalu pikirkan loading, success, dan error state.",
        "project": "Ambil JSON publik dan tampilkan satu field."
      },
      {
        "title": "Storage & Modules",
        "concept": "Browser menyediakan storage untuk data lokal dan module untuk organisasi kode.",
        "why": "Aplikasi yang lebih besar membutuhkan pemisahan tanggung jawab.",
        "code": "localStorage.setItem(\"theme\",\"dark\");\nconst theme=localStorage.getItem(\"theme\");",
        "steps": [
          "Storage bukan database server.",
          "Module memisahkan file.",
          "Jangan menyimpan password/token sensitif sembarangan."
        ],
        "exercise": "Simpan preferensi tema pengguna.",
        "quiz": {
          "q": "Storage browser yang sederhana adalah?",
          "opts": [
            "localStorage",
            "serverStorage",
            "cssStorage",
            "domDB"
          ],
          "answer": 0
        },
        "tip": "Data client harus dianggap dapat dibaca oleh pengguna.",
        "project": "Simpan preferensi tema pengguna."
      },
      {
        "title": "Project JavaScript",
        "concept": "Gabungkan state, DOM, event, storage, dan async menjadi aplikasi.",
        "why": "Project adalah tempat konsep saling bertemu.",
        "code": "const state={count:0};\nfunction render(){\n  document.querySelector(\"#count\").textContent=state.count;\n}\nfunction increment(){state.count++;render();}",
        "steps": [
          "Rancang state.",
          "Buat render.",
          "Hubungkan event.",
          "Simpan data jika perlu."
        ],
        "exercise": "Buat to-do app dengan tambah, selesai, hapus, dan localStorage.",
        "quiz": {
          "q": "Apa inti aplikasi interaktif?",
          "opts": [
            "State + UI + event",
            "Warna saja",
            "HTML saja",
            "Console saja"
          ],
          "answer": 0
        },
        "tip": "Buat versi kecil yang selesai sebelum menambah fitur.",
        "project": "To-do app."
      }
    ]
  },
  "Python": {
    "icon": "🐍",
    "level": "Pemula → Mahir",
    "description": "Fundamental programming, data, automation, dan backend.",
    "lessons": [
      {
        "title": "Pengenalan Python",
        "concept": "Python menekankan readability dan produktivitas.",
        "why": "Python cocok untuk belajar logika sekaligus membangun tool nyata.",
        "code": "nama = \"CodeMaster\"\nprint(\"Halo\", nama)",
        "steps": [
          "Indentasi penting.",
          "print menampilkan output.",
          "Komentar memakai #."
        ],
        "exercise": "Cetak nama dan cita-cita.",
        "quiz": {
          "q": "Fungsi output dasar?",
          "opts": [
            "print",
            "echoHTML",
            "showCSS",
            "writeDB"
          ],
          "answer": 0
        },
        "tip": "Baca error Python dengan teliti.",
        "project": "Cetak nama dan cita-cita."
      },
      {
        "title": "Variable & Type",
        "concept": "Variable mengikat nama dengan nilai.",
        "why": "Program membutuhkan tempat untuk menyimpan keadaan.",
        "code": "umur=20\nnama=\"Budi\"\naktif=True",
        "steps": [
          "Python dynamic typing.",
          "Gunakan nama yang jelas.",
          "Hindari variable global tanpa alasan."
        ],
        "exercise": "Buat data profil sederhana.",
        "quiz": {
          "q": "Nilai True adalah?",
          "opts": [
            "bool",
            "str",
            "list",
            "dict"
          ],
          "answer": 0
        },
        "tip": "Nama variable adalah bagian dari dokumentasi kode.",
        "project": "Buat data profil sederhana."
      },
      {
        "title": "Condition",
        "concept": "if/elif/else mengatur percabangan.",
        "why": "Logika keputusan ada di hampir semua aplikasi.",
        "code": "nilai=80\nif nilai>=75:\n    print(\"Lulus\")\nelse:\n    print(\"Remedial\")",
        "steps": [
          "Indentasi menentukan blok.",
          "Gunakan operator perbandingan.",
          "Pisahkan kondisi kompleks."
        ],
        "exercise": "Buat kategori nilai A/B/C.",
        "quiz": {
          "q": "Keyword utama?",
          "opts": [
            "if",
            "when",
            "choose",
            "test"
          ],
          "answer": 0
        },
        "tip": "Jaga condition tetap mudah dibaca.",
        "project": "Buat kategori nilai A/B/C."
      },
      {
        "title": "Loop",
        "concept": "for dan while mengulang pekerjaan.",
        "why": "Loop sangat penting untuk data processing.",
        "code": "for i in range(5):\n    print(i)",
        "steps": [
          "range menghasilkan urutan.",
          "for cocok untuk iterasi.",
          "while cocok untuk kondisi."
        ],
        "exercise": "Jumlahkan angka 1 sampai 100.",
        "quiz": {
          "q": "range sering dipakai dengan?",
          "opts": [
            "for",
            "class",
            "import",
            "try"
          ],
          "answer": 0
        },
        "tip": "Waspadai infinite loop pada while.",
        "project": "Jumlahkan angka 1 sampai 100."
      },
      {
        "title": "Function",
        "concept": "Function membuat logic reusable.",
        "why": "Parameter dan return membangun komponen kecil.",
        "code": "def tambah(a,b):\n    return a+b\n\nprint(tambah(2,3))",
        "steps": [
          "def membuat function.",
          "Parameter menerima data.",
          "return menghasilkan nilai."
        ],
        "exercise": "Buat function menghitung luas persegi panjang.",
        "quiz": {
          "q": "Keyword membuat function?",
          "opts": [
            "def",
            "func",
            "function",
            "make"
          ],
          "answer": 0
        },
        "tip": "Satu function sebaiknya punya tanggung jawab yang jelas.",
        "project": "Buat function menghitung luas persegi panjang."
      },
      {
        "title": "List & Dictionary",
        "concept": "Collection menyimpan banyak data.",
        "why": "List berurutan; dictionary memetakan key ke value.",
        "code": "skills=[\"HTML\",\"Python\"]\nuser={\"name\":\"Ana\",\"age\":20}",
        "steps": [
          "Index list dimulai dari 0.",
          "Dictionary memakai key.",
          "Iterasi collection adalah skill inti."
        ],
        "exercise": "Buat list 5 bahasa dan dictionary profil.",
        "quiz": {
          "q": "Collection key-value?",
          "opts": [
            "dict",
            "list",
            "tuple",
            "range"
          ],
          "answer": 0
        },
        "tip": "Pilih struktur data berdasarkan kebutuhan.",
        "project": "Buat list 5 bahasa dan dictionary profil."
      },
      {
        "title": "OOP",
        "concept": "Object-oriented programming memodelkan data dan perilaku.",
        "why": "Class membantu project besar mengorganisasi state dan method.",
        "code": "class User:\n    def __init__(self,name):\n        self.name=name\n\nu=User(\"Ana\")",
        "steps": [
          "Class adalah blueprint.",
          "Object adalah instance.",
          "Method adalah perilaku."
        ],
        "exercise": "Buat class Book dengan title dan author.",
        "quiz": {
          "q": "Blueprint object disebut?",
          "opts": [
            "class",
            "loop",
            "module",
            "list"
          ],
          "answer": 0
        },
        "tip": "Jangan memakai OOP hanya karena terlihat canggih.",
        "project": "Buat class Book dengan title dan author."
      },
      {
        "title": "File & JSON",
        "concept": "Program sering membaca dan menulis data.",
        "why": "JSON adalah format pertukaran data yang umum.",
        "code": "import json\nobj={\"name\":\"Ana\"}\ntext=json.dumps(obj)\nprint(text)",
        "steps": [
          "Validasi input file.",
          "Gunakan encoding yang benar.",
          "Tangani file error."
        ],
        "exercise": "Buat file JSON berisi daftar belajar.",
        "quiz": {
          "q": "Library standar JSON?",
          "opts": [
            "json",
            "http",
            "html",
            "css"
          ],
          "answer": 0
        },
        "tip": "Data dari luar program harus dianggap tidak terpercaya.",
        "project": "Buat file JSON berisi daftar belajar."
      },
      {
        "title": "API & Environment",
        "concept": "API memungkinkan aplikasi berkomunikasi.",
        "why": "Environment variable membantu menyimpan konfigurasi tanpa hardcode secret.",
        "code": "import os\napi_url=os.getenv(\"API_URL\")",
        "steps": [
          "Gunakan env untuk konfigurasi.",
          "Jangan commit secret.",
          "Validasi response API."
        ],
        "exercise": "Buat script yang membaca API_URL dari environment.",
        "quiz": {
          "q": "Tempat umum konfigurasi rahasia?",
          "opts": [
            "environment variable",
            "HTML title",
            "CSS class",
            "console"
          ],
          "answer": 0
        },
        "tip": "Secret yang sudah ter-commit harus dianggap bocor.",
        "project": "Buat script yang membaca API_URL dari environment."
      },
      {
        "title": "Project Python",
        "concept": "Gabungkan function, collection, file, dan error handling.",
        "why": "Project kecil yang selesai mengajarkan lebih banyak daripada tutorial tanpa praktik.",
        "code": "def total(items):\n    return sum(items)\n\nprint(total([10,20,30]))",
        "steps": [
          "Tentukan input/output.",
          "Pisahkan fungsi.",
          "Tambahkan test.",
          "Dokumentasikan."
        ],
        "exercise": "Buat CLI sederhana untuk mencatat tugas belajar.",
        "quiz": {
          "q": "Langkah pertama project?",
          "opts": [
            "Definisikan masalah",
            "Buat animasi",
            "Deploy",
            "Copy kode"
          ],
          "answer": 0
        },
        "tip": "Mulai dari masalah yang jelas.",
        "project": "CLI Study Tracker."
      }
    ]
  },
  "Ruby": {
    "icon": "💎",
    "level": "Dasar → Lanjut",
    "description": "Bahasa yang menekankan readability dan produktivitas.",
    "lessons": [
      {
        "title": "Syntax Ruby",
        "concept": "Variable, method, block dan object adalah fondasi Ruby.",
        "why": "Konsep Syntax Ruby perlu dipahami agar kamu dapat membangun program Ruby yang rapi dan dapat dipelihara.",
        "code": "name = \"CodeMaster\"\nputs \"Halo #{name}\"",
        "steps": [
          "Baca contoh.",
          "Ubah satu bagian.",
          "Jalankan dan amati hasil.",
          "Tulis ulang tanpa melihat contoh."
        ],
        "exercise": "Buat latihan kecil tentang Syntax Ruby.",
        "quiz": {
          "q": "Tujuan utama bab Syntax Ruby?",
          "opts": [
            "Memahami konsep dan praktik",
            "Menghafal tanpa mencoba",
            "Copy paste saja",
            "Mengabaikan error"
          ],
          "answer": 0
        },
        "tip": "Selalu eksperimen dengan perubahan kecil.",
        "project": "Buat latihan kecil tentang Syntax Ruby."
      },
      {
        "title": "Condition",
        "concept": "Percabangan mengontrol alur.",
        "why": "Konsep Condition perlu dipahami agar kamu dapat membangun program Ruby yang rapi dan dapat dipelihara.",
        "code": "score=80\nif score >= 75\n  puts \"Lulus\"\nend",
        "steps": [
          "Baca contoh.",
          "Ubah satu bagian.",
          "Jalankan dan amati hasil.",
          "Tulis ulang tanpa melihat contoh."
        ],
        "exercise": "Buat latihan kecil tentang Condition.",
        "quiz": {
          "q": "Tujuan utama bab Condition?",
          "opts": [
            "Memahami konsep dan praktik",
            "Menghafal tanpa mencoba",
            "Copy paste saja",
            "Mengabaikan error"
          ],
          "answer": 0
        },
        "tip": "Selalu eksperimen dengan perubahan kecil.",
        "project": "Buat latihan kecil tentang Condition."
      },
      {
        "title": "Loop & Enumerable",
        "concept": "Ruby punya API collection yang ekspresif.",
        "why": "Konsep Loop & Enumerable perlu dipahami agar kamu dapat membangun program Ruby yang rapi dan dapat dipelihara.",
        "code": "[1,2,3].each { |n| puts n }",
        "steps": [
          "Baca contoh.",
          "Ubah satu bagian.",
          "Jalankan dan amati hasil.",
          "Tulis ulang tanpa melihat contoh."
        ],
        "exercise": "Buat latihan kecil tentang Loop & Enumerable.",
        "quiz": {
          "q": "Tujuan utama bab Loop & Enumerable?",
          "opts": [
            "Memahami konsep dan praktik",
            "Menghafal tanpa mencoba",
            "Copy paste saja",
            "Mengabaikan error"
          ],
          "answer": 0
        },
        "tip": "Selalu eksperimen dengan perubahan kecil.",
        "project": "Buat latihan kecil tentang Loop & Enumerable."
      },
      {
        "title": "Method",
        "concept": "Method mengemas perilaku.",
        "why": "Konsep Method perlu dipahami agar kamu dapat membangun program Ruby yang rapi dan dapat dipelihara.",
        "code": "def add(a,b)\n  a+b\nend",
        "steps": [
          "Baca contoh.",
          "Ubah satu bagian.",
          "Jalankan dan amati hasil.",
          "Tulis ulang tanpa melihat contoh."
        ],
        "exercise": "Buat latihan kecil tentang Method.",
        "quiz": {
          "q": "Tujuan utama bab Method?",
          "opts": [
            "Memahami konsep dan praktik",
            "Menghafal tanpa mencoba",
            "Copy paste saja",
            "Mengabaikan error"
          ],
          "answer": 0
        },
        "tip": "Selalu eksperimen dengan perubahan kecil.",
        "project": "Buat latihan kecil tentang Method."
      },
      {
        "title": "Array & Hash",
        "concept": "Collection inti Ruby.",
        "why": "Konsep Array & Hash perlu dipahami agar kamu dapat membangun program Ruby yang rapi dan dapat dipelihara.",
        "code": "user={name: \"Ana\", age: 20}\nputs user[:name]",
        "steps": [
          "Baca contoh.",
          "Ubah satu bagian.",
          "Jalankan dan amati hasil.",
          "Tulis ulang tanpa melihat contoh."
        ],
        "exercise": "Buat latihan kecil tentang Array & Hash.",
        "quiz": {
          "q": "Tujuan utama bab Array & Hash?",
          "opts": [
            "Memahami konsep dan praktik",
            "Menghafal tanpa mencoba",
            "Copy paste saja",
            "Mengabaikan error"
          ],
          "answer": 0
        },
        "tip": "Selalu eksperimen dengan perubahan kecil.",
        "project": "Buat latihan kecil tentang Array & Hash."
      },
      {
        "title": "Class",
        "concept": "Object model Ruby sangat kuat.",
        "why": "Konsep Class perlu dipahami agar kamu dapat membangun program Ruby yang rapi dan dapat dipelihara.",
        "code": "class User\n  def initialize(name)\n    @name=name\n  end\nend",
        "steps": [
          "Baca contoh.",
          "Ubah satu bagian.",
          "Jalankan dan amati hasil.",
          "Tulis ulang tanpa melihat contoh."
        ],
        "exercise": "Buat latihan kecil tentang Class.",
        "quiz": {
          "q": "Tujuan utama bab Class?",
          "opts": [
            "Memahami konsep dan praktik",
            "Menghafal tanpa mencoba",
            "Copy paste saja",
            "Mengabaikan error"
          ],
          "answer": 0
        },
        "tip": "Selalu eksperimen dengan perubahan kecil.",
        "project": "Buat latihan kecil tentang Class."
      },
      {
        "title": "Gem",
        "concept": "Gem menambah kemampuan melalui library.",
        "why": "Konsep Gem perlu dipahami agar kamu dapat membangun program Ruby yang rapi dan dapat dipelihara.",
        "code": "# Gemfile\n# gem \"nama_library\"",
        "steps": [
          "Baca contoh.",
          "Ubah satu bagian.",
          "Jalankan dan amati hasil.",
          "Tulis ulang tanpa melihat contoh."
        ],
        "exercise": "Buat latihan kecil tentang Gem.",
        "quiz": {
          "q": "Tujuan utama bab Gem?",
          "opts": [
            "Memahami konsep dan praktik",
            "Menghafal tanpa mencoba",
            "Copy paste saja",
            "Mengabaikan error"
          ],
          "answer": 0
        },
        "tip": "Selalu eksperimen dengan perubahan kecil.",
        "project": "Buat latihan kecil tentang Gem."
      },
      {
        "title": "Error Handling",
        "concept": "rescue menangani error.",
        "why": "Konsep Error Handling perlu dipahami agar kamu dapat membangun program Ruby yang rapi dan dapat dipelihara.",
        "code": "begin\n  risky_work\nrescue => e\n  puts e.message\nend",
        "steps": [
          "Baca contoh.",
          "Ubah satu bagian.",
          "Jalankan dan amati hasil.",
          "Tulis ulang tanpa melihat contoh."
        ],
        "exercise": "Buat latihan kecil tentang Error Handling.",
        "quiz": {
          "q": "Tujuan utama bab Error Handling?",
          "opts": [
            "Memahami konsep dan praktik",
            "Menghafal tanpa mencoba",
            "Copy paste saja",
            "Mengabaikan error"
          ],
          "answer": 0
        },
        "tip": "Selalu eksperimen dengan perubahan kecil.",
        "project": "Buat latihan kecil tentang Error Handling."
      },
      {
        "title": "Web Concept",
        "concept": "Ruby dapat dipakai untuk backend web.",
        "why": "Konsep Web Concept perlu dipahami agar kamu dapat membangun program Ruby yang rapi dan dapat dipelihara.",
        "code": "# konsep route\n# GET /users",
        "steps": [
          "Baca contoh.",
          "Ubah satu bagian.",
          "Jalankan dan amati hasil.",
          "Tulis ulang tanpa melihat contoh."
        ],
        "exercise": "Buat latihan kecil tentang Web Concept.",
        "quiz": {
          "q": "Tujuan utama bab Web Concept?",
          "opts": [
            "Memahami konsep dan praktik",
            "Menghafal tanpa mencoba",
            "Copy paste saja",
            "Mengabaikan error"
          ],
          "answer": 0
        },
        "tip": "Selalu eksperimen dengan perubahan kecil.",
        "project": "Buat latihan kecil tentang Web Concept."
      },
      {
        "title": "Project Ruby",
        "concept": "Gabungkan konsep menjadi program kecil.",
        "why": "Konsep Project Ruby perlu dipahami agar kamu dapat membangun program Ruby yang rapi dan dapat dipelihara.",
        "code": "tasks=[]\ntasks << \"Belajar Ruby\"\nputs tasks",
        "steps": [
          "Baca contoh.",
          "Ubah satu bagian.",
          "Jalankan dan amati hasil.",
          "Tulis ulang tanpa melihat contoh."
        ],
        "exercise": "Buat latihan kecil tentang Project Ruby.",
        "quiz": {
          "q": "Tujuan utama bab Project Ruby?",
          "opts": [
            "Memahami konsep dan praktik",
            "Menghafal tanpa mencoba",
            "Copy paste saja",
            "Mengabaikan error"
          ],
          "answer": 0
        },
        "tip": "Selalu eksperimen dengan perubahan kecil.",
        "project": "Buat latihan kecil tentang Project Ruby."
      }
    ]
  },
  "PHP": {
    "icon": "🐘",
    "level": "Dasar → Lanjut",
    "description": "Bahasa server-side untuk membangun web dinamis.",
    "lessons": [
      {
        "title": "Syntax PHP",
        "concept": "PHP berjalan di server dan menghasilkan response.",
        "why": "Konsep Syntax PHP perlu dipahami agar kamu dapat membangun program PHP yang rapi dan dapat dipelihara.",
        "code": "<?php\necho \"Hello PHP\";\n?>",
        "steps": [
          "Baca contoh.",
          "Ubah satu bagian.",
          "Jalankan dan amati hasil.",
          "Tulis ulang tanpa melihat contoh."
        ],
        "exercise": "Buat latihan kecil tentang Syntax PHP.",
        "quiz": {
          "q": "Tujuan utama bab Syntax PHP?",
          "opts": [
            "Memahami konsep dan praktik",
            "Menghafal tanpa mencoba",
            "Copy paste saja",
            "Mengabaikan error"
          ],
          "answer": 0
        },
        "tip": "Selalu eksperimen dengan perubahan kecil.",
        "project": "Buat latihan kecil tentang Syntax PHP."
      },
      {
        "title": "Variable",
        "concept": "Variable menyimpan data.",
        "why": "Konsep Variable perlu dipahami agar kamu dapat membangun program PHP yang rapi dan dapat dipelihara.",
        "code": "$name = \"Ana\";\necho $name;",
        "steps": [
          "Baca contoh.",
          "Ubah satu bagian.",
          "Jalankan dan amati hasil.",
          "Tulis ulang tanpa melihat contoh."
        ],
        "exercise": "Buat latihan kecil tentang Variable.",
        "quiz": {
          "q": "Tujuan utama bab Variable?",
          "opts": [
            "Memahami konsep dan praktik",
            "Menghafal tanpa mencoba",
            "Copy paste saja",
            "Mengabaikan error"
          ],
          "answer": 0
        },
        "tip": "Selalu eksperimen dengan perubahan kecil.",
        "project": "Buat latihan kecil tentang Variable."
      },
      {
        "title": "Condition",
        "concept": "Percabangan program.",
        "why": "Konsep Condition perlu dipahami agar kamu dapat membangun program PHP yang rapi dan dapat dipelihara.",
        "code": "if ($age >= 18) { echo \"Dewasa\"; }",
        "steps": [
          "Baca contoh.",
          "Ubah satu bagian.",
          "Jalankan dan amati hasil.",
          "Tulis ulang tanpa melihat contoh."
        ],
        "exercise": "Buat latihan kecil tentang Condition.",
        "quiz": {
          "q": "Tujuan utama bab Condition?",
          "opts": [
            "Memahami konsep dan praktik",
            "Menghafal tanpa mencoba",
            "Copy paste saja",
            "Mengabaikan error"
          ],
          "answer": 0
        },
        "tip": "Selalu eksperimen dengan perubahan kecil.",
        "project": "Buat latihan kecil tentang Condition."
      },
      {
        "title": "Function",
        "concept": "Function membuat logic reusable.",
        "why": "Konsep Function perlu dipahami agar kamu dapat membangun program PHP yang rapi dan dapat dipelihara.",
        "code": "function add($a,$b){ return $a+$b; }",
        "steps": [
          "Baca contoh.",
          "Ubah satu bagian.",
          "Jalankan dan amati hasil.",
          "Tulis ulang tanpa melihat contoh."
        ],
        "exercise": "Buat latihan kecil tentang Function.",
        "quiz": {
          "q": "Tujuan utama bab Function?",
          "opts": [
            "Memahami konsep dan praktik",
            "Menghafal tanpa mencoba",
            "Copy paste saja",
            "Mengabaikan error"
          ],
          "answer": 0
        },
        "tip": "Selalu eksperimen dengan perubahan kecil.",
        "project": "Buat latihan kecil tentang Function."
      },
      {
        "title": "Form",
        "concept": "Input user harus divalidasi.",
        "why": "Konsep Form perlu dipahami agar kamu dapat membangun program PHP yang rapi dan dapat dipelihara.",
        "code": "$email = $_POST['email'] ?? '';",
        "steps": [
          "Baca contoh.",
          "Ubah satu bagian.",
          "Jalankan dan amati hasil.",
          "Tulis ulang tanpa melihat contoh."
        ],
        "exercise": "Buat latihan kecil tentang Form.",
        "quiz": {
          "q": "Tujuan utama bab Form?",
          "opts": [
            "Memahami konsep dan praktik",
            "Menghafal tanpa mencoba",
            "Copy paste saja",
            "Mengabaikan error"
          ],
          "answer": 0
        },
        "tip": "Selalu eksperimen dengan perubahan kecil.",
        "project": "Buat latihan kecil tentang Form."
      },
      {
        "title": "Session",
        "concept": "Session membantu mempertahankan state.",
        "why": "Konsep Session perlu dipahami agar kamu dapat membangun program PHP yang rapi dan dapat dipelihara.",
        "code": "session_start();\n$_SESSION['user_id']=123;",
        "steps": [
          "Baca contoh.",
          "Ubah satu bagian.",
          "Jalankan dan amati hasil.",
          "Tulis ulang tanpa melihat contoh."
        ],
        "exercise": "Buat latihan kecil tentang Session.",
        "quiz": {
          "q": "Tujuan utama bab Session?",
          "opts": [
            "Memahami konsep dan praktik",
            "Menghafal tanpa mencoba",
            "Copy paste saja",
            "Mengabaikan error"
          ],
          "answer": 0
        },
        "tip": "Selalu eksperimen dengan perubahan kecil.",
        "project": "Buat latihan kecil tentang Session."
      },
      {
        "title": "Database",
        "concept": "Gunakan prepared statement.",
        "why": "Konsep Database perlu dipahami agar kamu dapat membangun program PHP yang rapi dan dapat dipelihara.",
        "code": "$stmt=$pdo->prepare('SELECT * FROM users WHERE id=?');",
        "steps": [
          "Baca contoh.",
          "Ubah satu bagian.",
          "Jalankan dan amati hasil.",
          "Tulis ulang tanpa melihat contoh."
        ],
        "exercise": "Buat latihan kecil tentang Database.",
        "quiz": {
          "q": "Tujuan utama bab Database?",
          "opts": [
            "Memahami konsep dan praktik",
            "Menghafal tanpa mencoba",
            "Copy paste saja",
            "Mengabaikan error"
          ],
          "answer": 0
        },
        "tip": "Selalu eksperimen dengan perubahan kecil.",
        "project": "Buat latihan kecil tentang Database."
      },
      {
        "title": "Authentication",
        "concept": "Password harus di-hash.",
        "why": "Konsep Authentication perlu dipahami agar kamu dapat membangun program PHP yang rapi dan dapat dipelihara.",
        "code": "$hash=password_hash($password,PASSWORD_DEFAULT);",
        "steps": [
          "Baca contoh.",
          "Ubah satu bagian.",
          "Jalankan dan amati hasil.",
          "Tulis ulang tanpa melihat contoh."
        ],
        "exercise": "Buat latihan kecil tentang Authentication.",
        "quiz": {
          "q": "Tujuan utama bab Authentication?",
          "opts": [
            "Memahami konsep dan praktik",
            "Menghafal tanpa mencoba",
            "Copy paste saja",
            "Mengabaikan error"
          ],
          "answer": 0
        },
        "tip": "Selalu eksperimen dengan perubahan kecil.",
        "project": "Buat latihan kecil tentang Authentication."
      },
      {
        "title": "API",
        "concept": "Endpoint menerima dan menghasilkan data.",
        "why": "Konsep API perlu dipahami agar kamu dapat membangun program PHP yang rapi dan dapat dipelihara.",
        "code": "header('Content-Type: application/json');\necho json_encode(['ok'=>true]);",
        "steps": [
          "Baca contoh.",
          "Ubah satu bagian.",
          "Jalankan dan amati hasil.",
          "Tulis ulang tanpa melihat contoh."
        ],
        "exercise": "Buat latihan kecil tentang API.",
        "quiz": {
          "q": "Tujuan utama bab API?",
          "opts": [
            "Memahami konsep dan praktik",
            "Menghafal tanpa mencoba",
            "Copy paste saja",
            "Mengabaikan error"
          ],
          "answer": 0
        },
        "tip": "Selalu eksperimen dengan perubahan kecil.",
        "project": "Buat latihan kecil tentang API."
      },
      {
        "title": "Project PHP",
        "concept": "Bangun CRUD dengan validasi dan auth.",
        "why": "Konsep Project PHP perlu dipahami agar kamu dapat membangun program PHP yang rapi dan dapat dipelihara.",
        "code": "// route -> controller -> database",
        "steps": [
          "Baca contoh.",
          "Ubah satu bagian.",
          "Jalankan dan amati hasil.",
          "Tulis ulang tanpa melihat contoh."
        ],
        "exercise": "Buat latihan kecil tentang Project PHP.",
        "quiz": {
          "q": "Tujuan utama bab Project PHP?",
          "opts": [
            "Memahami konsep dan praktik",
            "Menghafal tanpa mencoba",
            "Copy paste saja",
            "Mengabaikan error"
          ],
          "answer": 0
        },
        "tip": "Selalu eksperimen dengan perubahan kecil.",
        "project": "Buat latihan kecil tentang Project PHP."
      }
    ]
  },
  "C++": {
    "icon": "⚙️",
    "level": "Dasar → Lanjut",
    "description": "Bahasa sistem dengan kontrol dan performa tinggi.",
    "lessons": [
      {
        "title": "Syntax & Compile",
        "concept": "Program C++ dikompilasi menjadi executable.",
        "why": "Konsep Syntax & Compile perlu dipahami agar kamu dapat membangun program C++ yang rapi dan dapat dipelihara.",
        "code": "#include <iostream>\nint main(){ std::cout<<\"Hello\"; }",
        "steps": [
          "Baca contoh.",
          "Ubah satu bagian.",
          "Jalankan dan amati hasil.",
          "Tulis ulang tanpa melihat contoh."
        ],
        "exercise": "Buat latihan kecil tentang Syntax & Compile.",
        "quiz": {
          "q": "Tujuan utama bab Syntax & Compile?",
          "opts": [
            "Memahami konsep dan praktik",
            "Menghafal tanpa mencoba",
            "Copy paste saja",
            "Mengabaikan error"
          ],
          "answer": 0
        },
        "tip": "Selalu eksperimen dengan perubahan kecil.",
        "project": "Buat latihan kecil tentang Syntax & Compile."
      },
      {
        "title": "Variable & Type",
        "concept": "Tipe menentukan representasi data.",
        "why": "Konsep Variable & Type perlu dipahami agar kamu dapat membangun program C++ yang rapi dan dapat dipelihara.",
        "code": "int age=20;\ndouble score=90.5;",
        "steps": [
          "Baca contoh.",
          "Ubah satu bagian.",
          "Jalankan dan amati hasil.",
          "Tulis ulang tanpa melihat contoh."
        ],
        "exercise": "Buat latihan kecil tentang Variable & Type.",
        "quiz": {
          "q": "Tujuan utama bab Variable & Type?",
          "opts": [
            "Memahami konsep dan praktik",
            "Menghafal tanpa mencoba",
            "Copy paste saja",
            "Mengabaikan error"
          ],
          "answer": 0
        },
        "tip": "Selalu eksperimen dengan perubahan kecil.",
        "project": "Buat latihan kecil tentang Variable & Type."
      },
      {
        "title": "Condition",
        "concept": "Alur berdasarkan kondisi.",
        "why": "Konsep Condition perlu dipahami agar kamu dapat membangun program C++ yang rapi dan dapat dipelihara.",
        "code": "if(age>=18){ std::cout<<\"adult\"; }",
        "steps": [
          "Baca contoh.",
          "Ubah satu bagian.",
          "Jalankan dan amati hasil.",
          "Tulis ulang tanpa melihat contoh."
        ],
        "exercise": "Buat latihan kecil tentang Condition.",
        "quiz": {
          "q": "Tujuan utama bab Condition?",
          "opts": [
            "Memahami konsep dan praktik",
            "Menghafal tanpa mencoba",
            "Copy paste saja",
            "Mengabaikan error"
          ],
          "answer": 0
        },
        "tip": "Selalu eksperimen dengan perubahan kecil.",
        "project": "Buat latihan kecil tentang Condition."
      },
      {
        "title": "Loop",
        "concept": "Perulangan memproses data.",
        "why": "Konsep Loop perlu dipahami agar kamu dapat membangun program C++ yang rapi dan dapat dipelihara.",
        "code": "for(int i=0;i<5;i++) std::cout<<i;",
        "steps": [
          "Baca contoh.",
          "Ubah satu bagian.",
          "Jalankan dan amati hasil.",
          "Tulis ulang tanpa melihat contoh."
        ],
        "exercise": "Buat latihan kecil tentang Loop.",
        "quiz": {
          "q": "Tujuan utama bab Loop?",
          "opts": [
            "Memahami konsep dan praktik",
            "Menghafal tanpa mencoba",
            "Copy paste saja",
            "Mengabaikan error"
          ],
          "answer": 0
        },
        "tip": "Selalu eksperimen dengan perubahan kecil.",
        "project": "Buat latihan kecil tentang Loop."
      },
      {
        "title": "Function",
        "concept": "Pisahkan pekerjaan menjadi fungsi.",
        "why": "Konsep Function perlu dipahami agar kamu dapat membangun program C++ yang rapi dan dapat dipelihara.",
        "code": "int add(int a,int b){ return a+b; }",
        "steps": [
          "Baca contoh.",
          "Ubah satu bagian.",
          "Jalankan dan amati hasil.",
          "Tulis ulang tanpa melihat contoh."
        ],
        "exercise": "Buat latihan kecil tentang Function.",
        "quiz": {
          "q": "Tujuan utama bab Function?",
          "opts": [
            "Memahami konsep dan praktik",
            "Menghafal tanpa mencoba",
            "Copy paste saja",
            "Mengabaikan error"
          ],
          "answer": 0
        },
        "tip": "Selalu eksperimen dengan perubahan kecil.",
        "project": "Buat latihan kecil tentang Function."
      },
      {
        "title": "Reference & Pointer",
        "concept": "Memahami address penting untuk C++.",
        "why": "Konsep Reference & Pointer perlu dipahami agar kamu dapat membangun program C++ yang rapi dan dapat dipelihara.",
        "code": "int x=10;\nint* p=&x;",
        "steps": [
          "Baca contoh.",
          "Ubah satu bagian.",
          "Jalankan dan amati hasil.",
          "Tulis ulang tanpa melihat contoh."
        ],
        "exercise": "Buat latihan kecil tentang Reference & Pointer.",
        "quiz": {
          "q": "Tujuan utama bab Reference & Pointer?",
          "opts": [
            "Memahami konsep dan praktik",
            "Menghafal tanpa mencoba",
            "Copy paste saja",
            "Mengabaikan error"
          ],
          "answer": 0
        },
        "tip": "Selalu eksperimen dengan perubahan kecil.",
        "project": "Buat latihan kecil tentang Reference & Pointer."
      },
      {
        "title": "Class",
        "concept": "OOP untuk model data.",
        "why": "Konsep Class perlu dipahami agar kamu dapat membangun program C++ yang rapi dan dapat dipelihara.",
        "code": "class User { public: std::string name; };",
        "steps": [
          "Baca contoh.",
          "Ubah satu bagian.",
          "Jalankan dan amati hasil.",
          "Tulis ulang tanpa melihat contoh."
        ],
        "exercise": "Buat latihan kecil tentang Class.",
        "quiz": {
          "q": "Tujuan utama bab Class?",
          "opts": [
            "Memahami konsep dan praktik",
            "Menghafal tanpa mencoba",
            "Copy paste saja",
            "Mengabaikan error"
          ],
          "answer": 0
        },
        "tip": "Selalu eksperimen dengan perubahan kecil.",
        "project": "Buat latihan kecil tentang Class."
      },
      {
        "title": "STL",
        "concept": "Gunakan container dan algorithm.",
        "why": "Konsep STL perlu dipahami agar kamu dapat membangun program C++ yang rapi dan dapat dipelihara.",
        "code": "std::vector<int> v{1,2,3};",
        "steps": [
          "Baca contoh.",
          "Ubah satu bagian.",
          "Jalankan dan amati hasil.",
          "Tulis ulang tanpa melihat contoh."
        ],
        "exercise": "Buat latihan kecil tentang STL.",
        "quiz": {
          "q": "Tujuan utama bab STL?",
          "opts": [
            "Memahami konsep dan praktik",
            "Menghafal tanpa mencoba",
            "Copy paste saja",
            "Mengabaikan error"
          ],
          "answer": 0
        },
        "tip": "Selalu eksperimen dengan perubahan kecil.",
        "project": "Buat latihan kecil tentang STL."
      },
      {
        "title": "Memory Safety",
        "concept": "Hindari use-after-free dan akses invalid.",
        "why": "Konsep Memory Safety perlu dipahami agar kamu dapat membangun program C++ yang rapi dan dapat dipelihara.",
        "code": "// gunakan RAII dan smart pointer",
        "steps": [
          "Baca contoh.",
          "Ubah satu bagian.",
          "Jalankan dan amati hasil.",
          "Tulis ulang tanpa melihat contoh."
        ],
        "exercise": "Buat latihan kecil tentang Memory Safety.",
        "quiz": {
          "q": "Tujuan utama bab Memory Safety?",
          "opts": [
            "Memahami konsep dan praktik",
            "Menghafal tanpa mencoba",
            "Copy paste saja",
            "Mengabaikan error"
          ],
          "answer": 0
        },
        "tip": "Selalu eksperimen dengan perubahan kecil.",
        "project": "Buat latihan kecil tentang Memory Safety."
      },
      {
        "title": "Project C++",
        "concept": "Gabungkan struktur data dan algoritma.",
        "why": "Konsep Project C++ perlu dipahami agar kamu dapat membangun program C++ yang rapi dan dapat dipelihara.",
        "code": "// project: CLI task manager",
        "steps": [
          "Baca contoh.",
          "Ubah satu bagian.",
          "Jalankan dan amati hasil.",
          "Tulis ulang tanpa melihat contoh."
        ],
        "exercise": "Buat latihan kecil tentang Project C++.",
        "quiz": {
          "q": "Tujuan utama bab Project C++?",
          "opts": [
            "Memahami konsep dan praktik",
            "Menghafal tanpa mencoba",
            "Copy paste saja",
            "Mengabaikan error"
          ],
          "answer": 0
        },
        "tip": "Selalu eksperimen dengan perubahan kecil.",
        "project": "Buat latihan kecil tentang Project C++."
      }
    ]
  },
  "Java": {
    "icon": "☕",
    "level": "Dasar → Lanjut",
    "description": "Bahasa OOP populer untuk aplikasi dan backend.",
    "lessons": [
      {
        "title": "Syntax",
        "concept": "Java memakai class dan method.",
        "why": "Konsep Syntax perlu dipahami agar kamu dapat membangun program Java yang rapi dan dapat dipelihara.",
        "code": "class Main { public static void main(String[] args){ System.out.println(\"Hello\"); } }",
        "steps": [
          "Baca contoh.",
          "Ubah satu bagian.",
          "Jalankan dan amati hasil.",
          "Tulis ulang tanpa melihat contoh."
        ],
        "exercise": "Buat latihan kecil tentang Syntax.",
        "quiz": {
          "q": "Tujuan utama bab Syntax?",
          "opts": [
            "Memahami konsep dan praktik",
            "Menghafal tanpa mencoba",
            "Copy paste saja",
            "Mengabaikan error"
          ],
          "answer": 0
        },
        "tip": "Selalu eksperimen dengan perubahan kecil.",
        "project": "Buat latihan kecil tentang Syntax."
      },
      {
        "title": "Type System",
        "concept": "Java adalah strongly typed.",
        "why": "Konsep Type System perlu dipahami agar kamu dapat membangun program Java yang rapi dan dapat dipelihara.",
        "code": "int age=20;\nString name=\"Ana\";",
        "steps": [
          "Baca contoh.",
          "Ubah satu bagian.",
          "Jalankan dan amati hasil.",
          "Tulis ulang tanpa melihat contoh."
        ],
        "exercise": "Buat latihan kecil tentang Type System.",
        "quiz": {
          "q": "Tujuan utama bab Type System?",
          "opts": [
            "Memahami konsep dan praktik",
            "Menghafal tanpa mencoba",
            "Copy paste saja",
            "Mengabaikan error"
          ],
          "answer": 0
        },
        "tip": "Selalu eksperimen dengan perubahan kecil.",
        "project": "Buat latihan kecil tentang Type System."
      },
      {
        "title": "Condition & Loop",
        "concept": "Kontrol alur dasar.",
        "why": "Konsep Condition & Loop perlu dipahami agar kamu dapat membangun program Java yang rapi dan dapat dipelihara.",
        "code": "for(int i=0;i<5;i++){ System.out.println(i); }",
        "steps": [
          "Baca contoh.",
          "Ubah satu bagian.",
          "Jalankan dan amati hasil.",
          "Tulis ulang tanpa melihat contoh."
        ],
        "exercise": "Buat latihan kecil tentang Condition & Loop.",
        "quiz": {
          "q": "Tujuan utama bab Condition & Loop?",
          "opts": [
            "Memahami konsep dan praktik",
            "Menghafal tanpa mencoba",
            "Copy paste saja",
            "Mengabaikan error"
          ],
          "answer": 0
        },
        "tip": "Selalu eksperimen dengan perubahan kecil.",
        "project": "Buat latihan kecil tentang Condition & Loop."
      },
      {
        "title": "Method",
        "concept": "Pisahkan perilaku.",
        "why": "Konsep Method perlu dipahami agar kamu dapat membangun program Java yang rapi dan dapat dipelihara.",
        "code": "static int add(int a,int b){return a+b;}",
        "steps": [
          "Baca contoh.",
          "Ubah satu bagian.",
          "Jalankan dan amati hasil.",
          "Tulis ulang tanpa melihat contoh."
        ],
        "exercise": "Buat latihan kecil tentang Method.",
        "quiz": {
          "q": "Tujuan utama bab Method?",
          "opts": [
            "Memahami konsep dan praktik",
            "Menghafal tanpa mencoba",
            "Copy paste saja",
            "Mengabaikan error"
          ],
          "answer": 0
        },
        "tip": "Selalu eksperimen dengan perubahan kecil.",
        "project": "Buat latihan kecil tentang Method."
      },
      {
        "title": "Class & Object",
        "concept": "Modelkan entitas.",
        "why": "Konsep Class & Object perlu dipahami agar kamu dapat membangun program Java yang rapi dan dapat dipelihara.",
        "code": "class User { String name; }",
        "steps": [
          "Baca contoh.",
          "Ubah satu bagian.",
          "Jalankan dan amati hasil.",
          "Tulis ulang tanpa melihat contoh."
        ],
        "exercise": "Buat latihan kecil tentang Class & Object.",
        "quiz": {
          "q": "Tujuan utama bab Class & Object?",
          "opts": [
            "Memahami konsep dan praktik",
            "Menghafal tanpa mencoba",
            "Copy paste saja",
            "Mengabaikan error"
          ],
          "answer": 0
        },
        "tip": "Selalu eksperimen dengan perubahan kecil.",
        "project": "Buat latihan kecil tentang Class & Object."
      },
      {
        "title": "Inheritance",
        "concept": "Pewarisan digunakan saat relasi memang tepat.",
        "why": "Konsep Inheritance perlu dipahami agar kamu dapat membangun program Java yang rapi dan dapat dipelihara.",
        "code": "class Admin extends User {}",
        "steps": [
          "Baca contoh.",
          "Ubah satu bagian.",
          "Jalankan dan amati hasil.",
          "Tulis ulang tanpa melihat contoh."
        ],
        "exercise": "Buat latihan kecil tentang Inheritance.",
        "quiz": {
          "q": "Tujuan utama bab Inheritance?",
          "opts": [
            "Memahami konsep dan praktik",
            "Menghafal tanpa mencoba",
            "Copy paste saja",
            "Mengabaikan error"
          ],
          "answer": 0
        },
        "tip": "Selalu eksperimen dengan perubahan kecil.",
        "project": "Buat latihan kecil tentang Inheritance."
      },
      {
        "title": "Interface",
        "concept": "Definisikan kontrak.",
        "why": "Konsep Interface perlu dipahami agar kamu dapat membangun program Java yang rapi dan dapat dipelihara.",
        "code": "interface Payable { void pay(); }",
        "steps": [
          "Baca contoh.",
          "Ubah satu bagian.",
          "Jalankan dan amati hasil.",
          "Tulis ulang tanpa melihat contoh."
        ],
        "exercise": "Buat latihan kecil tentang Interface.",
        "quiz": {
          "q": "Tujuan utama bab Interface?",
          "opts": [
            "Memahami konsep dan praktik",
            "Menghafal tanpa mencoba",
            "Copy paste saja",
            "Mengabaikan error"
          ],
          "answer": 0
        },
        "tip": "Selalu eksperimen dengan perubahan kecil.",
        "project": "Buat latihan kecil tentang Interface."
      },
      {
        "title": "Collections",
        "concept": "Kelola data dengan List/Map.",
        "why": "Konsep Collections perlu dipahami agar kamu dapat membangun program Java yang rapi dan dapat dipelihara.",
        "code": "List<String> names=new ArrayList<>();",
        "steps": [
          "Baca contoh.",
          "Ubah satu bagian.",
          "Jalankan dan amati hasil.",
          "Tulis ulang tanpa melihat contoh."
        ],
        "exercise": "Buat latihan kecil tentang Collections.",
        "quiz": {
          "q": "Tujuan utama bab Collections?",
          "opts": [
            "Memahami konsep dan praktik",
            "Menghafal tanpa mencoba",
            "Copy paste saja",
            "Mengabaikan error"
          ],
          "answer": 0
        },
        "tip": "Selalu eksperimen dengan perubahan kecil.",
        "project": "Buat latihan kecil tentang Collections."
      },
      {
        "title": "Exception",
        "concept": "Tangani kondisi gagal.",
        "why": "Konsep Exception perlu dipahami agar kamu dapat membangun program Java yang rapi dan dapat dipelihara.",
        "code": "try { risky(); } catch(Exception e) { }",
        "steps": [
          "Baca contoh.",
          "Ubah satu bagian.",
          "Jalankan dan amati hasil.",
          "Tulis ulang tanpa melihat contoh."
        ],
        "exercise": "Buat latihan kecil tentang Exception.",
        "quiz": {
          "q": "Tujuan utama bab Exception?",
          "opts": [
            "Memahami konsep dan praktik",
            "Menghafal tanpa mencoba",
            "Copy paste saja",
            "Mengabaikan error"
          ],
          "answer": 0
        },
        "tip": "Selalu eksperimen dengan perubahan kecil.",
        "project": "Buat latihan kecil tentang Exception."
      },
      {
        "title": "Project Java",
        "concept": "Bangun aplikasi console atau backend.",
        "why": "Konsep Project Java perlu dipahami agar kamu dapat membangun program Java yang rapi dan dapat dipelihara.",
        "code": "// project: study tracker",
        "steps": [
          "Baca contoh.",
          "Ubah satu bagian.",
          "Jalankan dan amati hasil.",
          "Tulis ulang tanpa melihat contoh."
        ],
        "exercise": "Buat latihan kecil tentang Project Java.",
        "quiz": {
          "q": "Tujuan utama bab Project Java?",
          "opts": [
            "Memahami konsep dan praktik",
            "Menghafal tanpa mencoba",
            "Copy paste saja",
            "Mengabaikan error"
          ],
          "answer": 0
        },
        "tip": "Selalu eksperimen dengan perubahan kecil.",
        "project": "Buat latihan kecil tentang Project Java."
      }
    ]
  },
  "SQL": {
    "icon": "🗄️",
    "level": "Dasar → Lanjut",
    "description": "Mengolah data relasional dengan aman dan terstruktur.",
    "lessons": [
      {
        "title": "Database & Table",
        "concept": "Database menyimpan data terstruktur.",
        "why": "Konsep Database & Table perlu dipahami agar kamu dapat membangun program SQL yang rapi dan dapat dipelihara.",
        "code": "CREATE TABLE users (id INT PRIMARY KEY, name VARCHAR(100));",
        "steps": [
          "Baca contoh.",
          "Ubah satu bagian.",
          "Jalankan dan amati hasil.",
          "Tulis ulang tanpa melihat contoh."
        ],
        "exercise": "Buat latihan kecil tentang Database & Table.",
        "quiz": {
          "q": "Tujuan utama bab Database & Table?",
          "opts": [
            "Memahami konsep dan praktik",
            "Menghafal tanpa mencoba",
            "Copy paste saja",
            "Mengabaikan error"
          ],
          "answer": 0
        },
        "tip": "Selalu eksperimen dengan perubahan kecil.",
        "project": "Buat latihan kecil tentang Database & Table."
      },
      {
        "title": "SELECT",
        "concept": "Ambil data yang dibutuhkan.",
        "why": "Konsep SELECT perlu dipahami agar kamu dapat membangun program SQL yang rapi dan dapat dipelihara.",
        "code": "SELECT id,name FROM users;",
        "steps": [
          "Baca contoh.",
          "Ubah satu bagian.",
          "Jalankan dan amati hasil.",
          "Tulis ulang tanpa melihat contoh."
        ],
        "exercise": "Buat latihan kecil tentang SELECT.",
        "quiz": {
          "q": "Tujuan utama bab SELECT?",
          "opts": [
            "Memahami konsep dan praktik",
            "Menghafal tanpa mencoba",
            "Copy paste saja",
            "Mengabaikan error"
          ],
          "answer": 0
        },
        "tip": "Selalu eksperimen dengan perubahan kecil.",
        "project": "Buat latihan kecil tentang SELECT."
      },
      {
        "title": "WHERE",
        "concept": "Filter data.",
        "why": "Konsep WHERE perlu dipahami agar kamu dapat membangun program SQL yang rapi dan dapat dipelihara.",
        "code": "SELECT * FROM users WHERE id=1;",
        "steps": [
          "Baca contoh.",
          "Ubah satu bagian.",
          "Jalankan dan amati hasil.",
          "Tulis ulang tanpa melihat contoh."
        ],
        "exercise": "Buat latihan kecil tentang WHERE.",
        "quiz": {
          "q": "Tujuan utama bab WHERE?",
          "opts": [
            "Memahami konsep dan praktik",
            "Menghafal tanpa mencoba",
            "Copy paste saja",
            "Mengabaikan error"
          ],
          "answer": 0
        },
        "tip": "Selalu eksperimen dengan perubahan kecil.",
        "project": "Buat latihan kecil tentang WHERE."
      },
      {
        "title": "INSERT",
        "concept": "Tambahkan data.",
        "why": "Konsep INSERT perlu dipahami agar kamu dapat membangun program SQL yang rapi dan dapat dipelihara.",
        "code": "INSERT INTO users(name) VALUES ('Ana');",
        "steps": [
          "Baca contoh.",
          "Ubah satu bagian.",
          "Jalankan dan amati hasil.",
          "Tulis ulang tanpa melihat contoh."
        ],
        "exercise": "Buat latihan kecil tentang INSERT.",
        "quiz": {
          "q": "Tujuan utama bab INSERT?",
          "opts": [
            "Memahami konsep dan praktik",
            "Menghafal tanpa mencoba",
            "Copy paste saja",
            "Mengabaikan error"
          ],
          "answer": 0
        },
        "tip": "Selalu eksperimen dengan perubahan kecil.",
        "project": "Buat latihan kecil tentang INSERT."
      },
      {
        "title": "UPDATE",
        "concept": "Ubah data dengan filter tepat.",
        "why": "Konsep UPDATE perlu dipahami agar kamu dapat membangun program SQL yang rapi dan dapat dipelihara.",
        "code": "UPDATE users SET name='Budi' WHERE id=1;",
        "steps": [
          "Baca contoh.",
          "Ubah satu bagian.",
          "Jalankan dan amati hasil.",
          "Tulis ulang tanpa melihat contoh."
        ],
        "exercise": "Buat latihan kecil tentang UPDATE.",
        "quiz": {
          "q": "Tujuan utama bab UPDATE?",
          "opts": [
            "Memahami konsep dan praktik",
            "Menghafal tanpa mencoba",
            "Copy paste saja",
            "Mengabaikan error"
          ],
          "answer": 0
        },
        "tip": "Selalu eksperimen dengan perubahan kecil.",
        "project": "Buat latihan kecil tentang UPDATE."
      },
      {
        "title": "DELETE",
        "concept": "Hapus data dengan hati-hati.",
        "why": "Konsep DELETE perlu dipahami agar kamu dapat membangun program SQL yang rapi dan dapat dipelihara.",
        "code": "DELETE FROM users WHERE id=1;",
        "steps": [
          "Baca contoh.",
          "Ubah satu bagian.",
          "Jalankan dan amati hasil.",
          "Tulis ulang tanpa melihat contoh."
        ],
        "exercise": "Buat latihan kecil tentang DELETE.",
        "quiz": {
          "q": "Tujuan utama bab DELETE?",
          "opts": [
            "Memahami konsep dan praktik",
            "Menghafal tanpa mencoba",
            "Copy paste saja",
            "Mengabaikan error"
          ],
          "answer": 0
        },
        "tip": "Selalu eksperimen dengan perubahan kecil.",
        "project": "Buat latihan kecil tentang DELETE."
      },
      {
        "title": "JOIN",
        "concept": "Gabungkan data antar tabel.",
        "why": "Konsep JOIN perlu dipahami agar kamu dapat membangun program SQL yang rapi dan dapat dipelihara.",
        "code": "SELECT u.name,o.total FROM users u JOIN orders o ON o.user_id=u.id;",
        "steps": [
          "Baca contoh.",
          "Ubah satu bagian.",
          "Jalankan dan amati hasil.",
          "Tulis ulang tanpa melihat contoh."
        ],
        "exercise": "Buat latihan kecil tentang JOIN.",
        "quiz": {
          "q": "Tujuan utama bab JOIN?",
          "opts": [
            "Memahami konsep dan praktik",
            "Menghafal tanpa mencoba",
            "Copy paste saja",
            "Mengabaikan error"
          ],
          "answer": 0
        },
        "tip": "Selalu eksperimen dengan perubahan kecil.",
        "project": "Buat latihan kecil tentang JOIN."
      },
      {
        "title": "GROUP BY",
        "concept": "Agregasi data.",
        "why": "Konsep GROUP BY perlu dipahami agar kamu dapat membangun program SQL yang rapi dan dapat dipelihara.",
        "code": "SELECT user_id,COUNT(*) FROM orders GROUP BY user_id;",
        "steps": [
          "Baca contoh.",
          "Ubah satu bagian.",
          "Jalankan dan amati hasil.",
          "Tulis ulang tanpa melihat contoh."
        ],
        "exercise": "Buat latihan kecil tentang GROUP BY.",
        "quiz": {
          "q": "Tujuan utama bab GROUP BY?",
          "opts": [
            "Memahami konsep dan praktik",
            "Menghafal tanpa mencoba",
            "Copy paste saja",
            "Mengabaikan error"
          ],
          "answer": 0
        },
        "tip": "Selalu eksperimen dengan perubahan kecil.",
        "project": "Buat latihan kecil tentang GROUP BY."
      },
      {
        "title": "Index",
        "concept": "Index mempercepat pola query tertentu.",
        "why": "Konsep Index perlu dipahami agar kamu dapat membangun program SQL yang rapi dan dapat dipelihara.",
        "code": "CREATE INDEX idx_users_name ON users(name);",
        "steps": [
          "Baca contoh.",
          "Ubah satu bagian.",
          "Jalankan dan amati hasil.",
          "Tulis ulang tanpa melihat contoh."
        ],
        "exercise": "Buat latihan kecil tentang Index.",
        "quiz": {
          "q": "Tujuan utama bab Index?",
          "opts": [
            "Memahami konsep dan praktik",
            "Menghafal tanpa mencoba",
            "Copy paste saja",
            "Mengabaikan error"
          ],
          "answer": 0
        },
        "tip": "Selalu eksperimen dengan perubahan kecil.",
        "project": "Buat latihan kecil tentang Index."
      },
      {
        "title": "Secure SQL",
        "concept": "Prepared statement mencegah injection.",
        "why": "Konsep Secure SQL perlu dipahami agar kamu dapat membangun program SQL yang rapi dan dapat dipelihara.",
        "code": "SELECT * FROM users WHERE email = ?",
        "steps": [
          "Baca contoh.",
          "Ubah satu bagian.",
          "Jalankan dan amati hasil.",
          "Tulis ulang tanpa melihat contoh."
        ],
        "exercise": "Buat latihan kecil tentang Secure SQL.",
        "quiz": {
          "q": "Tujuan utama bab Secure SQL?",
          "opts": [
            "Memahami konsep dan praktik",
            "Menghafal tanpa mencoba",
            "Copy paste saja",
            "Mengabaikan error"
          ],
          "answer": 0
        },
        "tip": "Selalu eksperimen dengan perubahan kecil.",
        "project": "Buat latihan kecil tentang Secure SQL."
      }
    ]
  },
  "Cyber Security": {
    "icon": "🛡️",
    "level": "Fundamental → Advanced",
    "description": "Keamanan aplikasi, jaringan, dan defensive security.",
    "lessons": [
      {
        "title": "Security Mindset",
        "concept": "Cyber security dimulai dari aset, risiko, ancaman, dan kontrol.",
        "why": "Tujuan security bukan sekadar 'meretas', tetapi mengurangi kemungkinan dan dampak insiden.",
        "code": "Asset → Threat → Vulnerability → Risk → Control",
        "steps": [
          "Identifikasi aset.",
          "Tentukan apa yang harus dilindungi.",
          "Pikirkan kemungkinan ancaman.",
          "Pilih kontrol."
        ],
        "exercise": "Buat threat model sederhana untuk aplikasi catatan belajar.",
        "quiz": {
          "q": "Apa yang menjadi dasar pengambilan keputusan security?",
          "opts": [
            "Risk",
            "Warna UI",
            "Jumlah tombol",
            "Logo"
          ],
          "answer": 0
        },
        "tip": "Berpikir seperti defender membuat pengujian lebih bermakna.",
        "project": "Buat threat model sederhana untuk aplikasi catatan belajar."
      },
      {
        "title": "CIA Triad",
        "concept": "Confidentiality, Integrity, Availability adalah tiga tujuan keamanan klasik.",
        "why": "Satu sistem dapat aman pada satu dimensi tetapi gagal pada dimensi lain.",
        "code": "Confidentiality = rahasia\nIntegrity = tidak berubah tanpa izin\nAvailability = tersedia saat dibutuhkan",
        "steps": [
          "Identifikasi data sensitif.",
          "Lindungi perubahan.",
          "Rencanakan availability."
        ],
        "exercise": "Berikan contoh kegagalan untuk masing-masing CIA.",
        "quiz": {
          "q": "Huruf I pada CIA berarti?",
          "opts": [
            "Internet",
            "Integrity",
            "Identity",
            "Isolation"
          ],
          "answer": 1
        },
        "tip": "CIA bukan checklist tunggal; konteks bisnis menentukan prioritas.",
        "project": "Berikan contoh kegagalan untuk masing-masing CIA."
      },
      {
        "title": "Networking Basics",
        "concept": "IP, DNS, port, TCP/UDP, HTTP dan TLS membentuk fondasi komunikasi.",
        "why": "Defender perlu memahami jalur data untuk menemukan titik risiko.",
        "code": "Browser → DNS → IP → TCP/TLS → HTTP → Server",
        "steps": [
          "DNS menerjemahkan nama.",
          "Port mengidentifikasi layanan pada host.",
          "TLS melindungi komunikasi."
        ],
        "exercise": "Gambar alur request dari browser ke server.",
        "quiz": {
          "q": "DNS berfungsi terutama untuk?",
          "opts": [
            "Resolusi nama",
            "Enkripsi file",
            "Hash password",
            "Membuat UI"
          ],
          "answer": 0
        },
        "tip": "Pahami protokol sebelum menggunakan tool security.",
        "project": "Gambar alur request dari browser ke server."
      },
      {
        "title": "Authentication & Authorization",
        "concept": "Authentication menjawab 'siapa kamu'; authorization menjawab 'boleh melakukan apa'.",
        "why": "Banyak insiden terjadi karena akses tidak dibatasi dengan benar.",
        "code": "User → Authentication → Session → Authorization → Resource",
        "steps": [
          "Gunakan password hashing.",
          "Pertimbangkan MFA.",
          "Terapkan least privilege."
        ],
        "exercise": "Rancang role user/admin untuk aplikasi belajar.",
        "quiz": {
          "q": "Apa perbedaan utama authN dan authZ?",
          "opts": [
            "Identity vs permission",
            "CSS vs HTML",
            "Client vs server",
            "Hash vs encrypt"
          ],
          "answer": 0
        },
        "tip": "Jangan mengandalkan role dari input client tanpa verifikasi server.",
        "project": "Rancang role user/admin untuk aplikasi belajar."
      },
      {
        "title": "Cryptography",
        "concept": "Kriptografi melindungi kerahasiaan, integritas, autentikasi, atau kombinasi.",
        "why": "Encryption dan hashing bukan hal yang sama.",
        "code": "Password → slow password hash\nData transit → authenticated encryption\nCertificate → identity + key binding",
        "steps": [
          "Password memakai password hashing.",
          "Data sensitif transit memakai TLS.",
          "Jangan membuat algoritma kripto sendiri."
        ],
        "exercise": "Bedakan contoh penggunaan hashing dan encryption.",
        "quiz": {
          "q": "Password seharusnya disimpan sebagai?",
          "opts": [
            "Plaintext",
            "Password hash yang kuat",
            "Base64",
            "URL"
          ],
          "answer": 1
        },
        "tip": "Base64 adalah encoding, bukan encryption.",
        "project": "Bedakan contoh penggunaan hashing dan encryption."
      },
      {
        "title": "Web Security",
        "concept": "Aplikasi web harus memperlakukan input dan state sebagai sesuatu yang tidak terpercaya.",
        "why": "XSS, CSRF, injection, broken access control, dan kesalahan konfigurasi adalah contoh kelas masalah.",
        "code": "Input → Validate → Process safely → Encode output → Authorize",
        "steps": [
          "Validasi di server.",
          "Encode output sesuai konteks.",
          "Gunakan prepared statement.",
          "Periksa authorization pada setiap resource."
        ],
        "exercise": "Audit aplikasi demo milikmu menggunakan checklist OWASP.",
        "quiz": {
          "q": "Prinsip paling penting untuk input dari user?",
          "opts": [
            "Trust input",
            "Treat as untrusted",
            "Ignore validation",
            "Execute directly"
          ],
          "answer": 1
        },
        "tip": "Gunakan lab yang kamu miliki atau mendapat izin untuk diuji.",
        "project": "Audit aplikasi demo milikmu menggunakan checklist OWASP."
      },
      {
        "title": "OWASP Thinking",
        "concept": "OWASP membantu developer memahami risiko aplikasi web yang umum.",
        "why": "Daftar risiko bukan sekadar hafalan; gunakan untuk meninjau desain dan implementasi.",
        "code": "Threat model + secure design + validation + authorization + logging",
        "steps": [
          "Baca risiko.",
          "Cari root cause.",
          "Perbaiki desain.",
          "Uji regresi."
        ],
        "exercise": "Buat checklist review untuk form login.",
        "quiz": {
          "q": "Apa manfaat daftar risiko seperti OWASP Top 10?",
          "opts": [
            "Membantu prioritas risiko",
            "Menjamin aplikasi aman",
            "Menggantikan testing",
            "Menghapus kebutuhan coding"
          ],
          "answer": 0
        },
        "tip": "Tidak ada checklist yang menjamin keamanan 100%.",
        "project": "Buat checklist review untuk form login."
      },
      {
        "title": "Linux & Hardening",
        "concept": "Linux security mencakup permission, process, service, update, dan logging.",
        "why": "Hardening mengurangi attack surface.",
        "code": "Least privilege\nDisable unused services\nPatch\nStrong authentication\nLogging",
        "steps": [
          "Audit user.",
          "Periksa service.",
          "Update sistem.",
          "Batasi permission."
        ],
        "exercise": "Buat checklist hardening VM lab.",
        "quiz": {
          "q": "Prinsip membatasi hak akses disebut?",
          "opts": [
            "Least privilege",
            "Open privilege",
            "Full trust",
            "Default admin"
          ],
          "answer": 0
        },
        "tip": "Hardening adalah proses berkelanjutan.",
        "project": "Buat checklist hardening VM lab."
      },
      {
        "title": "Logging & Incident Response",
        "concept": "Log membantu mendeteksi dan menyelidiki kejadian.",
        "why": "Incident response membutuhkan proses, bukan reaksi panik.",
        "code": "Detect → Triage → Contain → Eradicate → Recover → Learn",
        "steps": [
          "Kumpulkan log relevan.",
          "Sinkronkan waktu.",
          "Jaga bukti.",
          "Dokumentasikan keputusan."
        ],
        "exercise": "Buat timeline insiden fiktif dari log yang kamu buat sendiri.",
        "quiz": {
          "q": "Tahap setelah containment biasanya?",
          "opts": [
            "Eradication",
            "Design",
            "Marketing",
            "Styling"
          ],
          "answer": 0
        },
        "tip": "Dokumentasi adalah bagian dari keamanan.",
        "project": "Buat timeline insiden fiktif dari log yang kamu buat sendiri."
      },
      {
        "title": "Ethical Security Lab",
        "concept": "Pengujian keamanan harus dilakukan pada sistem yang kamu miliki atau yang secara eksplisit memberi izin.",
        "why": "Belajar offensive security paling aman melalui CTF, lab lokal, sandbox, atau program resmi.",
        "code": "Scope → Permission → Test → Evidence → Report → Fix → Retest",
        "steps": [
          "Tentukan scope.",
          "Jangan menyentuh target di luar izin.",
          "Minimalkan dampak.",
          "Laporkan temuan."
        ],
        "exercise": "Bangun lab lokal sederhana dan dokumentasikan satu temuan yang aman.",
        "quiz": {
          "q": "Sebelum pengujian, apa yang harus jelas?",
          "opts": [
            "Scope dan izin",
            "Jumlah follower",
            "Warna terminal",
            "Nama tool"
          ],
          "answer": 0
        },
        "tip": "Keahlian security yang matang selalu berjalan bersama etika dan dokumentasi.",
        "project": "Security review lab lokal."
      }
    ]
  }
};