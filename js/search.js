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
