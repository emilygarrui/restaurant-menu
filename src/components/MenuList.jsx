import React from 'react'
import MenuItem from './MenuItem'


export default function MenuList({ items }) {
if (!items || items.length === 0) return <p>No dishes to show.</p>


return (
<div className="grid">
{items.map(item => (
<MenuItem key={item.id} item={item} />
))}
</div>
)
}