class Cars
{
    static type = 'Cars'
    constructor(options)
    {
        this.model = options.model
        this.color = options.color
        this.wheels = options.wheels
    }
    start()
    {
        console.log('Машина заведена');
    }
}
class Toyota extends Cars
{
    static type = "TOYOTA"
    constructor(options)
    {
        super(options)
        this.transmission = options.transmission
    }
    start()
    {
        console.log('Toyota - япошка завелася');
    }
}
class Lexus extends Cars
{
    static type = "LEXUS"
    constructor(options)
    {
        super(options)
        this.volume = options.volume
    }
    
}
class Bentley extends Cars
{
    static type = "BENTLEY"
    constructor(options)
    {
        super(options)
        this.year = options.year
    }
    start()
    {
        console.log('Bentley готова ехать!');
    }
}

const bentley = new Bentley({
    model: 'Continental',
    color: 'silver',
    wheels: 4,
    year: 2019
})
console.log('\t\t Задание №1');
console.log('\n\t\t Bentley\n',bentley, '\n Bentley type = ', Bentley.type);
bentley.start()

const toyota = new Toyota({
    model: 'Camry',
    color: 'white',
    wheels: 4,
    transmission: 'Automatic'
})
console.log('\n\t\t Toyota\n',toyota, '\n Toyota type = ', Toyota.type);
toyota.start()

const lexus = new Lexus({
    model: 'RX 350',
    color: 'sky blue',
    wheels: 5,
    volume: 8
})
console.log('\n\t\t Lexus\n',lexus, '\n Toyota type = ', Lexus.type);
lexus.start()


// svetofor
class Light
{
    constructor(selector)
    {
        this.$element = document.getElementById(selector)
    }
}

class Circle extends Light
{
    constructor(options)
    {
        super(options.selector)
        this.$element.style.backgroundColor = options.color
        this.$element.textContent = options.text
    }
}

let color = prompt('Введите цвет светофора:').toLowerCase();
if (color === 'красный') {
    const red = new Circle({
        selector: 'red',
        color: 'red',
        text: 'stop'
    })
}
else if (color === 'желтый' || color === 'жёлтый') {
    const yellow = new Circle({
        selector: 'yellow',
        color: 'yellow',
        text: 'wait'
    })
}
else if (color === 'зеленный' || color === 'зеленый' || color === 'зелённый' || color === 'зелёный') {
    const green = new Circle({
        selector: 'green',
        color: 'green',
        text: 'go'
    })
}
else alert('Вы должны ввести цвет светофора: красный, желтый или зеленный')
