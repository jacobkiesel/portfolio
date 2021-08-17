const targets = document.querySelectorAll(".observe");
const leftTarget = document.querySelector(".observe-left");

const options = {
  root: null,
  threshold: 0,
  rootMargin: "",
};

const observeLeft = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    entry.target.classList.add("animate-left");
    entry.target.classList.remove(".hidden");
  });
}, options);

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    entry.target.classList.add("animate");
    entry.target.classList.remove(".hidden");
  });
}, options);

observeLeft.observe(leftTarget);

targets.forEach((target) => {
  observer.observe(target);
});
