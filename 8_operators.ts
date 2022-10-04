interface Person {
  name: string
  age: number
}

type PersonKeys = keyof Person // 'name' | 'age' keyof -> позволяет брать ключи с интрфейса

let key: PersonKeys = 'name'
key = 'age'

//==========

type User = {
  _id: number
  name: string
  email: string
  createdAt: Date
}

type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createdAt'> // 'name' | 'email' // Exclude - исключает
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'> // 'name' | 'email' //Pick - осотавляет нужные поля


let u1: UserKeysNoMeta1 = 'name'
// u1 = '_id'
