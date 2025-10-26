import React, { useEffect, useState } from 'react'
import { fetchMealsSearch, normalizeMeals } from '../api/meals'
import MenuList from '../components/MenuList'


export default function Home() {
const [items, setItems] = useState([])
const [isLoading, setLoading] = useState(false)
const [error, setError] = useState(null)
const [query, setQuery] = useState('')


useEffect(() => {
setLoading(true)
setError(null)
fetchMealsSearch(query)
.then(raw => {
const normalized = normalizeMeals(raw)
setItems(normalized)
})
.catch(err => setError(err.message || 'Error'))
.finally(() => setLoading(false))
}, [query])


return (
<section className="page container">
<header className="page-header">
<h2>Menu</h2>
<div className="controls">
<input
placeholder="Search by name"
value={query}
onChange={e => setQuery(e.target.value)}
className="search"
/>
</div>
</header>


{isLoading && <p className="info">Loading...</p>}
{error && <p className="error">{error}</p>}


{!isLoading && !error && <MenuList items={items} />}
</section>
)
}