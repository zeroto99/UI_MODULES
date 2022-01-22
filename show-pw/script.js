const pw = document.querySelector('.pw');
const pwInp = document.querySelector('.pw-inp');
const clearBtn = document.querySelector('.clear-btn');
const toggle = document.querySelector('.show-toggle');


pwInp.addEventListener('focus', () => {
  console.log('focus 토글 on');
  pw.classList.toggle('on');
});

clearBtn.addEventListener('click', function(e) {
  e.preventDefault();
  console.log('clear 입력값, on 지움');
  pwInp.value = '';
  pw.classList.remove('on');
});

toggle.addEventListener('click', function(e) {
  e.preventDefault();
  if(pwInp.type !== 'password') {
    console.log('pw로 변경')
    pwInp.type = 'password';
    toggle.style.filter = 'none';
  } else {
    console.log('text로 변경')
    pwInp.type = 'text';
    toggle.style.filter = 'invert(66%) sepia(10%) saturate(5566%) hue-rotate(178deg) brightness(100%) contrast(103%)';
  }
});