document.querySelector("button").addEventListener("click", getASuggestion);

function getASuggestion(){
    fetch("https://www.boredapi.com/api/activity/")
    .then(res => res.json())
    .then(data =>{
        document.querySelector("p").innerText = data.activity
        document.querySelector("span").innerText =  data.type
        document.querySelector("#activityLink").href = data.link
        document.querySelector("#activityLink").innerText = data.link
    })
    .catch(err =>
        console.log(`error ${err}`)
    )}