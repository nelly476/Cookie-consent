const modal = document.querySelector("#modal");
const modalCloseBtn = document.querySelector("#modal-close-btn");
const consentForm = document.querySelector("#consent-form");
const modalText = document.querySelector("#modal-text");
const acceptBtn = document.querySelector("#accept-btn");
const declineBtn = document.querySelector("#decline-btn");
const modalChoiceBtn = document.querySelector("#modal-choice-btns");

setTimeout(function () {
  modal.style.display = "inline";
}, 1500);

modalCloseBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

consentForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const consentFormData = new FormData(consentForm);
  const name = consentFormData.get("fullName");
  console.log(name);

  modalText.innerHTML = `<div class="modal-inner-loading">
  <img src="images/loading.svg" class="loading">
  <p id="uploadText">
      Uploading your data to the dark web...
  </p>
</div>`;

  setTimeout(function () {
    document.querySelector("#uploadText").textContent = `
    Making the sale...`;
  }, 1500);

  setTimeout(function () {
    document.querySelector("#modal-inner").innerHTML = `
        <h2>Thanks you <span class="modal-display-name">${name}</span>, you sucker! </h2>
        <p>We just sold the rights to your eternal soul.</p>
        <div class="idiot-gif">
            <img src="images/pirate.gif">
        </div>
        `;

    modalCloseBtn.disabled = false;
  }, 3000);
});

declineBtn.addEventListener("mouseover", function () {
  modalChoiceBtn.classList.toggle("reverse");
});
