# Yash Portfolio Website

A personal portfolio website showcasing skills, projects, and achievements as a Frontend Developer and AI/ML Enthusiast.

## Features

- **About Section**: Introduction and background information
- **Skills Section**: List of technical skills including HTML, CSS, JavaScript, React.js, Node.js, MongoDB, and Python/ML
- **Projects Section**: Showcase of key projects like Movie Recommendation System and Student Attendance System
- **Contact Form**: Form for visitors to send messages (backend integration available)
- **Responsive Design**: Clean, modern UI with responsive layout

## Technologies Used

### Frontend
- HTML5
- CSS3
- JavaScript (ES6+)

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- CORS

## Project Structure

```
furute/
├── backend/
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
└── README.md
```

## Setup and Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (running locally on default port 27017)

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   node server.js
   ```
   The server will run on http://localhost:5000

### Frontend Setup
1. Open the `frontend/index.html` file in your web browser, or serve it using a local server.

## Usage

1. Start the backend server as described above
2. Open `frontend/index.html` in your browser
3. Navigate through the different sections of the portfolio
4. Use the contact form to send messages (data will be stored in MongoDB)

## API Endpoints

- `POST /contact`: Accepts contact form data (name, email, message) and stores it in the database

## Contributing

Feel free to fork this repository and submit pull requests for any improvements or bug fixes.

## Contact

Yash - Frontend Developer | AI/ML Enthusiast

© 2025 Yash | Portfolio
