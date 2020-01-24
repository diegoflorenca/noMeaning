function loadChapter(chapter) {

    let currentChapter = chapter
    let selectedChapter

    fetch('book.json').then(function (response) {
        return response.json();
    }).then(function (book) {

        for (let i = 0; i < book.chapters.length; i++) {
            const element = book.chapters[i]

            if (element.chapter === currentChapter) {
                selectedChapter = element
            }

        }

        let textBox = document.querySelector('.main p')
        textBox.textContent = ''
        let text = document.createTextNode(selectedChapter.text)
        textBox.appendChild(text)

        let alternatives = document.querySelector('.alternatives')

        let checkAlternative = document.querySelectorAll('.alternative')
        if (checkAlternative) {
            for (let i = 0; i < checkAlternative.length; i++) {
                alternatives.removeChild(checkAlternative[i])
            }
        }

        for (let i = 0; i < selectedChapter.alternatives.length; i++) {
            const element = selectedChapter.alternatives[i];

            let alternative = document.createElement('div')
            alternative.setAttribute('class', 'alternative')

            let linkElement = document.createElement('a')
            linkElement.setAttribute('href', '#')
            let closeChoisesAnime = `closeChoisesAnime("${selectedChapter.nextChapter[i]}")`
            linkElement.setAttribute('onclick', closeChoisesAnime)

            let iconElement = document.createElement('i')
            iconElement.setAttribute('class', 'material-icons md-light')
            let iconText = document.createTextNode(selectedChapter.icon[i])
            iconElement.appendChild(iconText)

            let paragraph = document.createElement('p')
            let alterText = document.createTextNode(selectedChapter.alternatives[i])
            paragraph.appendChild(alterText)

            linkElement.appendChild(iconElement)
            linkElement.appendChild(paragraph)
            alternative.appendChild(linkElement)
            alternatives.appendChild(alternative)

        }

    }).catch(function (error) {
        console.error('Something wrong with the JSON file.')
        console.error(error)
    })

}

loadChapter("A")