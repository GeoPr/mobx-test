import { makeAutoObservable, autorun } from 'mobx'

class Count {
  count = JSON.parse(localStorage.getItem('count') ?? '0')

  constructor() {
    makeAutoObservable(this)
    autorun(this.updateLS.bind(this))
  }

  increment() {
    this.count += 1
  }

  decrement() {
    this.count -= 1
  }

  reset() {
    this.count = 0
  }

  updateLS() {
    localStorage.setItem('count', JSON.stringify(this.count))
  }
}

export const count = new Count()
