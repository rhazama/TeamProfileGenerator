const Employee = require('../lib/employee')

test('create an employee objext' , () => {
    const employee = new Employee('', 2, '');

    expect(employee.name).to.equal(expect.any(String));
    expect(employee.id).to.equal(expect.any(Number));
    expect(employee.email).to.equal(expect.any(String));
});