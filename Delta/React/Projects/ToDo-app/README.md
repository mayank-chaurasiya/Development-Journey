# React To-Do List Component

This project contains a simple yet functional To-Do List built with React. The main logic is implemented in [`TodoList.jsx`](src/Components/TodoList.jsx), which demonstrates the use of React hooks, state management, and dynamic rendering.

## Features

- **Add Tasks:** Enter a task in the input field and click "Add Task" to add it to the list.
- **Delete Tasks:** Remove individual tasks using the "Delete" button.
- **Mark as Done:** Mark individual tasks as completed with the "Done" button. Completed tasks are shown with a red strikethrough.
- **Mark All as Done:** Instantly mark all tasks as completed using the "Mark all as Done" button.
- **Persistent UI:** The list updates in real-time as you interact with it.

## File Structure

- [`src/Components/TodoList.jsx`](src/Components/TodoList.jsx): Main component containing all logic and UI for the to-do list.
- [`src/App.jsx`](src/App.jsx): Imports and renders the `TodoList` component.
- [`src/App.css`](src/App.css): Styles for the app, including buttons and layout.

## How It Works

- Uses React's `useState` to manage the list of todos and the input value.
- Each todo item is an object with `task`, `id`, and `isDone` properties.
- The `uuid` library is used to generate unique IDs for each task.
- UI updates automatically as state changes.

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install

2. **Run the development server**
    npm run dev

3. Open http://localhost:5173 (or the port shown in your terminal) to view the app.