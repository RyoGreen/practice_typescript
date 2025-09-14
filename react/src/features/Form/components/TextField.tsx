import type { UseFormRegister } from "react-hook-form";

type FormData = {
    firstname: string;
    lastName: string;
};

type Props = {
    register: UseFormRegister<FormData>;
};

export default function NameFields({ register }: Props) {
    return (
        <div className="space-y-2">
            <input
                type="text"
                placeholder="First name"
                {...register("firstname")}
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

