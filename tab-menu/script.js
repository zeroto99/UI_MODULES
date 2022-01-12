/*
  초기 상태
  - 첫번째 탭인 home에 .on이 들어가 있다.

  필요한 기능 2가지
  - 1. 새로운 탭을 클릭하면 이전 탭에서 .on이 빠진다. 
  - 2. 새로 클릭된 탭에 .on이 들어간다. 
*/


const items = document.querySelectorAll('.tab-menu .menu-item');

for(let i = 0; i < items.length; i++) {
  items[i].addEventListener('click', function(e) {
    e.preventDefault();
    for(let j = 0; j < items.length; j++) { // 여기서 다른 탭에 있는 .on을 제거한다. 특정 탭이 아니라 그냥 for문으로 전부다 돌아서 제거함.
      items[j].classList.remove('on');
    }
    this.classList.add('on'); // 클릭된 탭에만 .on을 추가한다.
  });
}

// 포인트! 
// 탭이 클릭되면 일단 .on을 전부 없애버린다!  


 