import { useForm} from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import {email, z} from 'zod'

// React Hook Form humein form ki values manage karne ka easier tareeqa deta hai. Is mein har input ke liye alag useState banana zaroori nahi hota.


// zod ma sab sa pahle hm apna formSchema define krn gyn ka hmara form dekhta kasa ha 
const formSchema = z.object({
    name : z.string().min(3 , "Minimum Length should be 3").max(20 , "Maximum langth should be 20"),
    // form ap ka browser handle krta ha , wo hr cheez ko as a string ma deta ha , lakin hm na validation ki ha age number ma hn , .coerce string ko number ma krta ha
    age : z.coerce.number().min(10 , "Minimum Age should be 10").max(80 , "Maximum Age should be 80"),
    email : z.email("Invalid Email"),
    password : z.string().min(5 , "Minimum Password should be 5").max(20 , "Maximum Password should be 20"),
    confirm: z.string()
}).refine((data) => data.password === data.confirm, {
    error: "Passwords don't match",
    path: ["confirm"], // path of error
  });
// to attach the zod formSchema to React Hook Form , is ka lia form/resolvers help krte hn 

function ZodForm3(){
    // Yahan { register, handleSubmit } object destructuring hai. Matlab useForm() se milne wale object mein se hum ye do properties nikaal rahe hain.
    const {register , handleSubmit , formState: { errors }} = useForm({ resolver: zodResolver(formSchema) })
// - register — input fields ko form ke saath connect karta hai.
// - handleSubmit — form submit hone par data handle karta hai.
// - { resolver: zodResolver(formSchema) } : to connect the zod formSchema to React Hook form
    console.log("Check rendering")

    function submitForm(data){
        console.log(data)  // Yahan data woh object hai jo form se collect hua hai.
    }

// Data Valiadation ka lia hm zod ka use krte hn 
    return(
        <>
        <h2>Zod Form 3 file</h2>
        <form onSubmit={handleSubmit(submitForm)}>
            {/* handleSubmit React Hook Form ka function hai. Ye form submit hone par registered fields ki values collect karta hai aur phir aapke submitForm function ko data deta hai. */}
        <div>
            <label htmlFor="first">Name: </label>
            <input  id="first"  {...register('name')}  />  
            {/* Har register() ke andar diya gaya naam form data mein us field ki key ban jata hai. */}
            {errors.name && <span>errors.name.message</span>}
            
        </div>

        <div>
            <label htmlFor="second">Age: </label>
            <input  id="second"  {...register('age')} />
           {errors.age && <span>{errors.age.message}</span>}
        </div>

        <div>
            <label htmlFor="fourth">Email: </label>
            <input id="fourth"  {...register('email')} />
           {errors.email && <span>{errors.email.message}</span>}
        </div>

        <div>
            <label htmlFor="third">Password: </label>
            <input type="password" id="third"  {...register('password' )} />
             {errors.password && <span>{errors.password.message}</span>} 
        </div>
   
        <div>
            <label htmlFor="fifth">Confirm Password: </label>
            <input type="password" id="fifth"  {...register('confirm' )} />
             {errors.confirm && <span>{errors.confirm.message}</span>} 
        </div>
   
        
        <button type="submit">Submit</button>
        </form>
        </>
    )
}
export default ZodForm3;