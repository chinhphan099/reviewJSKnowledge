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
