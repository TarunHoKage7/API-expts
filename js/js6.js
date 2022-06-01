//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector("button").addEventListener('click', getSpell);

function getSpell(){
  const choice = document.querySelector('input').value;
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`
  fetch(url)
    .then(res => res.json()) // parse response as json
    .then(data => {
      console.log(data)// for getting an understanding of the the structure of the fetch result
      document.querySelector('h2').innerHTML = data.name;//name
      document.querySelector('h3').innerHTML = data.classes[0].name;//class
      document.createElement('ul');//for a variable number of subclasses
      data.subclasses.forEach(obj => {
        const subclassPlace = document.createElement('li')//creating the li element
        subclassPlace.innerText = obj.name;//could've also used subclassPlace.textContent = obj.name
        //addidng text onto the li element
        document.querySelector('ul').appendChild(subclassPlace);// appending the li to ul
      });

    })

    .catch(err =>{
      console.log(`error ${err}`);
    });
}