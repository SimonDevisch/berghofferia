"use strict";

(function () {
  const startScreen = document.querySelector(".startscreen");
  const firstOrderScreen = document.querySelector(".first_orderscreen");
  const kitchenScreen = document.querySelector(".kitchenScreen");
  const startSpel = function () {
    startScreen.innerHTML =
      '<img src="./images/start_dag.png" alt="Balie met mensen en kassa">';
    startScreen.classList.add("introTekst");
    startButton.textContent = "Herstart de game";
    setTimeout(function () {
      startScreen.style.opacity = "0";
    }, 5000);

    firstOrderScreen.innerHTML = `
        <div class="order-container">
            <img src="./images/eerste_order.png" alt="Balie met mensen en kassa">
            <button class="kitchenButton">Naar keuken</button>
            <button class="takeOrder">neem bestelling</button>
        </div>`;
    setTimeout(function () {
      startScreen.classList.add("hidden");
      firstOrderScreen.classList.remove("hidden");
      attachKitchenButtonListener();
    }, 2000);
  };
  const startButton = document.querySelector(".startbutton");
  startButton.addEventListener("click", startSpel);

  function attachKitchenButtonListener() {
    const kitchenButton = document.querySelector(".kitchenButton");
    kitchenButton.addEventListener("click", function () {

      kitchenScreen.innerHTML = `
      <div class="order-container">
        <img src="./images/keuken.png" alt="keuken">
        <button class="counterButton">Naar toog</button>
    </div>`;
    setTimeout(function () {
        firstOrderScreen.classList.add("hidden");
        kitchenScreen.classList.remove("hidden");
        attachCounterButtonListener()
      }, 500);

    });
    function attachCounterButtonListener(){
        const counterButton = document.querySelector(".counterButton");
        counterButton.addEventListener("click",function(){
            setTimeout(() => {
                kitchenScreen.classList.add("hidden")
                firstOrderScreen.classList.remove("hidden")
            }, 500);
        });
    }
    const orderButton = document.querySelector(".takeOrder");
    orderButton.addEventListener("click",function(){
        //nog niet 100% zeker hoe het zit met welke orders we zouden doen maar zou miss een idee zijn voor er en class van te maken
        //vgm is dat het beste te doen als we het makkelijk willen bijhouden of de orders correct zijn maar running out of time atm
        //-viho
    })
  }


  class order {
    constructor() {
        
    }

}


})();
