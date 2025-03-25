import React, { useState } from 'react';
import BugForm from './components/BugForm';
import BugList from './components/BugList';

function App() {
    const [reload, setReload] = useState(false);

    const refreshBugs = () => {
        setReload(!reload);
    };

    return (
        <div className="App">
            <h1>Bug Tracker</h1>
            <BugForm refreshBugs={refreshBugs} />
            <BugList key={reload} />
        </div>
    );
}

export default App;
