import React from 'react'

function FoodItem({
    name,
    cloudinaryImageId,
    price,
    description,
}) {
  return (
    <div>
        <h1>{name}</h1>
        <h4>{description}</h4>
    </div>
  )
}

export default FoodItem