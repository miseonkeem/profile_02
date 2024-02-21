//햄버거 버튼 클릭 이벤트 //

const navToggle = document.querySelector(".hamburger");

navToggle.addEventListener('click', function(){
    navMenu.classList.toggle('open');
})

// 모바일 화면에서 네비메뉴 클릭하면 메뉴 숨김 //

const navMenu = document.querySelector('.header_menu');

navMenu.addEventListener('click', function(){
    navMenu.classList.remove('open'); //메뉴를 클릭하면 메뉴가 사라져라!//
})