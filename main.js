//(Main theme: Programming Basics)
function logNumbers() {
    for (let i = 0; i <= 100; i++) {
        if (i%3 === 0 & i%5 === 0) {
            console.log('Jackpot')
        } else if (i % 3 === 0) {
            console.log('This is divisible by 3')
        } else if (i % 5 === 0) {
            console.log('This is divisible by 5')
        } else
        console.log(i);
    }
}

logNumbers()

//(Main theme: DOM manipulation)

const body = document.querySelector('body')
const button = document.createElement('button')
button.innerText = 'Add image'
body.appendChild(button)

button.addEventListener('click', addImage)

function addImage() {
    const img = document.createElement('img')
    img.src = 'https://picsum.photos/200/300'
    body.appendChild(img)
}

//(Main theme: Async API calls)

// https://regres.in/api/users
const div = document.getElementById('users')

async function renderUser() {
    try {
        const response = await fetch('https://reqres.in/api/users')
        const users = await response.json()
        const datas = users.data;

        const firstthree = []
        datas.map((data) => {
            if(data.id <= 3) {
                firstthree.push(data)
            }
        })
        console.log(firstthree)
        //not workin 100%
        firstthree.forEach(element => {
            const h1 = document.createElement('h1')
            console.log(element.first_name)
            h1.innerHtml = `${element.first_name} ${element.last_name}`
            div.appendChild(h1)
        });
    } catch (error) {
        throw "Something went wrong"
    }
}

renderUser()

class Product {
    constructor (name, price) {
        this.name = name;
        this.price = price;
    }

    logProduct() {
        console.log(`${this.name} is ${this.price} kr`)

    }
}

const table = new Product('table', 1200)
table.logProduct()