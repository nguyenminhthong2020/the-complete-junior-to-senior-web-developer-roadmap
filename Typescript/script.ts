// Boolean
let isCool: boolean = true

// Number
let age: number = 56

// String
let eyeColor: string = 'brown';
let favouriteQuote: string = `I'm not old, I'm only ${age}`

// Array
let pets: string[] = ['cat', 'dog', 'pig']
let pets2: Array<string> = ['lion', 'dragon', 'lizard']

// Objects
let wizard: object = {
    a: 'John'
}

// null and undefined
let meh: undefined = undefined
let noo: null=null

// Tuple
let basket: [string, number];
basket = ['basketball', 5];

// Enum
enum Size {Small=1, Medium = 2, Large = 3}
let sizeName: string = Size[2];

// Any BE CAREFUL
let whatever: any = 'aghhhhhhhhh nooooooo!!!';
whatever = true

// Void
let sing = ():void => {
    console.log('lalalalalala');
}

// Never
let error = ():never => {
    throw Error('ooops');
}

// Interface
interface RobotArmy {
    count: number,
    type: string,
    magic: string
}

let fightRobotArmy = (robots: RobotArmy) => {
    console.log('FIGHT!')
}

let fightRobotArmy2 = (robots: {count: number, type: string, magic: string}) => {
    console.log('FIGHT!')
}

// Type assertion
interface CatArmy {
    count: number,
    type: string,
    magic: string
}

let dog = {} as CatArmy
dog.count

// Function
let fightRobotArmy3 = (robots: RobotArmy):void => {
    console.log('FIGHT!')
}

let fightRobotArmy4 = (robots: {count: number, type: string, magic: string}):number => {
    console.log('FIGHT!')
 return 5
}

// Class
class Animal {
    private sing: string = 'alalalalalallal';
    constructor(sound: string) {
        this.sing = sound;
    }

    greet():string {
        return `Hello, ${this.sing}`
    }
}

let lion = new Animal("RAWR")
lion.greet()

// Union
let confused: string | number | boolean = "hello"

let x:number = 4
// x = 'hello'