
document.getElementById("burger-toggle").addEventListener("click", () => {
  const dropdown = document.getElementById("burger-dropdown");
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
});

function getBotResponse(input) {
  input = input.toLowerCase();

  if (input.includes("halo") || input.includes("hai") || input.includes("apa kabar")) {
    return "Halo juga! Silakan tanya tentang budaya, kuliner, atau sejarah Cirebon ya 🙌";

  } else if (input.includes("tentang rarasajine")) {
    return "🌐 Rarasajiné adalah arsip digital yang menyajikan informasi tentang budaya, sejarah, dan warisan Cirebon.";

  } else if (input.includes("mega mendung")) {
    return "🧵 Batik Mega Mendung adalah motif awan dari Cirebon yang melambangkan kesabaran dan keteduhan hati.";

  } else if (input.includes("tari topeng")) {
    return "🎭 Tari Topeng Cirebon menggambarkan perjalanan spiritual manusia melalui karakter Panji, Samba, Rumyang, dll.";

  } else if (input.includes("sunan gunung jati")) {
    return "🕌 Sunan Gunung Jati adalah salah satu Wali Songo yang menyebarkan Islam di Cirebon dan mendirikan Kesultanan.";

  } else if (input.includes("kuliner") || input.includes("makanan")) {
    return "🍛 Beberapa makanan khas Cirebon antara lain: Nasi Jamblang, Empal Gentong, Tahu Gejrot, Docang.";

  } else if (input.includes("keraton kasepuhan") || input.includes("kasepuhan")) {
    return "🏯 Keraton Kasepuhan adalah istana tertua di Cirebon yang menjadi pusat kebudayaan dan sejarah Kesultanan.";

  } else if (input.includes("keraton kanoman") || input.includes("kanoman")) {
    return "🏯 Keraton Kanoman adalah salah satu dari empat keraton Cirebon yang masih aktif dan menjaga adat istiadat.";

  } else if (input.includes("batik trusmi") || input.includes("trusmi")) {
    return "🎨 Batik Trusmi adalah sentra batik terkenal di Cirebon yang sudah ada sejak zaman Sunan Gunung Jati.";

  } else if (input.includes("makam sunan gunung jati")) {
    return "🕌 Makam Sunan Gunung Jati menjadi tempat ziarah dan spiritual masyarakat dari berbagai daerah.";

  } else if (input.includes("klenteng")) {
    return "⛩️ Klenteng Talang adalah klenteng tertua di Cirebon yang menunjukkan akulturasi budaya Tionghoa dan lokal.";

  } else if (input.includes("docang")) {
    return "🥣 Docang adalah makanan khas Cirebon berbahan lontong, tauge, daun singkong, dan kuah dage (oncom).";

  } else if (input.includes("nasi jamblang")) {
    return "🍱 Nasi Jamblang disajikan dengan bungkus daun jati, khas Cirebon, dan lauknya beragam.";

  } else if (input.includes("empal")) {
    return "🍲 Empal Gentong adalah gulai daging sapi khas Cirebon yang dimasak dalam gentong tanah liat.";

  } else if (input.includes("tahu gejrot")) {
    return "🧄 Tahu Gejrot terdiri dari tahu goreng dengan kuah asam pedas manis dan irisan bawang serta cabai.";

  } else if (input.includes("bahasa cirebon")) {
    return "🗣️ Bahasa Cirebon adalah dialek bahasa Jawa yang memiliki pengaruh Sunda dan Melayu.";

  } else if (input.includes("wayang kulit")) {
    return "🎭 Wayang Kulit Cirebon memiliki gaya berbeda dengan Jawa Tengah, sering ditampilkan dalam acara ritual.";

  } else if (input.includes("batik motif")) {
    return "🧵 Batik Cirebon memiliki berbagai motif seperti Wadasan, Singa Payung, dan Paksinaga Liman.";

  } else if (input.includes("raras ing bantu")) {
    return "🤖 Raras ing Bantu adalah chatbot interaktif yang membantumu mengeksplorasi budaya Cirebon secara digital.";

  } else if (input.includes("masjid agung") || input.includes("cipta rasa")) {
    return "🕌 Masjid Agung Sang Cipta Rasa adalah masjid tertua di Cirebon, didirikan oleh Wali Songo dan memiliki arsitektur unik.";

  } else if (input.includes("goa sunyaragi") || input.includes("sunyaragi")) {
    return "⛲ Goa Sunyaragi adalah situs bersejarah yang dulu digunakan sebagai tempat meditasi para sultan dan prajurit Cirebon.";

  } else if (input.includes("masjid at-taqwa")) {
    return "🕌 Masjid Raya At-Taqwa adalah masjid megah di pusat kota Cirebon, sering digunakan untuk kegiatan keagamaan besar.";

  } else if (input.includes("mi koclok")) {
    return "🍜 Mi Koclok adalah mi khas Cirebon dengan kuah kental santan dan suwiran ayam.";

  } else if (input.includes("sega lengko") || input.includes("nasi lengko")) {
    return "🥗 Sega Lengko adalah nasi dengan tahu, tempe, tauge, dan sambal kacang yang segar dan sehat.";

  } else if (input.includes("kerupuk melarat")) {
    return "🍘 Kerupuk Melarat adalah kerupuk khas Cirebon yang digoreng tanpa minyak, melainkan dengan pasir panas.";

  } else if (input.includes("cirebon")) {
    return "🏙️ Cirebon adalah kota pesisir di Jawa Barat yang dikenal dengan kekayaan budaya, sejarah Islam, dan kuliner khas seperti Nasi Jamblang dan Empal Gentong.";

  } else {
    return "Maaf, Raras belum tahu jawaban itu 😔. Coba gunakan kata kunci lain seperti 'tari topeng', 'batik trusmi', atau 'kuliner'.";
  }
}


document.addEventListener("DOMContentLoaded", () => {
  const inputBox = document.querySelector(".chat-placeholder input");
  const button = document.querySelector(".chat-placeholder button");
  const chatBox = document.querySelector(".chat-box");

  button.addEventListener("click", () => {
    const userInput = inputBox.value.trim();
    if (userInput === "") return;

    const userMsg = document.createElement("div");
    userMsg.className = "chat-msg user";
    userMsg.textContent = "👥: " + userInput;
    chatBox.appendChild(userMsg);

    const botReply = document.createElement("div");
    botReply.className = "chat-msg bot";
    botReply.textContent = "🤖 Rarasbot: " + getBotResponse(userInput);
    chatBox.appendChild(botReply);

    inputBox.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
  });
});


function toggleChat() {
  const chatbot = document.getElementById("chatbot");
  chatbot.style.display = chatbot.style.display === "flex" ? "none" : "flex";
}

function handleKey(e) {
  if (e.key === "Enter") sendMessage();
}

function sendMessage() {
  const inputField = document.getElementById("userInput");
  const chatBody = document.getElementById("chatBody");
  const userText = inputField.value.trim();

  if (userText === "") return;

  const userMsg = document.createElement("div");
  userMsg.className = "user-msg";
  userMsg.textContent = userText;
  chatBody.appendChild(userMsg);

  const botReply = getBotResponse(userText);

  const botMsg = document.createElement("div");
  botMsg.className = "bot-msg";
  botMsg.innerHTML = botReply;
  chatBody.appendChild(botMsg);

  chatBody.scrollTop = chatBody.scrollHeight;
  inputField.value = "";
}
