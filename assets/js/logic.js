const chat = document.querySelectorAll(".chat");
const msg = document.querySelector(".container .dashboard main .chat .msg");
const unreadDot = document.querySelectorAll(".unread");
const notisCount = document.querySelector(".notis-count");
const markAll = document.querySelector("header .readAll");

let text = Array.from(unreadDot).length;
markAll.onclick = (e) => {
  e.stopPropagation();
  unreadDot.forEach((el) => el.remove());
  notisCount.innerHTML = "";
  notisCount.innerHTML = 0;
};

notisCount.appendChild(document.createTextNode(Array.from(unreadDot).length));
removeDot();
noMsg();

for (let i = unreadDot.length - 1; i >= 0; i--) {
  let unreadChats =
    unreadDot[i].parentElement.parentElement.parentElement.parentElement;
  document.querySelector(".dashboard main").prepend(unreadChats);
}
function removeDot() {
  chat.forEach((el) => {
    el.addEventListener("click", (e) => {
      if (el.querySelector(".msg") !== null) {
        el.querySelector(".msg").classList.toggle("show");
      }
      if (el.querySelector(".unread") !== null) {
        e.stopPropagation();
        el.querySelector(".unread").remove();
        notisCount.innerHTML = notisCount.innerHTML - 1;
      } else {
        return false;
      }
    });
  });
}

function noMsg() {
  for (let i = 0; i < chat.length; i++) {
    if (
      chat[i].querySelector(".content").textContent.includes("followed") ||
      chat[i].querySelector(".content").textContent.includes("Chess") ||
      chat[i].querySelector(".content").textContent.includes("reacted")
    ) {
      chat[i].querySelector(".msg").remove();
    }
  }
}
