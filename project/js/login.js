
let emailInput = document.querySelector("#email");
let pwInput = document.querySelector("#password");

function redMessage() {
  if (!this.value) {
    this.style.border = "1px solid red";

    //동적으로 경고메세지 출력
    let p = document.createElement("p");
    p.style.color = "red";
    p.className = "error_msg";
    p.style.fontSize = "14px"

    //id값을 비교해서 현재 입력 필드가 어떤 필드인지 정확하게 판별하는 조건문
    if (this.id === "email") {
      p.textContent = "이메일을 입력하세요";
      // this.style.border = "3px solid red"
      // this.style.outline = "1px solid red"

    } else if (this.id === "password") {
      p.textContent = "영문+숫자 조합 8자리 이상 입력해주세요.";
      // this.style.border = "3px solid red"
      // this.style.outline = "1px solid red"
    }

    //메세지가 표시되어있지 않으면 메세지를 추가
    if (!this.parentElement.querySelector(".error_msg")) {
      this.parentElement.appendChild(p);
      this.style.border = "1px solid red";
      this.style.outline = "1px solid red";
    }

  } else { //입력값이 유효하면 메세지 제거
    this.style.border = "1px solid skyblue";
    this.style.outline = "none";
    if (this.parentElement.querySelector(".error_msg")) {
      this.parentElement.querySelector(".error_msg").remove();
    }
  }
}

// function makeGreen(){
//   // console.log(1111);
//   this.style.border = "none"
//   this.style.outline = "3px solid skyblue"
// }

// emailInput.addEventListener("click", makeGreen);
// pwInput.addEventListener("click", makeGreen);
emailInput.addEventListener("blur", redMessage);
pwInput.addEventListener("blur", redMessage);