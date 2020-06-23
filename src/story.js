const story = document.createElement('div');
const storyTitle = document.createElement('h2');
const storyText = document.createElement('p')

storyTitle.textContent = "Our Story"
storyText.textContent = "Potatoland began as a humble backyard operation. Over the years we are happy to report that we've become an arrogant backyard operation."

let list = [storyTitle, storyText];

for (let i = 0; i < list.length; i++) {
    story.appendChild(list[i])
}

export default story