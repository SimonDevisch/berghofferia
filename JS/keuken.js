import koken from "./koken.js";
import order from "./game.js";
import { newOrder } from "../main.js";
//dit zal alle logica bevatten om de keuken te genereren
class keuken {
  //deze class zorgt ervoor dat de keuken wordt aangemaakt,
  //het zet de events aan
  constructor() {
    this.vuurintensiteit1 = 0;
    this.vuurintensiteit2 = 0;
    this.setKeuken();
    this.runKeuken();
  }

  setKeuken() {
    const firstOrderScreen = document.querySelector(".first_orderscreen");
    const kitchenScreen = document.querySelector(".kitchenScreen");
    kitchenScreen.innerHTML = `
        <div class="order-container-keuken">
        <img src="./images/keuken.png" alt="keuken">
        <button class="counterButton">Naar toog</button>
        <div class="pannen">
            <img class="pan" src="./images/Pan.png" alt="braadpan">
            <img class="pan" src="./images/Pan.png" alt="vispan">
            <img src="./images/beef_raw.png" alt="raw beef">
            <img src="./images/chicken_raw.png" alt="raw chicken">
            <img src="./images/mutton_raw.png" alt="raw mutton">
            <img src="./images/porkchop_raw.png" alt="raw porkchop">
            <img src="./images/salmon_raw.png" alt="raw salmon">
            <img src="./images/deksel.png" alt="deksel1">
            <img src="./images/deksel.png" alt="deksel2">
            <img id="panVuur1" class="hidden" src="./images/bovenaanzicht_pan.png" alt="bovenaanzicht pan">
            <img id="panVuur2" class="hidden" src="./images/bovenaanzicht_pan.png" alt="bovenaanzicht pan">
        </div>
        <div class="order-details-keuken">
            <p>${newOrder.getMeat() || ""}</p>
            <p>${newOrder.getVeggies() || ""}</p>
            <p>${newOrder.getDoneness() || ""}</p>
        </div>
        </div>
        <div class="animated-gif">
            <img src="./images/lava.webp" alt="Animated GIF" id="kookplaat1" class="gif">
            <img src="./images/lava.webp" alt="Animated GIF" id="kookplaat2" class="gif">
        </div>
        <div class="buttons">
            <div class="intensiteitbuttons">
                <p>${this.vuurintensiteit1 === 0 ? "off" : this.vuurintensiteit1
      }</p>
                <div class="flexbuttons">
                    <button class="furnaceOneUp" type="button">up</button>
                    <button class="furnaceOneDown" type="button">down</button>
                </div>
            </div>
            <div class="intensiteitbuttons">
                <p>${this.vuurintensiteit2 === 0 ? "off" : this.vuurintensiteit2
      }</p>
                <div class="flexbuttons">
                    <button class="furnaceTwoUp" type="button">up</button>
                    <button class="furnaceTwoDown" type="button">down</button>
                </div>
            </div>
        </div>`;
    //het maakt de button om terug te keren naar het onthaal
    //en verwijderd die om naar de keuken te gaan
    setTimeout(function () {
      firstOrderScreen.classList.add("hidden");
      kitchenScreen.classList.remove("hidden");
    }, 500);
  }

  //dit zoekt naar alle buttons in het document voor het vuur te veranderen
  runKeuken() {
    console.log("started running keuken");
    const furnaceOneUp = document.querySelector(".furnaceOneUp");
    const furnaceOneDown = document.querySelector(".furnaceOneDown");
    const furnaceTwoUp = document.querySelector(".furnaceTwoUp");
    const furnaceTwoDown = document.querySelector(".furnaceTwoDown");
    const firstOrderScreen = document.querySelector(".first_orderscreen");
    const kitchenScreen = document.querySelector(".kitchenScreen");
    //hieronder staan alle click events voor het veranderen van het vuur
    furnaceOneUp.addEventListener("click", () => {
      console.log("vuur 1 up clicked");
      this.updateVuurintensiteit1(1);
    });

    furnaceOneDown.addEventListener("click", () => {
      this.updateVuurintensiteit1(-1);
    });

    furnaceTwoUp.addEventListener("click", () => {
      this.updateVuurintensiteit2(1);
    });

    furnaceTwoDown.addEventListener("click", () => {
      this.updateVuurintensiteit2(-1);
    });

    //dit zorgt ervoor dat de button om terug te keren naar het onthaal werkt
    function attachCounterButtonListener() {
      const counterButton = document.querySelector(".counterButton");
      counterButton.addEventListener("click", function () {
        setTimeout(() => {
          kitchenScreen.classList.add("hidden");
          firstOrderScreen.classList.remove("hidden");
        }, 500);
      });
    }

    attachCounterButtonListener();
  }

  //hier staan de events voor het verhogen en verlagen van de vuurintsiteiten
  updateVuurintensiteit1 = (delta) => {
    if (
      this.vuurintensiteit1 + delta >= 0 &&
      this.vuurintensiteit1 + delta <= 3
    ) {
      this.vuurintensiteit1 += delta;
      const Lblvuurintensiteit1 = document.querySelector(
        ".intensiteitbuttons:nth-of-type(1) > p"
      );

      switch (this.vuurintensiteit1) {
        case 0:
          Lblvuurintensiteit1.textContent = "off";
          break;
        case 1:
          Lblvuurintensiteit1.textContent = "low";
          break;
        case 2:
          Lblvuurintensiteit1.textContent = "medium";
          break;
        case 3:
          Lblvuurintensiteit1.textContent = "high";
          break;
        default:
          Lblvuurintensiteit1.textContent = this.vuurintensiteit1;
      }
    }
  };

  updateVuurintensiteit2 = (delta) => {
    if (
      this.vuurintensiteit2 + delta >= 0 &&
      this.vuurintensiteit2 + delta <= 3
    ) {
      this.vuurintensiteit2 += delta;
      const Lblvuurintensiteit2 = document.querySelector(
        ".intensiteitbuttons:nth-of-type(2) > p"
      );

      switch (this.vuurintensiteit2) {
        case 0:
          Lblvuurintensiteit2.textContent = "off";
          break;
        case 1:
          Lblvuurintensiteit2.textContent = "low";
          break;
        case 2:
          Lblvuurintensiteit2.textContent = "medium";
          break;
        case 3:
          Lblvuurintensiteit2.textContent = "high";
          break;
        default:
          Lblvuurintensiteit2.textContent = this.vuurintensiteit2;
      }
    }
  };
}

//het exporteren van deze file
export default keuken;
