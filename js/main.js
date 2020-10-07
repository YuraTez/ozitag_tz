const isMobile = (window.navigator ? /Mobi/i.test(navigator.userAgent) : false);

const HandleHamburger = document.getElementById("hamburger");
const HandleMenu = document.getElementById("menu");
const HandleMenuActive = document.getElementsByClassName("menu active-burger");
const body = document.querySelector('body');
const shadow = document.getElementById('shadow');
const arrowMenu = document.querySelectorAll('.arrow-menu');
const arrowSubmenu = document.querySelectorAll('.arrow-submenu');
const arrowMenuBlock = document.querySelectorAll('.arrow_block');
const arrowSubMenuBlock = document.querySelectorAll('.arrow_block_submenu');

if(isMobile){
    body.classList.add('touch');
}else {
    body.classList.add('mouse');
}




HandleHamburger.addEventListener("click", ()=> {
    HandleHamburger.classList.toggle('active-burger');
    HandleMenu.classList.toggle('active-burger');
    body.classList.toggle('active-burger');
    shadow.classList.toggle('active-shadow');
    }
);

HandleMenu.addEventListener("click",(event)=>{
    if (event.target.matches('span')) {
        activeMenuList(event.target);
        activeSubMenuList(event.target);
        menuHeight();

    }
});


function menuHeight() {
    if(HandleMenuActive[0].offsetHeight !== 246 && HandleMenu.classList.contains("active-burger")=== true ){
        let sum = 290 - (HandleMenuActive[0].offsetHeight - 246) ;
        HandleMenuActive[0].style.top = sum + 'px'
    }else
    { HandleMenuActive[0].style = ''
    }
}
function activeMenuList(el) {
    if(el.classList.contains("arrow-active") === true && el.classList.contains("arrow-menu")=== true){

        el.classList.remove('arrow-active');
       el.closest('.arrow_block').classList.remove('active');
    }
    else if(el.classList.contains("arrow-menu")=== true) {
        arrowMenu.forEach(el => el.classList.remove('arrow-active'));
        arrowMenuBlock.forEach(el => el.closest('.arrow_block').classList.remove('active'));
        el.classList.add('arrow-active');
        el.closest('.arrow_block').classList.add('active');
    }
}

function activeSubMenuList(el) {
    if(el.classList.contains("arrow-active") === true && el.classList.contains("arrow-submenu")=== true){
        el.classList.remove('arrow-active');
        el.closest('.arrow_block_submenu').classList.remove('active');
    }else if(el.classList.contains("arrow-submenu")=== true) {
        arrowSubmenu.forEach(el => el.classList.remove('arrow-active'));
        arrowSubMenuBlock.forEach(el => el.closest('.arrow_block_submenu').classList.remove('active'));
        el.classList.add('arrow-active');
        el.closest('.arrow_block_submenu').classList.add('active');

    }
}











