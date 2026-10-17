import { useForm} from "react-hook-form"


// React Hook Form humein form ki values manage karne ka easier tareeqa deta hai. Is mein har input ke liye alag useState banana zaroori nahi hota.

function Form(){
    // Yahan { register, handleSubmit } object destructuring hai. Matlab useForm() se milne wale object mein se hum ye do properties nikaal rahe hain.
    const {register , handleSubmit , formState: { errors }} = useForm()
// - register — input fields ko form ke saath connect karta hai.
// - handleSubmit — form submit hone par data handle karta hai.

    console.log("Check rendering")

    function submitForm(data){
        // Yahan data woh object hai jo form se collect hua hai.
        console.log(data)
    }


    return(
        <>
        <form onSubmit={handleSubmit(submitForm)}>
            {/* handleSubmit React Hook Form ka function hai. Ye form submit hone par registered fields ki values collect karta hai aur phir aapke submitForm function ko data deta hai. */}
        <div>
            <label htmlFor="first">Name: </label>
            <input type="text" id="first"  {...register('name' , {required: "Name cant be empty"})}  />  
            {/* Har register() ke andar diya gaya naam form data mein us field ki key ban jata hai. */}
            {errors.name && <span>{errors.name.message}</span>}
        </div>

        <div>
            <label htmlFor="second">Age: </label>
            <input type="number" id="second"  {...register('age', 
                {
                    min:{
                        value:10,
                        message: "Minimum Age Should be 10"
                    },
                    max:{
                        value: 80,
                        message: "Maximim Age Should be 80"
                    }
                }
            )} />
            {errors.age && <span>{errors.age.message}</span>}
        </div>

        <div>
            <label htmlFor="third">Password: </label>
            <input type="password" id="third"  {...register('password',
                {
                    minLength:{
                        value:5,
                        message: "Minimum Length Should be 5"
                    },
                    maxLength:{
                        value: 20,
                        message: "Maximim Length Should be 20"
                    }
                }
            )} />
            {errors.password && <span>{errors.password.message}</span>}
        </div>
        {/* idr hm code ka andr hi validation kr rahn hn , isse user experience khrab hota ha , is ka lia hm zod ka use krte hn 
        Data Valiadation ka lia hm zod ka use krte hn */}
        <button type="submit">Submit</button>
        </form>
        </>
    )
}
export default Form;