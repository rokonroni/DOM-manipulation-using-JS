const textBoxes = document.querySelectorAll('div[data-content]')
const showBox = document.getElementById('show-box')
const clearBtn = document.getElementById('clear-btn')

function updateShowBox(html) {
    showBox.innerHTML = html
    localStorage.setItem('show-box', html)
}

textBoxes.forEach((textBox) => {
    textBox.addEventListener('click', () => {
        let html = `${showBox.innerHTML} ${textBox.dataset.content}`;
        updateShowBox(html)
    })
})

function clearShowBox() {
    showBox.innerHTML = ''
    localStorage.removeItem('show-box')
}

clearBtn.addEventListener('click', clearShowBox);

(function () {
    let html = localStorage.getItem('show-box');
    showBox.innerHTML = html
})()