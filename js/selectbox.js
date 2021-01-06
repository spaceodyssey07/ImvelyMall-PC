// 커스텀 셀렉트 박스
let selectbox = document.querySelector(".cs-selectbox")
let btnSelect = document.querySelector(".cs-selectbox > button")
let selectList = document.querySelector(".cs-selectbox > ul")
btnSelect.addEventListener("click", (e) => btnSelect.classList.toggle("on"))