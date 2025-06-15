# Basic React App

This folder contains a simple React project that demonstrates the use of components, props, styling, and composition for a basic e-commerce product listing UI.

## Folder Structure

- **src/**
  - `App.jsx` — Main app component; renders the title, product tabs, and an interactive button.
  - `Button.jsx` — A simple button component that logs a message on click.
  - `Price.jsx` — Displays the old (strikethrough) and new (highlighted) prices for a product.
  - `ProductTab.jsx` — Lays out several `Product` components in a responsive flex layout.
  - `product.jsx` — Displays details for a single product, including title, description, and pricing.
  - `main.jsx` — Entry point; renders the `App` component into the root div.
  - `App.css`, `index.css`, `product.css` — CSS files for styling components.
  - `assets/` — (Potentially) contains images or other static files.

_Note: This is a partial list. For the full and current contents, see the [`src` folder in GitHub](https://github.com/mayank-chaurasiya/Development-Journey/tree/b1841671427e69997278f1a641aaa8bd770e4062/Delta/React/basic-react-app/src)._

## Component Overview

### App.jsx
- Root component; imports and displays the product tab and a button.
- Shows a title: **Blockbuster Deals | Show Now**

### Button.jsx
- Renders a button labeled **Click me!**
- On click, logs "Hello" to the console.

### Price.jsx
- Receives `oldPrice` and `newPrice` as props.
- Displays the old price with a strikethrough and the new price in bold, styled with a colored background.

### ProductTab.jsx
- Renders a flexbox container with four different products (e.g., Logitech MX Master, Apple Pencil).
- Each product is a `Product` component instance.

### product.jsx
- Displays the product title and two feature descriptions.
- Uses the `Price` component to show both old and new prices.

### main.jsx
- Application entry point.
- Mounts the `App` component to the `root` element in the HTML.

## How to Run

This project assumes a basic React setup (such as with [Vite](https://vitejs.dev/) or [Create React App](https://create-react-app.dev/)). Place the `src` folder in your React project's root and run:

```bash
npm install
npm run dev
```
or
```bash
npm start
```

## Purpose

- Demonstrates React component structure, props, and styling.
- Useful as a learning resource for beginners or as a template for a simple product listing UI.

---

_This README was generated based on the files available in the `src` folder. For a complete and up-to-date listing, please visit the [src folder on GitHub](https://github.com/mayank-chaurasiya/Development-Journey/tree/b1841671427e69997278f1a641aaa8bd770e4062/Delta/React/basic-react-app/src)._