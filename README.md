
# Laravel + React + Inertia.js

This project is a full-stack application that combines **Laravel** as the backend, **React** for the frontend, and **Inertia.js** to create a seamless single-page application (SPA) experience.

## Prerequisites

Before you begin, make sure you have the following installed:

- **PHP** (preferably version 7.4 or higher)
- **Composer** (for managing Laravel dependencies)
- **Node.js** and **npm** (for React and frontend dependencies)
- **MySQL** or **PostgreSQL** (for your Laravel database)

## Installation

### Step 1: Clone the repository

```bash
git clone https://github.com/yourusername/your-repository-name.git
cd your-repository-name
```

### Step 2: Install Backend Dependencies

1. Install **Laravel** dependencies via Composer:

```bash
composer install
```

2. Copy the `.env.example` to `.env` and configure it:

```bash
cp .env.example .env
```

3. Generate the application key:

```bash
php artisan key:generate
```

4. Configure the database in your `.env` file (MySQL/PostgreSQL settings).

5. Run migrations if needed:

```bash
php artisan migrate
```

### Step 3: Install Frontend Dependencies

1.  Install React and Inertia dependencies using npm:

```bash
npm install
```

### Step 4: Compile Frontend Assets

Compile React, Inertia.js, and Tailwind CSS assets:

```bash
npm run dev
```

### Step 5: Serve the Application

Go back to the root of the project and run Laravel’s local development server:

```bash
php artisan serve
```

Your app should now be available at [http://localhost:8000](http://localhost:8000).

---

## Acknowledgements

- **Laravel** for the backend framework.
- **React** for the frontend framework.
- **Inertia.js** for the smooth full-stack SPA experience.
- **Tailwind CSS** for styling.
