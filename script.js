function setLanguage(language) {
  const elements = document.querySelectorAll("[data-en][data-fa]");

  elements.forEach(function (element) {
    element.textContent = element.getAttribute("data-" + language);
  });

  if (language === "fa") {
    document.documentElement.lang = "fa";
    document.documentElement.dir = "rtl";
    document.title = "دکتر حکمت‌الله واعظ | جراح دندان";
  } else {
    document.documentElement.lang = "en";
    document.documentElement.dir = "ltr";
    document.title = "Dr. Hekmatullah Waez | Dental Surgeon";
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
});