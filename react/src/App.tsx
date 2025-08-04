import './App.css'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

interface FormData {
    name: string
    email: string
}

const formDataSchema = z.object({
    name: z.string().min(1, "Name is required").max(50, "Name must be at most 50 characters long"),
    email: z.string().email("Invalid email address").min(5, "Email must be at least 5 characters long"),
})

function App() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormData>({
        mode: "onChange",
        resolver: zodResolver(formDataSchema),
    })

    const onSubmit = (data: FormData) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input
                    type="text"
                    placeholder="Name"
                    {...register("name")}
                />
                {errors.name && <span>{errors.name.message}</span>}
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Email"
                    {...register("email")}
                />
                {errors.email && <span>{errors.email.message}</span>}
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}
export default App
