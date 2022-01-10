console.log('Lesson 6');

// Class
// https://learn.javascript.ru/classes
// https://medium.com/front-stories/%D0%BA%D0%B0%D0%BA-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D1%8E%D1%82-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D1%8B-%D0%B2-javascript-7978c0003f1d
// https://www.typescriptlang.org/docs/handbook/classes.html
// https://www.youtube.com/watch?v=BASquaxab_w
// https://www.youtube.com/watch?v=uLY9GXGMXaA


// function Test(name, age) {
//     this.name = name
//     this.age = age
// //     this.sayName = function() {console.log(this.name)}
// }
//
// Test.prototype.sayName = function() {console.log(this.name)}
//
// let person = new Test ('Alexey', 33)
// console.log(person)


// console.dir(function (){})
// console.dir(class {})

// class Test {
// //типизация полей объекта который этот класс создаст
//     name: string
//     age: number
//
//     constructor(name: string, age: number) //отдельная типизация аргументов для конструктора
//     {
//         this.name = name
//         this.age = age
//     }
//     //для того чтобы отправить метод в Prototype, также не требует типизации
//     sayName() {
//         console.log(this.name)
//     }
//     sayBye = () => {
//         console.log(this.age)
//     }
// }
// //@ts-ignore  ОЧЕНЬ СТРАННОЕ РЕШЕНИЕ
// Test.prototype.sayName = function() {console.log(this.name)}
//
// let person = new Test('Alexey', 34)
// console.log(person)

// class Test {
//     name: string
//     age: number
//     bindedSayName: Function
//
//     constructor(name: string, age: number)
//     {
//         this.name = name
//         this.age = age
//          this.bindedSayName = this.sayName.bind(this)
//     }
//     sayName() {
//         console.log(this.name)
//     }
//     sayBye = () => {
//         console.log(this.age)
//     }
// }
//
// let person = new Test('Alexey', 34)
// console.log(person)


interface ITest {
    name: string
    age: number
    sayName: Function
}

interface ITest2 {
    name: string
    sayYo: Function
}

class Test implements ITest, ITest2 {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    sayName() {
        console.log(`Здраствуйте ${this.name}`)
    }

    sayYo() {
    }

    // Интерфейсы не препятсвуют расширению классов
    sayBye = () => {
    }
}


// создаем интерфейс с разширением предыдущих сущностей
interface IPerson extends ITest, ITest2 {
    city: string
    sayBla: Function
}

// создание наследования со своей отдельной типизацией
class Person extends Test implements IPerson {
    city: string

    constructor(name: string, age: number, city: string) {
        super(name, age);
        this.city = city
    }

    sayBla() {
        console.log(`Привет ${this.name} из ${this.city}`)
    }
    sayName() {
        console.log('yo yo yo')
        super.sayName()
    }
}

let somePerson = new Person("Anna", 25, "Madrid")
somePerson.sayBla()
somePerson.sayName()
console.log(somePerson)

// Task 01
// Создайте структуру с именем student, содержащую поля: имя и фамилия, номер группы, успеваемость (массив из пяти элементов).
// Создать массив из десяти элементов такого типа, упорядочить записи по возрастанию среднего балла.
// Добавить возможность вывода фамилий и номеров групп студентов, имеющих оценки, равные только 4 или 5.

// Task 02
// Создать класс с двумя переменными. Добавить конструктор с входными параметрами и инициализирующий члены класса по умолчанию.
// Можно ли создать метод на экземпляре класса который будет удалять сам экземпляр класса?
// Можно ли создать метод класса который будет удалять экземпляр класса?

// Task 03
// Составить описание класса для представления времени. Предусмотреть возможности установки времени и изменения его отдельных
// полей (час, минута, секунда) с проверкой допустимости вводимых значений. В случае недопустимых значений полей выбрасываются исключения.
// Создать методы изменения времени на заданное количество часов, минут и секунд.
// Создать метод выводящий время в строке формата HH:MM:SS
// Создать класс по вышеуказанному описанию

// Task 04
// Класс Покупатель: Фамилия, Имя, Адрес, Номер банковского счета;
// Методы: установка значений атрибутов, получение значений атрибутов, вывод информации.
// Создать массив объектов данного класса.
// Вывести список покупателей в алфавитном порядке и список покупателей, у которых номер кредитной карточки находится в заданном диапазоне.

// Task 05
// Создать класс машина - имеющий марку, число цилиндров, мощность. Определить конструктор и функцию печати.
// Создать производный класс – грузовик, имеющий грузоподъемность кузова.
// Определить функции переназначения марки и грузоподъемности.

// just a plug
export default () => {
};
