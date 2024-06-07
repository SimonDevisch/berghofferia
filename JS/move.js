export const move = function() {

const pan = document.querySelector(".pan");
const kookplaat = document.querySelector(".animated-gif .gif");
const anderePan = document.querySelector("#panVuur1");


let panClicked = false;
let vleesClicked = false;

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
vlees.addEventListener("click", function() {
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