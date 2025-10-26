import React from 'react'
import { Link } from 'react-router-dom'


export default function MenuItem({ item }) {
return (
<article className="card">
<Link to={`/meals/${item.id}`} className="thumb-link">
<img src={item.thumb} alt={item.name} className="thumb" />
</Link>
<div className="card-body">
<h3 className="meal-name">{item.name}</h3>
<p className="meal-cat">{item.category || 'Varios'}</p>
<div className="price-row">
<span className="price">€ {item.price}</span>
<Link to={`/meals/${item.id}`} className="btn">Details</Link>
</div>
</div>
</article>
)
}