import { useEmployees } from "./EmployeeDataProvider.js"
import { useComputers } from "../computers/ComputerDataProvider.js"
import { Employee } from "./Employee.js"

const contentTarget = document.querySelector(".employeesContainer")

const renderEmployees = (employeesToRender) => {
    const allComputers = useComputers()
    contentTarget.innerHTML = employeesToRender.map(
        (employeeObject) => {
            const foundComputer = allComputers.find(
                (currentComputer) => {
                    return currentComputer.id === employeeObject.computerId
                }
            )
            return Employee(employeeObject, foundComputer)
        }
    ).join("")
}

export const EmployeeList = () => {
    const allEmployees = useEmployees()
    renderEmployees(allEmployees)
}