// script.js

let currentPage = 0;
const pages = document.querySelectorAll(".page");
const infoText = document.getElementById("info-text");
const logo = document.getElementById("dynamic-logo");
let logoExpanded = false;

const logoStates = ["F", "Faheem Iqbal"];
let logoIndex = 0;

function showPage(id) {
  pages.forEach((page) => {
    if (page.id === id) {
      page.classList.add("active");
    } else {
      page.classList.remove("active");
    }
  });
  currentPage = [...pages].findIndex((p) => p.id === id);
  updateInfo();
}

function nextPage() {
  currentPage = (currentPage + 1) % pages.length;
  showPage(pages[currentPage].id);
}

function prevPage() {
  currentPage = (currentPage - 1 + pages.length) % pages.length;
  showPage(pages[currentPage].id);
}

function expandLogo() {
  logoIndex = (logoIndex + 1) % logoStates.length;
  logo.textContent = logoStates[logoIndex];
}

// Auto-toggle logo every 5 seconds
setInterval(() => {
  expandLogo();
}, 5000);

function updateInfo() {
  const activePage = pages[currentPage];
  const title = activePage.querySelector("h2,h1")?.textContent || "";
  const desc = activePage.querySelector("p")?.textContent || "";
  infoText.innerHTML = `<h2>${title}</h2><p>${desc}</p>`;
}

// Initial load
showPage("home");
