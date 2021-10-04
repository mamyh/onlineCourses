import React from 'react'

const Chart = ({ carts }) => {
    let price = carts.reduce((prevPrice, cart) => prevPrice + cart.price, 0);
    let title = carts.reduce((prevTitle, cart) => [...prevTitle, cart.title], []);

    return (
        <div>
            <p>you enrolled {carts.length} courses</p>
            <p>your course are : {title.join(' ')}</p>
            <h5>Total:${price}</h5>
        </div>
    )
}

export default Chart
