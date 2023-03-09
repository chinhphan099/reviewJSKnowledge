// Basic Type
// string
let bike: string
bike = 'BMW'
// bike = 123 // lỗi

// number
let num: number = 10 // let num = 10 cũng được

// booling
let isBooling: boolean = false

// undefined
let body: undefined = undefined

// any <= Hạn chế sử dụng
let person: any
person = 10
person = 'BMW'

// Object
// Lỗi vì address chưa được khai báo trong house
// let house = {}
// house.address = 'HCM'

let house: {
  address: string, // Bắt buộc phải có address trong object house
  color?: string // dấu ?: => không bắt buộc có color trong object house
} = {
  address: '' // Phải khai báo giá trị mặc định đối với Object
}
house.address = 'abc'

// Array
let products: any[] = []
products.push('Text')
products.push(1)

let names = ['Tom', 'Jery'] // Gán thẳng giá trị vào

let address: string[] = []
address.push('Vietnam')
address = ['A', 'B']

let numbers: number[] = []
numbers.push(1)
numbers = [1, 2, 3]

let people: { name: string, age: number }[] = []
people.push({ name: 'Tom', age: 12 })

// Funtion
// Cách 1
const sum = (num1: number, num2: number): number/*quy định kiểu return phải là number ở trong function*/ => num1 + num2
// Cách 2
const sub: (num1: number, num2: number) => number = (num1: number, num2: number) => num1 - num2

// const handle = (): void => {
const handle = () => {
  // function không return gì cả thì là kiểu void
  console.log(123)
}

// Union
let price: number | string | boolean
price = 10
price = '$10'
price = true

let obj: { name: string | boolean } | { fullName: string | boolean } = {
  name: ''
}
obj.name = 'Tom'
console.log(obj.name)

// Enum
enum Sizes {
  S = 'S',
  M = 'M'
}
let size = Sizes.S // 'S'

// interface
interface State {
  name: string,
  isLoading: boolean
}
interface State {
  finish: boolean
}
// State sẽ tự động merge 2 State lại, nên sẽ có 3 field name, isLoading, ninish
let state: State = {
  name: '',
  isLoading: false,
  finish: false
}

// type
type Person = {
  name: string
}
type Person1 = {
  finish: boolean
}
type People = Person & Person1 // Merge nhiều type lại với nhau
type People2 = Person | Person1

let nguoi: Person = {
  name: ''
}
let NhieuNguoi: People = {
  name: '',
  finish: false
}

const handleClick = <Type>(value: Type) => value // Đầu vào và ra sử dụng cùng kiểu Type (phụ thuộc lúc gọi hàm)
const text = 'Text'
const number = 123
handleClick<string>(text)
handleClick<number>(number)
// handleClick<number>(text) // Lỗi, vì text và number không cùng kiểu
