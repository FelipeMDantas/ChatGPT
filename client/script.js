import bot from "./assets/bot.svg";
import user from "./assets/user.svg";

const form = document.querySelector("form");
const chatContainer = document.querySelector("#chat_container");

let loadinterval;

function loader(element) {
  element.textContent = "";

  loadinterval = setInterval(() => {
    element.textContent += ".";

    if ((element, textContent === "....")) {
      element.textContent = "";
    }
  }, 300);
}
