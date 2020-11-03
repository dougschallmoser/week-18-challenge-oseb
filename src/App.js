import React, { useEffect, useState } from 'react';
import { Route } from "react-router-dom";
import People from './People';

const App = () => {
  const URL = 'http://api.open-notify.org/astros';

  const [people, setPeople] = useState([])

  useEffect(() => {
    const fetchPeople = async () => {
      const response = await fetch(URL);
      const { people } = await response.json();
      setPeople(people)
    }

    fetchPeople();

  }, [])

  return (
    <Route exact path="/people">
      <People people={people} />
    </Route>
  )
}

export default App;