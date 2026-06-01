# 📝 PERN Todo Application

## Overview

A full-stack Todo application developed using the **PERN Stack (PostgreSQL, Express.js, React.js, and Node.js)**. The project demonstrates the implementation of a RESTful API, database integration, and frontend-backend communication through CRUD operations.

The application allows users to create, view, update, and delete tasks while maintaining data persistence through a PostgreSQL database.

---

## Key Features

### Frontend
- Responsive user interface built with React.
- Component-based architecture.
- Dynamic rendering of tasks.
- Asynchronous communication with the backend using HTTP requests.

### Backend
- RESTful API developed with Express.js and Node.js.
- Structured routing for CRUD operations.
- Server-side request handling and validation.
- Integration with PostgreSQL using SQL queries.

### Database
- Persistent storage of todo items in PostgreSQL.
- Relational database design.
- Data retrieval and manipulation through API endpoints.

---

## Technical Concepts Demonstrated

- Full-Stack Development
- REST API Design
- CRUD Operations
- Client-Server Architecture
- PostgreSQL Database Management
- Asynchronous Programming
- API Consumption in React
- State Management
- Component-Based UI Development

---

## Technology Stack

### Frontend
- React
- JavaScript (ES6+)
- HTML5
- CSS3
- Bootstrap

### Backend
- Node.js
- Express.js

### Database
- PostgreSQL

### Tools
- Git
- GitHub
- Postman

---

## API Endpoints

| Method | Endpoint | Description |
|----------|------------|-------------|
| GET | `/todos` | Retrieve all tasks |
| GET | `/todos/:id` | Retrieve a specific task |
| POST | `/todos` | Create a new task |
| PUT | `/todos/:id` | Update a task |
| DELETE | `/todos/:id` | Delete a task |

---

## Running the Project

### Prerequisites

Before running the project, ensure you have installed:

- Node.js
- PostgreSQL
- npm

### Database Setup

Create a PostgreSQL database and execute the SQL script provided in:

```text
server/Models/database.sql
```

Update your PostgreSQL connection settings inside:

```text
server/Models/dbConfig.js
```

with your local database credentials.

### Install Dependencies

Install backend dependencies:

```bash
cd server
npm install
```

Install frontend dependencies:

```bash
cd client
npm install
```

### Start the Backend Server

```bash
cd server
npm start
```

The API will run on:

```text
http://localhost:5000
```

### Start the Frontend Application

Open a new terminal and run:

```bash
cd client
npm start
```

The React application will run on:

```text
http://localhost:3000
```

---

## Learning Outcomes

Through this project, I gained hands-on experience with:

- Building and consuming RESTful APIs.
- Connecting a React frontend to a Node.js backend.
- Designing and interacting with a PostgreSQL database.
- Implementing complete CRUD functionality.
- Managing data flow between client and server.
- Structuring a full-stack application following industry-standard practices.

---

## Author

**Ismail Habibi**

Software Engineer
