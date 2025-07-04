document.addEventListener("DOMContentLoaded", function () {

  document.body.classList.add("page-load-animate");
  setTimeout(() => {
    document.body.classList.remove("page-load-animate");
  }, 1000);


  new ScrollCarousel(".my-carousel", {
    speed: 5,
    smartSpeed: true,
    autoplay: true,
  });

 function getBotResponse(input) {
  input = input.toLowerCase();
  if (input.includes("halo")) return "Halo juga! Silakan tanya tentang Cirebon 😊";
  else return "Maaf, Raras belum tahu jawaban itu 😔";
}

function toggleChat() {
  const chatbot = document.getElementById("chatbot");
  chatbot.style.display = chatbot.style.display === "flex" ? "none" : "flex";
}

function handleKey(e) {
  if (e.key === "Enter") sendMessage();
}

function sendMessage() {
  const input = document.getElementById("userInput");
  const chatBody = document.getElementById("chatBody");
  const text = input.value.trim();
  if (!text) return;

  const userDiv = document.createElement("div");
  userDiv.className = "user-msg";
  userDiv.textContent = text;
  chatBody.appendChild(userDiv);

  const botDiv = document.createElement("div");
  botDiv.className = "bot-msg";
  botDiv.textContent = getBotResponse(text);
  chatBody.appendChild(botDiv);

  chatBody.scrollTop = chatBody.scrollHeight;
  input.value = "";
}


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


  const navLinks = document.querySelectorAll(".nav-links a");
  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      if (this.hash !== "") {
        e.preventDefault();
        const target = document.querySelector(this.hash);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });

 
  const faders = document.querySelectorAll(".fade-in");
  const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px",
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("appear");
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => appearOnScroll.observe(fader));


  const ctaButtons = document.querySelectorAll(".cta-button");
  ctaButtons.forEach(button => {
    button.addEventListener("mouseenter", () => {
      button.style.transform = "scale(1.05)";
      button.style.transition = "transform 0.3s ease";
    });
    button.addEventListener("mouseleave", () => {
      button.style.transform = "scale(1)";
    });
  });


  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.style.padding = "5px 0";
      navbar.style.backgroundColor = "#3a2118";
    } else {
      navbar.style.padding = "10px 0";
      navbar.style.backgroundColor = "#4b2c20";
    }
  });
});
