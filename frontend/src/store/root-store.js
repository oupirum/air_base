import { DepartmentsStore } from './departments-store';
import { DepartmentStore } from './department-store';
import { EmployeeStore } from './employee-store';

export const rootStore = {
	departments: new DepartmentsStore(),
	department: new DepartmentStore(),
	employee: new EmployeeStore(),
};
