const saveBtn = document.querySelector('.save-btn');
const nowPw = document.querySelector('.now-pw');
const newPw = document.querySelector('.new-pw');
const checkPw = document.querySelector('.check-pw');


function checkValue() {
  if(nowPw.value !== '' && newPw.value !== '' && checkPw.value !== '') { 
    saveBtn.disabled = false;
    saveBtn.style.color = "#00a6e5"
  } else {
    saveBtn.disabled = true;
    saveBtn.style.color = "gray"
  }
}

nowPw.addEventListener('input', checkValue);
newPw.addEventListener('input', checkValue);
checkPw.addEventListener('input', checkValue);


// CHECK:: 비밀번호 정규식 
function checkRules(e){
  console.log('정규식 검사 시작')
  var pw = e.value;
  var num = pw.search(/[0-9]/g);
  var eng = pw.search(/[a-z]/ig);
  var spe = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
 
  if(pw.length < 8 || pw.length > 20){
 
   alert("8자리 ~ 20자리 이내로 입력해주세요.");
   return false;
  }else if(pw.search(/\s/) != -1){
   alert("비밀번호는 공백 없이 입력해주세요.");
   return false;
  }else if(num < 0 || eng < 0 || spe < 0 ){
   alert("영문,숫자, 특수문자를 혼합하여 입력해주세요.");
   return false;
  }else {
   console.log("통과"); 
     return true;
  }
 
}