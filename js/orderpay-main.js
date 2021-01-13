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

const payments = document.querySelectorAll(".payment-method > li")

const paymentInfo = document.querySelectorAll(".payment-method-info")

const paymentsArray = [...payments]
payments.forEach((element) => {
  element.addEventListener("click", paySelect)
})

function paySelect(event) {
  event.currentTarget.classList.add("on")
  payments.forEach((elem) => {
    if (event.currentTarget != elem) {
      elem.classList.remove("on")
    }
  })
  const index = paymentsArray.indexOf(event.currentTarget)
  for (let i = 0; i < paymentInfo.length; i++) {
    if (i === index) {
      paymentInfo[i].classList.add("on")
    } else {
      paymentInfo[i].classList.remove("on")
    }
  }
}
