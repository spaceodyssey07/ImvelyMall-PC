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
