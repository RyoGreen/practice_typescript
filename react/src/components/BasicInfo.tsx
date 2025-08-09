import { useFormContext } from "react-hook-form";
import SchoolInfo from "./SchoolInfo";
import type { StudentFormData } from "../schemas/student";

type Props = {
    schools: { id: string; name: string }[];
    departments: { id: string; name: string }[];
};

export default function BasicInfo({ schools, departments }: Props) {
    const { register, formState: { errors } } = useFormContext<StudentFormData>();

    return (
        <div>
            <h2>基本情報</h2>
            <div>
                <input {...register("firstName")} placeholder="名" />
                {errors.firstName && <p>{errors.firstName.message?.toString()}</p>}
            </div>
            <div>
                <input {...register("lastName")} placeholder="姓" />
                {errors.lastName && <p>{errors.lastName.message?.toString()}</p>}
            </div>
            <div>
                <input {...register("email")} placeholder="メール" />
                {errors.email && <p>{errors.email.message?.toString()}</p>}
            </div>

            <SchoolInfo
                register={register}
                errors={errors}
                schools={schools}
                departments={departments}
            />
        </div>
    );
}

