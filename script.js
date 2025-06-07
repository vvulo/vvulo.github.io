// ロゴを回転
document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector(".logo-circle");
  if (logo) {
    logo.classList.add("spin-animation");
  }

  // フェードインアニメーション
  const fadeElements = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  });

  fadeElements.forEach(el => {
    observer.observe(el);
  });
});
