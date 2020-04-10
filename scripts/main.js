import { getEmployees } from "./employees/EmployeeDataProvider.js"
import { getComputers } from "./computers/ComputerDataProvider.js"
import { getDepartments } from "./departments/DepartmentDataProvider.js"
import { getLocations } from "./locations/locationDataProvider.js"
import { getCustomers } from "./customers/CustomerDataProvider.js"
import { getEmployeeCustomers } from "./relationships/EmployeeCustomerDataProvider.js"
import { EmployeeList } from "./employees/EmployeeList.js"
import { CustomerList } from "./customers/CustomerList.js"

getEmployees()
    .then(getComputers)
    .then(getDepartments)
    .then(getLocations)
    .then(getCustomers)
    .then(getEmployees)
    .then(getEmployeeCustomers)
    .then(EmployeeList)
    .then(CustomerList)