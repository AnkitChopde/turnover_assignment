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
    border:"0.1px solid rgba(0,0,0,0.5)",
    outline:"none"
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
const Register = () => {
  
  const [register,setRegister] = useState({
    name:"",
    email:"",
    password:""
  });

  const handleRegister = async () => {
    try{
      const response = await axios.post('/api/users/signup',register)
      if(response){
        console.log(response.data)
        alert(response.data.error || response.data.msg)
      }
    }
    catch(err){
        console.log("error",err)
       
    }
  }
  return (
    <div style={styles.container}>
      <h2 style={{ textAlign: "center" }}>Create Your Account</h2>
      <div style={styles.container1}>
        <div style={styles.inputDiv}>
          <label htmlFor="name" style={styles.label}>
            Name
          </label>
          <input
            type="text"
            name="name"
            style={styles.input}
            placeholder={"Enter"}
            value={register.name}
            onChange = {(e)=> setRegister({...register,name:e.target.value})}
          />
        </div>
        <div style={styles.inputDiv}>
          <label htmlFor="name" style={styles.label}>
            Email
          </label>
          <input
            type="text"
            name="name"
            style={styles.input}
            placeholder={"Enter"}
            value={register.email}
            onChange = {(e)=> setRegister({...register,email:e.target.value})}
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
            value={register.password}
            onChange = {(e)=> setRegister({...register,password:e.target.value})}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "1.5rem",
          }}
        >
          <button style={styles.button} onClick={handleRegister}>Create Account</button>
        </div>
        <h5 style={{ color: "rgba(0,0,0,0.5)", textAlign: "center" }}>
          Have an account?{" "}
          <Link href="/login">
          <span style={{ fontSize: "20px", fontWeight: "bold",textDecoration:"none" }}>Login</span>
          </Link>
        </h5>
      </div>
    </div>
  );
};

export default Register;
