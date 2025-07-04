document.addEventListener("DOMContentLoaded", function () {
  document.body.classList.add("page-load-animate");
  setTimeout(() => {
    document.body.classList.remove("page-load-animate");
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

const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const archiveGrid = document.getElementById("archiveGrid");
const allItemCards = archiveGrid.querySelectorAll(".item-card");

function filterArchive() {
  const keyword = searchInput.value.toLowerCase();
  const selectedCategory = categoryFilter.value.toLowerCase();

  allItemCards.forEach(card => {
    const title = card.querySelector("p").textContent.toLowerCase();
    const categoryContainer = card.closest(".category-container");
    const categoryTitle = categoryContainer.querySelector(".category-title").textContent.toLowerCase();

    const matchesKeyword = title.includes(keyword);
    const matchesCategory = selectedCategory === "" || categoryTitle.includes(selectedCategory);

    card.style.display = matchesKeyword && matchesCategory ? "block" : "none";
  });

  const allCategoryContainers = archiveGrid.querySelectorAll(".category-container");
  allCategoryContainers.forEach(container => {
    const visibleCards = container.querySelectorAll(".item-card:not([style*='display: none'])");
    container.style.display = visibleCards.length > 0 ? "block" : "none";
  });
}

searchInput.addEventListener("input", filterArchive);

searchInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    filterArchive();

    const firstVisibleCard = archiveGrid.querySelector(".item-card:not([style*='display: none'])");
    if (firstVisibleCard) {
      firstVisibleCard.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      archiveGrid.scrollIntoView({ behavior: "smooth" });
      alert("Tidak ditemukan arsip sesuai kata kunci.");
    }
  }
});

categoryFilter.addEventListener("change", filterArchive);
