import { EmployeeList } from "./employees/EmployeeList.js"
import { getEmployees } from "./employees/EmployeeDataProvider.js"
import { getComputers } from "./computers/ComputerDataProvider.js"

getEmployees()
    .then(getComputers)
    .then(EmployeeList)