export const Employee = (employee, computer, department, location) => {
    return `
        <section class="employee">
            <h3>Employee Name: ${employee.firstName} ${employee.lastName}</h3>
            <h4>Location: ${location.city}</h4>
            <h4>Department: ${department.name}</h4>
            <p>Employee Age: ${employee.age}</p>
            <p>Current Computer: ${computer.year} ${computer.model}</p>
        </section>
    `
}