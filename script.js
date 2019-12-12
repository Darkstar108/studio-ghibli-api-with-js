const app = document.getElementById('root')

const logo = document.createElement('img')
logo.src = 'logo.png'

const container = document.createElement('div')
container.setAttribute('class', 'container')

// Append logo and container to root
app.appendChild(logo)
app.appendChild(container)

fetch('https://ghibliapi.herokuapp.com/films')
    .then((response) => {
        // return only if response ok
        if(response.ok)
            return response.json()
        else    
            throw new Error
    })
    // Work with JSON data
    .then((data) => {
        data.forEach((movie) => {
            console.log(movie.title)
            // Create div with class card
            const card = document.createElement('div')
            card.setAttribute('class', 'card')
            // Create h1 and set its text content to film's title
            const h1 = document.createElement('h1')
            h1.textContent = movie.title
            // Create a p and set its text content to film's description(limited to 300 chars)
            const p = document.createElement('p')
            movie.description = movie.description.substring(0, 300)
            p.textContent = movie.description+'...'
            // Append h1 and p to card
            card.appendChild(h1)
            card.appendChild(p)
            // Append card to container
            container.appendChild(card)
        })
    })
    // Do something for an error here
    .catch((err) => {
        
    })