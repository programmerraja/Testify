import {React} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import Uploader from './page/Uploader';

import './App.css';

function App() {
  return (
    <Router basename='/'>
      <Routes>
        <Route exact path="/" element={<Uploader/>}/>
      </Routes>
     
    </Router>
  );
}

export default App;
