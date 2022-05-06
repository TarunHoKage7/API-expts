document.querySelector("button").addEventListener("click", getAColor());

function getAColor(){
    fetch("https://x-colors.herokuapp.com/api/random")
    .then(res => res.json())
    .then(data =>{
        console.log(data.hex)
        document.querySelector("h1").color = data.hex
    })
    .catch(err =>
        console.log(`error ${err}`)
    )}