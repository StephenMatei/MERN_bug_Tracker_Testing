const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');

const app = express();
dotenv.config();

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'))
.catch(err => console.error(err));

// Bug Schema & Model
const bugSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: { type: String, enum: ['open', 'in-progress', 'resolved'], default: 'open' }
});
const Bug = mongoose.model('Bug', bugSchema);

// Routes
app.post('/bugs', async (req, res) => {
    try {
        const bug = new Bug(req.body);
        await bug.save();
        res.status(201).json(bug);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.get('/bugs', async (req, res) => {
    try {
        const bugs = await Bug.find();
        res.json(bugs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.put('/bugs/:id', async (req, res) => {
    try {
        const bug = await Bug.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(bug);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.delete('/bugs/:id', async (req, res) => {
    try {
        await Bug.findByIdAndDelete(req.params.id);
        res.json({ message: 'Bug deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Global Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ error: 'Something went wrong!' });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
