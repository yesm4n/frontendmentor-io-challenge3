const btns = document.querySelectorAll(".btns");
const submitBtn = document.querySelector(".btn-submit");
const hideContent = document.querySelector(".center-content");
hideContent.classList.add("hidden");

let lastBtnClicked;

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", () => {
    if (lastBtnClicked) {
      lastBtnClicked.classList.remove("btn-add");
    }
    btns[i].classList.add("btn-add");
    lastBtnClicked = btns[i];

    submitBtn.addEventListener("click", () => {
      if (submitBtn) {
        document.querySelector(".content").classList.add("hidden");
        hideContent.classList.remove("hidden");
        const dynamicNumber = Array.from(btns).indexOf(lastBtnClicked) + 1;
        document.querySelector(
          ".text-selector"
        ).textContent = `You selected ${dynamicNumber} out of 5`;
      }
    });
  });
}
