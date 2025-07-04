document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  body.classList.add("page-load-animate");
  setTimeout(() => {
    body.classList.remove("page-load-animate");
  }, 1000);
});

document.addEventListener("DOMContentLoaded", function () {
  const burger = document.getElementById("burger-toggle");
  const dropdown = document.getElementById("burger-dropdown");

  burger.addEventListener("click", function (e) {
    dropdown.classList.toggle("show");
    e.stopPropagation();
  });

  window.addEventListener("click", function (e) {
    if (!dropdown.contains(e.target) && !burger.contains(e.target)) {
      dropdown.classList.remove("show");
    }
  });
});

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
  const wrapper = document.getElementById('sliderWrapper');
  const slideWidth = slides[0].offsetWidth;
  wrapper.style.transform = `translateX(-${index * slideWidth}px)`;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
}

window.addEventListener('resize', () => showSlide(currentSlide));
showSlide(currentSlide);

const data = [
  {
    title: "Awal Mula dan Pembentukan (sebelum 1445–1479)",
    desc: `
<p><strong>Cirebon</strong> berasal dari kata <em>Caruban</em>, Ini mencerminkan komunitas awal di daerah muara Sungai Jati yang terdiri dari berbagai suku dan etnis—Sunda, Jawa, Tionghoa, Arab, dan lainnya. Wilayah ini dulunya adalah bagian dari Kerajaan Sunda dan dipimpin oleh Ki Gedeng Tapa, seorang tokoh spiritual dan pemimpin lokal yang sangat dihormati. Ia mendirikan pedukuhan kecil yang menjadi pusat perdagangan garam dan hasil laut, menjadikan daerah ini cukup makmur untuk ukuran pemukiman pesisir kala itu.</p>

<p>Perubahan besar terjadi saat <strong>Pangeran Walangsungsang</strong>, putra Prabu Siliwangi dari Pajajaran, meninggalkan istana demi memeluk Islam. Bersama adiknya, Rara Santang, dan gurunya Syekh Datuk Kahfi, mereka membangun pemerintahan Islam di Lemahwungkuk, Cirebon. Walangsungsang kemudian bergelar Pangeran Cakrabuana dan mulai membentuk tatanan masyarakat baru yang berlandaskan ajaran Islam. Di bawah Cakrabuana, wilayah ini tumbuh sebagai pusat keagamaan dan perdagangan yang aktif.</p>

<p>Pada tahun 1447, pembangunan <em>Keraton Pakungwati</em> dimulai. menjadi simbol dari transformasi Caruban menjadi kota kerajaan. Keraton ini tidak hanya menjadi pusat kekuasaan, tapi juga pusat spiritual dan kultural. Di sinilah nilai-nilai Islam, tradisi Sunda, dan interaksi antarbangsa mulai terjalin kuat, membentuk identitas khas Cirebon yang unik. Dari sini, nama Caruban mulai bergeser menjadi “Cirebon,” dari kata “ci” (air) dan “rebon” (udang kecil), yang juga mencerminkan mata pencaharian utama warganya.</p>
`,
    images: ["public/kiagengtapa.jpeg", "public/Awal Mula dan Pembentukan1.jpg", "public/Awal Mula dan Pembentukan.jpeg"],
    audio: "public/podcast.mp3"
  },
  {
    title: "Kejayaan di Bawah Sunan Gunung Jati (1479–1568)",
    desc: `
<p><strong>Sunan Gunung Jati</strong>, atau <em>Syarif Hidayatullah</em>, adalah putra dari Nyai Rara Santang dan keturunan langsung Rasulullah SAW melalui jalur Arab. Ia naik takhta menggantikan Cakrabuana pada tahun 1479 dan membawa Cirebon ke masa kejayaannya. Selain sebagai pemimpin kerajaan, ia juga dikenal sebagai <em>Wali Songo</em>, tokoh sentral dalam penyebaran Islam di tanah Jawa. Ia memanfaatkan Cirebon sebagai pusat dakwah, politik, dan perdagangan, menjadikannya kota penting dalam jaringan maritim Nusantara.</p>

<p>Tahun 1482 menjadi titik balik penting dalam sejarah Cirebon ketika Sunan Gunung Jati secara resmi menyatakan kemerdekaan Cirebon dari Kerajaan Sunda Pajajaran. Langkah ini bukan hanya bersifat politis, tapi juga simbolis: Cirebon menjadi kesultanan Islam pertama di Jawa Barat. Tujuh tahun kemudian, pada 1489, ia membangun <strong>Masjid Agung Sang Cipta Rasa</strong> yang menjadi pusat kegiatan spiritual masyarakat dan ikon kota hingga kini. Masjid ini mencerminkan perpaduan seni arsitektur Islam, Hindu, dan Jawa.</p>

<p>Kejayaan Cirebon terlihat dari pelabuhannya yang ramai oleh pedagang dari berbagai penjuru dunia, seperti Gujarat, Tiongkok, hingga Portugis. Di masa ini, lahir pula berbagai kesenian khas seperti tari topeng, batik megamendung, dan gamelan gaya Cirebon. Perpaduan antara Islam dan budaya lokal menciptakan karakter kota yang kosmopolitan namun religius. Kepemimpinan Sunan Gunung Jati menempatkan Cirebon sebagai pionir kota multikultural dan pusat intelektual di pantai utara Jawa.</p>
`,
    images: ["public/sunan_gunung_jati.jpg", "public/Masjid Agung Sang Cipta Rasa.jpg", "public/Cakrabuana.jpg", "public/Masjid Agung Sang Cipta Rasa2.jpg"],
    audio: "public/podcast.mp3"
  },
  {
    title: "Konsolidasi di Era Panembahan Ratu I (1568–1649)",
    desc: `
<p><strong>Wafatnya Sunan Gunung Jati</strong> pada tahun 1568 membawa perubahan dalam tatanan kekuasaan. Fatahillah, tokoh militer dari Demak, sempat memegang kendali selama dua tahun untuk menjaga kesinambungan kekuasaan. Namun, kekuasaan yang sesungguhnya kemudian jatuh ke tangan <strong>Panembahan Ratu I</strong>, cucu dari Sunan Gunung Jati, yang memerintah hampir 80 tahun. Masa pemerintahannya dikenal sebagai masa konsolidasi politik dan stabilitas sosial.</p>

<p>Panembahan Ratu I berhasil mempertahankan kedaulatan Cirebon dari tekanan eksternal, termasuk dari Kesultanan Mataram dan Belanda. Ia memperkuat pertahanan wilayah, memperluas hubungan dagang, serta menjalin diplomasi dengan kerajaan Islam lain seperti Banten dan Palembang. Hubungan ini penting dalam menjaga posisi Cirebon sebagai kekuatan maritim dan politik yang strategis di Jawa Barat.</p>

<p>Pada masa ini, <em>budaya Cirebon juga berkembang pesat</em>. Pesantren dan pendidikan Islam mulai tersebar luas, serta seni-seni seperti lukisan kaca, ukiran keraton, dan seni batik semakin mapan. Masa pemerintahan Panembahan Ratu I menjadi fondasi penting bagi keberlanjutan warisan intelektual dan budaya Islam di Cirebon yang kelak bertahan hingga masa kolonial.</p>
`,
    images: ["public/Fatahillah.jpeg", "public/Panembahan Ratu I.jpg"],
    audio: "public/podcast.mp3"
  },
  {
    title: "Krisis Suksesi & Perpecahan (1649–1679)",
    desc: `
<p><strong>Naiknya Panembahan Girilaya (Ratu II)</strong> ke tampuk kekuasaan pada tahun 1649 menandai awal masa genting bagi Kesultanan Cirebon. Dalam upaya memperkuat posisi politiknya, ia menjalin hubungan erat dengan dua kekuatan besar saat itu—Kesultanan Mataram dan Banten. Putra-putranya dijodohkan dengan putri dari kerajaan-kerajaan tersebut. Namun, alih-alih memperkuat, langkah ini justru menjadi sumber dilema internal yang memicu perebutan kekuasaan dalam keluarga kerajaan.</p>

<p>Ketegangan mencapai puncaknya ketika Panembahan Girilaya ditangkap dan wafat dalam tahanan Mataram. Dalam kekosongan kekuasaan, muncul tokoh penting yaitu <strong>Pangeran Wangsakerta</strong>. Ia adalah cendekiawan dari lingkungan istana yang lebih dikenal karena karya intelektualnya, seperti <em>Naskah Wangsakerta</em>, yang berisi catatan sejarah dan silsilah kerajaan Nusantara. Ia dipercaya memimpin sementara, namun konflik internal dan eksternal terus membayangi, memperlemah posisi kesultanan.</p>

<p>Akhirnya, tahun 1677 hingga 1679, konflik ini menyebabkan <strong>pecahnya Kesultanan Cirebon</strong> menjadi dua kekuatan utama: <em>Keraton Kasepuhan</em> dan <em>Keraton Kanoman</em>. Beberapa tahun kemudian menyusul berdirinya <em>Keraton Kaprabonan</em>, yang lebih bersifat spiritual, dan <em>Keraton Kacirebonan</em> pada 1807. Perpecahan ini tidak hanya mengurangi kekuatan politik Cirebon, tetapi juga menjadi bukti dari campur tangan VOC dan kerajaan lain yang menerapkan strategi pecah belah demi kepentingan kolonial dan kekuasaan masing-masing.</p>
`,
    images: ["public/panembahangirilaya.jpeg", "public/keraton kesepuhan.webp", "public/keraton-kacirebonan.jpg"],
    audio: "public/podcast.mp3"
  },
  {
    title: "Empat Keraton & Era Kolonial (1679–1906)",
    desc: `
<p><strong>Pasca-perpecahan</strong>, keempat keraton berkembang sebagai entitas terpisah namun masih satu akar budaya. <em>Keraton Kasepuhan</em> menjadi pusat utama dan tertua, sementara <em>Kanoman</em> berkembang dengan gaya tersendiri yang lebih adaptif terhadap pengaruh luar. <em>Kaprabonan</em> fokus pada sisi spiritual dan pendidikan, sedangkan <em>Kacirebonan</em> didirikan sebagai bentuk respon atas ketimpangan hak dalam pewarisan tahta. Masing-masing keraton tetap menjunjung nilai Islam, adat istiadat, serta menjaga warisan leluhur Sunan Gunung Jati.</p>

<p>Masuknya <strong>VOC (Belanda)</strong> memperburuk kondisi politik dan ekonomi Kesultanan Cirebon. Melalui taktik <em>devide et impera</em>, VOC menandatangani berbagai perjanjian yang semakin mengekang otonomi para sultan. Pihak Belanda memberi konsesi dan hak istimewa berbeda pada masing-masing keraton agar tetap saling bersaing dan tidak bersatu. Pada akhirnya, keraton-keraton hanya dipertahankan sebagai simbol budaya, tanpa kekuatan administratif yang nyata.</p>

<p>Selama abad ke-18 dan ke-19, Cirebon menjadi bagian penting dari sistem kolonial. Infrastruktur seperti pelabuhan, jalur kereta api, dan jalan raya dibangun untuk kepentingan ekonomi Belanda. Tahun <strong>1906</strong>, pemerintahan resmi keraton dihapus dan digantikan dengan sistem <em>Gemeente Cheribon</em>, sebuah sistem kota modern ala kolonial. Cirebon kemudian menjadi kota administratif dan pelabuhan utama di pesisir utara Jawa yang sibuk dan multikultural, namun kehilangan kedaulatan penuh.</p>
`,
    images: ["public/kanoman1.jpg", "public/kesepuhan.webp", "public/Keraton-kacirebonan.jpg", "public/voc.jpg"],
    audio: "public/podcast.mp3"
  },
  {
    title: "Masa Kemerdekaan & Modernisasi (1945–Sekarang)",
    desc: `
<p>Setelah <strong>kemerdekaan Indonesia pada 17 Agustus 1945</strong>, Cirebon memainkan peran penting dalam upaya diplomasi nasional, termasuk keterlibatan tokoh-tokohnya dalam <em>Perundingan Linggarjati</em> tahun 1946. Kemudian, pada 1957, status kota ini diresmikan sebagai <strong>Kotamadya Cirebon</strong>, menjadi bagian dari Provinsi Jawa Barat. Meskipun keraton-keraton sudah tidak memiliki kekuasaan politik, mereka tetap dilestarikan sebagai bagian dari budaya nasional dan spiritual.</p>

<p>Empat keraton tetap aktif dalam menjaga warisan budaya melalui <strong>ritual tradisional</strong>, pelestarian benda pusaka, serta penyelenggaraan upacara adat seperti <em>Panjang Jimat</em>, <em>Grebeg Syawal</em>, dan <em>Festival Keraton Nusantara</em>. <em>Keraton Kasepuhan</em> bahkan telah mendirikan <strong>museum pusaka modern</strong> dengan konsep interaktif yang menarik wisatawan dan pelajar. Sementara itu, <em>Kampung Batik Trusmi</em> di Plered berkembang sebagai pusat produksi dan edukasi batik Cirebon, dengan motif khas seperti <em>Mega Mendung</em> dan <em>Singa Payung</em>.</p>

<p>Di era modern, Cirebon berkembang menjadi kota strategis dengan pertumbuhan <strong>ekonomi, pariwisata, dan pendidikan</strong> yang pesat. Dibukanya akses tol <em>Cipali</em> dan <em>Cisumdawu</em> mempercepat konektivitas ke Bandung dan Bandara Kertajati. Kota ini kini dikenal sebagai kota transit, wisata religi, dan budaya. Meskipun sejarahnya penuh liku, Cirebon tetap menunjukkan ketangguhan identitasnya sebagai kota dengan akar tradisi yang kuat namun mampu menyesuaikan diri dengan zaman.</p>
`,
    images: ["public/perjanjian-linggarjati.jpg", "public/linggarjati.jpg", "public/museum.jpg"],
    audio: "public/podcast.mp3"
  }
];

const modal = document.getElementById("detailModal");
let galleryIndex = 0;
let currentImages = [];

function openModal(index) {
  const entry = data[index];
  document.getElementById("modalTitle").textContent = entry.title;
  document.getElementById("modalDesc").innerHTML = entry.desc;
  document.getElementById("modalAudio").src = entry.audio;

  currentImages = entry.images;
  galleryIndex = 0;

  const gallery = document.getElementById("modalGallery");
  gallery.innerHTML = '';
  currentImages.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.style.minWidth = "100%";
    img.style.maxHeight = "200px";
    img.style.objectFit = "cover";
    img.style.borderRadius = "10px";
    gallery.appendChild(img);
  });

  updateGallerySlide();
  modal.style.display = 'flex';
}

function updateGallerySlide() {
  const gallery = document.getElementById('modalGallery');
  gallery.style.transform = `translateX(-${galleryIndex * 100}%)`;
}

function nextImage() {
  if (galleryIndex < currentImages.length - 1) {
    galleryIndex++;
    updateGallerySlide();
  }
}

function prevImage() {
  if (galleryIndex > 0) {
    galleryIndex--;
    updateGallerySlide();
  }
}

function closeModal() {
  modal.style.display = 'none';
  document.getElementById("modalAudio").pause();
}

window.onclick = function(event) {
  if (event.target === modal) {
    closeModal();
  }
};