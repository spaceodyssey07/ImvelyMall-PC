const payments = document.querySelectorAll(".payment-method > li")

const paymentInfo = document.querySelectorAll(".payment-method-info")

const paymentsArray = [...payments]

paymentsArray.forEach((element) => {
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
