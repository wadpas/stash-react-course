import persons from '../data/persons'
import Person from './Person'

function Persons() {
  return (
    <div className="cards">
      {persons.map((person) => (
        <Person {...person} key={person.id} />
      ))}
    </div>
  )
}

export default Persons
