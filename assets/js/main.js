const makeBox = document.getElementById("makeBox");
const resultBox = document.getElementById("resultBox");
const makeBtn = document.getElementById("makeBtn");
const fileMain = document.getElementById("fileMain");

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
}

makeBtn.addEventListener("click", handleMakeBtn);