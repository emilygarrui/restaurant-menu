import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Categories from './pages/Categories'
import CategoryPage from './pages/CategoryPage'
import MealDetail from './pages/MealDetail'


export default function App() {
return (
<div>
<NavBar />
<main>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/categories" element={<Categories />} />
<Route path="/category/:category" element={<CategoryPage />} />
<Route path="/meals/:id" element={<MealDetail />} />
</Routes>
</main>
</div>
)
}