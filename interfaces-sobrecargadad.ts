interface Logger {
  log(message: string): void;
  log(message: string, level: number): void;
}

class ConsoleLogger implements Logger {
  log(message: string): void {
    console.log(message);
  }

  log(message: string, level: number): void {
    console.log(`[${level}] ${message}`);
  }
}
/**----------------------------------------*/

interface Employee {
  id: number;
  name: string;
  position: string;
}

interface EmployeeHistory {
  id: number;
  companyId: number;
  startDate: Date;
  endDate?: Date;
}

interface EmployeeService {
  getEmployee(id: number): Employee | null;
  getAllEmployees(): Employee[];
  getEmployeeHistory(id: number): EmployeeHistory[];
}

/**------------------Creación de un Servicio ----------------------*/
//Implementado EmployeeService, y usando los metodos definidos en esta Inteface
class EmployeeServiceImpl implements EmployeeService {
  private employees: Employee[] = [
    { id: 1, name: "John Doe", position: "Developer" },
    { id: 2, name: "Jane Smith", position: "Manager" },
  ];

  private employeeHistory: EmployeeHistory[] = [
    { id: 1, companyId: 123, startDate: new Date("2022-01-01"), endDate: new Date("2022-12-31") },
    { id: 1, companyId: 456, startDate: new Date("2023-01-01") },
  ];

  getEmployee(id: number): Employee | null {
    return this.employees.find(emp => emp.id === id) || null;
  }

  getAllEmployees(): Employee[] {
    return this.employees;
  }

  getEmployeeHistory(id: number): EmployeeHistory[] {
    return this.employeeHistory.filter(history => history.id === id);
  }
}

/**------------------Uso del Servico en nuestro componente----------------------*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-info',
  template: `
    <h2>Employee Information</h2>
    <ul>
      <li *ngFor="let employee of employees">
        {{ employee.name }} - {{ employee.position }}
        <ul>
          <li *ngFor="let history of getEmployeeHistory(employee.id)">
            Company ID: {{ history.companyId }} - Start Date: {{ history.startDate | date }} - End Date: {{ history.endDate | date: 'medium' || 'Current' }}
          </li>
        </ul>
      </li>
    </ul>
  `,
})
export class EmployeeInfoComponent {
  employees: Employee[] = [];
  employeeService: EmployeeService;

  constructor(employeeService: EmployeeService) {
    this.employeeService = employeeService;
    this.employees = this.employeeService.getAllEmployees();
  }

  getEmployeeHistory(id: number): EmployeeHistory[] {
    return this.employeeService.getEmployeeHistory(id);
  }
}
