
// atribuindo variais as tags html 
let btnMenuMob = document.querySelector('#btn-menu-mob') 
let line1 = document.querySelector('.line-menumob-1')
let line2 = document.querySelector('.line-menumob-2')
let menuMobile = document.querySelector('#menu-mobile')
// guardando todo bady
let body = document.querySelector('body')

// evento click 

btnMenuMob.addEventListener("click",()=>{
    // criei uma class dinamica
    line1.classList.toggle('ativo1')
    line2.classList.toggle('ativo2')
    menuMobile.classList.toggle('abrir')

    body.classList.toggle('no-overflow')
})



