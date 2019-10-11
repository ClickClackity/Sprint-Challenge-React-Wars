import React, {useState, useEffect} from 'react';
import axios from 'axios';
import DisplayCard from './components/DisplayCard';
import { Row, CardGroup} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
 
    const [starWarsPerson, setStarWarsPerson] = useState();

    
    
    useEffect(() => {
      axios
        .get("https:///swapi.co/api/people/")
        .then(response => {
          setStarWarsPerson(response.data.results);
        })
        .catch(error => `Error: ${error}`);
    }, []);

    if(!starWarsPerson){
       return (
          <div className="App">
            <h1 className="Header">React Wars</h1>
            
            <div className="loader">
              <h2>Loading.. </h2>
           </div>
        </div>
    );

    }
  
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <Row>
          <CardGroup>
            {starWarsPerson.map((person, index) => {
              return <DisplayCard key={index} person={person} />;
            })}
          </CardGroup>
        </Row>
      </div>
    );
};

export default App;
