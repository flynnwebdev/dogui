let dogs = []

function add_walk(dogindex) {
    let dog = dogs[dogindex]
    let loc = prompt(`Where did you walk ${dog.name}?`)
    let dist = prompt('How long (km) was the walk?')
    dog.walk(loc, dist)
    refresh_view()
}

function refresh_view() {
    let doglist = document.querySelector('#doglist')
    doglist.innerHTML = ''
    dogs.forEach((dog, index) => {
        let walks = ''
        for (walk of dog.walks) {
            walks += `<p class="walk">${walk}</p>`
        }
        doglist.innerHTML += `
            <div class="dog" data-index="${index}">
                <div class="details">
                    <h3>${dog.name}</h3>
                    <h4>${dog.location}</h4>
                    <button onclick="add_walk(${index})">Add Walk</button>
                </div>
                <div class="walks">${walks}</div>
            </div>
        `
    })
}

document.querySelector('#add_dog').addEventListener('click', () => {
    let name = prompt('Enter the name of the dog')
    let loc = prompt(`Where does ${name} live?`)
    dogs.push(new Dog(name, loc))
    refresh_view(dogs)
})
