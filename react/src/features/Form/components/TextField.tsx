import type { UseFormRegister } from "react-hook-form";
import type { UserFormData } from "../../../schemas/user";

type Props = {
    register: UseFormRegister<UserFormData>;
};

export default function TextField({ register }: Props) {
    return (
        <div className="space-y-2">
            <input
                type="text"
                placeholder="First name"
                {...register("firstName")}
                className="border px-2 py-1 rounded w-full"
            />
            <input
                type="text"
                placeholder="Last name"
                {...register("lastName")}
                className="border px-2 py-1 rounded w-full"
            />
        </div>
    );
}
