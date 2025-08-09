import type { UseFormRegister, FieldErrorsImpl } from "react-hook-form";
import type { StudentFormData } from "../schemas/student";


type Props = {
    register: UseFormRegister<StudentFormData>;
    errors: FieldErrorsImpl<StudentFormData>;
    schools: { id: string; name: string }[];
    departments: { id: string; name: string }[];
};

export default function SchoolInfo({ register, errors, schools, departments }: Props) {
    return (
        <div>
            <h3>学校情報</h3>
            <div>
                <select {...register("schoolId")}>
                    <option value="">学校を選択</option>
                    {schools.map((s) => (
                        <option key={s.id} value={s.id}>
                            {s.name}
                        </option>
                    ))}
                </select>
                {errors.schoolId && <p>{errors.schoolId.message?.toString()}</p>}
            </div>
            <div>
                <select {...register("departmentId")}>
                    <option value="">学科を選択</option>
                    {departments.map((d) => (
                        <option key={d.id} value={d.id}>
                            {d.name}
                        </option>
                    ))}
                </select>
                {errors.departmentId && <p>{errors.departmentId.message?.toString()}</p>}
            </div>
        </div>
    );
}

