import { useEmployees } from './EmployeeDataProvider.js'
import { useComputers } from '../computers/ComputerDataProvider.js'
import { useDepartments } from '../departments/DepartmentDataProvider.js'
import { useLocations } from '../locations/locationDataProvider.js'
import { Employee } from './Employee.js'

const contentTarget = document.querySelector(".employeesContainer")

const renderEmployees = (employeesToRender) => {
    const allComputers = useComputers()
    const allDepartments = useDepartments()
    const allLocations = useLocations()
    contentTarget.innerHTML = employeesToRender.map(
        (employee) => {
            const foundComputer = allComputers.find(
                (currentComputer) => {
                    return currentComputer.id === employee.computerId
                }
            )
            const foundDepartment = allDepartments.find(
                (currentDepartment) => {
                    return currentDepartment.id === employee.departmentId
                }
            )
            const foundLocation = allLocations.find(
                (currentLocation) => {
                    return currentLocation.id === employee.locationId
                }
            )
            return Employee(employee, foundComputer, foundDepartment, foundLocation)
        }
    ).join("")
}

export const EmployeeList = () => {
    const allEmployees = useEmployees()
    renderEmployees(allEmployees)
}