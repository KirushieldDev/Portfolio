function smoothScroll(target) {
  const targetElement = document.querySelector(target);
  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: "smooth",
    });
  }
}

document
  .querySelector(".scroll-down a")
  .addEventListener("click", function (event) {
    event.preventDefault();
    smoothScroll(this.getAttribute("href"));
  });
