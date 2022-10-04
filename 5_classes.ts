class Typescript {
  version: string

  constructor(version: string) {
    this.version = version
  }

  info(name: string) {
    return `[${name}]: Typescript version is ${this.version}`
  }
}

// идентичная запись
// class Car {
//   readonly model: string
//   readonly numberOfWheels: number = 4
//
//   constructor(theModel: string) {
//     this.model = theModel
//   }
// }

class Car {
  readonly numberOfWheels: number = 4
  constructor(readonly model: string) {}
}
// ==============


class Animal {
  protected voice: string = '' //модификатор   protected - доступно всем
  public color: string = 'black' //доступно всет

  constructor() {
    this.go()
  }

  private go() {
    console.log('Go') //модификатор  private - доступен только в animal
  }
}

class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice
  }
}

const cat = new Cat()
cat.setVoice('test')
console.log(cat.color)
// cat.voice

// =====================

abstract class Component { //обстрактный клас для наследования 
  abstract render(): void
  abstract info(): string
}

class AppComponent extends Component {
  render(): void {
    console.log('Component on render')
  }

  info(): string {
    return 'This is info';
  }
}

