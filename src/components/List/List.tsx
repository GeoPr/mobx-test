import React from 'react'
import { observer } from 'mobx-react'
import { useContextValue } from '../../state/state'
import './List.scss'

const List: React.FC = () => {
  const { notes } = useContextValue()

  const updateNotes = (id: string, fn: 'remove' | 'update') => {
    notes[fn](id)
  }

  return (
    <ul className="list">
      {notes.notes.map(note => (
        <li key={note.id}>
          <div>
            <label>
              <input
                type="checkbox"
                onChange={() => updateNotes(note.id, 'update')}
              />
              <div>
                <span>{note.title}</span>
              </div>
            </label>
          </div>
          <button onClick={() => updateNotes(note.id, 'remove')}>Remove</button>
        </li>
      ))}
    </ul>
  )
}

export default observer(List)
