
//counting element
const counterElement = document.getElementById('counter')
let timer = setInterval(countTimer, 1000);
let totalSeconds = 0;
function countTimer() {
    ++totalSeconds;
    let seconds = totalSeconds
    document.getElementById("counter").innerHTML = seconds;

}
//pause & resume button 
const pauseButton = document.getElementById('pause')

pauseButton.addEventListener('click', (e) => {
    if (pauseButton.innerText === "pause") {
        (clearInterval(timer))
        pauseButton.innerText = "resume"
    } else if (pauseButton.innerText === "resume") {
        timer = setInterval(countTimer, 1000)
        pauseButton.innerText = "pause"
    }
})

//add button
const addButton = document.getElementById('plus')
addButton.addEventListener('click', (e) => { incrementCounter() })

function incrementCounter() {
    let num = parseInt(counterElement.innerText, 10)
    num++
    counterElement.innerText = num
}

//subtract button
const subtractButton = document.getElementById('minus')
subtractButton.addEventListener('click', (e) => { decrementCounter() })

function decrementCounter() {
    let num = parseInt(counterElement.innerText, 10)
    num--
    counterElement.innerText = num
}

//liker button
const likeHeart = document.getElementById('heart')
likeHeart.addEventListener('click', (e) => {
    if (document.getElementById(counterElement.innerText)) {
        const selectedElement = document.getElementById(counterElement.innerText)
        console.log('li', selectedElement)
    } else {
        const likeArea = document.querySelector('.likes')
        let likeInfo = document.createElement('li')
        likeInfo.id = counterElement.innerText
        likeInfo.dataset.likecount = 1
        if (likeArea.childNodes[likeArea.childNodes.length - 1] === undefined) {
            likeInfo.innerText = `${counterElement.innerText} has been liked 1 time`
            likeArea.appendChild(likeInfo)

        } else {
            parsedLikes = parseInt(++likeInfo.dataset.likecount, 10)
            likeInfo.innerText = `${counterElement.innerText} has been liked ${parsedLikes} times`
            likeArea.appendChild(likeInfo)
        }
    }
})

//comment function
const comments = document.querySelector(".comments")
const submitButton = document.querySelector("#submit")
const form = document.querySelector("#comment-form")
form.addEventListener('submit', (e) => {
    e.preventDefault()
    let commentInput = document.querySelector("#commentInput")
    postComments(e.target.commentInput.value)
})

function postComments(formInput) {
    let li = document.createElement('li')
    li.textContent = `${formInput}`
    comments.appendChild(li)
}




