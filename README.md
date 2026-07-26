<div align="center">

# 🐉 Dragon News

### A Modern, Fast & Secure News Platform

Stay informed with real-time news across categories — built for speed, security, and a seamless experience on every device.

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Better Auth](https://img.shields.io/badge/Better%20Auth-6C47FF?style=for-the-badge&logo=auth0&logoColor=white)](https://www.better-auth.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

</div>

---

## 📖 Overview

**Dragon News** is a modern news platform built with **Next.js** and **React**, offering a smooth, category-based news browsing experience. It integrates secure authentication via **Better Auth** — supporting Email, Google, and GitHub sign-in — and leverages **Next.js Route Groups** for clean, organized, and scalable routing.

Whether you're catching up on world events, technology, sports, or entertainment, Dragon News delivers a fast, responsive, and personalized reading experience across desktop, tablet, and mobile.

---

## ✨ Features

- 📰 **Category-Based Browsing** — Explore news organized into clear, intuitive categories
- 🔐 **Secure Authentication** — Sign in with Email, Google, or GitHub via Better Auth
- ⚡ **Blazing Fast Performance** — Powered by Next.js for optimized rendering and load times
- 📱 **Fully Responsive** — A seamless experience across all screen sizes and devices
- 🗂️ **Organized Routing** — Clean architecture using Next.js Route Groups
- 🔎 **Detailed Article View** — Dive into full news details with a single click
- 🎨 **Polished, Modern UI** — Thoughtful design focused on readability and usability

---

## 🛠️ Tech Stack

| Category       | Technology                          |
| -------------- | ----------------------------------- |
| Framework      | Next.js                             |
| UI Library     | React                               |
| Authentication | Better Auth (Email, Google, GitHub) |
| Styling        | Tailwind CSS                        |
| API            | Programming Hero Open API           |
| Deployment     | Vercel _(recommended)_              |

---

## 🔌 API Reference

Dragon News is powered by the **Programming Hero Open News API**.

**Base URL**

```
https://openapi.programming-hero.com/api
```

### 1. Get All News Categories

```http
GET /news/categories
```

Retrieves a list of all available news categories.

### 2. Get All News in a Category

```http
GET /news/category/{category_id}
```

Retrieves all news articles within a specified category.

| Parameter     | Type   | Description                   |
| ------------- | ------ | ----------------------------- |
| `category_id` | string | The unique ID of the category |

**Example:**

```
https://openapi.programming-hero.com/api/news/category/01
```

### 3. Get News Detail by ID

```http
GET /news/{news_id}
```

Retrieves detailed information about a specific news article.

| Parameter | Type   | Description                       |
| --------- | ------ | --------------------------------- |
| `news_id` | string | The unique ID of the news article |

**Example:**

```
https://openapi.programming-hero.com/api/news/0282e0e58a5c404fbd15261f11c2ab6a
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm / yarn / pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/dragon-news.git

# Navigate into the project directory
cd dragon-news

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Environment Variables

Create a `.env.local` file in the root directory and add the following:

```env
BETTER_AUTH_SECRET=your_secret_key
BETTER_AUTH_URL=http://localhost:3000

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret

DATABASE_URL=your_database_connection_string
```

---

## 📁 Project Structure

```
dragon-news/
├── app/
│   ├── (auth)/          # Authentication route group (login, register)
│   ├── (main)/          # Main app route group (home, categories, news detail)
│   └── layout.tsx
├── components/          # Reusable UI components
├── lib/                 # Utility functions & Better Auth config
├── public/              # Static assets
├── .env.local
└── package.json
```

---

## 🔐 Authentication

Dragon News uses **Better Auth** to provide secure, flexible sign-in options:

- ✅ Email & Password
- ✅ Google OAuth
- ✅ GitHub OAuth

Authenticated users get a personalized reading experience across the platform.

---

## 🤝 Contributing

Contributions make the open-source community amazing. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📬 Contact

Have questions or feedback? Feel free to reach out.

<div align="center">

Made with ❤️ and lots of ☕

</div>
