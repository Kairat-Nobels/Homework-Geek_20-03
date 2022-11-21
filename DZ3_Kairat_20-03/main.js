// 1) Написать функцию, которая принимает 2 параметра (числа) и возвращает в консоли самый минимальный из них.
console.log('\t\t Задание № 1')
let minimym = (x, y) => console.log("Меньшее число = ", Math.min(x, y))
let x = Number(prompt('Введите первое число'))
let y = Number(prompt('Введите второе число'))
if (isNaN(x)|| isNaN(y)) {
    alert('вы должны ввести числа!')
    console.log("Надо было ввести числа")
}
else minimym(x,y)

// 2) Написать функцию которая принимает 1 параметр в который попадает promt() и вернуть длину строки в консоли.
console.log('\n\t\t Задание № 2')
let Len = (slovo) => console.log("Длина слова ", slovo, " = ", slovo.length)
let s = prompt('Введите слово:')
Len(s)

// 3) Написать простой калькулятор при помощи функции и его параметров. Функция должна уметь вычислять: деление "/",  умножение "*", вычитание "-", сложение "+" 
console.log('\n\t\t Задание № 3 = Калькулятор')
let a = Number(prompt('Введите первое число для калькулятора'))
let oper = prompt('Введите математическую операцию: +, -, *, /')
let b = Number(prompt('Введите второе число для калькулятора'))
let rezult = "Error"
const calc = (a, b, oper, rezult) =>
{
    switch (oper) {
        case '+':
            rezult = a + b
            break;
        case '-':
            rezult = a - b
            break;
        case '*':
            rezult = a*b
            break;
        case '/':
            if (b === 0) {
                console.log('Нельзя делить на 0')
                break
            }
            rezult = a/b
            break;
        default:
            console.log('Error')
            break;
    }
    return console.log("Результат:", a, oper, b, '=', rezult)
}
if (isNaN(a)|| isNaN(b)) {
    alert('вы должны ввести числа!')
    console.log("Надо было ввести числа")
}
else calc(a, b, oper,rezult)