// FAQ accordion
document.querySelectorAll(".faq-item").forEach((item) => {
  const question = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");

  question.addEventListener("click", () => {
    const isOpen = item.classList.contains("is-open");

    document.querySelectorAll(".faq-item.is-open").forEach((openItem) => {
      if (openItem !== item) {
        openItem.classList.remove("is-open");
        openItem.querySelector(".faq-answer").style.maxHeight = null;
      }
    });

    item.classList.toggle("is-open", !isOpen);
    answer.style.maxHeight = !isOpen ? answer.scrollHeight + "px" : null;
  });
});

// Contact form submit
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!form.checkValidity()) {
    status.style.color = "#c0392b";
    status.textContent = "必須項目をご確認ください。";
    form.reportValidity();
    return;
  }

  status.style.color = "#1d8a4c";
  status.textContent = "送信内容を確認しました。ご連絡ありがとうございます。";
  form.reset();
});

// Scroll reveal
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: "0px 0px -60px 0px" });

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));
