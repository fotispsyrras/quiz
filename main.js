"use strict"



//dimiourgia enos div me id=app
let body = document.querySelector('body')
let app = document.createElement('div')
app.setAttribute("id", "app")
body.append(app)

//dimiourgia toy QUIZ time
const header = document.createElement('h1')
header.innerText = "QUIZ time"
header.style.color = 'rgb(42, 42, 172)'
app.append(header)

//dimiourgia box
let box = document.createElement('div')
box.setAttribute("id", "box")

let index = 0
let swstes = 0


function nextQuestion(questions) {
    let epilogeas = false
    let indexanswer = 0

    box.innerHTML = ''

    let erotisi = document.createElement('h2')
    erotisi.innerHTML = questions[index].question
    box.append(erotisi)
    app.append(box)

    //provoli apantisewn

    let apantiseis = []


    questions[index].answers.forEach(() => {
        apantiseis[indexanswer] = document.createElement('button')
        apantiseis[indexanswer].setAttribute("id", `apantisi_${indexanswer}`)
        apantiseis[indexanswer].innerHTML = questions[index].answers[indexanswer].text
        box.append(apantiseis[indexanswer])
        app.append(box)
        indexanswer++
    })

    //epilogi apantisewn

    apantiseis[0].addEventListener('click', function () {
        epilogeas = questions[index].answers[0].correct
    })

    apantiseis[1].addEventListener('click', function () {
        epilogeas = questions[index].answers[1].correct
    })

    apantiseis[2].addEventListener('click', function () {
        epilogeas = questions[index].answers[2].correct
    })

    apantiseis[3].addEventListener('click', function () {
        epilogeas = questions[index].answers[3].correct
    })

    const epomeni = document.createElement('button')
    epomeni.innerHTML = "Επόμενη"
    epomeni.addEventListener('click', function () {
        if (epilogeas === true) {
            swstes++
        }
        index++
        if (index>=questions.length) showScore(questions,swstes)
        else nextQuestion(questions)
    })
    box.append(epomeni)

}

function showScore(questions,swstes){
    box.innerHTML = ''
    let score = document.createElement('h2')
    score.innerHTML = `Σωστές ${swstes} από τις ${questions.length} ερωτήσεις `
    box.append(score)
    app.append(box)
}




fetch('questions.json')
    .then(res => res.json())
    .then(questions => {
        console.log(questions)
        nextQuestion(questions)
    })
    .catch(err => console.log(err))
