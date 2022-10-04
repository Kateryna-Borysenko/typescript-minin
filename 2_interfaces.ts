interface Rect { //интерфейсы нужны для объекто или классов
  readonly id: string //только для чтения поле 
  color?: string  //не обязательное поле
  size: {
    width: number
    height: number
  }
}

const rect1: Rect = {
  id: '1234',
  size: {
    width: 20,
    height: 30
  },
  color: '#ccc'
}

const rect2: Rect = {
  id: '12345',
  size: {
    width: 10,
    height: 5
  }
}

rect2.color = 'black'
// rect2.id = '3232'

//можем указывать к какому типу будет относиться объект

const rect3 = {} as Rect //строго привили к какомуто типу
const rect4 = <Rect>{} //это альтернативная старая запись строки 32

// =====================
//наследование интерфейсов -> у него будет всё что есть в Rect + новый метод
interface RectWithArea extends Rect {
  getArea: () => number //эта ф-ция вернёт число
}

const rect5: RectWithArea = {
  id: '123',
  size: {
    width: 20,
    height: 20
  },
  getArea(): number {
    return this.size.width * this.size.height
  }
}

// ==================

interface IClock {
  time: Date //типизация даты
  setTime(date: Date): void //ничего не вернёт
}

class Clock implements IClock {
  time: Date = new Date()

  setTime(date: Date): void {
    this.time = date
  }
}

// =================
//в случае когда нам нужно создать объект с кучей денамических ключей 

interface Styles {
  [key: string]: string //спец синтаксис [key: string]
}

const css: Styles = {
  border: '1px solid black',
  marginTop: '2px',
  borderRadius: '5px'
}


