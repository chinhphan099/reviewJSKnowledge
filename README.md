# reviewJSKnowledge
  - Toán Tử ??
    * Kiểm tra giá trị là undefine hoặc là null
  - ES6 Class
  ```
  function handle(cb) {
    cb && cb()
  }
  class Cat {
    constructor(name) {
      this.name = name
      // Cách 1 fix lỗi this, bổ sung:
      // this.meow = this.meow.bind(this)
    }
    // Cách 2: sử dụng arrow function
    // meow () => {...}
    meow() {
      console.log(`${this.name} kêu meo meo`)
    }
    run() {
      handle(this.meow) // Có lỗi
      // Cách 3: sử dụng arrow function
      // handle(() => this.meow())
      // Cách 4: sử dụng bind
      // handle(this.meow.bind(this))
    }
  }
  const alex = new Cat('name')
  alex.run()
  ```
  - Callback function
  ```
  const nums = [1, 2, 3, 4, 5]
  const callback = (value, index) => {
    console.log(`STT ${index} la ${value}`)
  }
  nums.forEach(callback)
  Tham số của forEach là 1 function có tối đa 3 tham số gồm: giá trị hiện tại, index, array
  https://www.w3schools.com/jsref/jsref_foreach.asp
  ```
  - Currying là function return về function
  ```
  function findNumber(num) {
    return function(fnc) {
      const result = []
      for (let i = 0; i <= num; i++) {
        if (fnc(i)) {
          result.push(i)
        }
      }
      return result
    }
  }
  // Sử dụng Arrow function
  const findNumber = (num) => (fnc) => {
    const result = []
    for (let i = 0; i <= num; i++) {
      if (fnc(i)) {
        result.push(i)
      }
    }
    return result
  }
  // const timSoChan = findNumber(10)((number) => number % 2 === 0)

  function KiemTraSoChan(num) {
    return num % 2 === 0
  }
  const timSoChan = findNumber(10)(KiemTraSoChan)

  console.log(timSoChan)
  ```

  - Bất đồng bộ
  * Sử dụng promise
  ```
  const promiseFnc = (num) => new Promise((resolve, reject) => {
    !(num % 2) ? resolve('Đây là số chẵn') : reject('Đây không phải là số chẵn')
  })

  const value = promiseFnc(10)
                .then(() => {
                  // mặc định trả về một promise
                  return 100 // Đây là giá trị trả về cuối cùng của promise nếu resolve
                })
                // Có thể viết thêm nhiều .then() nữa, .then sau sử dụng giá trị trả về của .then trước
                .catch((err) => {
                  console.log(err)
                  return -100 // Đây là giá trị trả về cuối cùng của promise nếu reject
                })
                .finally(() => console.log('Luôn luôn chạy vào finally!'))
  value.then((val) => {
    console.log(val) // val: là giá trị trả về từ promise sau mỗi 'then'
  })
  console.log(value) // value là một promise function
  ```

  * Sử dụng async, await. await nằm trong async, await sử dụng với một promise function
  ```
  const promiseFnc = (num) => new Promise((resolve, reject) => {
    !(num % 2) ? resolve('Đây là số chẵn') : reject('Đây không phải là số chẵn')
  })
  const handle = async () => {
    try {
      const value = await promiseFnc(10)
      console.log(value)
    }
    catch (error) {
      console.log(error)
    }
    finally {
      console.log('Finally')
    }
  }
  handle()
  ```
