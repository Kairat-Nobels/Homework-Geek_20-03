const input = document.getElementById('input')
const button = document.getElementById('create_button')
const list = document.getElementById('todo__list')

let todo = e =>
{
    if (input.value.trim() != '') {
        const div = document.createElement("div")
        const text = document.createElement("h3")
        const buttons = document.createElement("div")
        const change = document.createElement("button")
        const del = document.createElement("button")
        text.innerText = input.value
        list.append(div)
        div.append(text, buttons)
        input.value = ""
        // blocks
        buttons.setAttribute("class", "buttons")
        // change
        buttons.append(change, del)
        change.setAttribute("class", "block_text")
        change.setAttribute("class", "change")
        change.innerText = "change"
        change.onclick = (e) =>
        {
            // проверка чтобы не изменили на пробел или пустоту
            let ttt = prompt(`Edit text: ${text.innerText}`).trim()
            if(ttt != "" || ttt.length != 0) text.innerText = ttt;
        }
        // delete
        div.setAttribute("class", "block_text")
        del.setAttribute("class", "delete")
        del.innerText = "delete"
        del.onclick = (e) => div.remove()
    }
    else input.value = ""
}
button.onclick = () => todo()
input.onkeydown = e =>
{
    if (e.keyCode === 13) todo()
}