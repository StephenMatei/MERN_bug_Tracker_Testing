import React, { useState } from 'react';
import { createBug } from '../api';

const BugForm = ({ refreshBugs }) => {
    const [bug, setBug] = useState({ title: '', description: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createBug(bug);
        setBug({ title: '', description: '' });
        refreshBugs();
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Report a Bug</h2>
            <input 
                type="text" 
                placeholder="Title" 
                value={bug.title} 
                onChange={(e) => setBug({ ...bug, title: e.target.value })} 
                required 
            />
            <textarea 
                placeholder="Description" 
                value={bug.description} 
                onChange={(e) => setBug({ ...bug, description: e.target.value })} 
                required 
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default BugForm;
