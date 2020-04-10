export const Customer = (customer, employees) => {
    return `
        <section class="customer">
            <h3>Customer Name: ${customer.name}</h3>
            <p>Customer's Assigned Employees: ${employees.map(employee => employee.firstName + " " + employee.lastName).join(", ")}</p>
        </section>
    `
}