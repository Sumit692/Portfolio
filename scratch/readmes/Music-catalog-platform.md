# Music Catalog Insights Platform

An end-to-end, full-stack, AI-powered personal music library web application. This platform allows users to explore a public music catalog (using the iTunes Search API proxy), save songs to their personal library with custom ratings and notes, view library analytics, and generate AI-driven music insights (summarizing music taste and offering personalized recommendations).

---

## 🌐 Live Demo
Frontend: https://music-catalog-platform.vercel.app/

Backend: https://music-catalog-platform.onrender.com/ (The first request may take 30–60 seconds while the service wakes up.)

---

## 🏗️ Clean Architecture Overview

This project is built from the ground up using **Clean Architecture** principles to separate concerns, ensure testability, and decouple the application from database details or specific UI implementations.

```
                  ┌──────────────────────────────────────────────┐
                  │                 Presentation                 │
                  │         React (Vite) + Custom CSS            │
                  └──────────────────────┬───────────────────────┘
                                         │ JSON REST HTTP
                  ┌──────────────────────▼───────────────────────┐
                  │                Controller Layer              │
                  │   Auth, Library, Search & AI API endpoints   │
                  └──────────────────────┬───────────────────────┘
                                         │
                  ┌──────────────────────▼───────────────────────┐
                  │                 Service Layer                │
                  │  Business Logic, Caching, AI fallback engine │
                  └──────────────────────┬───────────────────────┘
                                         │
                  ┌──────────────────────▼───────────────────────┐
                  │              Data Access Layer               │
                  │     Spring Data JPA Repositories (SQL)       │
                  └──────────────────────┬───────────────────────┘
                                         │
                  ┌──────────────────────▼───────────────────────┐
                  │                Database Layer                │
                  │     Local H2 File (Dev) / MySQL (Prod)       │
                  └──────────────────────────────────────────────┘
```

### 1. Backend Architecture (Spring Boot)
* **API Controllers:** Maps HTTP endpoints, handles parameter validation, and coordinates DTO conversions.
* **Services (Use Case Layer):** Implements business rules (e.g., preventing duplicate saves, aggregating dashboard stats, and calling the Gemini API). This layer is decoupled from controllers.
* **Repositories (Data Access Layer):** Spring Data JPA repository gateway interfaces.
* **Domain Entities:** Light entities (`User`, `LibraryItem`) containing core database structures.
* **DTOs (Data Transfer Objects):** Separate representation models used for API input/output validation, decoupling DB schemas from API payloads.

### 2. Frontend Architecture (React)
* **`services/api.js` (API Gateway client):** A central repository client wrapping fetch requests and security header injections.
* **`context/AuthContext.jsx` (Session State):** A state provider that handles registration, login credentials, and local storage state persistence.
* **`pages/` (View Containers):** Modular components matching our main sections (`Auth`, `Search`, `Library`, `Analytics`, `AI Insights`).
* **`components/` (Presentation):** Reusable stateless UI building blocks.

---

## 🎯 Pick Your Focus: Songs

We chose **Songs** as our core entity focus.
* **Why:** Curating individual songs (playlists/favorite tracks) represents the standard music streaming consumer workflow.
* **Metrics:** Songs contain rich numerical data like `duration` (track length) and `releaseDate`, which are ideal for detailed data visualizations.
* **Analytics value:** We can calculate total playtime (e.g. 5 hours of pop), categorize tracks into duration buckets (e.g. short, epic), and graph release trends over years.

---

## 🗄️ Database & Schema Selection

We use a **Relational SQL Database** (H2 for development, MySQL-ready for production).
* **Justification:** Music catalogs are highly structured. Relational mapping allows us to enforce constraints (e.g., unique saved songs per user via a composite unique constraint `(user_id, apple_catalog_id)`), join users with library entries cleanly, and execute performant aggregation queries.
* **Local Zero-Config DB (Default):** For development, we use a file-based **H2 SQL database** which writes data directly to `./backend/data/musicdb.mv.db`.
* **MySQL Support (Profile-based):** For production or external database testing, we provide a dedicated `mysql` profile configured via `application-mysql.properties`.

### Schema Script

```sql
CREATE TABLE users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE library_items (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT NOT NULL,
    apple_catalog_id VARCHAR(50) NOT NULL,
    title VARCHAR(255) NOT NULL,
    artist_name VARCHAR(255) NOT NULL,
    genre VARCHAR(100),
    release_date TIMESTAMP,
    duration BIGINT, -- in milliseconds
    artwork_url VARCHAR(500),
    user_rating INT CHECK (user_rating BETWEEN 1 AND 5),
    user_notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    UNIQUE (user_id, apple_catalog_id)
);
```

---

## 🧠 AI Insights Feature

The AI Insights Engine analyzes the user's music library and provides custom music taste profiling and recommended tracks.
* **Gemini API Integration:** Sends a formatted summary of user tracks, ratings, and notes to the Gemini API (`gemini-2.5-flash`), forcing a structured JSON output with `responseMimeType: "application/json"`.
* **Local Fallback Engine:** If no `GEMINI_API_KEY` is provided, the backend falls back to a custom local rules-engine that analyzes user genres, averages ratings, finds top artists, and returns realistic recommendations and taste summaries locally.

---

## ⚡ Performance Caching

To optimize API latency and respect iTunes API rate limits, we integrated **Spring Cache** (`spring-boot-starter-cache`).
* Catalog searches (`GET /api/search`) are cached under `itunes-search` using a composite key of the query, entity type, and limit.
* Subsequent identical searches load instantly (0ms network cost) from the local memory cache.

---

## ⚙️ Quick Start Setup

### Prerequisites
* Java 21 (JDK)
* Node.js (v18+)

### 1. Run the Backend

You can run the backend in two modes:

#### Option A: Default Mode (H2 Database - Zero Config)
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Run the Spring Boot application:
   ```bash
   ./mvnw spring-boot:run
   ```
   *The backend starts on http://localhost:8080*
   *H2 Console is available at http://localhost:8080/h2-console (JDBC URL: `jdbc:h2:file:./data/musicdb`, User: `sa`, Pass: `password`)*

#### Option B: MySQL Mode
1. Ensure your local MySQL server is running on port 3306.
2. Open `backend/src/main/resources/application-mysql.properties` and set your username and password.
3. Run the Spring Boot application with the `mysql` profile (pass password as command parameter if needed):
   ```bash
   ./mvnw spring-boot:run "-Dspring-boot.run.profiles=mysql" "-Dspring.datasource.password=YOUR_MYSQL_PASSWORD"
   ```

### 2. Run the Frontend
1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run Vite dev server:
   ```bash
   npm run dev
   ```
   *The frontend starts on http://localhost:5173*

---

## 🐳 Docker Deployment (1-Click)

Run both services fully containerized (including H2 database file volume persistence):

1. Set your Gemini API key (optional):
   ```bash
   $env:GEMINI_API_KEY="your_api_key_here" # Windows PowerShell
   # OR
   export GEMINI_API_KEY="your_api_key_here" # Linux/macOS
   ```
2. Build and launch containers:
   ```bash
   docker-compose up --build
   ```
   * Access Web App: http://localhost:80 (Frontend container proxies `/api/*` requests automatically back to backend)

---

## 🧪 Unit Tests

We have written Mockito tests verifying the business logic of our `LibraryService`.
To run tests:
```bash
cd backend
./mvnw test
```

---

## 🛠️ Trade-Offs & Technical Decisions

1. **Local H2 vs. MySQL:** We chose file-backed H2 for development to give the grader an absolute zero-config startup experience. We added a dedicated `mysql` profile so changing the data source to MySQL is as simple as passing a single command-line profile parameter.
2. **Java Aggregation vs. Database SQL Grouping:** For analytics calculations, we retrieved the user's library items and grouped them using Java Stream APIs. While database groupings (`GROUP BY`) are better for massive tables, Java streams are highly performant for individual user libraries (< 5,000 items) and guarantee database portability.
3. **Local AI Fallback vs. Blocking API:** Instead of crashing or throwing errors if no `GEMINI_API_KEY` is present, we built the local rules-engine fallback. This ensures the dashboard's "AI Insights" page functions smoothly for reviewers testing without keys.
