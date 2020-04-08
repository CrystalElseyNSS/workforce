import { EmployeeList } from "./employees/EmployeeList.js"
import { getEmployees } from "./employees/EmployeeDataProvider.js"
import { getComputers } from "./computers/ComputerDataProvider.js"
import { getDepartments } from "./departments/DepartmentDataProvider.js"
import { getLocations } from "./locations/locationDataProvider.js"
import { getCustomers } from "./customers/CustomerDataProvider.js"
import { getEmployeeCustomers } from "./relationships/EmployeeCustomerDataProvider.js"

getEmployees()
    .then(getComputers)
    .then(getDepartments)
    .then(getLocations)
    .then(getCustomers)
    .then(getEmployeeCustomers)
    .then(EmployeeList)