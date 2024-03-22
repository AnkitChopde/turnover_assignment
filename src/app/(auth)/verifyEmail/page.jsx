
import Link from "next/link";
import React from "react";
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
const VerifyEmail = () => {
  return (
    <div style={styles.container}>
       <div style={{ textAlign: "center",color:"rgba(0,0,0,0.7)" }}>
      <h2 >Verify Email</h2>
      
      <h4 style={{marginBottom:"-1.3rem"}}>Enter the 8-digit code you have received on acchopde84@gmail.com</h4>
      
      </div>
      <div style={styles.container1}>
        
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "1.5rem",
          }}
        >
          <button style={styles.button}>Verify Email</button>
        </div>
       
      </div>
    </div>
  );
};

export default VerifyEmail;
