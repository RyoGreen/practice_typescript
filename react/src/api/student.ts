import { apiClient } from '../apiClient';

export type StudentFormData = {
    firstName: string;
    lastName: string;
    email: string;
    school: {
        id: string;
        departmentId: string;
    };
};

export const postStudent = (data: StudentFormData) =>
    apiClient.post('/', data).then(res => res.data);
