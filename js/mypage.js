// 메인 네비게이션
var mainNav = document.querySelector(".main-nav-wrap")
var hoverGnb = document.querySelector(".header .header-left .gnb")
var navFlag = false
hoverGnb.addEventListener("mouseover", () => mainNav.classList.add("on"))

mainNav.addEventListener("mouseover", () => (navFlag = true))
mainNav.addEventListener("mouseleave", () => {
  if (navFlag) {
    navFlag = false
    mainNav.classList.remove("on")
  }
})

// 마이페이지 메인 메뉴
const myMenu = document.querySelectorAll(".mypage-menu > ul > li")
const myMenuList = [...myMenu]

const myPageContent = document.querySelectorAll(".mypage-contents")
const myPageContents = [...myPageContent]

myMenuList.forEach((elem) => elem.addEventListener("click", myMenuSelect))

function myMenuSelect(e) {
  e.currentTarget.classList.add("on")
  myMenuList.forEach((elem) => {
    if (e.currentTarget !== elem) {
      elem.classList.remove("on")
    }
  })
}

// 마이페이지 결제 수단
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

// 배송비 부과

const shipImpose = document.querySelectorAll(".shipping-impose label input[radio]")
const shipImposeArray = [...shipImpose]
const payRight = document.querySelector(".pay-right")
const payDeposit = document.querySelector(".pay-deposit")

shipImposeArray.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    if (0 == elem.indexOf(e.currentTarget)) {
      payRight.classList.add("on")
      payDeposit.classList.remove("on")
    } else {
      payRight.classList.remove("on")
      payDeposit.classList.add("on")
    }
  })
  console.log(shipImposeArray.indexOf(e.currentTarget))
})
