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
    }
    meow() {
      console.log(`${this.name} kêu meo meo`)
    }
    run() {
      handle(this.meow.bind(this))
    }
  }
  const alex = new Cat('name')
  alex.run()
  ```
