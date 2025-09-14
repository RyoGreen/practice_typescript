import { useForm, type SubmitHandler } from "react-hook-form"

interface FormInput {
    text: string;
    number: number;
    email: string;
}

export default function FormField() {
    const { register, handleSubmit } = useForm<FormInput>({
        defaultValues: {
            text: "test",
            number: 1,
            email: "test@example.com"
        }
    });
    const onSubmit: SubmitHandler<FormInput> = data => console.log(data);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input type="text" placeholder="Enter text" {...register("text")} />
            </div>
            <div>
                <input type="number" placeholder="Enter number"{...register("number")} />
            </div>
            <div>
                <input type="email" placeholder="Enter email" {...register("email")} />
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}
