const arrayOfNumbers: Array<number> = [1, 1, 2, 3, 5]
const arrayOfStrings: Array<string> = ['Hello', 'Vladilen']


function reverse<T>(array: T[]): T[] { // function reverse(array) для указания ф-ции которая работает с разными типами данных T[] - массив типа Т и возвращать также может различные массивы
  return array.reverse()
}

reverse(arrayOfNumbers)
reverse(arrayOfStrings)
