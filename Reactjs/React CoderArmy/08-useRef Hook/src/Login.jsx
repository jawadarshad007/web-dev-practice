import React, { useRef, useState } from 'react'

function Login(){
        // const [email , setEmail] = useState("");
        // const [password , setPassword] = useState("")
    // here issue is that ka jab jab user input field ma type krta ha to component dobara render ho jata ha or is sa email or password ki value dobara initialize ho jati ha.
    // Mean is sa bth zaida re-rendering ho rahe ha.
    
    
    // solutin useRef()
    // Input mein type karne par ref ki value automatically update hoti rehti hai.
    // Ref ko update karne se component re-render nahi hota.
    
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

        console.log("Render")

        function handleSubmit(e){
            e.preventDefault();

            console.log(emailRef.current.value)
            console.log(passwordRef.current.value)

        }

    return (
        <>
        <form onSubmit={handleSubmit}>
        {/* <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} /> */}
        {/* <input type="password" value={password} onChange={(e)=> setPassword(e.target. value)} /> */}

        <input type="email" ref={emailRef} /> 
        {/* Jab React is input ko render karta hai, to woh input element ka reference emailRef.current mein store kar deta hai. */}
        <input type="password" ref={passwordRef} />

        <button type='submit'>Submit</button>
        </form>
        </>
    )
}

export default Login;
