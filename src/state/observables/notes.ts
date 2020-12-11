import { makeAutoObservable, autorun } from 'mobx'

interface INote {
  id: string
  title: string
  completed: boolean
}

export class Notes {
  notes: INote[] = JSON.parse(localStorage.getItem('notes') ?? '[]')

  constructor() {
		makeAutoObservable(this)
		autorun(this.updateLS.bind(this))
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

  updateLS() {
    localStorage.setItem('notes', JSON.stringify(this.notes))
  }
}
