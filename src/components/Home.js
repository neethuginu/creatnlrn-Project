import React from 'react'
import '../components/Home.css'

export default function Home(props) { 
   
    return (
        <div className="home">
            <h1>Home Page</h1>
           <button className="btn"  onClick={()=>{props.history.push('/products')}}>Products</button>
           <button className="btn" onClick={()=>{props.history.push('/wishlist')}}>Wishlist</button>
           <button className="btn" onClick={()=>{props.history.push('/createproduct')}}>Create Product</button>
        </div>
    )
}
