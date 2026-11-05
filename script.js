// Filter the bookshelf by category.
const filterButtons = document.querySelectorAll(".filter");
const bookCards = document.querySelectorAll(".book-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedCategory = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    bookCards.forEach((card) => {
      const matches = selectedCategory === "all" || card.dataset.category === selectedCategory;
      card.style.display = matches ? "block" : "none";
    });
  });
});

// A tiny front-end-only newsletter interaction (no data is sent anywhere).
const newsletterForm = document.querySelector("#newsletter-form");
const formMessage = document.querySelector("#form-message");

newsletterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.querySelector("#email").value.trim();

  if (email) {
    formMessage.textContent = "You're on the list! Imagine a little bookish letter arriving soon. ✨";
    newsletterForm.reset();
  }
});
