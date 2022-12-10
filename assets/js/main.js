const makeBox = document.getElementById("makeBox");
const resultBox = document.getElementById("resultBox");
const makeBtn = document.getElementById("makeBtn");
const fileMain = document.getElementById("fileMain");
const iptTitle = document.getElementById("iptTitle");
const iptTxt = document.getElementById("iptTxt");
const cardTitle = document.getElementById("cardTitle");
const cardTxt = document.getElementById("cardTxt");

// 변수에 잠깐 저장해서 출력하는 방식, 차후 변경
function getTxt() {
  let title = iptTitle.value;
  let txt = iptTxt.value;
  cardTitle.innerText = title;
  cardTxt.innerText = txt;
}

/*
  현재 로컬주소로 가져와서 preview 형식으로 보여주게 함
  차후 변경
*/
function getMainPhoto(img) {
  if (img.files && img.files[0]) {
    const reader = new FileReader();
    reader.onload = function(e){
      const imgMain = document.getElementById("imgMain");
      imgMain.src = e.target.result
    }
    reader.readAsDataURL(img.files[0]);
  }
}

function handleMakeBtn(e) {
  e.preventDefault();
  makeBox.classList.remove("show");
  resultBox.classList.add("show");
  getMainPhoto(fileMain);
  getTxt();
}

makeBtn.addEventListener("click", handleMakeBtn);