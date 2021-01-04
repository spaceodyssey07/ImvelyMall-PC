// 아코디언 js

let title = document.querySelectorAll(".accordion-list .title")
let accordion = document.querySelector("accordion-list .accordion")
for (var i = 0; i < title.length; i++) {
  title[i].addEventListener("click", accordionFold)
}
function accordionFold(e) {
  let accordionOn = e.target.closest("li")
  accordionOn.classList.toggle("on")
}
