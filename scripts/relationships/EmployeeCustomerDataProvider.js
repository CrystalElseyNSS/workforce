let employeeCustomers = []

export const useEmployeeCustomers = () => employeeCustomers.slice()

export const getEmployeeCustomers = () => fetch("http://localhost:8088/employeeCustomers")
    .then(response => response.json())
    .then(parsedEmployeeCustomers => employeeCustomers = parsedEmployeeCustomers)