import {React} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import Uploader from './page/Uploader';
import Editor from './page/Editor';

import './App.css';

function App() {
  return (
    <Router basename='/'>
      <Routes>
        <Route exact path="/" element={<Uploader/>}/>
        <Route exact path="/editor" element={<Editor/>}/>

      </Routes>
     
    </Router>
  );
}

export default App;
