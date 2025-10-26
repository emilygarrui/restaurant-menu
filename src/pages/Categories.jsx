import React, { useEffect, useState } from 'react'
import { fetchCategories } from '../api/meals'
import { Link } from 'react-router-dom'


export default function Categories() {
const [cats, setCats] = useState([])
const [isLoading, setLoading] = useState(false)
const [error, setError] = useState(null)


useEffect(() => {
setLoading(true)
fetchCategories()
.then(list => setCats(list.map(c => c.strCategory)))
.catch(err => setError(err.message))
.finally(() => setLoading(false))
}, [])


return (
<section className="page container">
<h2>Categories</h2>
{isLoading && <p className="info">Loading...</p>}
{error && <p className="error">{error}</p>}
<div className="categories">
{cats.map(c => (
<Link key={c} to={`/category/${encodeURIComponent(c)}`} className="cat-card">{c}</Link>
))}
</div>
</section>
)
}