const potatoes = document.createElement('div')

const potatoesTitle = document.createElement('h2')
const potatoesText = document.createElement('p')
const potatoesPromise = document.createElement('p')
potatoesTitle.textContent = "Our Potatoes"
potatoesText.textContent = "Our inground deep fryer extends down to hell."
potatoesPromise.textContent = "Those who try our potatoes never eat anything else again."

let list = [potatoesTitle, potatoesText, potatoesPromise];

for (let i = 0; i < list.length; i++) {
    potatoes.appendChild(list[i])
}

export default potatoes