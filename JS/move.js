export const move = function () {
  const pans = document.querySelectorAll(".pannen .pan");
  const kookplaten = document.querySelectorAll(".animated-gif .gif");
  const vleesstukken = document.querySelectorAll(".pannen img[src*='raw']");
  const anderePan1 = document.querySelector("#panVuur1");
  const anderePan2 = document.querySelector("#panVuur2");

  let selectedPan = null;
  let selectedVlees = null;

  pans.forEach((pan) => {
    pan.addEventListener("click", function () {
      selectedPan = pan;
      pan.classList.add("selected");
      kookplaten.forEach(function (kookplaat) {
        if (!kookplaat.classList.contains("bezet")) {
          kookplaat.classList.add("options");
        }
      });
    });
  });

  kookplaten.forEach(function (kookplaat) {
    kookplaat.addEventListener("click", function () {
      if (selectedPan) {
        selectedPan.style.display = "none";
        selectedPan.classList.remove("selected");
        kookplaten.forEach(function (kookplaat) {
          kookplaat.classList.remove("options");
        });
        if (kookplaat.id === "kookplaat1") {
          anderePan1.classList.remove("hidden");
          anderePan1.classList.add("show");
          kookplaat.classList.add("bezet");
        } else if (kookplaat.id === "kookplaat2") {
          anderePan2.classList.remove("hidden");
          anderePan2.classList.add("show");
          kookplaat.classList.add("bezet");
        }
        selectedPan = null;
      }
    });
  });

  vleesstukken.forEach((vlees) => {
    vlees.addEventListener("click", function () {
      selectedVlees = vlees;
      vlees.classList.add("selected");
      if (!anderePan1.dataset.bezet) {
        anderePan1.classList.add("options");
      }
      if (!anderePan2.dataset.bezet) {
        anderePan2.classList.add("options");
      }
    });
  });

  [anderePan1, anderePan2].forEach(function (pan) {
    pan.addEventListener("click", function () {
      if (selectedVlees && !pan.dataset.bezet) {
        selectedVlees.classList.remove("selected");
        pan.dataset.bezet = "true";
        pan.classList.remove("options");
        pan.classList.add("bezet");

        if (pan === anderePan1) {
          selectedVlees.classList.add("positie1");
        } else if (pan === anderePan2) {
          selectedVlees.classList.add("positie2");
        }

        selectedVlees = null;
      }
    });
  });
};
