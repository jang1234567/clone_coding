// NodeList에 map 메소드를 추가
NodeList.prototype.map = Array.prototype.map;

const all = document.querySelector("#check_all");
const terms = document.querySelectorAll("input.check");
// let msg = document.createElement("p")

// 전체 동의 체크박스를 클릭할 때마다 실행되는 이벤트 리스너
all.addEventListener("click", () => {
  terms.forEach((check) => {
    check.checked = all.checked;
  });
});

// 약관 동의 체크박스를 클릭할 때마다 실행되는 이벤트 리스너
terms.forEach((check) => {
  check.addEventListener("click", () => {
    // 전체 동의 체크박스 상태를 변경
    all.checked = terms.map((check) => check.checked).filter((checked) => checked).length === terms.length;
    // 약관 동의 체크박스들의 checked 속성값을 배열로 매핑하고, 선택된 체크박스 개수가 전체 체크박스 개수와 일치하는지 확인하여 전체 동의 체크박스의 상태를 변경
  });
});
// -----------------------------------------------------------------
// const nameInput = document.querySelector("#name");

// nameInput.addEventListener('focus', () => {

//   nameInput.style.outline = "3px solid skyblue"
//   })

//   nameInput.addEventListener('blur', () => {
//     if(nameInput.value === ""){ 
//       nameInput.style.outline = "1px solid red";
//     }else{
//       nameInput.style.outline = "1px solid #f2f2f2";
//     }
// });

// ============================
let nameInput = document.querySelector("#name");
let emailInput = document.querySelector("#email");
let pwInput = document.querySelector("#password");

function redMessage() {
  if (!this.value) {
    this.style.border = "1px solid red";

    //동적으로 경고메세지 출력
    let p = document.createElement("p");
    p.style.color = "red";
    p.className = "error_msg";

    //id값을 비교해서 현재 입력 필드가 어떤 필드인지 정확하게 판별하는 조건문
    if (this.id === "name") {
      p.textContent = "이름 입력하세요";
    } else if (this.id === "email") {
      p.textContent = "이메일을 입력하세요";
    } else if (this.id === "password") {
      p.textContent = "영문+숫자 조합 8자리 이상 입력해주세요.";
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

nameInput.addEventListener("blur", redMessage);
emailInput.addEventListener("blur", redMessage);
pwInput.addEventListener("blur", redMessage);