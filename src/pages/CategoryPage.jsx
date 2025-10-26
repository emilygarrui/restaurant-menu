import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchMealsByCategory, normalizeMeals } from '../api/meals'
import MenuList from '../components/MenuList'


export default function CategoryPage() {
const { category } = useParams()
const [items, setItems] = useState([])
const [isLoading, setLoading] = useState(false)
const [error, setError] = useState(null)


useEffect(() => {
setLoading(true)
setError(null)
fetchMealsByCategory(category)
.then(raw => {
const normalized = raw.map(m => ({
id: m.idMeal,
name: m.strMeal,
category: category,
thumb: m.strMealThumb,
price: (Math.random() * 20 + 5).toFixed(2)
}))
setItems(normalized)
})
.catch(err => setError(err.message || 'Error'))
.finally(() => setLoading(false))
}, [category])


return (
<section className="page container">
<h2>Category: {category}</h2>
{isLoading && <p className="info">Loading...</p>}
{error && <p className="error">{error}</p>}
{!isLoading && !error && <MenuList items={items} />}
</section>
)
}