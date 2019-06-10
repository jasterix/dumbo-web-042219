document.addEventListener('DOMContentLoaded', () => {
  const myForm = document.getElementById('joke-form')
  const jokeList = document.getElementById('joke-list')
  const newJokeLi = document.createElement('li')
  const username = document.getElementById('name-input').value
  const submit = document.querySelector("submit")
  let joke;

const getJoke = () => {
  fetch('https://icanhazdadjoke.com/', {
    headers: {
      "Accept": "application/json"
    }
    })
  .then((res) => res.json())
  .then((data) => {
    newJokeLi.innerHTML += `${data.joke} <br> <br>`
  })
}


  const newJoke = () => {

  document.getElementById('joke-form').addEventListener('submit', function(e){
    e.preventDefault()
    jokeList.innerHTML = ""
    getJoke()
    let jokes = jokeList.appendChild(newJokeLi)
    let name = document.getElementById("name-input").value
    jokes.innerHTML +=(`<div style = "color:red;">${name} says: </div>`)
    // myForm.reset()
  })
  }
  newJoke()
})

  // newJoke
    //
    // const L = (joke) => {
    //   return `<li> ${joke} </li>`
    // }

    // }
// fetchJoke

  // fetch('http://localhost:3000/toys')
  // .then((response) => response.json())
  // .then((toyObjs) => {
  //   toyObjs.forEach(toy => {
  //     toyCollectionDiv.innerHTML += createToyCardHTML(toy)
  //   })
  // })

//   fetchJoke()
//   ////////ORIGINAL CODE
//   //   fetch('https://icanhazdadjoke.com/', {
//   //     headers: {
//   //       "Accept": "application/json"
//   //     }
//   //   })
//   //   .then(res => res.json())
//   //   .then(jokeData => joke = jokeData.joke)
//   // }
//
//   form.addEventListener('submit', (event) => {
//
//     if(username === "") return;
//     fetchJoke()
//     newJokeLi.innerHTML = `
//     <span class="username">${username} says:</span> ${joke}
//     `
//     jokeList.appendChild(newJokeLi)
//   })
// })
