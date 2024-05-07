let sub = document.querySelector(".sub-container2");
let bannerImg = document.querySelectorAll(".banner-img");
let prevBtn = document.querySelector(".banner_prev_button");
let nextBtn = document.querySelector(".banner_next_button");

//슬라이드의 너비, 현재 인덱스, 슬라이드 개수 설정
let slideWidth = 970;
console.log(slideWidth);
let currentIdx = 0;
let slideCnt = bannerImg.length;

checkEnd();

//다음 버튼 클릭시 발생하는 이벤트
nextBtn.addEventListener("click", function () {
  // console.log(currentIdx);
  currentIdx++;
  sub.style.left = -(currentIdx * slideWidth) + 'px';
  console.log(currentIdx);
  console.log(sub);
  sub.style.transition = '0.5s ease';
  checkEnd();
});

//이전버튼을 클릭할 때 발생하는 이벤트
prevBtn.addEventListener("click", function () {
  currentIdx--;
  sub.style.left = -(currentIdx * slideWidth) + 'px';
  console.log(currentIdx);
  sub.style.transition = '0.5s ease';
  checkEnd();
});

// 슬라이드가 처음이나 마지막에 도달했는지 확인하고 이전/다음 버튼을 표시/숨김처리
function checkEnd() {
  if (currentIdx <= 0) {
    prevBtn.style.display = 'none';
  } else {
    prevBtn.style.display = 'block';
  }

  if (currentIdx >= slideCnt - 1) {
    nextBtn.style.display = 'none';
  } else {
    nextBtn.style.display = 'block';
  }
}

