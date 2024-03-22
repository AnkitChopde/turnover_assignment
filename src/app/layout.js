import Navbar from "@/components/Navbar"
import leftArrow from "../assets/left-arrow.png"
import rightArrow from "../assets/right-arrow.png"
import Image from "next/image"
export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body
      
      >
        <Navbar/>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"1rem",height:"30px",border:"1px solid rgba(0,0,0,0.2)",margin:"auto",textAlign:"center",backgroundColor:"rgba(0,0,0,0.2)"}}>
        <Image 
            src={leftArrow}
            width={12}
            height={12}
            alt="left"
            />
            <h4 style={{marginTop:"20px",color:"rgba(0,0,0,0.8)"}}>Get 10% off on business sign up</h4>
            <Image 
            src={rightArrow}
            width={12}
            height={12}
            alt="right"
            />
          
        </div>
        {children}</body>
    </html>
  )
}
