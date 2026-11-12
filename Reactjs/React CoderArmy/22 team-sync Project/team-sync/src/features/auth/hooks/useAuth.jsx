import { useForm } from "react-hook-form";

let useAuth = () => {
     const [done, setDone] = useState(false);
    
      const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
      } = useForm({
        mode: "onSubmit",
        defaultValues: { email: "", password: "", remember: false },
      });
    
      const onSubmit =  (data) => {
        console.log("Login payload:", data);
        setDone(true);
      };
}