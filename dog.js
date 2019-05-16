class Walk {
    constructor(location, distance) {
        this.location = location
        this.distance = distance
        this.time = new Date()
    }

    // Override the standard toString function. This way, we
    // can console.log the whole instance of Walk and toString
    // will be called automagically, allowing us to control
    // how the object is displayed.
    toString() {
        return `${this.time.toLocaleDateString()}: Walked ${this.distance}km in ${this.location}.`
    }
}

class Dog {
    constructor(name, location) {
        this.name = name
        this.location = location
        this.walks = []  // A Dog can have many Walks, so create an empty array to hold them
    }

    speak() {
        console.log(`Woof! My name is ${this.name}!`)
    }

    walk(location, distance) {
        // Create a new instance of Walk, passing in the location
        // and distance to the constructor.
        // Once created, push this new Walk object into the walks array.
        this.walks.push(new Walk(location, distance))
    }

    display_walks() {
        // Since each element of this.walks is an instance of Walk,
        // and Walk has a toString function, we can join all the elements
        // with newline characters, and Javascript will automagically
        // call toString on each element to get a string representation.
        console.log(this.walks.join('\n'))
        console.log(`Total distance: ${this.total_distance()}km`)
    }

    total_distance() {
        // reduce() is a method on Array that takes a callback function.
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
        return this.walks.reduce((total, walk) => total + walk.distance, 0)
    }
}

