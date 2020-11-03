import React from 'react';

const People = ({ people }) => {
  return (
    <div>
      {people.map(person => {
        return <p key={person.name}>{person.name}</p>
      })}
    </div>
  )
}

export default People;