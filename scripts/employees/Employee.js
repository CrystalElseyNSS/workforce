export const Employee = (employeeObject, computerObject) => {
    return `
        <section class="employee">
            <h4>Employee Name: ${employeeObject.firstName} ${employeeObject.lastName}</h4>
            <p>Employee Age: ${employeeObject.age}</p>
            <p>Current Computer: ${computerObject.year} ${computerObject.model}</p>
        </section>
    `
}