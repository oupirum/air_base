import { DepartmentsStore } from './departments-store';
import { DepartmentStore } from './department-store';
import { EmployeeStore } from './employee-store';
import { SearchStore } from './search-store';

export const rootStore = {
	departments: new DepartmentsStore(),
	department: new DepartmentStore(),
	employee: new EmployeeStore(),
	search: new SearchStore(),
};
