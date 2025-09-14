import TextField from "../features/Form/components/TextField"
import NumberField from "../features/Form/components/NumberField"
import EmailField from "../features/Form/components/EmailField"
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../context/userContext";
import type { UserFormData } from "../schemas/user";


const Form: React.FC = () => {
    const user = useContext(UserContext)
    const { register, handleSubmit, formState: { errors } } = useForm<UserFormData>({
        defaultValues: {
            firstName: user ? user.firstName : "first_name",
            lastName: user ? user.lastName : "last_name",
            number: 1,
            email: "test@example.com"
        }
    });
    const onSubmit = handleSubmit(data => console.log(data));
    return (
        <div className="min-h-full flex flex-col items-center justify-center bg-gray-100 p-4 space-y-4">
            <form onSubmit={onSubmit} className="bg-white p-6 rounded shadow-md space-y-4 w-full max-w-sm">
                <TextField register={register} errors={errors} />
                <NumberField register={register("number")} />
                <EmailField register={register("email")} />
                <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
                    Submit
                </button>
            </form>
        </div>
    )
}
export default Form
