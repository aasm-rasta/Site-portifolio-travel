
//variavel para receber o valor do header do html
let navBar = document.querySelector('#header') 

//evento para que quando o usuario rolar a pagina algo acontecer
//o evento tem que acontecer em toda pagina html
document.addEventListener("scroll" ,()=>{
//variavel para pegar o eixo y da pagina (vertical)
//pegando a posição do eixo y e guardando na variavel
    let scrollTop = window.scrollY

//quando o usuario tiver no topo vai ter um estilo
//quando o usuario tiver em qualquer outra parte do site muda o estilo
    //quando o usuario descolar do topo a classe rolar vai agir no modo add 
    //se o usuario voltar pro topo a classe rolar vai agir no modo remove
    if(scrollTop > 0){
        navBar.classList.add('rolar')
    } else {
        navBar.classList.remove('rolar')
    }

})