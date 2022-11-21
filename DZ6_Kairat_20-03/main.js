const input = document.getElementById('input')
const button = document.getElementById('create_button')
const list = document.getElementById('todo__list')
let todo = e =>
{
    if (input.value.trim() != '') {
        let arr = []
        arr.push(input.value)
        arr.map(word => {
            const p = document.createElement('p')
            list.append(p)
            p.append(word, " - ", word.split("").reverse().join(""))
        })
        input.value = ""   
    }
    else input.value = ""
}
button.onclick = () => todo()
input.onkeydown = e =>{
    if (e.keyCode === 13) todo()
}