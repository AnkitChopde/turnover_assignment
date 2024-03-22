
"use client"
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
const styles = {
  container: {
    padding: "1rem",
    height: "80%",
    width: "25%",
    border: "0.5px solid rgba(0,0,0,0.5)",
    margin: "auto",
    marginTop: "2rem",
    borderRadius: "10px",
  },
  container1: { display: "flx", flexDirection: "column", gap: "3rem" },
  input: {
    display: "block",
    margin: "0 auto",
    padding: "10px 10px",
    borderRadius: "15px",
    width: "80%",
    alignSelf: "center",
    outline:"none",
    border:"0.1px solid rgba(0,0,0,0.5)"
  },
  label: { margin: "10px", marginLeft: "2rem", textAlign: "left" },
  inputDiv: { display: "block", marginTop: "1.5rem" },
  button: {
    padding: "0.7rem",
    width: "85%",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "rgba(0,0,0,9)",
    color: "rgba(255,255,255,1)",
  },
};
const Login = () => {
 
  const [user,setUser] = useState({
    email:"",
    password:""
  });

  const handleLogin = async () => {
    try{
      const response = await axios.post('/api/users/login',user)
      if(response){
        console.log(response)
      }
    }
    catch(err){
        console.log(err)
    }
  }

  return (
    <div style={styles.container}>
      <div style={{ textAlign: "center",color:"rgba(0,0,0,0.7)" }}>
      <h2 >Login</h2>
      
      <h3 style={{marginBottom:"-1.3rem"}}>Welcome back to ECOMMERCE</h3>
      <h5>The next gen business marketplace</h5>
      </div>
     
      <div style={styles.container1}>
       
        <div style={styles.inputDiv}>
          <label htmlFor="name" style={styles.label}>
            Email
          </label>
          <input
            type="text"
            name="name"
            style={styles.input}
            placeholder={"Enter"}
            value={user.email}
            onChange = {(e)=> setUser({...user,email:e.target.value})}
          />
        </div>
        <div style={styles.inputDiv}>
          <label htmlFor="name" style={styles.label}>
            Password
          </label>
          <input
            type="text"
            name="name"
            style={styles.input}
            placeholder={"Enter"}
            password={user.password}
            onChange = {(e)=>setUser({...user,password:e.target.value})}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "1.5rem",
          }}
        >
          <button style={styles.button} onClick={handleLogin}>Login</button>
        </div>
        <h5 style={{ color: "rgba(0,0,0,0.5)", textAlign: "center" }}>
         Don't Have an account?{" "}
          <Link href="/register">
          <span style={{ fontSize: "20px", fontWeight: "bold",textDecoration:"none" }}>SignUp</span>
          </Link>
        </h5>
      </div>
    </div>
  );
};

export default Login;

