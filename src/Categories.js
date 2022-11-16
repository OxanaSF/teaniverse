import React from 'react'


const Categories = () => {
    const categories = [
        {
            id: 1,
            title: 'Breakfast club',
        },
        {
            id: 2,
            title: 'East is a delicate matters',
        },
        {
            id: 3,
            title: 'Breakfast at Tiffany\'s',
        },
        {
            id: 4,
            title: 'Anti stress tea',
        },
        {
            id: 5,
            title: 'Fruit tea club',
        },

    ]
    
  return (
    <div className='categories-container'>
        {categories.map(({ title }) => (
            <div className='category-container'>
            <h2>{title}</h2>
            <p>Shop now</p>
        </div>
        ))}
     
     
    </div>
  )
}

export default Categories