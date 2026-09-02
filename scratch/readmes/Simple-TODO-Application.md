# 📝 Simple TODO Application

A web-based **TODO Management Application** built using **Java Servlets, JSP, JDBC, and MySQL**. The application allows users to register, log in, and manage their personal TODO tasks through a simple and user-friendly interface.

The project demonstrates the implementation of **CRUD operations, MVC architecture, session-based authentication, JDBC database connectivity, and JSP/Servlet integration**.

---

## 📌 Project Overview

The **Simple TODO Application** is a Java web application designed to help users organize and manage their daily tasks.

Users can create TODOs, set target dates, update their task status, edit existing tasks, and delete completed or unnecessary tasks.

The application uses **Java Servlets as controllers, JSP for the presentation layer, JDBC for database communication, and MySQL for persistent data storage.**

---

## ✨ Features

### 👤 User Management

* User registration
* User login
* Session-based authentication
* User logout
* User-specific TODO management

### 📝 TODO Management

Users can:

* Create new TODO tasks
* Add task titles
* Add task descriptions
* Set target dates
* Mark tasks as **In Progress** or **Complete**
* View all TODOs
* Edit existing TODOs
* Delete TODOs

### 🔄 CRUD Operations

The application implements complete CRUD functionality:

```text
Create
  ↓
Read
  ↓
Update
  ↓
Delete
```

### 📅 Task Tracking

Each TODO contains:

* Title
* Description
* Username
* Target Date
* Completion Status

### 🎨 User Interface

* JSP-based interface
* Bootstrap 4 styling
* Responsive layout
* Navigation bar
* Forms for login, registration, and TODO management
* Simple task listing table

---

## 🛠️ Tech Stack

| Technology                | Purpose                 |
| ------------------------- | ----------------------- |
| **Java**                  | Application development |
| **Java Servlets**         | Backend controllers     |
| **JSP**                   | Dynamic web pages       |
| **JDBC**                  | Database connectivity   |
| **MySQL**                 | Database                |
| **Bootstrap 4**           | UI styling              |
| **JSTL**                  | JSP functionality       |
| **HTML5**                 | Page structure          |
| **Apache Tomcat**         | Application server      |
| **Eclipse/IntelliJ IDEA** | Development environment |

---

## 🏗️ Architecture

The application follows an MVC-style architecture:

```text
                ┌──────────────────┐
                │      JSP         │
                │  Presentation    │
                └────────┬─────────┘
                         │
                         ▼
                ┌──────────────────┐
                │    Servlets      │
                │   Controllers    │
                └────────┬─────────┘
                         │
                         ▼
                ┌──────────────────┐
                │      DAO         │
                │ Database Access  │
                └────────┬─────────┘
                         │
                         ▼
                ┌──────────────────┐
                │     JDBC         │
                │ Database Layer   │
                └────────┬─────────┘
                         │
                         ▼
                ┌──────────────────┐
                │     MySQL        │
                │    Database      │
                └──────────────────┘
```

---

## 📂 Project Structure

```text
Simple-TODO-Application/
│
├── Error.jsp
├── JDBCUtils.java
│
├── LoginBean.java
├── LoginController.java
├── LoginDao.java
│
├── Todo.java
├── TodoController.java
├── TodoDao.java
├── TodoDaoImpl.java
│
├── User.java
├── UserController.java
├── UserDao.java
│
├── header.jsp
├── footer.jsp
├── login.jsp
├── register.jsp
├── todo-form.jsp
├── todo-list.jsp
│
├── script.sql
├── web.xml
├── MANIFEST.MF
│
├── jsp-api-2.2.jar
├── jstl-1.2.jar
├── servlet-api-2.5.jar
└── mysql-connector-java-8.0.13.jar
```

---

## 🗄️ Database

The application uses **MySQL** as its database.

The database contains two main tables:

### `users`

Stores registered user information:

* ID
* First Name
* Last Name
* Username
* Password

### `todos`

Stores task information:

* ID
* Title
* Description
* Username
* Target Date
* Completion Status

The database schema is provided in:

```text
script.sql
```

---

## 🚀 How to Run Locally

### 1. Install Required Software

Install the following:

* Java JDK
* Apache Tomcat
* MySQL
* Eclipse IDE or IntelliJ IDEA

Recommended:

```text
Java 8+
Apache Tomcat 8/9
MySQL 8+
```

---

### 2. Clone the Repository

```bash
git clone https://github.com/YOUR-USERNAME/Simple-TODO-Application.git
```

Navigate into the project:

```bash
cd Simple-TODO-Application
```

---

### 3. Create the Database

Open MySQL or MySQL Workbench and create a database.

For example:

```sql
CREATE DATABASE tododb;
```

Then select the database:

```sql
USE tododb;
```

Import or execute the SQL commands from:

```text
script.sql
```

---

### 4. Configure Database Connection

Open:

```text
JDBCUtils.java
```

Update the database configuration according to your MySQL setup.

Example:

```java
private static final String JDBC_URL =
    "jdbc:mysql://localhost:3306/tododb";

private static final String JDBC_USERNAME =
    "root";

private static final String JDBC_PASSWORD =
    "your_password";
```

Replace the username and password with your local MySQL credentials.

---

### 5. Configure the Project

Import the project into **Eclipse** or **IntelliJ IDEA** as a Java Web/Dynamic Web Project.

Make sure the required libraries are available:

* Servlet API
* JSP API
* JSTL
* MySQL Connector/J

---

### 6. Configure Apache Tomcat

Add the project to your Apache Tomcat server.

Start the server and deploy the application.

---

### 7. Run the Application

Open your browser and navigate to:

```text
http://localhost:8080/Simple-TODO-Application/
```

The application will provide options to:

```text
Register
   ↓
Login
   ↓
View TODOs
   ↓
Add TODO
   ↓
Edit / Delete TODO
   ↓
Logout
```

---

## 🔐 Authentication Flow

The application provides a basic user authentication system.

```text
User Registration
       ↓
User Login
       ↓
Authentication
       ↓
TODO Dashboard
       ↓
Manage Tasks
       ↓
Logout
```

Users must log in before accessing the TODO management functionality.

---

## 📋 TODO Workflow

```text
Add New TODO
      ↓
Enter Title
      ↓
Enter Description
      ↓
Set Target Date
      ↓
Select Status
      ↓
Save TODO
      ↓
View TODO List
      ↓
Edit / Delete
```

---

## 🎯 Project Objectives

The main objectives of this project are:

1. Build a practical Java web application.
2. Implement CRUD operations using JDBC.
3. Understand Java Servlet and JSP integration.
4. Connect a Java application with MySQL.
5. Implement user registration and login.
6. Manage user-specific TODO tasks.
7. Understand MVC-style application architecture.
8. Deploy a Java web application using Apache Tomcat.

---

## 🔒 Security Considerations

This project is primarily intended for **academic and learning purposes**.

For production use, the following improvements should be implemented:

* Password hashing using BCrypt or Argon2
* Prepared statements for all database operations
* Stronger session management
* CSRF protection
* Input validation
* Authorization checks
* HTTPS
* Secure database credentials
* Environment variables for sensitive configuration

---

## 🔮 Future Improvements

Possible enhancements include:

* 📱 Modern responsive UI
* 🔔 Task reminders and notifications
* 📧 Email notifications
* 🔍 Task search and filtering
* 🏷️ Task categories and priorities
* 📊 Productivity dashboard
* 📅 Calendar-based task management
* 🌙 Dark mode
* 🔐 Improved authentication
* ☁️ Cloud deployment
* 📱 Mobile application
* 🔄 REST API integration

---

## 🎓 Academic Project

This project demonstrates practical knowledge of:

* Java Programming
* Object-Oriented Programming
* Java Servlets
* JSP
* JDBC
* MySQL
* CRUD Operations
* MVC Architecture
* Authentication
* Session Management
* Web Application Development
* Apache Tomcat

---

## 👨‍💻 Author

**Sumit Kumar Singh**

Information Science & Engineering
Atria Institute of Technology

### Connect With Me

* GitHub: [@Sumit692](https://github.com/Sumit692)
  
* LinkedIn: (https://www.linkedin.com/in/sumitkumarsingh24/)

---

## ⭐ Support

If you found this project useful for learning Java web development, consider giving the repository a ⭐ on GitHub.

---

## 📄 License

This project is intended for **educational and academic purposes**.

You are free to use and modify the project for learning and demonstration purposes.
