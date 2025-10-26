const BASE = 'https://www.themealdb.com/api/json/v1/1'


export async function fetchMealsSearch(q = '') {
const res = await fetch(`${BASE}/search.php?s=${encodeURIComponent(q)}`)
if (!res.ok) throw new Error('Error getting dishes')
const data = await res.json()
return data.meals || []
}


export async function fetchMealsByCategory(category) {
const res = await fetch(`${BASE}/filter.php?c=${encodeURIComponent(category)}`)
if (!res.ok) throw new Error('Error getting dishes by category')
const data = await res.json()
return data.meals || []
}


export async function fetchMealById(id) {
const res = await fetch(`${BASE}/lookup.php?i=${encodeURIComponent(id)}`)
if (!res.ok) throw new Error('Error getting dishes details')
const data = await res.json()
return (data.meals && data.meals[0]) || null
}


export async function fetchCategories() {
const res = await fetch(`${BASE}/list.php?c=list`)
if (!res.ok) throw new Error('Error getting categories')
const data = await res.json()
return data.meals || []
}


export function normalizeMeals(rawMeals) {
return rawMeals.map(m => ({
id: m.idMeal,
name: m.strMeal,
category: m.strCategory || m.strCategory || 'Varios',
thumb: m.strMealThumb,
price: generatePrice()
}))
}


function generatePrice() {
return (Math.random() * 20 + 5).toFixed(2)
}