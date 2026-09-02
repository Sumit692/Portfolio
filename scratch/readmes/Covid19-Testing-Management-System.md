# 🦠 COVID-19 Testing Management System

A web-based **COVID-19 Testing Management System** built using **PHP and MySQL** to simplify the management of patients, COVID-19 test requests, sample collection, laboratory processing, and report delivery.

The system provides an admin dashboard for managing testing operations while allowing users to register for testing and track their test status.

---

## 📌 Project Overview

The **COVID-19 Testing Management System (COVID19-TMS)** is a database-driven web application designed to manage the complete COVID-19 testing workflow.

It helps administrators and healthcare staff manage:

* Patient registration
* COVID-19 test requests
* Phlebotomist assignment
* Sample collection
* Laboratory processing
* Test report delivery
* Test status tracking
* Patient records
* Reports and analytics

The project demonstrates the practical implementation of **PHP, MySQL, HTML, CSS, Bootstrap, JavaScript, and AJAX** in a real-world healthcare management scenario.

---

## ✨ Features

### 👤 Patient Management

* Register new patients
* Store patient details
* Search patient records
* View patient information
* Manage registered patients

### 🧪 COVID-19 Test Management

* Create new COVID-19 test requests
* Generate unique test/order IDs
* Assign tests to phlebotomists
* Track testing progress
* View all test records

### 🚑 Sample Collection Tracking

The system tracks the complete sample collection workflow:

```text
Test Assigned
     ↓
Phlebotomist On The Way
     ↓
Sample Collected
     ↓
Sample Sent To Lab
     ↓
Report Delivered
```

### 📊 Admin Dashboard

The dashboard provides an overview of:

* Total tests
* Assigned tests
* Tests awaiting sample collection
* Samples collected
* Samples sent to laboratory
* Reports delivered
* Registered patients
* Registered phlebotomists

### 🔎 Search & Reports

* Search test reports
* Search patient records
* Filter reports by date
* Generate testing reports
* View detailed patient reports

### 👨‍⚕️ Phlebotomist Management

* Add phlebotomists
* Edit phlebotomist information
* Assign tests
* Track sample collection activities

### 🔐 Admin Authentication

* Admin login
* Session-based authentication
* Password change functionality
* Password recovery
* Logout functionality

---

## 🛠️ Tech Stack

| Technology     | Purpose                       |
| -------------- | ----------------------------- |
| **PHP**        | Backend development           |
| **MySQL**      | Database                      |
| **HTML5**      | Page structure                |
| **CSS3**       | Styling                       |
| **Bootstrap**  | Responsive UI                 |
| **JavaScript** | Client-side functionality     |
| **jQuery**     | Dynamic interactions          |
| **AJAX**       | Asynchronous requests         |
| **Apache**     | Web server                    |
| **XAMPP/WAMP** | Local development environment |

---

## 🗄️ Database

The project uses a MySQL database named:

```text
covidtmsdb
```

The database contains tables for managing:

* Administrators
* Patients
* Phlebotomists
* Test records
* Report tracking
* Test status information

The complete database structure is available in:

```text
covidtmsdb.sql
```

---

## 📂 Project Structure

```text
Covid19-Testing-Management-System/
│
├── index.php
├── login.php
├── dashboard.php
├── logout.php
│
├── new-test.php
├── all-test.php
├── assigned-test.php
├── sample-collected-test.php
├── samplesent-lab-test.php
├── reportdelivered-test.php
│
├── new-user-testing.php
├── registered-user-testing.php
├── patient-report.php
├── patient-report-details.php
├── patient-search-report.php
├── search-report.php
├── search-report-result.php
│
├── add-phlebotomist.php
├── edit-phlebotomist.php
├── manage-phlebotomist.php
│
├── bwdates-report-ds.php
├── bwdates-report-result.php
│
├── covidtmsdb.sql
│
├── css/
├── js/
├── includes/
├── vendor/
│
└── README.md
```

---

## 🚀 How to Run Locally

### 1. Install XAMPP

Install **XAMPP** with:

* Apache
* MySQL
* PHP
* phpMyAdmin

### 2. Clone the Repository

```bash
git clone https://github.com/YOUR-USERNAME/Covid19-Testing-Management-System.git
```

### 3. Move the Project

Copy the project folder into:

```text
C:\xampp\htdocs\
```

For example:

```text
C:\xampp\htdocs\Covid19-Testing-Management-System\
```

### 4. Start XAMPP

Open XAMPP Control Panel and start:

```text
Apache
MySQL
```

### 5. Create the Database

Open:

```text
http://localhost/phpmyadmin
```

Create a new database:

```text
covidtmsdb
```

### 6. Import the SQL File

Select the `covidtmsdb` database and import:

```text
covidtmsdb.sql
```

Click **Go** to import the database.

### 7. Configure Database Connection

Open:

```text
includes/config.php
```

Make sure the database credentials match your local MySQL configuration.

Typical XAMPP configuration:

```php
$host = "localhost";
$username = "root";
$password = "";
$database = "covidtmsdb";
```

### 8. Run the Application

Open your browser and visit:

```text
http://localhost/Covid19-Testing-Management-System/
```

---

## 🔑 Admin Login

The database included with this project contains an admin account.

> **Important:** If you use this project publicly, change the default credentials before deployment.

The password is stored in the database as a hashed value. If the included credentials do not work in your local setup, reset or create an admin account directly through the database.

---

## 📈 Testing Workflow

The application follows a structured testing lifecycle:

```text
Patient Registration
        ↓
Test Request
        ↓
Test Assigned
        ↓
Phlebotomist Assigned
        ↓
Sample Collection
        ↓
Sample Sent To Laboratory
        ↓
Report Generated
        ↓
Report Delivered
```

This workflow allows administrators to monitor the current status of each COVID-19 test.

---

## 🎯 Project Objectives

The main objectives of this project are:

1. Digitize COVID-19 testing management.
2. Maintain centralized patient records.
3. Reduce manual test-record management.
4. Track sample collection and laboratory processing.
5. Provide easy access to patient test reports.
6. Provide administrators with testing statistics.
7. Demonstrate PHP and MySQL database integration.

---

## 🔒 Security Considerations

This project was developed primarily as an academic/learning project.

Before using it in a real healthcare environment, additional security measures should be implemented, including:

* Password hashing using modern algorithms
* Input validation and sanitization
* Prepared SQL statements
* CSRF protection
* Secure session management
* Role-based access control
* HTTPS
* Protection of sensitive patient information
* Secure file/report handling

---

## 🔮 Future Improvements

Possible future enhancements include:

* 📱 Mobile-responsive redesign
* 📧 Email/SMS notifications
* 📄 PDF report generation
* 📊 Advanced analytics dashboard
* 🔐 Improved authentication and authorization
* ☁️ Cloud deployment
* 🧑‍⚕️ Separate doctor/lab staff roles
* 📲 QR-code based test tracking
* 🔔 Real-time notifications
* 🗃️ Improved patient search and filtering

---

## 🎓 Academic Project

This project was developed as an academic project to demonstrate:

* Web application development
* Database management
* PHP backend development
* MySQL integration
* CRUD operations
* Authentication and authorization
* AJAX-based interactions
* Report generation
* Responsive web design

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

If you found this project useful or interesting, consider giving the repository a ⭐ on GitHub.

---

## 📄 License

This project is intended for **educational and academic purposes**.

You are free to use and modify the project for learning and demonstration purposes.
