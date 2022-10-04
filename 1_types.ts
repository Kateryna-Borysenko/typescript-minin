const isFetching: boolean = true
const isLoading: boolean = false

const int: number = 42
const float: number = 4.2
const num: number = 3e10

const message: string = 'Hello Typescript'

const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13]
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13] //дженерик

const words: string[] = ['Hello', 'Typescript']

// Tuple - тАпл
const contact: [string, number] = ['Vladilen', 1234567]

// Any - если нужно переопределить
let variable: any = 42
// ... переоперделение
variable = 'New String'
variable = []

// ==== ничего не возвращает Войд - пустой
function sayMyName(name: string): void {
  console.log(name)
}
sayMyName('Хайзенберг')

// Never - либо когда возвращает ошибку, либо она постоянно что то делает
function throwError(message: string): never {
  throw new Error(message)
}
//функция никогда не завершиться
function infinite(): never {
  while (true) {

  }
}

// Type - для создания элиосов 
type Login = string

const login: Login = 'admin'
// const login2: Login = 2

type ID = string | number 
const id1: ID = 1234
const id2: ID = '1234'
// const id3: ID = true

type SomeType = string | null | undefined //прописываем именно так 
