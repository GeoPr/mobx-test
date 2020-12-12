import React, { useState } from 'react'
import { observer } from 'mobx-react'
import { notes } from '../../state/notes'
import './Form.scss'

const Form: React.FC = () => {
  const [title, setTitle] = useState('')
	
	const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (title.trim().length) {
			notes.add(title)
		}

		setTitle('')
	}

  return (
    <form action="#" className="form" onSubmit={submitHandler}>
      <input
        type="text"
        className="form__input"
        autoComplete="off"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button className="form__button">Add</button>
    </form>
  )
}

export default observer(Form)
