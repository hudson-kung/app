import { useState } from "react";
import Button1 from "./components/Button1";

export default function App() {
    const [color, setColor] = useState("red");
    const colors = ["red", "blue", "green", "yellow", "pink", "purple"];
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const inputStyle = {
        padding: '0.75rem',
        border: '1px solid #ddd',
        borderRadius: '4px',
        fontSize: '1rem',
        transition: 'border-color 0.3s',
        outline: 'none'
    };

    const login = () => {

        console.log(email)
        console.log(username)
        console.log(password)


        if(password.length < 6){
            alert("Password must be 6 or more characters.")
            return
        }   
    
        if(!email.includes("@")){
            alert("You must enter a valid email.")
            return
        }
        if(email.includes(" ")){
            alert("You must enter a valid email.")
            return
            
        }

        if(username.includes(" ")){
            alert("Usernames cannot contain spaces.")
            return
        }


        if(!password.length < 6  && email.includes("@") && !email.includes(" ") && !username.includes(" ")){
            setIsLoggedIn(!isLoggedIn)
            alert("Login successful!")

        }
        
        
    }


    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f5f5f5',
            fontFamily: 'Arial, sans-serif'
        }}>




            {
                isLoggedIn ? (

                    <div style={{
                        backgroundColor: 'white',
                        padding: '2rem',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0)',
                        width: '100%',
                        maxWidth: '600px',
                        margin: '0 1rem',
                        textAlign: 'center'
                    }}>
                        <h2 style={{
                            color: '#333',
                            marginBottom: '1.5rem',
                            fontSize: '1.8rem'
                        }}>
                            Welcome, {username}!
                        </h2>
                        <div style={{
                            backgroundColor: '#f8f9fa',
                            padding: '1.5rem',
                            borderRadius: '6px',
                            marginBottom: '1.5rem',
                            borderLeft: '4px solid #4CAF50'
                        }}>
                            <p style={{ color: '#555', margin: '0.5rem 0' }}>Email: {email}</p>
                            <p style={{ color: '#555', margin: '0.5rem 0' }}>Status: <span style={{ color: '#4CAF50' }}>Active</span></p>
                        </div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem',
                            marginTop: '2rem'
                        }}>
                            <button 
                                onClick={() => setIsLoggedIn(false)}
                                style={{
                                    padding: '0.75rem',
                                    backgroundColor: '#f44336',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '4px',
                                    fontSize: '1rem',
                                    cursor: 'pointer',
                                    transition: 'background-color 0.3s',
                                    marginTop: '1rem',
                                    width: '100%',
                                    maxWidth: '200px',
                                    margin: '0 auto'
                                }}
                                onMouseOver={e => e.target.style.backgroundColor = '#d32f2f'}
                                onMouseOut={e => e.target.style.backgroundColor = '#f44336'}
                            >
                                Logout
                            </button>
                        </div>
                    </div>


                ) : (
            <div style={{
                backgroundColor: 'white',
                padding: '2rem',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                width: '100%',
                maxWidth: '400px',
                margin: '0 1rem'
            }}>
                <h2 style={{
                    textAlign: 'center',
                    color: '#333',
                    marginBottom: '1.5rem'
                }}>Login</h2>
                
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem'
                }}>
                    <input 
                        style={inputStyle}
                        onChange={e => setEmail(e.target.value)} 
                        placeholder="Email"
                        type="email"
                    />
                    <input 
                        style={inputStyle}
                        onChange={e => setUsername(e.target.value)} 
                        placeholder="Username"
                    />
                    <input 
                        style={inputStyle}
                        onChange={e => setPassword(e.target.value)} 
                        placeholder="Password"
                        type="password"
                    />

                    <button 
                        onClick={() => login()} 
                        style={{
                            padding: '0.75rem',
                            backgroundColor: '#4CAF50',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            fontSize: '1rem',
                            cursor: 'pointer',
                            transition: 'background-color 0.3s',
                            marginTop: '1rem'
                        
                        }}
                        onMouseOver={e => e.target.style.backgroundColor = '#45a049'}
                        onMouseOut={e => e.target.style.backgroundColor = '#4CAF50'}
                    >
                        Login
                    </button>
                    <Button1/>
                </div>
            </div>)
            }

        </div>
    )
}
