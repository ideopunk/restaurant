const location = document.createElement('div')
location.id = "Location"

const locationText = document.createElement('p')
const locationTitle = document.createElement('h3')
locationText.textContent = "Look up. Look around. What do you see? A giant fry-tower in the distance, curved like the wing of a predatory bird? There lies your true happiness. That you are not here, drinking of potato-milk and potato-honey, speaks only to your failure."
locationTitle.textContent = "Location"

const contactText = document.createElement('p')
const contactTitle = document.createElement('h3')
const emailLink = document.createElement('a')
emailLink.setAttribute('href', 'mailto:potoooooooo@pt8o.com')
emailLink.textContent = "potoooooooo@pt8o.com"
contactText.appendChild(emailLink)
contactTitle.textContent = "Contact"

let list = [locationTitle, locationText, contactTitle, contactText]

for (let i = 0; i < list.length; i++) {
    location.appendChild(list[i])
}

export default location