import React, { useEffect, useState } from 'react';
import { Route } from "react-router-dom";
import People from './People';
import NavBar from './NavBar';
import Number from './Number';

const App = () => {
  const URL = 'http://api.open-notify.org/astros';

  const [people, setPeople] = useState([])
  const [numPeople, setNumPeople] = useState(0)

  useEffect(() => {
    const fetchPeople = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      setPeople(data.people)
      setNumPeople(data.number)
    }

    fetchPeople();

  }, [])

  return (
    <>
      <Route path="/">
        <NavBar />
      </Route>
      <Route exact path="/people">
        <People people={people} />
      </Route>
      <Route exact path="/number">
        <Number numPeople={numPeople} />
      </Route>
    </>
  )
}

export default App;