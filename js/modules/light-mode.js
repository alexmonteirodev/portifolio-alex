export default function lightMode(params) {

}

const lightButton = document.querySelector('#light-mode')

lightButton.addEventListener('click', turnLightMode)

function turnLightMode(params) {
    if (!lightButton) {
        console.error("Botão de modo claro não encontrado!");
        return;
    }
    console.log('cliquei')
    // const root = document.documentElement

    // if (root.getPropertyValue('--background-white') === '#FFFFFF') {
    //     root.style.setProperty('--background-white', 'black')
    // } else {
    //     root.style.setProperty('--background-white', '#FFFFFF')
    // }

}