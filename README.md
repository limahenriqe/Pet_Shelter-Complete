# 🐾 Pet Shelter Complete

Full-stack application for managing animals in a Pet Shelter.

The system provides a complete interface for registering, viewing, editing, and deleting pets, using a Next.js frontend, a Node.js REST API, a MySQL database, and Docker Compose to run the entire environment.

## 🚀 Technologies

### Frontend
* Next.js
* React
* TypeScript
* Tailwind CSS
* Axios

### Backend
* Node.js
* Express
* Sequelize
* MySQL
* CORS
* dotenv

### DevOps
* Docker
* Docker Compose
* Git
* GitHub

## 📌 Features

* Home page
* View registered pets
* Add new pets
* Edit pet information
* Delete pets
* REST API integration
* MySQL database
* Responsive interface
* Dockerized frontend
* Dockerized backend
* Dockerized database
* Persistent database storage with Docker volumes

## 📂 Project Structure

```text
Pet_Shelter-Complete/
├── api-pets/
├── front-pets/
├── docker-compose.yml
└── README.md
⚙️ Installation with Docker

Clone the repository:

git clone <repository-url>

Enter the project directory:

cd Pet_Shelter-Complete

Start the complete application:

docker compose up --build

Docker Compose will automatically start:

Frontend
Backend API
MySQL Database
🌐 Application Access

Frontend:

http://localhost:3001

Backend API:

http://localhost:3000

Pets endpoint:

http://localhost:3000/pets
🔗 API Endpoints
Method	Endpoint	Description
POST	/pets	Registers a new pet
GET	/pets	Displays all registered pets
GET	/pets/:id	Displays a pet by ID
PUT	/pets/:id	Updates pet information
DELETE	/pets/:id	Deletes a pet
🔄 CRUD Integration

The frontend communicates with the API through the following operations:

Pet List     → GET    /pets
Pet Detail   → GET    /pets/:id
Add Pet      → POST   /pets
Edit Pet     → PUT    /pets/:id
Delete Pet   → DELETE /pets/:id
🗄️ Database

The project uses MySQL as the database.

Database name:

pet_shelter

Main table:

Pets

MySQL Workbench connection:

Host: 127.0.0.1
Port: 3307
User: root
Password: root
Database: pet_shelter

Example query:

USE pet_shelter;

SELECT * FROM Pets;
🐳 Docker

The application uses three containers:

pet-shelter-front
pet-shelter-api
pet-shelter-mysql

The architecture works as follows:

Next.js Frontend
       ↓
Node.js / Express API
       ↓
Sequelize
       ↓
MySQL
🛑 Stop the Application

To stop the containers:

docker compose down

To stop the containers and delete the database volume:

docker compose down -v

Warning: using -v removes the stored database data.

📚 Purpose

This project was developed to practice full-stack development, REST APIs, CRUD operations, database integration, Sequelize ORM, Next.js, React, Docker, Docker Compose, Git, and GitHub.
