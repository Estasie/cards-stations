import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Header from "./components/Header/Header";
import CardsPage from "./pages/CardsPage/CardsPage";
import './App.css';

const data = require('./dataMock.json');

function App() {
    const [cards, setCards] = useState(data);


  return (
      <Router>
          <div className="App">
              <Header />
              <Routes>
                  <Route path='/cards' element={<CardsPage cards={cards}/>} />
              </Routes>
          </div>
      </Router>

  );
}

export default App;
