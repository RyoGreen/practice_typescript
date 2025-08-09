import type { StudentFormData } from "./api/student";
import "./App.css";
import { useForm, FormProvider } from "react-hook-form";
import BasicInfo from "./components/BasicInfo";
import { postStudent } from "./api/student";

function App() {
    const methods = useForm<StudentFormData>({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            schoolId: "",
            departmentId: ""
        }
    });

    const onSubmit = (data: StudentFormData) => {
        postStudent(data)
            .then(response => {
                console.log("送信成功:", response);
            })
            .catch(error => {
                console.error("送信失敗:", error);
            });
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <BasicInfo schools={
                    [
                        { id: "1", name: "学校A" },
                        { id: "2", name: "学校B" }
                    ]
                } departments={
                    [
                        { id: "1", name: "学科A" },
                        { id: "2", name: "学科B" }
                    ]
                }
                />
                <button type="submit">送信</button>
            </form>
        </FormProvider>);
}
export default App
