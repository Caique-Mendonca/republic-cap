let $navBar = document.querySelector(".nav-bar")
$navBar.addEventListener('mouseover', ()=>{
    let $iconInstagram = document.querySelector('.icon-instagram')
    let $navLogoP = document.querySelector('.nav-logo p')
    $iconInstagram.style.color = "#000"
    $navLogoP.style.color = "#000"
})
$navBar.addEventListener('mouseout', ()=>{
    let $iconInstagram = document.querySelector('.icon-instagram')
    let $navLogoP = document.querySelector('.nav-logo p')
    $iconInstagram.style.color = "#fff"
    $navLogoP.style.color = "#fff"
})