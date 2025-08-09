import { z } from "zod";

export const studentSchema = z.object({
    firstName: z.string().min(1, "名前は必須です"),
    lastName: z.string().min(1, "苗字は必須です"),
    email: z.string().email("メールアドレスが不正です"),
    school: z.object({
        id: z.string().min(1, "学校を選択してください"),
        departmentId: z.string().min(1, "学科を選択してください"),
    }),
});

export type StudentFormData = z.infer<typeof studentSchema>;
