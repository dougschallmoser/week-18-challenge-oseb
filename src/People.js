import React from 'react';

const People = ({ people }) => {

  const renderedPeople = people.map(person => {
    return (
      <div key={person.name}>
        <h1>{person.name}</h1>
        <p>{person.craft}</p>
      </div>
    )
  })

  return (
    <div>{renderedPeople}</div>
  )
}

export default People;