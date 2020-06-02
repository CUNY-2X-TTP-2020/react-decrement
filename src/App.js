import React from 'react';
import './App.css';

import Decrement from './components/Decrement';

function App() 
{
    return (
        <div className="App">
        <header className="App-header">
            <h1>Decrement</h1>
            <Decrement start={20} />
        </header>
        </div>
    );
}

export default App;