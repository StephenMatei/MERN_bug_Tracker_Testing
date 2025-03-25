import React, { useEffect, useState } from 'react';
import { fetchBugs, updateBug, deleteBug } from '../api';

const BugList = () => {
    const [bugs, setBugs] = useState([]);

    useEffect(() => {
        loadBugs();
    }, []);

    const loadBugs = async () => {
        const data = await fetchBugs();
        setBugs(data);
    };

    const handleUpdate = async (id, status) => {
        await updateBug(id, status);
        loadBugs();
    };

    const handleDelete = async (id) => {
        await deleteBug(id);
        loadBugs();
    };

    return (
        <div>
            <h2>Reported Bugs</h2>
            <ul>
                {bugs.map(bug => (
                    <li key={bug._id}>
                        <h3>{bug.title}</h3>
                        <p>{bug.description}</p>
                        <p>Status: {bug.status}</p>
                        <button onClick={() => handleUpdate(bug._id, 'in-progress')}>In Progress</button>
                        <button onClick={() => handleUpdate(bug._id, 'resolved')}>Resolved</button>
                        <button onClick={() => handleDelete(bug._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BugList;
