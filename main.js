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

  function attachKitchenButtonListener() {
    const kitchenButton = document.querySelector(".kitchenButton");
    kitchenButton.addEventListener("click", function () {

      //vind nie goe hoe k de newOrder values in de lijst krijg in de keuken
      kitchenScreen.innerHTML = `
      <div class="order-container">
      <img src="./images/keuken.png" alt="keuken">
      <button class="counterButton">Naar toog</button>
      <div class="order-details">
        <p>${newOrder.getMeat() || ''}</p>
        <p>${newOrder.getVeggies() || ''}</p>
        <p>${newOrder.getDoneness() || ''}</p>
      </div>
    </div>`;


      setTimeout(function () {
        firstOrderScreen.classList.add("hidden");
        kitchenScreen.classList.remove("hidden");
        attachCounterButtonListener()
      }, 500);

    });
    function attachCounterButtonListener() {
      const counterButton = document.querySelector(".counterButton");
      counterButton.addEventListener("click", function () {
        setTimeout(() => {
          kitchenScreen.classList.add("hidden")
          firstOrderScreen.classList.remove("hidden")
        }, 500);
      });
    }

    const newOrder = new order();
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


  class order {
    constructor(meat, veggies, doneness) {
      this.meat = meat;
      this.veggies = veggies;
      this.doneness = doneness;
    }

    getMeat() {
      return this.meat;
    }

    getVeggies() {
      return this.veggies;
    }

    getDoneness() {
      return this.doneness;
    }

    randomizeMeat() {
      const meats = ["rundvlees", "varkensvlees", "kip", "lam", "kalkoen"];
      const rnd = Math.floor(Math.random() * meats.length);
      this.meat = meats[rnd];
      return this.meat;
    }
    randomizeVeggies() {
      let vegetables = ["wortel", "tomaat", "komkommer", "broccoli", "spinazie"];
      const rnd = Math.floor(Math.random() * vegetables.length);
      this.veggies = vegetables[rnd];
      return this.veggies;
    }
    randomizeDoneness() {
      let donenesses = ["Blue", "Saignant", "A point", "Bien cuit"];
      const rnd = Math.floor(Math.random() * donenesses.length);
      this.doneness = donenesses[rnd];
      return this.doneness;
    }
  }


})();
