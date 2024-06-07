export const move = function() {

const pan = document.querySelector(".pannen .pan");
const kookplaat = document.querySelector(".animated-gif .gif");
const anderePan = document.querySelector("#panVuur1");


let panClicked = false;

pan.addEventListener("click", function () {
    panClicked = true;
    pan.classList.add('selected');
    kookplaat.classList.add('options');
});

kookplaat.addEventListener("click", function () {
    kookplaat.classList.remove('options');
    if (panClicked) {
        pan.style.display = "none";
        anderePan.classList.remove('hidden');
        anderePan.classList.add('show');
    }
});

}

/*
vleess.addEventListener("click", function() {
   vleesClicked = true;
    vlees.classList.add('selected');
    anderePan.classList.add('options');
});

anderePan.addEventListener("click", function () {
    anderePan.classList.remove('options');
    vlees.classList.remove('selected');
    if (panClicked && vleesClicked) {
        vlees.classList.add('bakken');
    }
});
*/