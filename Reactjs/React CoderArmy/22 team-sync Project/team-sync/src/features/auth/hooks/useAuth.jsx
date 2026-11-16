import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { loginEmployee } from "../state/auth/authAction";

export let useAuth = () => {
    // States for Login.jsx
     const [done, setDone] = useState(false);

     //States for Register.jsx 
    const [showPw, setShowPw] = useState(false);
    const [submitted, setSubmitted] = useState(null);

    let navigate = useNavigate();
    let dispatch = useDispatch();




      const {register, handleSubmit, watch ,formState:{ errors, isSubmitting },} = useForm({
        mode: "onSubmit",
        defaultValues: { email: "", password: "", remember: false },
      });
    
      const onRegisterSubmit =  (data) => { 
        console.log("Register payload:", data);
        setDone(true);
      };

      const onLoginSubmit = (data)=>{
        console.log("Login   payload:", data);
        dispatch(loginEmployee(data))
      }

      return {
        register,
        handleSubmit,
        watch,
        errors,
        onRegisterSubmit,
        onLoginSubmit,
        isSubmitting,
        done,
        showPw,
        submitted,
        navigate,
      }

}