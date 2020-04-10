import { useEmployees } from '../employees/EmployeeDataProvider.js'
import { useCustomers } from '../customers/CustomerDataProvider.js'
import { useEmployeeCustomers } from '../relationships/EmployeeCustomerDataProvider.js'
import { Customer } from '../customers/Customer.js'

const contentTarget = document.querySelector(".customersContainer")

const renderCustomers = (customersToRender) => {
    const employees = useEmployees()
    const employeeRelationships = useEmployeeCustomers()

    contentTarget.innerHTML = customersToRender.map(customer => {
        
        const relationships = employeeRelationships.filter(
            (employeeRelationship) => {
                return employeeRelationship.customerId === customer.id
            }            
        )    
        const assignedEmployees = relationships.map(
            (relationship) => {
                return employees.find(
                    (employee) => {
                        return employee.id === relationship.employeeId
                    }    
                )        
            }            
        )   
        return Customer(customer, assignedEmployees)
    }).join("")
}   

export const CustomerList = () => {
    const allCustomers = useCustomers()
    renderCustomers(allCustomers)
}