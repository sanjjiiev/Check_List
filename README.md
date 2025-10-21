# React Checklist App

A simple, interactive checklist app built with **React.js**. The app allows users to create and manage tasks, mark them as complete, and delete them. Perfect for keeping track of daily tasks or to-do lists.

---

## Features

- **Create tasks**: Add new tasks to your checklist.
- **Mark tasks as completed**: Check off tasks once they are done.
- **Delete tasks**: Remove tasks from the list.
- **Persist data**: The list of tasks persists even after refreshing the page (using `localStorage`).
- **Interactive UI**: A clean and simple user interface built using React components.

---

## Technologies Used

- **React.js**: For building the UI and managing app state.
- **HTML5**: For structuring the page.
- **CSS3**: For styling the app.
- **localStorage**: To store tasks persistently on the client side.
- **JavaScript (ES6+)**: For app logic and handling user interactions.

---

## Demo

You can view a live demo of the app [here](#) *(link to live demo if available)*.

---

## Installation

Follow these steps to get the checklist app running locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/react-checklist-app.git
   cd react-checklist-app


2. **Install dependencies**:
   You need Node.js and npm installed. If you don't have them, download and install from [nodejs.org](https://nodejs.org/).

   Then, install the required dependencies using npm:

   ```bash
   npm install
   ```

3. **Run the app**:
   Start the development server:

   ```bash
   npm start
   ```

   The app should now be running at `http://localhost:3000` in your browser.

---

## How It Works

The app is built with React components, and it makes use of React hooks (`useState` and `useEffect`) for managing state and side effects.

### 1. **App Component**:

The main container that holds the entire app and renders other components like the `TaskInput`, `TaskList`, and `Footer`.

### 2. **TaskInput Component**:

A simple form where users can input new tasks. When a task is added, it triggers a function in the parent `App` component to update the state.

### 3. **TaskList Component**:

A list of tasks where each task can be checked off or deleted. It takes in the tasks as a prop from the `App` component and renders each task.

### 4. **localStorage**:

The app uses `localStorage` to save the tasks, so they persist even after a page refresh. When the app first loads, it checks if any tasks are saved in `localStorage` and loads them.

---

