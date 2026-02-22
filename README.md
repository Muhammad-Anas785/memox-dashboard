# Memox Voice Agent Monitoring Dashboard

This project is a responsive monitoring dashboard built for AI-powered voice agents used in B2B sales.

It enables teams to track agent performance, monitor call outcomes, and analyze conversations in real time.

---

## 🛠 Setup Instructions

1. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/memox-dashboard.git
cd memox-dashboard
```

2. Install dependencies

```bash
npm install
```

3. Run the development server

```bash
npm run dev
```

4. Open in browser

```
http://localhost:3000
```

---

## 🧱 Architectural Decisions

### 1. Next.js App Router

The App Router was used instead of the Pages Router to enable:

* Better layout management
* Server & Client component separation
* Scalable routing for dashboards

This allowed clean structuring for:

* `/dashboard`
* `/agents`
* `/agents/[id]`
* `/calls`
* `/calls/[id]`

---

### 2. Server vs Client Components

Server Components were used for:

* Data-driven pages (Agent Detail, Call Detail)
* Rendering performance

Client Components were used for:

* Filters
* Search
* UI interactivity

This improves performance and keeps the UI responsive.

---

### 3. Component-Based UI

Reusable UI components were created:

* KPI Cards
* Status Badges
* Sentiment Indicators

This keeps the design consistent and maintainable.

---

### 4. Route Groups for Layout

A dashboard layout was implemented using route groups to provide:

* Sidebar navigation
* Top navigation
* Consistent SaaS-style UI

This avoids duplication and improves scalability.

---

### 5. Responsive Design Strategy

Tailwind’s mobile-first grid system was used to ensure:

* Clean mobile stacking
* Multi-column desktop layouts
* Consistent spacing and hierarchy

---

## 📊 Pages Overview

| Page           | Purpose                    |
| -------------- | -------------------------- |
| `/dashboard`   | KPI overview               |
| `/agents`      | Agent listing with filters |
| `/agents/[id]` | Agent performance details  |
| `/calls`       | Call history with filters  |
| `/calls/[id]`  | Call analytics             |

---

## 🚀 What I’d Improve With More Time


### 1. Charts & Visual Analytics

Add performance graphs using libraries like Recharts.

### 2. Role-Based Access

Support admin vs manager dashboards.

### 3. API Integration

Replace mock data with real backend APIs.

### 4. Dark Mode

Enhance usability for long monitoring sessions.

---

## 🎯 Goal

The goal of this project was to create a clean, scalable, and responsive monitoring dashboard that reflects how modern SaaS analytics platforms are structured.
