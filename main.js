import order from './JS/game.js'
import koken from './JS/koken.js'
import keuken from './JS/keuken.js'
import {move} from "./JS/move.js";
//import { opstart } from './JS/opstartgame.js';

const geluid = document.querySelector(".ordergeluid");
const muziek = document.querySelector(".muziek");
const vuur = document.querySelector("gif")
const startScreen = document.querySelector(".startscreen");
const firstOrderScreen = document.querySelector(".first_orderscreen");
const kitchenScreen = document.querySelector(".kitchenScreen");
export const newOrder = new order();


const startSpel = function () {
  firstOrderScreen.classList.add("hidden");
  kitchenScreen.classList.add("hidden");
  startScreen.innerHTML =
    '<img src="./images/start_dag.png" alt="Balie met mensen en kassa">';
  startScreen.classList.add("introTekst");
  startButton.textContent = "Herstart de game";

  firstOrderScreen.innerHTML = `
        <div class="order-container">
            <img src="./images/eerste_order.png" alt="Balie met mensen en kassa">
            <button class="kitchenButton">Naar keuken</button>
            <div class="order-container">
              <button class="takeOrder">neem bestelling</button>
            </div>
        </div>`;
  setTimeout(function () {
    startScreen.classList.add("hidden");
    firstOrderScreen.classList.remove("hidden");
    attachKitchenButtonListener();
  }, 2000);
};

const startButton = document.querySelector(".startbutton");
startButton.addEventListener("click", startSpel);

const attachKitchenButtonListener = function () {
  const kitchenButton = document.querySelector(".kitchenButton");
  kitchenButton.addEventListener("click", async function () {
    await new keuken()
    move();
  });

  const attachCounterButtonListener = function () {
    const counterButton = document.querySelector(".counterButton");
    counterButton.addEventListener("click", function () {
      setTimeout(() => {
        kitchenScreen.classList.add("hidden")
        firstOrderScreen.classList.remove("hidden")
      }, 500);
    });
  }

  const orderButton = document.querySelector(".takeOrder");
  orderButton.addEventListener("click", function () {
    newOrder.randomizeMeat();
    newOrder.randomizeVeggies();
    newOrder.randomizeDoneness();

    orderButton.classList.add("hidden");
    const secondOrderContainer = document.querySelector(".order-container .order-container:nth-of-type(1)");

    //bug ergens hierrond wanneer je op de orderbutton drukt de .order-container van line 17 groter word
    secondOrderContainer.innerHTML = `
      <p>${newOrder.getMeat()}</p>
      <p>${newOrder.getVeggies()}</p>
      <p>${newOrder.getDoneness()}</p>`;
  });
}
