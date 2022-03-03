let buttonArrow = document.getElementsByClassName('button-svg');
let arrayButtonArrow = Array.from(buttonArrow);
let mainImg = document.querySelector('.main-img')
let project = document.querySelector('.project')
let arrLink = [
    `https://rolling-scopes-school.github.io/yanzayats-JSFEPRESCHOOL/portfolio/`,
    `https://rolling-scopes-school.github.io/yanzayats-JSFEPRESCHOOL/js30-eco-sounds/`,
    `https://rolling-scopes-school.github.io/yanzayats-JSFEPRESCHOOL/js30-image-galery/`,
    `https://rolling-scopes-school.github.io/yanzayats-JSFEPRESCHOOL/js30-tic-tac-toe/`
]

let count = 0

function changeImage(e){
    if (e.target.dataset.left && count === 0 ){
        count = 3;
        mainImg.src = `./assets/jpg/${count}.jpg`
        project.href = arrLink[`${count}`] 
    } else if(e.target.dataset.left){
        count--
        mainImg.src = `./assets/jpg/${count}.jpg`
        project.href = arrLink[`${count}`] 
    } else if (e.target.dataset.right && count === 3){
        count = 0;
        mainImg.src = `./assets/jpg/${count}.jpg`
        project.href = arrLink[`${count}`] 
    } else if (e.target.dataset.right){
        ++count
        mainImg.src = `./assets/jpg/${count}.jpg`
        project.href = arrLink[`${count}`]
    }
}

arrayButtonArrow.forEach(el =>{
    el.addEventListener('click', changeImage)
});

// --------------------Smooth scrole--------------------

const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
  anchor.addEventListener('click', function (event) {
    event.preventDefault();
    const blockId = anchor.getAttribute('href');
    document.querySelector('' + blockId).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}


