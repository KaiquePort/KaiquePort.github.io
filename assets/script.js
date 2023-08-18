const menu = document.querySelector('.menu')
const NavMenu = document.querySelector('.nav_menu')

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo')
    NavMenu.classList.toggle('ativo')
})

function enviar(){
    Swal.fire(
        'Obrigado por se inscrever!',
        'Em breve enviaremos novidades Nike!',
        'success'
      )
}