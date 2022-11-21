const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const rez = document.getElementById('count')
let c = 0;
plus.onclick = (e) =>
{
    c++
    if (c > 0) {
        rez.textContent = c
        rez.style.color = 'green'
    }
}
minus.onclick = (e) =>
{
    if (c > 0) {
        c--
        rez.textContent = c
        rez.style.color = 'red'
    }
}

// second
const posX = document.getElementById('posX')
const posY = document.getElementById('posY')
const block = document.querySelector('.cursor')
block.addEventListener('mousemove', e =>
{
    let x = e.screenX
    let y = e.screenY
    posX.innerText = x
    posY.innerText = y
})

// autoligth
const circles = document.querySelectorAll('.circle')
let activeLight = 0
setInterval(() =>
{
    changeLight();
}, 2000);

const changeLight = () =>
{
    circles[activeLight].className = 'circle';
    activeLight++;
    if (activeLight > 2) activeLight = 0;
    const currentLight = circles[activeLight]
    currentLight.classList.add(currentLight.getAttribute('color'))
};

// svetofor
let color = prompt('Введите цвет светофора:').toLowerCase();
const red = document.getElementById('red')
const yellow = document.getElementById('yellow')
const green = document.getElementById('green')
if (color === 'красный') {
    red.style.backgroundColor = 'red';
    red.textContent = "stop"
}
else if (color === 'желтый' || color === 'жёлтый') {
    yellow.style.backgroundColor = 'yellow';
    yellow.textContent = 'wait'
}
else if (color === 'зеленный' || color === 'зеленый' || color === 'зелённый' || color === 'зелёный') {
    green.style.backgroundColor = 'green'
    green.textContent = 'go'
}
else alert('Вы должны ввести цвет светофора: красный, желтый или зеленный')

// onclick
red.onclick = e =>
{
    red.style.backgroundColor = 'red';
    red.textContent = "stop"
    yellow.style.backgroundColor = 'rgb(4, 28, 28)';
    yellow.textContent = ''
    green.style.backgroundColor = 'rgb(4, 28, 28)'
    green.textContent = ''
}
yellow.onclick = e =>
{
    red.style.backgroundColor = 'rgb(4, 28, 28)';
    red.textContent = ""
    yellow.style.backgroundColor = 'yellow';
    yellow.textContent = 'wait'
    green.style.backgroundColor = 'rgb(4, 28, 28)'
    green.textContent = ''
}
green.onclick = e =>
{
    red.style.backgroundColor = 'rgb(4, 28, 28)';
    red.textContent = ""
    yellow.style.backgroundColor = 'rgb(4, 28, 28)';
    yellow.textContent = ''
    green.style.backgroundColor = 'green'
    green.textContent = 'go'
}