# Restaurant Menu
A single-page application (SPA) that displays a restaurant menu using **React** and **Vite**.  
It consumes the public API [TheMealDB](https://www.themealdb.com) to fetch meals, assigns **random prices**, and allows navigation between categories and meal details.

---

## Features
- List of meals with **name, image, category, and price**.
- Search meals by name on the home page.
- View meals by category (dynamic URL `/category/:category`).
- View meal details (dynamic URL `/meals/:id`) with instructions.
- Loading and error handling states.
- Responsive grid layout for cards.
- Reusable components: `MenuList`, `MenuItem`, `NavBar`.

---

## Project Structure
```
src/
├─ main.jsx
├─ App.jsx
├─ api/meals.js
├─ components/
│ ├─ NavBar.jsx
│ ├─ MenuList.jsx
│ └─ MenuItem.jsx
├─ pages/
│ ├─ Home.jsx
│ ├─ Categories.jsx
│ ├─ CategoryPage.jsx
│ └─ MealDetail.jsx
└─ styles.css
```
---

## Installation
1. Clone the repository:

```bash
git clone https://github.com/emilygarrui/restaurant-menu.git
cd menu
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```
Open your browser at http://localhost:5173

## API Used
This project consumes TheMealDB
 (no API key required):

- Search meals: search.php?s=
- Filter by category: filter.php?c=
- Lookup meal by ID: lookup.php?i=
- List categories: list.php?c=list

---

## Dependencies

- React 18
- React Router DOM 6
- Vite
- JavaScript (no TypeScript)

---

## Notes
- Prices are generated randomly on the client side (requirement of the practice).
- The application handles loading and error states.
- All routes are SPA and dynamic.
