MERN Bug Tracker 🚀
A full-stack MERN (MongoDB, Express, React, Node.js) Bug Tracker application where users can report, update, and track project issues. This project follows best practices in testing and debugging.

Features
✅ Report new bugs using a form
✅ View a list of all reported bugs
✅ Update bug statuses (open, in-progress, resolved)
✅ Delete bugs
✅ Backend testing with Jest & Supertest
✅ Frontend testing with React Testing Library
✅ Debugging with Chrome DevTools, Console logs, and Node.js Inspector
✅ Error handling with Express middleware & React error boundaries

Project Setup
1. Clone the Repository
sh
Copy
Edit
git clone https://github.com/your-username/mern-bug-tracker.git
cd mern-bug-tracker
Backend Setup (Express + MongoDB)
2. Navigate to Backend and Install Dependencies
sh
Copy
Edit
cd backend
npm install
3. Set Up Environment Variables
Create a .env file in the backend folder:

sh
Copy
Edit
MONGO_URI=mongodb://localhost:27017/bugtracker
PORT=5000
4. Start the Backend Server
sh
Copy
Edit
npm start
The server runs on http://localhost:5000.

Frontend Setup (React + Vite)
5. Navigate to Frontend and Install Dependencies
sh
Copy
Edit
cd ../client
npm install
6. Start the Frontend Development Server
sh
Copy
Edit
npm run dev
The app runs on http://localhost:5173.

API Routes (Backend)
Method	Endpoint	Description
POST	/bugs	Create a new bug
GET	/bugs	Get all bugs
PUT	/bugs/:id	Update a bug status
DELETE	/bugs/:id	Delete a bug
Example API request using cURL:

sh
Copy
Edit
curl -X POST http://localhost:5000/bugs -H "Content-Type: application/json" -d '{"title": "Login Bug", "description": "Login button not working"}'
Testing
Backend Testing (Jest & Supertest)
Run tests:

sh
Copy
Edit
cd backend
npm test
Example backend test (backend/tests/bugRoutes.test.js):

javascript
Copy
Edit
const request = require('supertest');
const app = require('../server');

describe('Bug Tracker API', () => {
    it('should create a new bug', async () => {
        const res = await request(app).post('/bugs').send({
            title: 'Test Bug',
            description: 'This is a test'
        });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('title', 'Test Bug');
    });
});
Frontend Testing (React Testing Library)
Run tests:

sh
Copy
Edit
cd ../client
npm test
Example frontend test (client/src/tests/BugTracker.test.jsx):

javascript
Copy
Edit
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders Bug Tracker heading', () => {
    render(<App />);
    const heading = screen.getByText(/Bug Tracker/i);
    expect(heading).toBeInTheDocument();
});
Debugging Techniques
1. Console Logs
Use console.log() in React and Express to track variables.

2. Chrome DevTools
Inspect elements, network requests, and errors.

3. Node.js Debugging
Use node --inspect server.js to debug the backend.

4. Error Boundaries (React)
Add an error boundary to handle UI crashes.

javascript
Copy
Edit
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
        }
        return this.props.children;
    }
}
Error Handling Implementation
Backend: Express Middleware
javascript
Copy
Edit
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ error: 'Something went wrong!' });
});
Frontend: Handling Fetch Errors
javascript
Copy
Edit
try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Failed to fetch data');
} catch (error) {
    console.error(error);
}
Folder Structure
bash
Copy
Edit
mern-bug-tracker/
│── backend/
│   ├── server.js
│   ├── models/Bug.js
│   ├── routes/bugRoutes.js
│   ├── .env
│   ├── tests/bugRoutes.test.js
│   ├── package.json
│── client/
│   ├── src/
│   │   ├── api.js
│   │   ├── components/
│   │   │   ├── BugList.jsx
│   │   │   ├── BugForm.jsx
│   │   ├── App.jsx
│   ├── tests/
│   │   ├── BugTracker.test.jsx
│   ├── package.json
│── README.md
Deployment
Deploy Backend (Render/Heroku)
Create a Render or Heroku account.

Push backend to GitHub.

Connect to Render/Heroku and deploy.

Deploy Frontend (Netlify/Vercel)
Build frontend:

sh
Copy
Edit
cd client
npm run build
Deploy on Netlify/Vercel.

Contributors
👤 Your Name - GitHub

License
This project is licensed under the MIT License.

