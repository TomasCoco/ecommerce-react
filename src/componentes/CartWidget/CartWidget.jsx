import React from 'react'
import './CartWidget.css'

const CartWidget = () => {
    const carrito = "https://w7.pngwing.com/pngs/225/984/png-transparent-computer-icons-shopping-cart-encapsulated-postscript-shopping-cart-angle-black-shopping.png"
  return (
    <div>
        <img className='carrito' src={carrito} alt="imagen del carrito"/>
        <strong>2</strong>
    </div>
  )
}

export default CartWidget