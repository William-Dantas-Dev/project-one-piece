const buttons = document.querySelectorAll(".button");
const characters = document.querySelectorAll(".character");

buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        document.querySelector(".button.selected").classList.remove("selected");
        document.querySelector(".character.selected").classList.remove("selected");
        button.classList.add("selected");
        characters[index].classList.add("selected");
    });
});