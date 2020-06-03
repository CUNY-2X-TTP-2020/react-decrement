import React from 'react';
import './App.css';

import Decrement from './components/Decrement';

function App() 
{
    return (
        <div className="App">
        <header className="App-header">
            <h1>Decrement</h1>
            <Decrement />
            <Decrement start={20} amount={1} />
            <Decrement start={50} amount={5} />
            <Decrement start={100} amount={10} />
            <Decrement start={2020} amount={199} />
        </header>
        </div>
    );
}

export default App;