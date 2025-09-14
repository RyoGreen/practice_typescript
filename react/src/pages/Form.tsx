import TextField from "../features/Form/components/TextField"
import NumberField from "../features/Form/components/NumberField"
import EmailField from "../features/Form/components/EmailField"
import { useForm } from "react-hook-form";

type FormDate = {
    firstname: string;
    lastName: string;
    number: number;
    email: string;
}

const Form: React.FC = () => {
    const { register, handleSubmit, } = useForm<FormDate>({
        defaultValues: {
            firstname: "first_name",
            lastName: "last_name",
            number: 1,
            email: "test@example.com"
        }
    });
    const onSubmit = handleSubmit(data => console.log(data));
    return (
        <div className="min-h-full flex flex-col items-center justify-center bg-gray-100 p-4 space-y-4">
            <form onSubmit={onSubmit} className="bg-white p-6 rounded shadow-md space-y-4 w-full max-w-sm">
                <TextField register={register} />
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
