const buttonsOrder = document.querySelectorAll(".product__button_order");
const overlayOrder = document.querySelector(".overlay_order");
const consultation = document.querySelector(".header_consultation");
const modalTitle = document.querySelector(".modal_title");

const order = overlayOrder.querySelector(".modal_order");

buttonsOrder.forEach((buttonOrder) => {
  buttonOrder.addEventListener("click", () => {
    modalTitle.innerHTML = "Оформить заказ";
    overlayOrder.classList.add("overlay_active");
    order.value = buttonOrder.dataset.order;
  });
});

overlayOrder.addEventListener("click", (event) => {
  const target = event.target;
  if (target === overlayOrder || target.closest(".modal_close")) {
    overlayOrder.classList.remove("overlay_active");
    consultation.classList.remove("overlay_active");
  }
});

consultation.addEventListener("click", () => {
  modalTitle.innerHTML = "Получить консультацию";
  overlayOrder.classList.add("overlay_active");
  order.value = "consultation";
});
