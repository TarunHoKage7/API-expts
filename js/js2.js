document.querySelector("button").addEventListener("click", getAdvice());

function getAdvice(){
    fetch("https://api.adviceslip.com/advice")
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        document.querySelector("p").innerText = data.slip.advice
    })
    .catch(err =>
        console.log(`error ${err}`)
    )}