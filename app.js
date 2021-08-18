document.addEventListener("click", (e) => {
  if (e.target.className === "far fas fa-plus") {
    e.target.parentNode.parentNode.parentNode.parentNode.classList.add(
      "show-text"
    );
  }
  if (e.target.className === "far fas fa-minus") {
    e.target.parentNode.parentNode.parentNode.parentNode.classList.remove(
      "show-text"
    );
  }
});

//SW
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./sw.js")
    .then((reg) => console.log("SW RIGHT", reg))
    .catch((err) => console.warn("SW WRONG", err));
}
