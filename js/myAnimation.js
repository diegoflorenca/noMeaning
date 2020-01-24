//setting the click events

const btnStart = document.querySelector('#start')
btnStart.addEventListener('click', () => {
    tlGame.play()
})

const btnChoose = document.querySelector('.choose')
btnChoose.addEventListener('click', () => {
    tlChoises.play()
})


const divAlternatives = document.querySelector('.alternatives')


//start the animations

const animeDuration = 500

let tl = anime.timeline({
    duration: animeDuration,
    easing: 'easeInOutCirc',
});

tl.add({
    targets: 'header',
    translateY: '35vh',
    delay: anime.stagger(0)
})

tl.add({
    targets: 'header p',
    translateY: [30, 0],
    scale: [1, 2],
    opacity: [0, 1],
    duration: animeDuration,
    delay: anime.stagger(animeDuration)
})

tl.add({
    targets: ['.start h3', '.start button'],
    translateY: [30, 0],
    opacity: [0, 1],
    delay: anime.stagger(animeDuration)
})

let divStart = document.querySelector('.start')

let tlGame = anime.timeline({
    easing: 'easeInOutCirc',
    autoplay: false,
    duration: animeDuration
})

tlGame.add({
    targets: 'header',
    translateY: ['35vh', 0],
})


tlGame.add({
    targets: '.start',
    scale: 0.5,
    opacity: [1, 0],
    complete: function (anim) {
        divStart.remove()
    }
})

tlGame.add({
    targets: '.main',
    translateY: [30, 0],
    scale: [0.7, 1],
    opacity: [0, 1],
    delay: anime.stagger(animeDuration)
})


// Mostra as alternativas


let tlChoises = anime.timeline({
    easing: 'easeInOutCirc',
    autoplay: false,
    duration: animeDuration
})

tlChoises.add({
    targets: '.alternatives',
    opacity: [0, 1],
    scale: [0, 1],
    begin: function (anim) {
        divAlternatives.style.display = 'flex'
    }
})


//Depois que Escolheu

function closeChoisesAnime(chapter) {


    let alternativeBtn = document.querySelectorAll('.alternative')

    for (let i = 0; i < alternativeBtn.length; i++) {
        alternativeBtn[i].addEventListener('click', () => {
            tlChoosed.play()
        })
    }

    let tlChoosed = anime.timeline({
        easing: 'easeInOutCirc',
        autoplay: false,
        duration: animeDuration
    })

    tlChoosed.add({
        targets: '.alternatives',
        opacity: [1, 0],
        scale: [1, 0],
        complete: function (anim) {
            divAlternatives.style.display = 'none'

            let closeOpen = anime.timeline({
                easing: 'easeInOutCirc',
                duration: 200,
            })

            closeOpen.add({
                targets: '.main',
                opacity: 0,
                complete: function (anim) {
                    loadChapter(chapter)
                }
            })


            closeOpen.add({
                targets: '.main',
                opacity: 1
            })

        },
    })
}

// Fim de jogo!