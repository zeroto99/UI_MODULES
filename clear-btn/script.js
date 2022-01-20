const searchInp = document.querySelector('.search-inp');
const clear = document.querySelector('.clear-btn');

clear.addEventListener('click', function(e) {
  e.preventDefault();
  searchInp.value = '';
  console.log('지움')
})