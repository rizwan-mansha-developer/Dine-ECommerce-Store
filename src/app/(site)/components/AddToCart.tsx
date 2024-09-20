'use client'
import React from 'react'
import { Button } from './ui/button'
import { useDispatch } from "react-redux";
import { cartActions } from '../store/slice/cartSlice';



const AddToCart = () => {
    const dispatch = useDispatch();
    const addItem = () => {
      dispatch(cartActions.addToCart({quantity:1}));
    }
 


  return (
 
      <Button onClick={addItem}>Add to Cart</Button>
    
  )
  }


export default AddToCart;