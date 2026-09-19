const buttons = document.querySelectorAll("#filters .chip");
const cards = document.querySelectorAll("#project-grid .card");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((b) => b.classList.remove("is-on"));
    button.classList.add("is-on");
    const filter = button.dataset.filter;
    cards.forEach((card) => {
      const show = filter === "all" || card.dataset.tags === filter;
      card.classList.toggle("is-hidden", !show);
    });
  });
});
