const email = document.querySelector('.email');
const pw = document.querySelector('.pw');
const btn = document.querySelector('.btn');
function btnable() {
  console.log('btn able 함수 발동')
  if(email.value === '' && pw.value === '') {
      btn.disabled = true;
      btn.classList.add('disabled')
  } else if(email.value === '' || pw.value === ''){
      btn.disabled = true;
      btn.classList.add('disabled')
  } else {
      btn.disabled = false;
      btn.classList.remove('disabled');
  }
} 
email.addEventListener('input', btnable);
pw.addEventListener('input', btnable);