function setLanguage(language) {
  const elements = document.querySelectorAll("[data-en][data-fa]");

  elements.forEach(function (element) {
    element.textContent = element.getAttribute("data-" + language);
  });

  if (language === "fa") {
    document.documentElement.lang = "fa";
    document.documentElement.dir = "rtl";
    document.title = "دکتر حکمت‌الله واعظ | جراح دندان";
    document.querySelector(".hero-text").style.gridColumn = "2";
document.querySelector(".hero-image").style.gridColumn = "1";
  } else {
    document.documentElement.lang = "en";
    document.documentElement.dir = "ltr";
    document.title = "Dr. Hekmatullah Waez | Dental Surgeon";
  document.querySelector(".hero-text").style.gridColumn = "1";
document.querySelector(".hero-image").style.gridColumn = "2";
}
  const buttons = document.querySelectorAll(".language-buttons button");

  buttons.forEach(function (button) {
    button.classList.remove("active");
  });

  if (language === "en") {
    buttons[0].classList.add("active");
  } else {
    buttons[1].classList.add("active");
  }

  localStorage.setItem("siteLanguage", language);
}

document.addEventListener("DOMContentLoaded", function () {
  const savedLanguage = localStorage.getItem("siteLanguage") || "en";
  setLanguage(savedLanguage);
});document.querySelectorAll(".comparison").forEach((comparison) => {
  const slider = comparison.querySelector('input[type="range"]');

  slider.addEventListener("input", () => {
    comparison.style.setProperty("--position", slider.value + "%");
  });
});