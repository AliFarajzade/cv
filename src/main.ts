import './style.css'

const modeButtonElement = document.getElementById(
    'modeButton'
)! as HTMLButtonElement

const githubImageElement = document.getElementById(
    'githubImage'
)! as HTMLImageElement
const nextImageElement = document.getElementById(
    'nextImage'
)! as HTMLImageElement
const nodeImageElement = document.getElementById(
    'nodeImage'
)! as HTMLImageElement

let mode: 'light' | 'dark' = 'light'

modeButtonElement.addEventListener('click', () => {
    const iconElement = modeButtonElement.querySelector(
        'i'
    )! as HTMLDialogElement

    if (mode === 'dark') {
        mode = 'light'
        iconElement.className = 'fa-solid fa-sun text-sm'
        document.documentElement.className = 'light'
        document.documentElement.dataset.theme = 'cupcake'
        githubImageElement.src =
            'https://www.svgrepo.com/show/332401/github.svg'
        nodeImageElement.src =
            'https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg'
        nextImageElement.src = '/next-dark.png'
    } else {
        mode = 'dark'
        iconElement.className = 'fa-solid fa-moon text-sm'
        document.documentElement.className = 'dark'
        document.documentElement.dataset.theme = 'night'
        githubImageElement.src = '/github.png'
        nodeImageElement.src =
            'https://nodejs.org/static/images/logos/nodejs-new-pantone-white.svg'
        nextImageElement.src = '/next.png'
    }
})
