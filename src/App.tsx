import React from 'react';
import './App.css';
import { Person, Continent } from './Components/Person';

function App() {

  return (
    <div className="App">
      <Person
        name="Ubaid"
        email="ubaid@advergi.com"
        age={21}
        isDeveloper={true}
        hobbies={["Watching Cricket", "Playing Mobile Games", "Scrolling Instagram"]}
        Continent={Continent.Asia}
      />
    </div>
  );
}

export default App;
