export const scrollTo = (direction, amount) => {
  const container = document.querySelector(".snap-container");
  const scrollAmount = container.clientWidth * amount;

  if (direction === "left") {
    container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  } else {
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  }
};
