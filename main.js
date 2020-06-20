"use strict"

let erotisi =document.createElement('p')
erotisi.innerHTML
let keli=document.createElement('td')

//dimiourgia enos div me id=app
app.setAttribute("id","app")

//dimiourgia toy QUIZ time
const header =document.createElement('h1')
header.innerText="QUIZ time"
header.style.color = 'rgb(42, 42, 172)'
app.append(header)

let index=0

function nextQuestion(questions){
    
    let erotisi = document.createElement('h2')
    erotisi.innerHTML=''
    erotisi.innerHTML=questions[index].question
    app.append(erotisi)
    
    

}

fetch('questions.json')
.then(res => res.json())
.then(questions => { 
    console.log(questions)
    nextQuestion(questions)
    
})
.catch(err => console.log(err))
