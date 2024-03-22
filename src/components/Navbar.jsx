import React from 'react'
import cartIcon from "../assets/trolley.png"
import searchIcon from "../assets/search-interface-symbol.png"
import Image from 'next/image'
const styles = {
    nav:{
        padding:"0.1rem",
        display:"flex",
        justifyContent:"end",
        paddingRight:"3rem"
    },
    ul:{display:"flex",listStyle:"none",gap:"1rem",color:"rgba(0,0,0,0.7)",fontSize:"10px"},
    nav2:{padding:"0.3rem",display:"flex",justifyContent:"space-between",alignItems:"center",paddingLeft:"4rem",paddingRight:"3rem"},
    ul2:{display:"flex",listStyle:"none",gap:"2rem",fontSize:"20px",color:"rgba(0,0,0,0.8)",fontWeight:"bold"},
}
const Navbar = () => {
  return (
    <div>
      <div style={styles.nav}>
         <ul style={styles.ul}>
            <li>
              Helps
            </li>
            <li>Orders & Returns</li>
            <li>Hi John</li>
         </ul>
      </div>
      <div style={styles.nav2}>
           <h1>ECOMMERCE</h1>
           <ul style={styles.ul2}>
            <li>Categories</li>
            <li>Sales</li>
            <li>Clearence</li>
            <li>New Stock</li>
            <li>Trending</li>
           </ul>
           <div style={{display:"flex",gap:"2rem"}}>
            <Image 
            src={searchIcon}
            width={20}
            height={20}
            alt="search"
            />
            <Image 
            src={cartIcon}
            width={20}
            height={20}
            alt="cart"
            />
           </div>
           
      </div>
    </div>
  )
}

export default Navbar
