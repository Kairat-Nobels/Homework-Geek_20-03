// Создать пустой массив и в него добавить числа от 0 до 10 при помощи цикла for (используйте метод push() )

console.log("\t\tЗадание № 1")
const arr = []
// for (let i = 0; i <= 10; i++) arr.push(i);
// console.log(arr)
//  ПРОСТОЙ FOR ТУТ ОТЛИЧНО СПРАВИЛСЯ, В ОДНУ СТРОЧКУ
let i = 0
while (i <= 10) {
    arr.push(i)
    i++
}
console.log(arr)

// задание №2
// При помощи цикла выводить цифры в убывающем порядке от 20 до 0
console.log("\n\t\tЗадание № 2")
// for (let i = 20; i >= 0; i--) console.log(i)
let j = 20;
while (j >= 0) {
    console.log(j)
    j--
}

// задание №3 Сфетофор
let svetofor = prompt('Введите цвет светофора:').toLowerCase().trim()
svetofor === 'красный' ? alert('Стоп!') : svetofor === 'желтый' || svetofor === 'жёлтый' ? alert('Приготовьтесь') : svetofor === 'зеленный' || svetofor === 'зелённый' ? alert('Можно идти/ехать'): alert('Надо ввести один из цветов: красный, желтый, зеленный')