//deze file zorgt voor de opstart van het spel

const startScreen = document.querySelector(".startscreen");
const firstOrderScreen = document.querySelector(".first_orderscreen");
const kitchenScreen = document.querySelector(".kitchenScreen");
const startButton = document.querySelector(".startbutton");
class opstart {
  //initialiseert de game
  initGame() {
    firstOrderScreen.classList.add("hidden");
    kitchenScreen.classList.add("hidden");
    startScreen.innerHTML = '<img src="./images/start_dag.png" alt="Balie met mensen en kassa">';

    setTimeout(function () {
      // muziek.play();//de achtergrondmuziek laten afspelen op loop
      startScreen.style.opacity = "0";
    }, 5000);
    firstOrderScreen.innerHTML = `
          <div class="order-container">
              <img src="./images/eerste_order.png" alt="Balie met mensen en kassa">
              <button class="kitchenButton">Naar keuken</button>
              <div class="order-container">
                <button class="takeOrder">neem bestelling</button>
              </div>
              <div class="bordonthaal bord">
              <img src="images/bord.png" alt="bord">
            </div>
          </div>`;
    setTimeout(function () {
      startScreen.classList.add("hidden");
      firstOrderScreen.classList.remove("hidden");
      attachKitchenButtonListener();
    }, 2000);
  };
}
//click event starspel button:
startButton.addEventListener("click", opstart.initGame());

export default opstart;

