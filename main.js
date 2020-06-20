"use strict"

let erotisi =document.createElement('p')
erotisi.innerHTML
let keli=document.createElement('td')

const app = document.querySelector('#app')
const header =document.createElement('h1')
header.innerText="QUIZ time"
header.style.color = 'rgb(42, 42, 172)'
app.append(header)

index=0

function nextQuestion(questions){
    let erotisi = document.createElement('p')
    erotisi.innerHTML=questions[index].question

}



fetch('questions.json')
.then(res => res.json())
.then(questions => { 
    nextQuestion(questions)
    
})
.catch(err => console.log(err))
