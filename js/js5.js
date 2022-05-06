document.querySelector("#todayPic").addEventListener("click",getTodayPic);
document.querySelector("#datePicOfDay").addEventListener("click",getDatePic);

function getTodayPic(){
    fetch("https://api.nasa.gov/planetary/apod?api_key=fxBpUhePE9YkzlgsJJQjILCzLjlW7LgHkWri6z6B")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if( data.media_type === "image"){}
        document.querySelector("h3").innerText = data.title + " , \u00A9" + data.copyright   //\u00A9 is unicode sequence for the copyright symbol
        if( data.media_type === "image"){
            document.querySelector("img").src = data.url;
            document.querySelector("iframe").src = "";
        }
        else{
            document.querySelector("iframe").src = data.url;
            document.querySelector("img").src = "";
        }
        document.querySelector("#explan").innerText = data.explanation
    })
}

function getDatePic(){
    let date = document.querySelector("input").value
    fetch(`https://api.nasa.gov/planetary/apod?api_key=fxBpUhePE9YkzlgsJJQjILCzLjlW7LgHkWri6z6B&date=${date}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector("h3").innerText = data.title + " , \u00A9" + data.copyright   //\u00A9 is unicode sequence for the copyright symbol
        if( data.media_type === "image"){
            document.querySelector("img").src = data.url;
            document.querySelector("iframe").src = "";
        }
        else{
            document.querySelector("iframe").src = data.url;
            document.querySelector("img").src = "";
        }
        document.querySelector("#explan").innerText = data.explanation
    })
}