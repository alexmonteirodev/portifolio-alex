export default function scrollSuave() {
    const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]')
    
    linksInternos.forEach((params) => {
        params.addEventListener('click', scrollToSection)
    })

    function scrollToSection(e) {
        e.preventDefault() //previne movimento padrao do link interno de levar a seção
        const href = e.currentTarget.getAttribute('href') //seleciona atributo do href que foi clicado
        const section = document.querySelector(href) //linkou href com a section

        section.scrollIntoView({ //scrollIntoView = bota esse elemento na minha view/vista
            behavior: 'smooth',
            block: 'start',
        })
    }
}