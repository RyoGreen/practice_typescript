import type { UseFormRegister } from "react-hook-form";
import type { UserFormData } from "../../../schemas/user";
import type { FieldErrors } from "react-hook-form";

type Props = {
    register: UseFormRegister<UserFormData>;
    errors: FieldErrors<UserFormData>;
};

export default function TextField({ register, errors }: Props) {
    return (
        <div className="space-y-2">
            <input
                type="text"
                placeholder="First name"
                {...register("firstName")}
                className="border px-2 py-1 rounded w-full"

            />
            {errors.firstName && (
                <p className="text-red-500 text-sm">{errors.firstName.message}</p>
            )}

            <input
                type="text"
                placeholder="Last name"
                {...register("lastName")}
                className="border px-2 py-1 rounded w-full"
            />
            {errors.lastName && (
                <p className="text-red-500 text-sm">{errors.lastName.message}</p>
            )}
        </div>
    );
}
