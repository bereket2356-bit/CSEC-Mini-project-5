# 📝 Task Tracker Application

A simple and responsive **Task Tracker** built with **React + Vite**.  
The application allows users to add, complete, delete tasks, view task statistics, and switch between **Light Mode** and **Dark Mode** with persistent data storage.

---

## 🚀 Features

### ✅ Task Management
- Add new tasks
- Prevent adding empty tasks
- Mark tasks as completed
- Delete tasks instantly
- Completed tasks are visually distinct

### 🌙 Dark Mode
- Toggle between Light and Dark mode
- Theme preference is saved using `localStorage`
- State managed using React Context API

### 📊 Stats Page
- Total number of tasks
- Number of completed tasks
- Number of remaining tasks
- Uses React Router for navigation
- Shares task data globally

### 💾 Persistence
- Tasks persist after page refresh
- Dark mode preference persists
- Implemented using `localStorage`

### 📱 Responsive Design
- Works on desktop and mobile screens
- Layout adapts on small devices
- Buttons and text remain readable

---

## 🧠 Technologies Used

- React (with Hooks)
- Vite
- React Router DOM
- Context API (Global State Management)
- Plain CSS
- localStorage

---

## 📁 Project Structure
src/
├── components/              # Reusable UI components
│   ├── Header.jsx           # App title + dark mode toggle
│   ├── TaskInput.jsx        # Input field and Add Task button
│   ├── TaskItem.jsx         # Single task item
│   └── TaskList.jsx         # List of all tasks
│
├── pages/                   # Application pages
│   ├── Home.jsx             # Add and view tasks
│   └── Stats.jsx            # Task statistics page
│
├── store/                   # Global state management
│   └── taskContext.jsx      # Context API for tasks & theme
│
├── styles/                  # Application styles
│   └── global.css           # Global and theme styles
│
├── App.jsx                  # Main app component & routing
├── main.jsx                 # Application entry point

