import { makeAutoObservable } from 'mobx'

export class Count {
  count = 0

  constructor() {
    makeAutoObservable(this)
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
}

interface INote {
  id: string
  title: string
  completed: boolean
}

export class Notes {
  notes: INote[] = []

  constructor() {
    makeAutoObservable(this)
  }

  add(title: string) {
		const id = Date.now().toString()

		this.notes.push({ title, id, completed: false })
  }

  remove(id: string) {
    this.notes = this.notes.filter(note => note.id !== id)
  }

  update(id: string) {
    this.notes = this.notes.map(note => {
      return note.id === id ? { ...note, completed: !note.completed } : note
    })
	}
}
