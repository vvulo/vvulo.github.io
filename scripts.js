document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('aos-animate');
      }
    });
  });

  document.querySelectorAll('[data-aos]').forEach(el => {
    observer.observe(el);
  });
});
