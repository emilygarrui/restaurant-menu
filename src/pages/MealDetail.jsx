import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchMealById } from '../api/meals'


export default function MealDetail() {
const { id } = useParams()
const [meal, setMeal] = useState(null)
const [isLoading, setLoading] = useState(false)
const [error, setError] = useState(null)


useEffect(() => {
setLoading(true)
fetchMealById(id)
.then(m => {
if (!m) throw new Error('Dish not found')
const price = (Math.random() * 20 + 5).toFixed(2)
setMeal({
id: m.idMeal,
name: m.strMeal,
category: m.strCategory,
thumb: m.strMealThumb,
instructions: m.strInstructions,
price
})
})
.catch(err => setError(err.message || 'Error'))
.finally(() => setLoading(false))
}, [id])


if (isLoading) return <p className="info">Loading...</p>
if (error) return <p className="error">{error}</p>
if (!meal) return null


return (
<section className="page container detail">
<div className="detail-grid">
<img src={meal.thumb} alt={meal.name} className="detail-thumb" />
<div>
<h2>{meal.name}</h2>
<p className="meal-cat">{meal.category}</p>
<p className="price">€ {meal.price}</p>
<h3>Preparation</h3>
<p className="instructions">{meal.instructions}</p>
</div>
</div>
</section>
)
}