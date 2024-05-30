  import order from './JS/game.js'
  import koken from './JS/koken.js'
  import keuken from './JS/keuken.js'
  //import { opstart } from './JS/opstartgame.js'
  import { move } from './JS/move';

  const geluid = document.querySelector(".ordergeluid");
  const muziek = document.querySelector(".muziek");
  const vuur = document.querySelector("gif")
  const startScreen = document.querySelector(".startscreen");
  const firstOrderScreen = document.querySelector(".first_orderscreen");
  const kitchenScreen = document.querySelector(".kitchenScreen");


  const startSpel = function () {
    firstOrderScreen.classList.add("hidden");
    kitchenScreen.classList.add("hidden");
    startScreen.innerHTML =
      '<img src="./images/start_dag.png" alt="Balie met mensen en kassa">';
    startScreen.classList.add("introTekst");
    startButton.textContent = "Herstart de game";
    setTimeout(function () {
      muziek.play();//de achtergrondmuziek laten afspelen op loop
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
    console.log("start button clicked");
    
  };

  const startButton = document.querySelector(".startbutton");
  console.log(startButton);
  startButton.addEventListener("click", startSpel);

  const attachKitchenButtonListener = function() {
    const kitchenButton = document.querySelector(".kitchenButton");
    kitchenButton.addEventListener("click", function () {
      let vuurintensiteit = 0;
      let vuurintensiteit2 = 0;
      //vind nie goe hoe k de newOrder values in de lijst krijg in de keuken
      kitchenScreen.innerHTML = `
      <div class="order-container-keuken">
      <img src="./images/keuken.png" alt="keuken">
      <button class="counterButton">Naar toog</button>
      <div class="order-details-keuken">
        <p>${newOrder.getMeat() || ''}</p>
        <p>${newOrder.getVeggies() || ''}</p>
        <p>${newOrder.getDoneness() || ''}</p>
      </div>
    </div>
      <div class="animated-gif">
        
        <img src="./images/lava.webp" alt="Animated GIF" class="gif" >
        <img src="./images/lava.webp" alt="Animated GIF" class="gif" >
      </div>
      <div class="buttons">
        <p>${vuurintensiteit}</p>
        <div class="flexbuttons">
        
          <button type="button1">up</button>
          <button type="button2">down</button>
        </div>
        <p>${vuurintensiteit}</p>
        <div class="flexbuttons">
          
          <button type="button3">up</button>
          <button type="button4">down</button>
        </div>
      </div>
    `;//dit is alle code in de keuken voor het vuur te verzetten



      setTimeout(function () {
        firstOrderScreen.classList.add("hidden");
        kitchenScreen.classList.remove("hidden");
        attachCounterButtonListener()
      }, 500);

    });
    
    const attachCounterButtonListener = function() {
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
      geluid.play();//villager sound spelen HHHHUUUUHH
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
